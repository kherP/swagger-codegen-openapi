import { ChildProcess, spawn } from "child_process";
import commander, { createCommand } from "commander";
import fs from "fs";
import path from "path";
import { getDefaultSubcommand } from "./getSubcommand";
import { BatchOptions } from "./options/batchOptions";
import { GenerateOptions, GenerateDefaultOptions, GenerateOptionName } from "./options/generateOptions";
import { ListOptions } from "./options/listOptions";
import { ConfigHelpOptions } from "./options/configHelpOptions";
import { customGeneratorMapper, CustomOptions, CustomTemplates } from "./options/customOptions";
import { isSEBGenerator } from "./generatorList";
import { generateMock } from "./mockGenerator/mockGenerator";
import { MetaOptions } from "./options/metaOptions";
import { ValidateOptions } from "./options/validateOptions";

type GeneratorSubcommand = Subcommand | Array<string>;

type GeneratorArgs = (
    | BatchArgumentType
    | ConfigHelpArgumentType
    | GenerateArgumentType
    | ListArgumentType
    | MetaArgumentType
    | ValidateArgumentType
) &
    CustomOptionsArgumentType & {
        _: GeneratorSubcommand;
    };

import minimist from "minimist";
import dargs from "dargs";

export function generatorFn() {
    const program: commander.Command = createCommand();
    [
        ...GenerateOptions,
        ...BatchOptions,
        ...ListOptions,
        ...ConfigHelpOptions,
        ...MetaOptions,
        ...ValidateOptions,
        ...CustomOptions,
    ].map((item: OptionType) => {
        item.option &&
            program.option(
                item.option.join(", "),
                item.description,
                item.defaultValue
            );
    });
    program.action(() => {
        const args: GeneratorArgs = minimist(process.argv.slice(2));
        const subcommand: GeneratorSubcommand = args._.length ? args._ : getDefaultSubcommand();
        let command: string = `node ./node_modules/@openapitools/openapi-generator-cli/bin/openapi-generator ${subcommand}`;
        const extraOptions: Array<string> = formatExtraOption(args);
        if (subcommand === "generate" || subcommand[0] === "generate") {
            const generateArgs: GenerateArgumentType = args as GenerateArgumentType;
            let generatorName: OpenApiGenerator = generateArgs.g || generateArgs["generator-name"];
            GenerateDefaultOptions.map((item: DefaultOptionType) => {
                const defaultOptionArgs: GenerateArgumentType = minimist<GenerateArgumentType>(item.key);
                if (
                    !Object
                        .keys(defaultOptionArgs)
                        .some((key: string) => Object
                            .keys(generateArgs)
                            .some((argKey: string) => argKey !== "_" && argKey === key)
                        )
                ) {
                    if (item?.key?.indexOf(GenerateOptionName.generatorName) > -1) {
                        generatorName = item.value as OpenApiGenerator;
                    }
                    command += ` ${item.key[0]} ${item.value}`;
                }
            });
            const templateConfig: SEBTemplate = CustomTemplates.find((item: SEBTemplate) => item.generator === generatorName);
            const sebTemplatePath: string = templateConfig?.templatePath;
            if (
                !args.openapiTemplate &&
                !generateArgs.t &&
                !generateArgs["template-dir"] &&
                !!sebTemplatePath
            ) {
                command += ` ${GenerateOptionName.templateDirShort} ${sebTemplatePath}`;
            }
            const defaultBasePath: string = args.baseUrl || args.u;
            if (!!defaultBasePath) {
                const basePathOption: string = `baseUrl=${defaultBasePath}`;
                extraOptions.push(basePathOption);
            }

            if (generateArgs.p || generateArgs["additional-properties"]) {
                const additionalProps: keyof GenerateArgumentType = !!generateArgs.p ? "p" : "additional-properties";
                const formattedAdditionalProps: string = removeExtraOption(args[additionalProps]);
                args[additionalProps] = `${formattedAdditionalProps}${formattedAdditionalProps.length ? "," : ""}${extraOptions.toString()}`;
            } else {
                (args as GenerateArgumentType).p = extraOptions.toString();
            }
            const outputDir: string =
                generateArgs.o || generateArgs.output
                    ? generateArgs.o || generateArgs.output
                    : GenerateDefaultOptions.find(({ key }: DefaultOptionType) => key?.indexOf(GenerateOptionName.output) > -1)?.value;
            if (!args.disableDirClean && fs.existsSync(outputDir)) {
                deleteFolderRecursive(outputDir);
            }
            if (!args.disableMock && !templateConfig?.disableMock) {
                // generate mock
                generateMock(generateArgs.i || generateArgs["input-spec"], outputDir);
            }
            if (isSEBGenerator(generatorName)) {
                const relativeGenerator: OpenApiGenerator = customGeneratorMapper
                    .find(({ generator }: CustomGeneratorMapper) => generatorName === generator)?.relativeGenerator;
                if (relativeGenerator) {
                    (args as GenerateArgumentType)[(args as GenerateArgumentType).g ? "g" : "generator-name"] = relativeGenerator;
                }
            }
        }
        CustomOptions
            .filter(({ option }: CustomOptionType) => !!option)
            .map((item: CustomOptionType) => {
                const customOption: CustomOptionsArgumentType = minimist<CustomOptionsArgumentType>(item.option);
                const selectedKey: string = Object.keys(customOption)
                    .find((key: string) => Object
                        .keys(args)
                        .some((argKey: string) => argKey !== "_" && argKey === key)
                    );
                if (selectedKey) {
                    delete args[selectedKey];
                }
            });
        const revertArgs: Array<string> = dargs(args as any, { excludes: ["_"] });
        if (revertArgs) {
            command += ` ${revertArgs.join(" ")}`;
        }
        process.env["JAVA_OPTS"] = `-Dio.swagger.parser.util.RemoteUrl.trustAll=true -Dio.swagger.v3.parser.util.RemoteUrl.trustAll=true`;
        const cmd: ChildProcess = spawn(command, { stdio: "inherit", shell: true });
        cmd.on("exit", process.exit);
    });
    program.parse(process.argv);
}

