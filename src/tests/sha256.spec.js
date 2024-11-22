import { describe, expect, test } from "@jest/globals";

import sha256 from "../sha256";

describe("SHA-512", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("execution", () => {
        expect(sha256(key, salt)).toMatchObject({
            hash: "Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC",
            salt: "w2323lfkhwraffla",
            type: { code: "5", name: "sha256" },
        });
    });

    test("salt + hash", () => {
        expect(sha256(key, salt).toString()).toBe(
            "$5$w2323lfkhwraffla$Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC",
        );
    });

    test("hash", () => {
        expect(sha256(key, salt).hash).toBe(
            "Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC",
        );
    });

    test("salt", () => {
        const res = sha256(key, salt);
        expect(salt).toContain(res.salt);
    });

    test("empty String", () => {
        expect(sha256("", salt).toString()).toBe(
            "$5$w2323lfkhwraffla$h5ov/mayOG5TWawlkVhg6lNNBhRGV/D8ifse1n7mJn4",
        );
    });

    test("empty String salt", () => {
        expect(sha256(key, "").toString()).toBe(
            "$5$$SnJ6Ld.DKt/DurOzsPgBtRsuP2hIsWgTIg7JJ4JrGJA",
        );
    });

    test("long String", () => {
        expect(sha256("a".repeat(1000), salt).toString()).toBe(
            "$5$w2323lfkhwraffla$rOMpVUJ8Rsy7AAsT6yxw4w7JzOE5QT.OfzKrRbZo0B0",
        );
    });

    test("salt contains $", () => {
        expect(() => {
            sha256(key, "$" + salt);
        }).toThrowError("Salt contains '$' character");
    });
    /**
     * TODO: ADD "Empty String", "Long Input Strings", "Binary Data", "Edge Cases" */
});
