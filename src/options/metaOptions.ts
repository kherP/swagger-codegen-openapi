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

export const MetaOptions: Array<OptionType> = [
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
