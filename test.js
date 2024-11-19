import { sha256, sha512 } from "./src/index.js";

const testSha512 = () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";

    const sample = "123456789012345678901234567890";

    const hash =
        "NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.";

    const expected =
        "$6$w2323lfkhwraffla$NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.";

    const res = sha512(sample, salt);

    console.log(res.hash == hash ? "SHA512 HASH PASSED" : "SHA512 HASH FAILED");
    console.log(
        res.toString() == expected
            ? "SHA512 SALTEDHASH PASSED"
            : "SSHA512 ALTEDHASH FAILED",
    );
};

const testSha256 = () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";

    const sample = "123456789012345678901234567890";

    const hash = "Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC";

    const expected =
        "$5$w2323lfkhwraffla$Hx8Lwde4N1oty4SkQKjJu.fra2P/BWX3/Wxtx3U/oOC";

    const res = sha256(sample, salt);

    console.log(res.hash == hash ? "SHA256 HASH PASSED" : "SHA256 HASH FAILED");
    console.log(
        res.toString() == expected
            ? "SHA256 SALTEDHASH PASSED"
            : "SHA256 SALTEDHASH FAILED",
    );
};

testSha512();
testSha256();
