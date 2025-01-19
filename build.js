const esbuild = require("esbuild");
const fg = require('fast-glob');


const entryPoints = fg.sync(["src/**/*.ts", "src/**/*.js", "!src/**/*.spec.js"]);

esbuild.build({
    entryPoints: entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,

    outdir: "lib",
    platform: "node",
    target: "node23",
    external: ["crypto", "console"],
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
