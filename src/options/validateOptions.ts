enum OptionName {
    inputSpec = "--input-spec",
    inputSpecShort = "-i",
    recommend = "--recommend"
}

export const ValidateOptions: Array<OptionType> = [
    {
        option: [OptionName.inputSpecShort, OptionName.inputSpec],
        description: "location of the OpenAPI spec, as URL or file (required)"
    },
    {
        option: [OptionName.recommend],
        description: "recommend"
    }
];
