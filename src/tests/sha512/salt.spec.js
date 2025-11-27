import { describe, expect, test } from "@jest/globals";

import { sha512 } from "../../sha512";

describe("SHA-512 SALT", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("salt + hash", () => {
        expect(sha512(key, { salt: salt }).toString()).toBe(
            "$6$w2323lfkhwraffla$NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.",
        );
    });

    test("salt", () => {
        const res = sha512(key, { salt: salt });
        expect(salt).toContain(res.salt);
    });

    test("no salt", () => {
        expect(sha512(key)).toBeTruthy();
    });

    test("empty String salt", () => {
        expect(sha512(key, { salt: "" }).toString()).toBe(
            "$6$$0tWw16P6sIhcjedEHzVS2YscgpDC4ut0SMIzY4wcqCnZmFzqsVrjXqQPLMPTXGvG1TUwuWYZRfkCznWHX.0u71",
        );
    });

    test("salt contains $", () => {
        expect(() => {
            sha512(key, { salt: "$" + salt });
        }).toThrow("Salt contains '$' character");
    });
});
