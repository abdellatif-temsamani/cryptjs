/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,

    errorOnDeprecated: false,

    modulePathIgnorePatterns: ["lib", "/node_modules/", "\\.pnp\\.[^\\/]+$"],

    notify: true,

    testEnvironment: "node",

    transformIgnorePatterns: ["/lib/", "/node_modules/", "\\.pnp\\.[^\\/]+$"],

    workerIdleMemoryLimit: "512MB",
};

export default config;
