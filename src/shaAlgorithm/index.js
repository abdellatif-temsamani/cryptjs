import { assert } from "node:console";

import { hashBuffer, toUtf16Bytes } from "../utils.js";
import validateRounds from "./rounds.js";
import validateSalt from "./salt.js";

/**
 * @param {import("../types.js").ShaType} algorithm
 * @param {string} key
 * @param {32 | 64} blockSize
 * @param {number | undefined} providedRounds
 * @param {string | undefined} providedSalt

 * @returns {{ hashSeq:number[]; salt: string; }}
 */
export default function shaAlgorithm(
    algorithm,
    key,
    blockSize,
    providedRounds,
    providedSalt,
) {
    const valueBytes = toUtf16Bytes(key);
    const rounds = validateRounds(providedRounds);
    const salt = validateSalt(providedSalt);

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

    const altBytes = hashBuffer(Buffer.from(dataB), algorithm);

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

    const digestA = hashBuffer(Buffer.from(dataA), algorithm);

    /** @type {number[]} */
    const dataDP = []; // Step 13

    for (let x = 0; x < key.length; x++) {
        dataDP.push(...valueBytes); // Step 14
    }

    const dpBytes = hashBuffer(Buffer.from(dataDP), algorithm);

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
    const dsBytes = hashBuffer(Buffer.from(dataDS), algorithm);

    /** @type {number[]} */
    const s = []; // Step 13

    count = salt.length;
    while (count >= blockSize) {
        s.push(...dsBytes);
        count -= blockSize;
    }
    if (0 < count) {
        s.push(...dsBytes.slice(0, count));
    }

    let hashSeq = digestA;
    for (var r = 0; r < rounds; r++) {
        /** @type {number[]} */
        const dataC = [];

        if (r % 2 == 1) {
            dataC.push(...p);
        } else {
            dataC.push(...hashSeq);
        }

        if (r % 3 != 0) {
            dataC.push(...s);
        }
        if (r % 7 != 0) {
            dataC.push(...p);
        }

        if (r % 2 == 1) {
            dataC.push(...hashSeq);
        } else {
            dataC.push(...p);
        }
        hashSeq = hashBuffer(Buffer.from(dataC), algorithm);
    }

    return {
        hashSeq,
        salt,
    };
}
