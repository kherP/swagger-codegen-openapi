import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "rollup-plugin-node-resolve";
import externals from "rollup-plugin-node-externals";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import summary from "rollup-plugin-summary";

export default {
    input: "src/index.ts",
    onwarn(warning, rollupWarn) {
        if (!["CIRCULAR_DEPENDENCY", "EVAL"].includes(warning.code)) {
            rollupWarn(warning);
        }
    },
    output: {
        name: "swagger-codegen-openapi",
        dir: "dist",
        format: "cjs",
        sourcemap: true,
        exports: "auto"
    },
    external: ["@openapitools/openapi-generator-cli", "commander"],
    plugins: [
        resolve({ preferBuiltins: true }),
        commonjs(),
        json(),
        typescript(),
        externals(),
        terser(),
        summary(),
    ]
}
