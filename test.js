import { sha512 } from "./src/index.js";

const testSha512 = () => {
    const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";

    const sample = "123456789012345678901234567890";

    const hash =
        "NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.";

    const expected =
        "$6$w2323lfkhwraffla$NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.";

    const res = sha512(sample, salt);

    console.log(res.hash == hash ? "HASH PASSED" : "HASH FAILED");
    console.log(
        res.toString() == expected ? "SALTEDHASH PASSED" : "SALTEDHASH FAILED",
    );
};

testSha512();
