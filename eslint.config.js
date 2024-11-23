import pluginJs from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
    jsdoc.configs["flat/recommended"],
    {
        files: ["./src/**/*.js", "./src/**/*.ts"],
        plugins: {
            "simple-import-sort": simpleImportSort,
            jsdoc,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "jsdoc/require-description": "warn",
        },
    },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
];
