class StringBuffer {
    #buffer;

    constructor() {
        /**
         * Internal array to hold string parts.
         * @private
         * @type {Array<string>}
         */
        this.#buffer = [];
    }

    /**
     * Appends a string to the buffer.
     * @param {string} str The string to append to the buffer.
     * @returns {void}
     */
    append(str) {
        this.#buffer.push(str);
    }

    /**
     * Converts the buffer to a single string.
     * @returns {string} The concatenated string from all appended parts.
     */
    toString() {
        return this.#buffer.join("");
    }
}

module.exports = StringBuffer;
