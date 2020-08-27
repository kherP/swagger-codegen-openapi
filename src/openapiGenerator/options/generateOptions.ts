import { OptionType, DefaultOptionType } from "./option.type";
import { OpenApiGenerator } from "../generatorList";

interface GenerateArgumentType {
    auth?: string;
    a?: string;
    config?: string;
    c?: string;
    D?: string;
    engine?: string;
    e?: string;
    g?: OpenApiGenerator;
    library?: string;
    i?: string;
    output?: string;
    o?: string;
    p?: string;
    t?: string;
    s?: boolean;
    v?: boolean;
    verbose?: boolean;
    "api-name-suffix"?: string;
    "api-package"?: string;
    "artifact-id"?: string;
    "artifact-version"?: string;
    "dry-run"?: boolean;
    "enable-post-process-file"?: boolean;
    "generator-name"?: OpenApiGenerator;
    "generate-alias-as-model"?: boolean;
    "git-host"?: string;
    "git-repo-id"?: string;
    "git-user-id"?: string;
    "group-id"?: string;
    "http-user-agent"?: string;
    "ignore-file-override"?: string;
    "import-mappings"?: string;
    "instantiation-types"?: string;
    "invoker-package"?: string;
    "language-specific-primitives"?: string;
    "log-to-stderr"?: boolean;
    "minimal-update"?: boolean;
    "model-name-prefix"?: string;
    "model-name-suffix"?: string;
    "model-package"?: string;
    "package-name"?: string;
    "release-note"?: string;
    "remove-operation-id-prefix"?: boolean;
    "reserved-words-mappings"?: string;
    "server-variables"?: string;
    "skip-validate-spec"?: boolean;
    "strict-spec"?: boolean;
    "type-mappings"?: string;
    "input-spec"?: string;
    "additional-properties"?: string;
    "skip-overwrite"?: boolean;
    "template-dir"?: string;
}

enum OptionName {
    auth = "--auth",
    authShort = "-a",
    apiNameSuffix = "--api-name-suffix",
    apiPackage = "--api-package",
    artifactId = "--artifact-id",
    artifactVersion = "--artifact-version",
    config = "--config",
    configShort = "-c",
    multipleRules = "-D",
    dryRun = "--dry-run",
    engine = "--engine",
    engineShort = "-e",
    enablePostProcessFile = "--enable-post-process-file",
    generatorName = "--generator-name",
    generatorNameShort = "-g",
    generateAliasAsModel = "--generate-alias-as-model",
    gitHost = "--git-host",
    gitRepoId = "--git-repo-id",
    gitUserId = "--git-user-id",
    groupId = "--group-id",
    httpUserAgent = "--http-user-agent",
    ignoreFileOverride = "--ignore-file-override",
    importMappings = "--import-mappings",
    instantiationTypes = "--instantiation-types",
    invokerPackage = "--invoker-package",
    languageSpecificPrimitives = "--language-specific-primitives",
    library = "--library",
    logToStderr = "--log-to-stderr",
    minimalUpdate = "--minimal-update",
    modelNamePrefix = "--model-name-prefix",
    modelNameSuffix = "--model-name-suffix",
    modelPackage = "--model-package",
    packageName = "--package-name",
    releaseNote = "--release-note",
    removeOperationIdPrefix = "--remove-operation-id-prefix",
    reservedWordsMappings = "--reserved-words-mappings",
    serverVariables = "--server-variables",
    skipValidateSpec = "--skip-validate-spec",
    strictSpec = "--strict-spec",
    typeMappings = "--type-mappings",
    inputSpec = "--input-spec",
    inputSpecShort = "-i",
    output = "--output",
    outputShort = "-o",
    additionalProperties = "--additional-properties",
    additionalPropertiesShort = "-p",
    skipOverwrite = "--skip-overwrite",
    skipOverwriteShort = "-s",
    templateDir = "--template-dir",
    templateDirShort = "-t",
    verbose = "--verbose",
    verboseShort = "-v",
}
/**
 * generate options
 */

