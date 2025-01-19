import { randomBytes } from "crypto";

/**
 * @description maximum length of salt
 * @type {16}
 */
export const maxSaltLength = 16;

/**
 * @param {number} [len] length of salt
 * @returns {string} generated salt
 */
export function genSalt(len = maxSaltLength) {
    return randomBytes(len).toString("hex");
}

/**
 * @description validate salt
 * @param {string | undefined} salt provided salt
 * @returns {string} a valid salt
 */
export default function validateSalt(salt) {
    // DONE: random salt
    if (salt === undefined) return genSalt();

    if (salt.includes("$")) {
        throw new Error("Salt contains '$' character");
    }

    if (salt.length > maxSaltLength) return salt.substring(0, maxSaltLength);

    return salt;
}
