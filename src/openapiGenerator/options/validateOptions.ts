import { OptionType } from "./option.type";

interface ValidateArgumentType {
    "input-spec"?: string;
    i?: string;
    recommend?: boolean;
}

enum OptionName {
    inputSpec = "--input-spec",
    inputSpecShort = "-i",
    recommend = "--recommend"
}

const options: Array<OptionType> = [
    {
        option: [OptionName.inputSpecShort, OptionName.inputSpec],
        description: "location of the OpenAPI spec, as URL or file (required)"
    },
    {
        option: [OptionName.recommend],
        description: "recommend"
    }
];

export { options as ValidateOptions, ValidateArgumentType };
