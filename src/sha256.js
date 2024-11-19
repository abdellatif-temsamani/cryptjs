import { encode3Bytes } from "./encode.js";
import Sha, { shaType } from "./sha.js";
import shaAlgorithm from "./shaAlgorithm.js";
import StringBuffer from "./StringBuffer.js";

/**
 * @param {string} key
 * @param {string} salt
 * @param {number} rounds
 *
 * @returns {Sha}
 */
export default function sha256(key, salt, rounds = 5000) {
    const res = shaAlgorithm(shaType.sha256, key, 32, rounds, salt);
    const c = res.hashSeq;

    const buffer = new StringBuffer();

    encode3Bytes(buffer, c[0], c[10], c[20]);
    encode3Bytes(buffer, c[21], c[1], c[11]);
    encode3Bytes(buffer, c[12], c[22], c[2]);
    encode3Bytes(buffer, c[3], c[13], c[23]);
    encode3Bytes(buffer, c[24], c[4], c[14]);
    encode3Bytes(buffer, c[15], c[25], c[5]);
    encode3Bytes(buffer, c[6], c[16], c[26]);
    encode3Bytes(buffer, c[27], c[7], c[17]);
    encode3Bytes(buffer, c[18], c[28], c[8]);
    encode3Bytes(buffer, c[9], c[19], c[29]);
    encode3Bytes(buffer, c[31], c[30]);

    return new Sha(shaType.sha256, res.salt, buffer.toString());
}
