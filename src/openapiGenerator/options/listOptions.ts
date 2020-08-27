import { OptionType } from "./option.type";

interface ListArgumentType {
    include?: string;
    i?: string;
    short?: boolean;
    s?: boolean;
}

enum OptionName {
    include = "--include",
    includeShort = "-i",
    short = "--short",
    shortShort = "-s",
}

const options: Array<OptionType> = [
    {
        option: [OptionName.includeShort, OptionName.include],
        description: "comma-separated list of stability indexes to include (value: all,beta,stable,experimental,deprecated). Excludes deprecated by default."
    },
    {
        option: [OptionName.shortShort, OptionName.short],
        description: "shortened output (suitable for scripting)"
    }
];

export { options as ListOptions, OptionName as ListOptionName, ListArgumentType };