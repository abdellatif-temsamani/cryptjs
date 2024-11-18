import { assert } from "console";

import StringBuffer from "./StringBuffer.js";
import {
    _base64EncodingChars,
    hashBuffer,
    maxSaltLength,
    toUtf16Bytes,
} from "./utils.js";

/**
 * Encodes 3 bytes into base64 encoding and appends the result to the StringBuffer.
 *
 * @param {StringBuffer} result - The StringBuffer where the result will be appended.
 * @param {number} c - The first byte to be encoded.
 * @param {number} [b] - The second byte to be encoded (optional).
 * @param {number} [a] - The third byte to be encoded (optional).
 */
function _encode_3bytes(result, c, b, a) {
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
        result.append(_base64EncodingChars.substring(value, value + 1));
        w >>= 6;
    }

    return result.toString();
}

/**
 * @param {string} key
 * @param {number} blockSize
 * @param {number} rounds
 * @param {string} providedSalt

 * @returns {number[]}
 */
function sha256sha512Algorithm(key, blockSize, rounds, providedSalt) {
    const valueBytes = toUtf16Bytes(key);

    if (providedSalt.includes("$")) {
        throw new Error("Salt contains '$' character");
    }

    const salt =
        providedSalt.length <= maxSaltLength
            ? providedSalt
            : providedSalt.substring(0, maxSaltLength);

    const saltBytes = toUtf16Bytes(salt);

    const dataA = [
        ...valueBytes, // Step 2
        ...saltBytes, // Step 3
    ];

    const dataB = [
        // step 4
        ...valueBytes, // Step 5
        ...saltBytes, // Step 6
        ...valueBytes, // Step 7
    ];

    const altBytes = hashBuffer(Buffer.from(dataB));

    let count = key.length;
    while (blockSize <= count) {
        dataA.push(...altBytes);
        count -= blockSize;
    }
    if (0 < count) {
        dataA.push(...altBytes.slice(0, count)); // Step 10
    }

    for (let bits = key.length; bits != 0; bits >>= 1) {
        if ((bits & 0x01) != 0) {
            dataA.push(...altBytes);
        } else {
            dataA.push(...valueBytes);
        }
    }

    const digestA = hashBuffer(Buffer.from(dataA));

    /** @type {number[]} */
    const dataDP = []; // Step 13

    for (let x = 0; x < key.length; x++) {
        dataDP.push(...valueBytes); // Step 14
    }

    const dpBytes = hashBuffer(Buffer.from(dataDP));

    /** @type {number[]} */
    const p = [];

    count = key.length;
    while (blockSize <= count) {
        p.push(...dpBytes);
        count -= blockSize;
    }
    if (0 < count) {
        p.push(...dpBytes.slice(0, count));
    }

    /** @type {number[]} */
    const dataDS = []; // Step 17
    const a0 = digestA[0];
    assert(0 <= a0 && a0 < 256);
    for (let x = 0; x < 16 + a0; x++) {
        dataDS.push(...saltBytes);
    }
    const dsBytes = hashBuffer(Buffer.from(dataDS));

    /** @type {number[]} */
    const s = []; // Step 13

    count = salt.length;
    while (blockSize <= count) {
        s.push(...dsBytes);
        count -= blockSize;
    }
    if (0 < count) {
        s.push(...dsBytes.slice(0, count));
    }

    let running = digestA;
    for (var r = 0; r < rounds; r++) {
        /** @type {number[]} */
        const dataC = [];

        if (r % 2 == 1) {
            dataC.push(...p);
        } else {
            dataC.push(...running);
        }

        if (r % 3 != 0) {
            dataC.push(...s);
        }
        if (r % 7 != 0) {
            dataC.push(...p);
        }

        if (r % 2 == 1) {
            dataC.push(...running);
        } else {
            dataC.push(...p);
        }
        running = hashBuffer(Buffer.from(dataC));
    }

    return running;
}

/**
 * @param {string} key
 * @param {string} salt
 * @param {number} rounds
 *
 * @returns {string}
 */
export function sha512(key, salt, rounds = 5000) {
    const c = sha256sha512Algorithm(key, 64, rounds, salt);

    const result = new StringBuffer();

    _encode_3bytes(result, c[0], c[21], c[42]);
    _encode_3bytes(result, c[22], c[43], c[1]);
    _encode_3bytes(result, c[44], c[2], c[23]);
    _encode_3bytes(result, c[3], c[24], c[45]);
    _encode_3bytes(result, c[25], c[46], c[4]);
    _encode_3bytes(result, c[47], c[5], c[26]);
    _encode_3bytes(result, c[6], c[27], c[48]);
    _encode_3bytes(result, c[28], c[49], c[7]);
    _encode_3bytes(result, c[50], c[8], c[29]);
    _encode_3bytes(result, c[9], c[30], c[51]);
    _encode_3bytes(result, c[31], c[52], c[10]);
    _encode_3bytes(result, c[53], c[11], c[32]);
    _encode_3bytes(result, c[12], c[33], c[54]);
    _encode_3bytes(result, c[34], c[55], c[13]);
    _encode_3bytes(result, c[56], c[14], c[35]);
    _encode_3bytes(result, c[15], c[36], c[57]);
    _encode_3bytes(result, c[37], c[58], c[16]);
    _encode_3bytes(result, c[59], c[17], c[38]);
    _encode_3bytes(result, c[18], c[39], c[60]);
    _encode_3bytes(result, c[40], c[61], c[19]);
    _encode_3bytes(result, c[62], c[20], c[41]);
    _encode_3bytes(result, c[63]);

    return result.toString();
}
