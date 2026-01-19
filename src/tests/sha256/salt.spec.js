const { describe, expect, test } = require("@jest/globals");

const { sha256 } = require("../../sha256");

describe("SHA-256 SALT", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("salt + hash", () => {
        expect(sha256(key, { salt: salt }).toString()).toBe(
            "$5$w2323lfkhwraffla$Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC",
        );
    });

    test("salt", () => {
        const res = sha256(key, { salt: salt });
        expect(salt).toContain(res.salt);
    });

    test("no salt", () => {
        expect(sha256(key)).toBeTruthy();
    });

    test("empty String salt", () => {
        expect(sha256(key, { salt: "" }).toString()).toBe(
            "$5$$SnJ6Ld.DKt/DurOzsPgBtRsuP2hIsWgTIg7JJ4JrGJA",
        );
    });

    test("salt contains $", () => {
        expect(() => {
            sha256(key, { salt: "$" + salt });
        }).toThrow("Salt contains '$' character");
    });
});
