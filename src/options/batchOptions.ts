enum OptionName {
    failFast = "--fail-fast",
    includesBaseDir = "--includes-base-dir",
    rootDir = "--root-dir",
    timeout = "--timeout",
    threads = "--threads",
    threadsShort = "-r",
    verbose = "--verbose",
    verboseShort = "-v",
}

export const BatchOptions: Array<OptionType> = [
    {
        option: [OptionName.failFast],
        description: "fail fast on any errors"
    },
    {
        option: [OptionName.includesBaseDir],
        description: "base directory used for includes"
    },
    {
        option: [OptionName.rootDir],
        description: "root directory used output/includes (includes can be overridden)"
    },
    {
        option: [OptionName.timeout],
        description: "execution timeout (minutes)"
    },
    {
        option: [OptionName.threadsShort, OptionName.threads],
        description: "thread count"
    },
    {
        option: [OptionName.verboseShort, OptionName.verbose],
        description: "verbose mode"
    }
];
