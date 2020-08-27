const { argv } = process;
/**
 * Retrives the specified components only by eliminating:
 *  - The first two are `node` and `jest` URLs
 *  - Anything with `--` is an inline property such as `--watch` and `--detectOpenHandles`
 */
const specific = argv.slice(2, argv.length).filter((value) => value.indexOf("--") === -1);

const collectCoverageFrom = [];
const testMatch = [];

function extractSpecifics(injectTo) {
    return specific.map((item) => injectTo.replace("%inject%", item))
}

if (specific.length) {
    collectCoverageFrom.push(...extractSpecifics("src/**/%inject%.(ts|js)"));
    testMatch.push(...extractSpecifics("**/%inject%.test.(ts|js)"))
} else {
    collectCoverageFrom.push("src/**/*.(ts|js)");
    testMatch.push("**/*.test.(ts|js)");
}

collectCoverageFrom.push("!src/index.js");

module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testEnvironment: "jsdom",
    testMatch,
    modulePaths: ["<rootDir>/node_modules"],
    globals: { "NODE_ENV": "test" },
    verbose: true,
    moduleFileExtensions: ["ts", "js", "json"],
    transform: { "^.+\\.ts$": "ts-jest" },
    transformIgnorePatterns: [],
    testEnvironment: "node",
    moduleNameMapper: { "aurelia-(.*)": "<rootDir>/node_modules/$1" },
    collectCoverage: true,
    collectCoverageFrom,
    coverageDirectory: "./coverage",
    coverageReporters: ["json", "lcov", "text"]
};