const options: Array<OptionType> = [
    {
        option: [OptionName.authShort, OptionName.auth],
        description: "adds authorization headers when fetching the OpenAPI definitions remotely. Pass in a URL-encoded string of name:header with a comma separating multiple values"
    },
    {
        option: [OptionName.apiNameSuffix],
        description: "Suffix that will be appended to all API names ('tags'). Default: Api. e.g. Pet => PetApi. Note: Only ruby, python, jaxrs generators suppport this feature at the moment."
    },
    {
        option: [OptionName.apiPackage],
        description: "package for generated api classes"
    },
    {
        option: [OptionName.artifactId],
        description: "artifactId in generated pom.xml. This also becomes part of the generated library's filename"
    },
    {
        option: [OptionName.artifactVersion],
        description: "artifact version in generated pom.xml. This also becomes part of the generated library's filename"
    },
    {
        option: [OptionName.configShort, OptionName.config],
        description: `Path to configuration file. It can be JSON or YAML. If file is JSON, the content should have the format {"optionKey":"optionValue", "optionKey1":"optionValue1"...}. If file is YAML, the content should have the format optionKey: optionValue. Supported options can be different for each language. Run config-help -g {generator name} command for language-specific config options.`
    },
    {
        option: [OptionName.multipleRules],
        description: "sets specified system properties in the format of name=value,name=value (or multiple options, each with name=value)"
    },
    {
        option: [OptionName.dryRun],
        description: "Try things out and report on potential changes (without actually making changes)."
    },
    {
        option: [OptionName.engineShort, OptionName.engine],
        description: `templating engine: "mustache" (default) or "handlebars" (beta)`
    },
    {
        option: [OptionName.enablePostProcessFile],
        description: "Enable post-processing file using environment variables."
    },
    {
        option: [OptionName.generatorNameShort, OptionName.generatorName],
        description: "generator to use (see list command for list)",
        defaultValue: "typescript-axios"
    },
    {
        option: [OptionName.generateAliasAsModel],
        description: "Generate model implementation for aliases to map and array schemas. An 'alias' is an array, map, or list which is defined inline in a OpenAPI document and becomes a model in the generated code. A 'map' schema is an object that can have undeclared properties, i.e. the 'additionalproperties' attribute is set on that object. An 'array' schema is a list of sub schemas in a OAS document"
    },
    {
        option: [OptionName.gitHost],
        description: "Git host, e.g. gitlab.com."
    },
    {
        option: [OptionName.gitRepoId],
        description: "Git repo ID, e.g. openapi-generator."
    },
    {
        option: [OptionName.gitUserId],
        description: "Git user ID, e.g. openapitools."
    },
    {
        option: [OptionName.groupId],
        description: "groupId in generated pom.xml"
    },
    {
        option: [OptionName.httpUserAgent],
        description: "HTTP user agent, e.g. codegen_csharp_api_client, default to 'OpenAPI-Generator/{packageVersion}}/{language}'"
    },
    {
        option: [OptionName.ignoreFileOverride],
        description: "Specifies an override location for the .openapi-generator-ignore file. Most useful on initial generation."
    },
    {
        option: [OptionName.importMappings],
        description: "specifies mappings between a given class and the import that should be used for that class in the format of type=import,type=import. You can also have multiple occurrences of this option."
    },
    {
        option: [OptionName.instantiationTypes],
        description: "sets instantiation type mappings in the format of type=instantiatedType,type=instantiatedType.For example (in Java): array=ArrayList,map=HashMap. In other words array types will get instantiated as ArrayList in generated code. You can also have multiple occurrences of this option."
    },
    {
        option: [OptionName.invokerPackage],
        description: "root package for generated code"
    },
    {
        option: [OptionName.languageSpecificPrimitives],
        description: "specifies additional language specific primitive types in the format of type1,type2,type3,type3. For example: String,boolean,Boolean,Double. You can also have multiple occurrences of this option."
    },
    {
        option: [OptionName.library],
        description: "library template (sub-template)"
    },
    {
        option: [OptionName.logToStderr],
        description: "write all log messages (not just errors) to STDOUT. Useful for piping the JSON output of debug options (e.g. `-DdebugOperations`) to an external parser directly while testing a generator."
    },
    {
        option: [OptionName.minimalUpdate],
        description: "Only write output files that have changed."
    },
    {
        option: [OptionName.modelNamePrefix],
        description: "Prefix that will be prepended to all model names."
    },
    {
        option: [OptionName.modelNameSuffix],
        description: "Suffix that will be appended to all model names."
    },
    {
        option: [OptionName.modelPackage],
        description: "package for generated models"
    },
    {
        option: [OptionName.packageName],
        description: "package for generated classes (where supported)"
    },
    {
        option: [OptionName.releaseNote],
        description: "Release note, default to 'Minor update'."
    },
    {
        option: [OptionName.removeOperationIdPrefix],
        description: "Remove prefix of operationId, e.g. config_getId => getId"
    },
    {
        option: [OptionName.reservedWordsMappings],
        description: "specifies how a reserved name should be escaped to. Otherwise, the default _<name> is used. For example id=identifier. You can also have multiple occurrences of this option."
    },
    {
        option: [OptionName.serverVariables],
        description: "sets server variables overrides for spec documents which support variable templating of servers."
    },
    {
        option: [OptionName.skipValidateSpec],
        description: "Skips the default behavior of validating an input specification."
    },
    {
        option: [OptionName.strictSpec],
        description: "'MUST' and 'SHALL' wording in OpenAPI spec is strictly adhered to. e.g. when false, no fixes will be applied to documents which pass validation but don't follow the spec."
    },
    {
        option: [OptionName.typeMappings],
        description: "sets mappings between OpenAPI spec types and generated code types in the format of OpenAPIType=generatedType,OpenAPIType=generatedType. For example: array=List,map=Map,string=String. You can also have multiple occurrences of this option."
    },
    {
        option: [OptionName.inputSpecShort, OptionName.inputSpec],
        description: "location of the OpenAPI spec, as URL or file (required)"
    },
    {
        option: [OptionName.outputShort, OptionName.output],
        description: "where to write the generated files (current dir by default)"
    },
    {
        option: [OptionName.additionalPropertiesShort, OptionName.additionalProperties],
        description: "sets additional properties that can be referenced by the mustache templates in the format of name=value,name=value. You can also have multiple occurrences of this option."
    },
    {
        option: [OptionName.skipOverwriteShort, OptionName.skipOverwrite],
        description: "specifies if the existing files should be overwritten during the generation."
    },
    {
        option: [OptionName.templateDirShort, OptionName.templateDir],
        description: "folder containing the template files"
    },
    {
        option: [OptionName.verboseShort, OptionName.verbose],
        description: "verbose mode"
    }
];

const defaultOptions: Array<DefaultOptionType> = [
    {
        key: [OptionName.generatorNameShort, OptionName.generatorName],
        value: "typescript-axios"
    },
    {
        key: [OptionName.outputShort, OptionName.output],
        value: "./src/apis"
    }
];

export { options as GenerateOptions, defaultOptions as GenerateDefaultOptions, OptionName as GenerateOptionName,  GenerateArgumentType };