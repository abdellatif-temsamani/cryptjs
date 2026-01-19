import { createHash } from "crypto";

/**
 * Converts a string to an array of UTF-16 byte values (code units).
 * @param {string} str  The input string to convert.
 * @returns {import("../types").Utf16Bytes}  An array of UTF-16 byte values (code units).
 */
function toUtf16Bytes(str) {
    return Array.from(str, (char) => char.charCodeAt(0));
}

/**
 * Converts a Buffer to an array of UTF-16 byte values (code units).
 * @param {Buffer} data - The input string to convert.
 * @param {import("../types").ShaType} algorithm either sha-256 or sha-512
 * @returns {import("../types").HashDigest} - An array of UTF-16 byte values (code units).
 */
function hashBuffer(data, algorithm) {
    const hash = createHash(algorithm.name);

    hash.update(data);
    return Array.from(hash.digest());
}

export { hashBuffer,toUtf16Bytes };