/**
 * remove extra option
 * @param addtionalProperties additional properties
 */
function removeExtraOption(addtionalProperties: string): string {
    const additionalArgs: Array<string> = addtionalProperties.split(",");
    let newAdditionalArgs: string = "";
    additionalArgs.map((argument: string) => {
        const keys: Array<string> = argument.split("=");
        const keyName: string = keys[0];
        const relatedOption: CustomOptionType = CustomOptions
            .find((option: CustomOptionType) => !!option.mappingName && option.mappingName === keyName);
        if (keys[1] !== "false" || !relatedOption?.removeOnFalse) {
            newAdditionalArgs = argument;
        }
    });
    return newAdditionalArgs;
}

/**
 * format extra options into array to append to -p
 * @param args arguments
 * @param extraOptions extra options list
 */
function formatExtraOption(args: GeneratorArgs, extraOptions?: Array<string>) {
    const newExtraOptions: Array<string> = extraOptions ? [...extraOptions] : [];

    CustomOptions.filter(({ mappingName }) => !!mappingName).map(
        (option: CustomOptionType) => {
            let argumentValue: string;
            if (option.additionalProp) {
                const additionalProps: string = (args as GenerateArgumentType).p || (args as GenerateArgumentType)["additional-properties"];
                if (!additionalProps || additionalProps.indexOf(option.mappingName) === -1) {
                    argumentValue = option.defaultValue;
                }
            } else {
                const extraArgs: CustomOptionsArgumentType = minimist<CustomOptionsArgumentType>(option.option);
                const extraDependentArgs: CustomOptionsArgumentType = minimist<CustomOptionsArgumentType>(option.dependedOption || []);
                const extraArgument: string = Object.keys(args).find((key: string) =>
                    Object
                        .keys(extraArgs)
                        .some((argKey: string) => argKey !== "_" && argKey === key)
                );
                const extraDependentArgument: string = Object
                    .keys(args)
                    .find((key: string) => Object
                        .keys(extraDependentArgs)
                        .some((argKey: string) => argKey !== "_" && argKey === key)
                    );
                if (option.dependedOption && !!args[extraArgument] !== !!args[extraDependentArgument]) {
                    throw new Error(option.errorMessage);
                } else if (!!args[extraArgument]) {
                    argumentValue = args[extraArgument];
                }
            }
            if (!!argumentValue) {
                newExtraOptions.push(`${option.mappingName}=${argumentValue}`);
            }
        }
    );
    return newExtraOptions;
}

/**
 * remove folder recursively
 * @param dirPath directory path
 */
function deleteFolderRecursive(dirPath: string) {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file: string) => {
            const curPath = path.join(dirPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dirPath);
    }
}

export default generatorFn;
