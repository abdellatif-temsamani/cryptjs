import { encode3Bytes } from "./encode.js";
import sha256sha512Algorithm from "./sha256sha512Algorithm.js";
import StringBuffer from "./StringBuffer.js";

/**
 * @param {string} key
 * @param {string} salt
 * @param {number} rounds
 *
 * @returns {string}
 */
export default function sha512(key, salt, rounds = 5000) {
    const c = sha256sha512Algorithm(key, 64, rounds, salt);

    const result = new StringBuffer();

    encode3Bytes(result, c[0], c[21], c[42]);
    encode3Bytes(result, c[22], c[43], c[1]);
    encode3Bytes(result, c[44], c[2], c[23]);
    encode3Bytes(result, c[3], c[24], c[45]);
    encode3Bytes(result, c[25], c[46], c[4]);
    encode3Bytes(result, c[47], c[5], c[26]);
    encode3Bytes(result, c[6], c[27], c[48]);
    encode3Bytes(result, c[28], c[49], c[7]);
    encode3Bytes(result, c[50], c[8], c[29]);
    encode3Bytes(result, c[9], c[30], c[51]);
    encode3Bytes(result, c[31], c[52], c[10]);
    encode3Bytes(result, c[53], c[11], c[32]);
    encode3Bytes(result, c[12], c[33], c[54]);
    encode3Bytes(result, c[34], c[55], c[13]);
    encode3Bytes(result, c[56], c[14], c[35]);
    encode3Bytes(result, c[15], c[36], c[57]);
    encode3Bytes(result, c[37], c[58], c[16]);
    encode3Bytes(result, c[59], c[17], c[38]);
    encode3Bytes(result, c[18], c[39], c[60]);
    encode3Bytes(result, c[40], c[61], c[19]);
    encode3Bytes(result, c[62], c[20], c[41]);
    encode3Bytes(result, c[63]);

    return result.toString();
}
