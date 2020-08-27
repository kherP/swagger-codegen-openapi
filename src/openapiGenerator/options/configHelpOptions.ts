import { OptionType } from "./option.type";

interface ConfigHelpArgumentType {
    f?: string;
    format?: string;
    o?: string;
    output?: string;
    g?: string;
    "generator-name"?: string;
    "feature-set"?: boolean;
    "import-mappings"?: boolean;
    "instantiation-types"?: boolean;
    "language-specific-primitive"?: boolean;
    "markdown-header"?: boolean;
    "named-header"?: boolean;
    "reserved-words"?: boolean;
    "full-details"?: boolean;
}

enum OptionName {
    format = "--format",
    formatShort = "-f",
    featureSet = "--feature-set",
    importMappings = "--import-mappings",
    instantiationTypes = "--instantiation-types",
    languageSpecificPrimitive = "--language-specific-primitive",
    markdownHeader = "--markdown-header",
    namedHeader = "--named-header",
    reservedWords = "--reserved-words",
    output = "--output",
    outputShort = "-o",
    fullDetails = "--full-details",
    generatorName = "--generator-name",
    generatorNameShort = "-g",
}

const options: Array<OptionType> = [
    {
        option: [OptionName.formatShort, OptionName.format],
        description: "Write output files in the desired format. Options are 'text', 'markdown' or 'yamlsample'. Default is 'text'."
    },
    {
        option: [OptionName.featureSet],
        description: "displays feature set as supported by the generator"
    },
    {
        option: [OptionName.importMappings],
        description: "displays the default import mappings (types and aliases, and what imports they will pull into the template)"
    },
    {
        option: [OptionName.instantiationTypes],
        description: "displays types used to instantiate simple type/alias names"
    },
    {
        option: [OptionName.languageSpecificPrimitive],
        description: "displays the language specific primitives (types which require no additional imports, or which may conflict with user defined model names)"
    },
    {
        option: [OptionName.markdownHeader],
        description: "When format=markdown, include this option to write out markdown headers (e.g. for docusaurus)."
    },
    {
        option: [OptionName.namedHeader],
        description: "Header includes the generator name, for clarity in output"
    },
    {
        option: [OptionName.reservedWords],
        description: "displays the reserved words which may result in renamed model or property names"
    },
    {
        option: [OptionName.outputShort, OptionName.output],
        description: "Optionally write help to this location, otherwise default is standard output"
    },
    {
        option: [OptionName.fullDetails],
        description: `displays CLI options as well as other configs/mappings (implies --instantiation-types, --reserved-words, --language-specific-primitives, --import-mappings, --supporting-files)`
    },
    {
        option: [OptionName.generatorNameShort, OptionName.generatorName],
        description: "generator to get config help for",
        defaultValue: "typescript-axios"
    }
];

export { options as ConfigHelpOptions, OptionName as ConfigHelpOptionName, ConfigHelpArgumentType };