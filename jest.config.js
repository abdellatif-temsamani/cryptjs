/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,

    errorOnDeprecated: false,

    modulePathIgnorePatterns: ["lib", "/node_modules/", "\\.pnp\\.[^\\/]+$"],

    // Activates notifications for test results
    notify: true,

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ["/lib/", "/node_modules/", "\\.pnp\\.[^\\/]+$"],
};

module.exports = config;
