import { createHash } from "node:crypto";

/**
 * Converts a string to an array of UTF-16 byte values (code units).
 *
 * @param {string} str - The input string to convert.
 * @returns {number[]} - An array of UTF-16 byte values (code units).
 */
export function toUtf16Bytes(str) {
    return Array.from(str, (char) => char.charCodeAt(0));
}
/**
 * Converts a Buffer to an array of UTF-16 byte values (code units).
 *
 * @param {Buffer} data - The input string to convert.
 * @param {import("./types.js").ShaType} algorithm
 * @returns {number[]} - An array of UTF-16 byte values (code units).
 */
export function hashBuffer(data, algorithm) {
    const hash = createHash(algorithm.name);

    hash.update(data);
    return Array.from(hash.digest());
}

export const base64EncodingChars =
    "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
