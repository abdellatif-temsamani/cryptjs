const { shaType, Sha } = require("./sha.js");

const { sha256 } = require("./sha256.js");
const { sha512 } = require("./sha512.js");

module.exports = { shaType, Sha, sha256, sha512 };
