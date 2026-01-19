/**
 * Mapping of SHA types to their corresponding numeric identifiers.
 * Used for specifying the SHA algorithm in certain contexts, such as cryptographic operations.
 * @type {{ sha256: import("./types").ShaType; sha512: import("./types").ShaType; }}
 */
const shaType = {
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
class Sha {
    /** @type {import("./types").ShaType} */
    type;
    /** @type {string} */
    hash;
    /** @type {string} */
    salt;

    /**
     * Creates an instance of the Sha class.
     * @param {import("./types").ShaType} algorithm type of algorithm
     * @param {string} salt The hash value.
     * @param {string} hash The salt value.
     */
    constructor(algorithm, salt, hash) {
        this.type = algorithm;
        this.salt = salt;
        this.hash = hash;
    }

    /**
     * Method to get the salted hash.
     * @returns {import("./types").SaltedHash} The salted hash value.
     */
    toString() {
        return `$${this.type.code}$${this.salt}$${this.hash}`;
    }
}

export { Sha, shaType };
