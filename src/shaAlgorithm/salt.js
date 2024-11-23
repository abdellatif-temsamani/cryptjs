import { randomBytes } from "node:crypto";

/**
 * @type {16}
 */
const maxSaltLength = 16;

function genSalt() {
    return randomBytes(maxSaltLength).toString("hex");
}

/**
 * @param {string | undefined} salt
 * @returns {string} salt
 */
export default function validateSalt(salt) {
    // TODO: random salt
    if (salt === undefined) return genSalt();
    if (salt.includes("$")) {
        throw new Error("Salt contains '$' character");
    }

    if (salt.length > maxSaltLength) return salt.substring(0, maxSaltLength);

    return salt;
}
