const { randomBytes } = require("crypto");

/**
 * maximum length of salt
 * @type {import("../types").SaltLength}
 */
const maxSaltLength = 16;

/**
 * Generates a random salt of the specified length.
 * @param {number} [len] length of salt
 * @returns {string} generated salt
 */
function genSalt(len = maxSaltLength) {
    return randomBytes(len).toString("hex");
}

/**
 * Validates and adjusts the provided salt to ensure it's valid.
 * @param {string | undefined} salt provided salt
 * @returns {string} a valid salt
 */
function validateSalt(salt) {
    if (salt === undefined) return genSalt();

    if (salt.includes("$")) {
        throw new Error("Salt contains '$' character");
    }

    if (salt.length > maxSaltLength) return salt.substring(0, maxSaltLength);

    return salt;
}

module.exports = validateSalt;
module.exports.genSalt = genSalt;
module.exports.maxSaltLength = maxSaltLength;
