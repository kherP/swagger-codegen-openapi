export enum GenerateOptionName {
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

export const GenerateOptions: Array<OptionType> = [
    {
        option: [GenerateOptionName.authShort, GenerateOptionName.auth],
        description: "adds authorization headers when fetching the OpenAPI definitions remotely. Pass in a URL-encoded string of name:header with a comma separating multiple values"
    },
    {
        option: [GenerateOptionName.apiNameSuffix],
        description: "Suffix that will be appended to all API names ('tags'). Default: Api. e.g. Pet => PetApi. Note: Only ruby, python, jaxrs generators suppport this feature at the moment."
    },
    {
        option: [GenerateOptionName.apiPackage],
        description: "package for generated api classes"
    },
    {
        option: [GenerateOptionName.artifactId],
        description: "artifactId in generated pom.xml. This also becomes part of the generated library's filename"
    },
    {
        option: [GenerateOptionName.artifactVersion],
        description: "artifact version in generated pom.xml. This also becomes part of the generated library's filename"
    },
    {
        option: [GenerateOptionName.configShort, GenerateOptionName.config],
        description: `Path to configuration file. It can be JSON or YAML. If file is JSON, the content should have the format {"optionKey":"optionValue", "optionKey1":"optionValue1"...}. If file is YAML, the content should have the format optionKey: optionValue. Supported options can be different for each language. Run config-help -g {generator name} command for language-specific config options.`
    },
    {
        option: [GenerateOptionName.multipleRules],
        description: "sets specified system properties in the format of name=value,name=value (or multiple options, each with name=value)"
    },
    {
        option: [GenerateOptionName.dryRun],
        description: "Try things out and report on potential changes (without actually making changes)."
    },
    {
        option: [GenerateOptionName.engineShort, GenerateOptionName.engine],
        description: `templating engine: "mustache" (default) or "handlebars" (beta)`
    },
    {
        option: [GenerateOptionName.enablePostProcessFile],
        description: "Enable post-processing file using environment variables."
    },
    {
        option: [GenerateOptionName.generatorNameShort, GenerateOptionName.generatorName],
        description: "generator to use (see list command for list)",
        defaultValue: "typescript-axios"
    },
    {
        option: [GenerateOptionName.generateAliasAsModel],
        description: "Generate model implementation for aliases to map and array schemas. An 'alias' is an array, map, or list which is defined inline in a OpenAPI document and becomes a model in the generated code. A 'map' schema is an object that can have undeclared properties, i.e. the 'additionalproperties' attribute is set on that object. An 'array' schema is a list of sub schemas in a OAS document"
    },
    {
        option: [GenerateOptionName.gitHost],
        description: "Git host, e.g. gitlab.com."
    },
    {
        option: [GenerateOptionName.gitRepoId],
        description: "Git repo ID, e.g. openapi-generator."
    },
    {
        option: [GenerateOptionName.gitUserId],
        description: "Git user ID, e.g. openapitools."
    },
    {
        option: [GenerateOptionName.groupId],
        description: "groupId in generated pom.xml"
    },
    {
        option: [GenerateOptionName.httpUserAgent],
        description: "HTTP user agent, e.g. codegen_csharp_api_client, default to 'OpenAPI-Generator/{packageVersion}}/{language}'"
    },
    {
        option: [GenerateOptionName.ignoreFileOverride],
        description: "Specifies an override location for the .openapi-generator-ignore file. Most useful on initial generation."
    },
    {
        option: [GenerateOptionName.importMappings],
        description: "specifies mappings between a given class and the import that should be used for that class in the format of type=import,type=import. You can also have multiple occurrences of this option."
    },
    {
        option: [GenerateOptionName.instantiationTypes],
        description: "sets instantiation type mappings in the format of type=instantiatedType,type=instantiatedType.For example (in Java): array=ArrayList,map=HashMap. In other words array types will get instantiated as ArrayList in generated code. You can also have multiple occurrences of this option."
    },
    {
        option: [GenerateOptionName.invokerPackage],
        description: "root package for generated code"
    },
    {
        option: [GenerateOptionName.languageSpecificPrimitives],
        description: "specifies additional language specific primitive types in the format of type1,type2,type3,type3. For example: String,boolean,Boolean,Double. You can also have multiple occurrences of this option."
    },
    {
        option: [GenerateOptionName.library],
        description: "library template (sub-template)"
    },
    {
        option: [GenerateOptionName.logToStderr],
        description: "write all log messages (not just errors) to STDOUT. Useful for piping the JSON output of debug options (e.g. `-DdebugOperations`) to an external parser directly while testing a generator."
    },
    {
        option: [GenerateOptionName.minimalUpdate],
        description: "Only write output files that have changed."
    },
    {
        option: [GenerateOptionName.modelNamePrefix],
        description: "Prefix that will be prepended to all model names."
    },
    {
        option: [GenerateOptionName.modelNameSuffix],
        description: "Suffix that will be appended to all model names."
    },
    {
        option: [GenerateOptionName.modelPackage],
        description: "package for generated models"
    },
    {
        option: [GenerateOptionName.packageName],
        description: "package for generated classes (where supported)"
    },
    {
        option: [GenerateOptionName.releaseNote],
        description: "Release note, default to 'Minor update'."
    },
    {
        option: [GenerateOptionName.removeOperationIdPrefix],
        description: "Remove prefix of operationId, e.g. config_getId => getId"
    },
    {
        option: [GenerateOptionName.reservedWordsMappings],
        description: "specifies how a reserved name should be escaped to. Otherwise, the default _<name> is used. For example id=identifier. You can also have multiple occurrences of this option."
    },
    {
        option: [GenerateOptionName.serverVariables],
        description: "sets server variables overrides for spec documents which support variable templating of servers."
    },
    {
        option: [GenerateOptionName.skipValidateSpec],
        description: "Skips the default behavior of validating an input specification."
    },
    {
        option: [GenerateOptionName.strictSpec],
        description: "'MUST' and 'SHALL' wording in OpenAPI spec is strictly adhered to. e.g. when false, no fixes will be applied to documents which pass validation but don't follow the spec."
    },
    {
        option: [GenerateOptionName.typeMappings],
        description: "sets mappings between OpenAPI spec types and generated code types in the format of OpenAPIType=generatedType,OpenAPIType=generatedType. For example: array=List,map=Map,string=String. You can also have multiple occurrences of this option."
    },
    {
        option: [GenerateOptionName.inputSpecShort, GenerateOptionName.inputSpec],
        description: "location of the OpenAPI spec, as URL or file (required)"
    },
    {
        option: [GenerateOptionName.outputShort, GenerateOptionName.output],
        description: "where to write the generated files (current dir by default)"
    },
    {
        option: [GenerateOptionName.additionalPropertiesShort, GenerateOptionName.additionalProperties],
        description: "sets additional properties that can be referenced by the mustache templates in the format of name=value,name=value. You can also have multiple occurrences of this option."
    },
    {
        option: [GenerateOptionName.skipOverwriteShort, GenerateOptionName.skipOverwrite],
        description: "specifies if the existing files should be overwritten during the generation."
    },
    {
        option: [GenerateOptionName.templateDirShort, GenerateOptionName.templateDir],
        description: "folder containing the template files"
    },
    {
        option: [GenerateOptionName.verboseShort, GenerateOptionName.verbose],
        description: "verbose mode"
    }
];

export const GenerateDefaultOptions: Array<DefaultOptionType> = [
    {
        key: [GenerateOptionName.generatorNameShort, GenerateOptionName.generatorName],
        value: "typescript-axios"
    },
    {
        key: [GenerateOptionName.outputShort, GenerateOptionName.output],
        value: "./src/apis"
    }
];
