export type Subcommand = "help" | "generate" | "batch" | "list" | "config-help" | "meta" | "validate" | "version";

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
 * @param {string} commandSet command set by user
 * @returns {string} valid command
 */
export function getDefaultSubcommand(): Subcommand {
    return subcommands[0];
}
