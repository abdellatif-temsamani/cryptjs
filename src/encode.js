// eslint-disable-next-line no-unused-vars
import StringBuffer from "./StringBuffer.js";
import { base64EncodingChars } from "./utils.js";

/**
 * Encodes 3 bytes into base64 encoding and appends the result to the StringBuffer.
 *
 * @param {StringBuffer} result - The StringBuffer where the result will be appended.
 * @param {number} c - The first byte to be encoded.
 * @param {number} [b] - The second byte to be encoded (optional).
 * @param {number} [a] - The third byte to be encoded (optional).
 */
export function encode3Bytes(result, c, b, a) {
    let n; // number of characters in encoding
    let w; // 24-bit value with all the bytes in it

    if (a != null && b != null) {
        n = 4;
        w = (c << 16) | (b << 8) | a;
    } else if (b != null) {
        n = 3;
        w = (c << 8) | b;
    } else {
        n = 2;
        w = c;
    }

    while (0 < n--) {
        let value = w & 0x3f;
        result.append(base64EncodingChars.substring(value, value + 1));
        w >>= 6;
    }

    return result.toString();
}
