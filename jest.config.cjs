/** @type {import('jest').Config} */
module.exports = {
    collectCoverage: true,

    errorOnDeprecated: false,

    modulePathIgnorePatterns: ["lib", "/node_modules/", "\\.pnp\\.[^\\/]+$"],

    notify: true,

    testEnvironment: "node",

    transformIgnorePatterns: ["/lib/", "/node_modules/", "\\.pnp\\.[^\\/]+$"],

    workerIdleMemoryLimit: "512MB",
};
