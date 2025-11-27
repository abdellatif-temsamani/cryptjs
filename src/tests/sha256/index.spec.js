import { describe, expect, test } from "@jest/globals";

import { sha256 } from "../../sha256";

describe("SHA-256", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("execution", () => {
        expect(sha256(key, { salt: salt })).toMatchObject({
            hash: "Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC",
            salt: "w2323lfkhwraffla",
            type: { code: "5", name: "sha256" },
        });
    });

    test("hash", () => {
        expect(sha256(key, { salt: salt }).hash).toBe(
            "Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC",
        );
    });

    test("empty String", () => {
        expect(sha256("", { salt: salt }).toString()).toBe(
            "$5$w2323lfkhwraffla$h5ov/mayOG5TWawlkVhg6lNNBhRGV/D8ifse1n7mJn4",
        );
    });

    test("long String", () => {
        expect(sha256("a".repeat(1000), { salt: salt }).toString()).toBe(
            "$5$w2323lfkhwraffla$rOMpVUJ8Rsy7AAsT6yxw4w7JzOE5QT.OfzKrRbZo0B0",
        );
    });
});
