/**
 * Mapping of SHA types to their corresponding numeric identifiers.
 * Used for specifying the SHA algorithm in certain contexts, such as cryptographic operations.
 *
 * @type {{ sha256: import("./types").ShaType; sha512: import("./types").ShaType; }}
 */
export const shaType = {
    sha256: {
        name: "sha256",
        code: "5",
    },
    sha512: {
        name: "sha512",
        code: "6",
    },
};

/**
 * Class representing a SHA object with its type, hash, salt, and salted hash.
 */
export default class Sha {
    /** @type {import("./types").ShaType} */
    type;
    /** @type {string} */
    hash;
    /** @type {string} */
    salt;

    /**
     * Creates an instance of the Sha class.
     *
     * @param {import("./types").ShaType} type
     * @param {string} hash - The hash value.
     * @param {string} salt - The salt value.
     */
    constructor(type, salt, hash) {
        this.type = type;
        this.salt = salt;
        this.hash = hash;
    }

    /**
     * Method to get the salted hash.
     *
     * @returns {import("./types").SaltedHash} The salted hash value.
     */
    toString() {
        return `$${this.type.code}$${this.salt}$${this.hash}`;
    }
}
