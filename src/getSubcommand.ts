const subcommands: Array<Subcommand> = [
    "generate",
    "help",
    "batch",
    "list",
    "config-help",
    "meta",
    "validate",
    "version"
];

/**
 * Retrieve openapi subcommand
 * @returns {string} valid command
 */
export function getDefaultSubcommand(): Subcommand {
    return subcommands[0];
}
