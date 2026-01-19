import { encode3Bytes } from "./encode.js";
import { Sha, shaType } from "./sha.js";
import sha256sha512Algorithm from "./shaAlgorithm/index.js";
import StringBuffer from "./StringBuffer.js";

/**
 * sha-512 algorithm
 * @param {string} data data to hash
 * @param {import("./types").ShaOptions} [options] optional arugment
 * @param {string} [options.salt] provided salt
 * @param {number} [options.rounds] provided rounds
 * @returns {Sha} Sha-512
 */
function sha512(data, options) {
    const type = shaType.sha512;
    const res = sha256sha512Algorithm(
        type,
        data,
        64,
        options?.rounds,
        options?.salt,
    );
    const c = res.hashSeq;

    const buffer = new StringBuffer();

    encode3Bytes(buffer, c[0], c[21], c[42]);
    encode3Bytes(buffer, c[22], c[43], c[1]);
    encode3Bytes(buffer, c[44], c[2], c[23]);
    encode3Bytes(buffer, c[3], c[24], c[45]);
    encode3Bytes(buffer, c[25], c[46], c[4]);
    encode3Bytes(buffer, c[47], c[5], c[26]);
    encode3Bytes(buffer, c[6], c[27], c[48]);
    encode3Bytes(buffer, c[28], c[49], c[7]);
    encode3Bytes(buffer, c[50], c[8], c[29]);
    encode3Bytes(buffer, c[9], c[30], c[51]);
    encode3Bytes(buffer, c[31], c[52], c[10]);
    encode3Bytes(buffer, c[53], c[11], c[32]);
    encode3Bytes(buffer, c[12], c[33], c[54]);
    encode3Bytes(buffer, c[34], c[55], c[13]);
    encode3Bytes(buffer, c[56], c[14], c[35]);
    encode3Bytes(buffer, c[15], c[36], c[57]);
    encode3Bytes(buffer, c[37], c[58], c[16]);
    encode3Bytes(buffer, c[59], c[17], c[38]);
    encode3Bytes(buffer, c[18], c[39], c[60]);
    encode3Bytes(buffer, c[40], c[61], c[19]);
    encode3Bytes(buffer, c[62], c[20], c[41]);
    encode3Bytes(buffer, c[63]);

    return new Sha(type, res.salt, buffer.toString());
}

export { sha512 };
