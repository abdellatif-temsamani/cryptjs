import { createHash } from "crypto";

/**
 * @description max length of a salt
 *
 */
export const maxSaltLength = 16;

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
 * @returns {number[]} - An array of UTF-16 byte values (code units).
 */
export function hashBuffer(data) {
    const hash = createHash("sha512");
    hash.update(data);
    return Array.from(hash.digest());
}

export const _base64EncodingChars =
    "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
