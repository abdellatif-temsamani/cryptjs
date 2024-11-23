import { describe, expect, test } from "@jest/globals";

import sha256 from "../../sha256";
import { roundsValues } from "../../shaAlgorithm/rounds";

describe("SHA-512 rounds", () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";
    const key = "123456789012345678901234567890";

    test("default rounds", () => {
        expect(
            sha256(key, { salt: salt, rounds: roundsValues.default }).hash,
        ).toBe("Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC");
    });

    test("less than min rounds", () => {
        expect(
            sha256(key, {
                salt: salt,
                rounds: roundsValues.min - 200,
            }).toString(),
        ).toBe(
            "$5$w2323lfkhwraffla$BTxeB7zyZjTENONlcQ5cAKfnIG74P5S4bYMAVPc5fT1",
        );
    });

    test("min rounds", () => {
        expect(
            sha256(key, {
                salt: salt,
                rounds: roundsValues.min,
            }).toString(),
        ).toBe(
            "$5$w2323lfkhwraffla$BTxeB7zyZjTENONlcQ5cAKfnIG74P5S4bYMAVPc5fT1",
        );
    });

    test("max rounds", () => {
        expect(
            sha256(key, {
                salt: salt,
                rounds: roundsValues.max,
            }).toString(),
        ).toBe(
            "$5$w2323lfkhwraffla$JlZ2DUOvZLRUnbmghFils4I6PJ6sMpobrkxWj.EORw9",
        );
    });

    test("more max rounds", () => {
        expect(
            sha256(key, {
                salt: salt,
                rounds: roundsValues.max,
            }).toString(),
        ).toBe(
            "$5$w2323lfkhwraffla$JlZ2DUOvZLRUnbmghFils4I6PJ6sMpobrkxWj.EORw9",
        );
    });
});
