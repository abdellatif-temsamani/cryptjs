import { assert } from "console";

import validateRounds from "./rounds.js";
import validateSalt from "./salt.js";
import { hashBuffer, toUtf16Bytes } from "./utils.js";

/**
 * @param {import("../types.js").ShaType} algorithm either sha-256 or sha-512
 * @param {string} data data to hash
 * @param {32 | 64} blockSize blocksize
 * @param {number | undefined} providedRounds provided rounds
 * @param {string | undefined} providedSalt provided salt
 * @returns {{ hashSeq:number[]; salt: string; }} returns hash sequence, salt
 */
export default function shaAlgorithm(
    algorithm,
    data,
    blockSize,
    providedRounds,
    providedSalt,
) {
    const [valueBytes, rounds, salt] = [
        toUtf16Bytes(data),
        validateRounds(providedRounds),
        validateSalt(providedSalt),
    ];

    const saltBytes = toUtf16Bytes(salt);

    const dataA = [...valueBytes, ...saltBytes];

    const dataB = [...valueBytes, ...saltBytes, ...valueBytes];

    const altBytes = hashBuffer(Buffer.from(dataB), algorithm);

    let count = data.length;
    while (count >= blockSize) {
        dataA.push(...altBytes);
        count -= blockSize;
    }
    0 < count && dataA.push(...altBytes.slice(0, count));

    for (let bits = data.length; bits != 0; bits >>= 1) {
        if ((bits & 0x01) != 0) {
            dataA.push(...altBytes);
        } else {
            dataA.push(...valueBytes);
        }
    }

    const digestA = hashBuffer(Buffer.from(dataA), algorithm);

    /** @type {number[]} */
    const dataDP = [];

    for (let x = 0; x < data.length; x++) {
        dataDP.push(...valueBytes);
    }

    const dpBytes = hashBuffer(Buffer.from(dataDP), algorithm);

    /** @type {number[]} */
    const p = [];

    count = data.length;
    while (count >= blockSize) {
        p.push(...dpBytes);
        count -= blockSize;
    }

    0 < count && p.push(...dpBytes.slice(0, count));

    /** @type {number[]} */
    const dataDS = [];
    const a0 = digestA[0];
    assert(0 <= a0 && a0 < 256);

    for (let x = 0; x < 16 + a0; x++) {
        dataDS.push(...saltBytes);
    }
    const dsBytes = hashBuffer(Buffer.from(dataDS), algorithm);

    /** @type {number[]} */
    const s = [];

    count = salt.length;
    while (count >= blockSize) {
        s.push(...dsBytes);
        count -= blockSize;
    }

    0 < count && s.push(...dsBytes.slice(0, count));

    let hashSeq = digestA;
    for (var r = 0; r < rounds; r++) {
        /** @type {number[]} */
        const dataC = [];

        if (r % 2 == 1) {
            dataC.push(...p);
        } else {
            dataC.push(...hashSeq);
        }

        r % 3 != 0 && dataC.push(...s);

        r % 7 != 0 && dataC.push(...p);

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
