import { describe, expect, test } from "@jest/globals";

import sha512 from "../sha512";

describe("SHA-512", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("execution", () => {
        expect(sha512(key, salt)).toMatchObject({
            hash: "NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.",
            salt: "w2323lfkhwraffla",
            type: { code: "6", name: "sha512" },
        });
    });

    test("salt + hash", () => {
        expect(sha512(key, salt).toString()).toBe(
            "$6$w2323lfkhwraffla$NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.",
        );
    });

    test("hash", () => {
        expect(sha512(key, salt).hash).toBe(
            "NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.",
        );
    });

    test("salt", () => {
        const res = sha512(key, salt);
        expect(salt).toContain(res.salt);
    });

    test("empty String", () => {
        expect(sha512("", salt).toString()).toBe(
            "$6$w2323lfkhwraffla$mxaK4Xw26mPF7AEPpK1pauX6vM/hzcBjdCpdlVQlAnCXCGMuiZF4Qo0pIv9eBIXCp5yEcXnyZxQHuzj/bAZzl/",
        );
    });

    test("empty String salt", () => {
        expect(sha512(key, "").toString()).toBe(
            "$6$$0tWw16P6sIhcjedEHzVS2YscgpDC4ut0SMIzY4wcqCnZmFzqsVrjXqQPLMPTXGvG1TUwuWYZRfkCznWHX.0u71",
        );
    });

    test("long String", () => {
        expect(sha512("a".repeat(1000), salt).toString()).toBe(
            "$6$w2323lfkhwraffla$Cx7VC.g5mtKgcHCFwv3G.AYfvPraMLYPVVDqejNGSpxe65JS8MMK7q2dEgWWNdtmgjqIjSUF0JZ0PtHzw4rah.",
        );
    });

    test("salt contains $", () => {
        expect(() => {
            sha512(key, "$" + salt);
        }).toThrowError("Salt contains '$' character");
    });
});
