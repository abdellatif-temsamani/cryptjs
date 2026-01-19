import { describe, expect, test } from "@jest/globals";

import { sha512 } from "../../sha512.js";
import { roundsValues } from "../../shaAlgorithm/rounds.js";

describe("SHA-512 rounds", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("default rounds", () => {
        expect(sha512(key, { salt: salt, rounds: roundsValues.default }).hash).toBe(
            "NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.",
        );
    });

    test("less than min rounds", () => {
        expect(
            sha512(key, {
                salt: salt,
                rounds: roundsValues.min - 200,
            }).toString(),
        ).toBe(
            "$6$w2323lfkhwraffla$mzNVu55VjBEdOIkZK8pKx91YNDffNxycsfpT0JYk4TVI7fD1e7qa57i5H1zs/HNsVLO/d8y14WS9LZvVk1X8n1",
        );
    });

    test("min rounds", () => {
        expect(
            sha512(key, {
                salt: salt,
                rounds: roundsValues.min,
            }).toString(),
        ).toBe(
            "$6$w2323lfkhwraffla$mzNVu55VjBEdOIkZK8pKx91YNDffNxycsfpT0JYk4TVI7fD1e7qa57i5H1zs/HNsVLO/d8y14WS9LZvVk1X8n1",
        );
    });

    test("max rounds", () => {
        expect(
            sha512(key, {
                salt: salt,
                rounds: roundsValues.max,
            }).toString(),
        ).toBe(
            "$6$w2323lfkhwraffla$f5/Po3eG88StfNF914MUwpM8TRq2sdMS2fD00rp1EhxNttb1L/G7MXp1WU5495KS//Qsu0QTRo/FQk5sFz/ET.",
        );
    });

    test("more max rounds", () => {
        expect(
            sha512(key, {
                salt: salt,
                rounds: roundsValues.max,
            }).toString(),
        ).toBe(
            "$6$w2323lfkhwraffla$f5/Po3eG88StfNF914MUwpM8TRq2sdMS2fD00rp1EhxNttb1L/G7MXp1WU5495KS//Qsu0QTRo/FQk5sFz/ET.",
        );
    });
});
