import { OptionType } from "./option.type";

interface MetaArgumentType {
    language?: string;
    l?: string;
    name?: string;
    n?: string;
    output?: string;
    o?: string;
    package?: string;
    p?: string;
    type?: string;
    t?: string;
}

enum OptionName {
    language = "--language",
    languageShort = "-l",
    name = "--name",
    nameShort = "-n",
    output = "--output",
    outputShort = "-o",
    package = "--package",
    packageShort = "-p",
    type = "--type",
    typeShort = "-t",
}

const options: Array<OptionType> = [
    {
        option: [OptionName.languageShort, OptionName.language],
        description: "the implementation language for the generator class"
    },
    {
        option: [OptionName.nameShort, OptionName.name],
        description: "the human-readable name of the generator"
    },
    {
        option: [OptionName.outputShort, OptionName.output],
        description: "where to write the generated files (current dir by default)"
    },
    {
        option: [OptionName.packageShort, OptionName.package],
        description: "the package to put the main class into (defaults to org.openapitools.codegen)"
    },
    {
        option: [OptionName.typeShort, OptionName.type],
        description: "the type of generator that is created"
    }
];

export { options as MetaOptions, OptionName as MetaOptionName, MetaArgumentType };
