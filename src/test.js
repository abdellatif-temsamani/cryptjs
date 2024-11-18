import { assert } from "console";

import sha512 from "./index.js";
const salt = "w2323lfkhwrafflawf142sadjasjkafsalkfsajflkafjha";

const samples = [
    "Hi",
    "Twitch",
    "",
    "a",
    "hello",
    "Hello, World!",
    "1234567890",
    "Special characters: @#$%^&*()!",
    "Whitespace   test",
    "caseSensitive",
    "casesensitive",
    "null",
    'JSON-like {"key": "value"}',
    "SQL injection: DROP TABLE users;",
    "path/to/file.txt",
    "123456789012345678901234567890",
];

const hashes = [
    "yKvCpI0u0doKy6YyHM9gsr1bpfdlnFNgx8KQq8ycN8rLIES0GcA173FzX9JI5LX3oIPbeBnXvEKDbT6jVW2y61",
    "YdJWY/c6KmzA0vi7.O6TC7mTu.YF7QA9egCALbPuQKwIySJSUYGjvMZSXjl5bg8Z5pa466gMyXS/lZ.4okIgT1",
    "mxaK4Xw26mPF7AEPpK1pauX6vM/hzcBjdCpdlVQlAnCXCGMuiZF4Qo0pIv9eBIXCp5yEcXnyZxQHuzj/bAZzl/",
    "XYNuaX0a3uST3zZaHbK02n4/6xk/s/GrhTvtnLdc.G9LVYHCIsxxss6irA5EVt8QXfo3Oiy13OqTIDWWDm7qL0",
    "7lxvEetU3HG1q4DdSikxoIqbfPLzXwr2uAeBktivCQWH5L6JPWSM/gy3RZeKIZAFM/8eEsmfT0b2PPYa7g.Cs/",
    "bOPoSYnMzDhOS58w0caHvCS3PEvup82sbr7NxbTvSe6Zq6omTtzVBLU77BYBgI3wB9RHsuC6k3X1y4zYx9DxP.",
    "NO7f4olR/a4PiVesXHns1hEqDzDR/N2Q3USjLlYjPEBfGR7Gpds36CGBdMbuaiEam0nAvv/iiJ7TAzX8WUdqf/",
    "mxs8/xwUroThbyuzZnAL0RIGkGVPJVgsYm3hKnSU/fiEDjuW0EPPlBuPsaCBJGtRYAKSoHMlUvnSzTm6CBCPs/",
    "lUt.bfBH/mGKngCpkySbygt2ZOaq5QZ.HEOUEu/DOcR95fqdUbYyJI6qa1Q95jjMf3GDVCp8RD1nbAvY7idLh1",
    "CTpfk2hdpGJ4guzXkLKEniARlT1GZSnOLStVXnIu5ej79ZhrVtMj57/YwG4viWrLi10faDPqkK8tgCqMWRSkR.",
    ".KfjzgDFRc5tWpEGenghQDhU6ri20ppVe94FYkaysBERkXkxmedHmb424hZGLGbIsn93N.00VznykNXzvhqZZ/",
    "fBXQZA1BS3ESAhYPapSTWNPr9/AjAGOIC0QCMifK98uxNkjqBtOkD6F3/3pYGxAeYNf8QEpOjg3Wqef3js.O91",
    "sPtU4pM9E4aXtP.lf1X3oornNMoj5PG/r25ESR2yiV5wZ.06WcEdxd/wozqkc0KTfHXkxnFOGSFEBiFM8w68J/",
    "/D.FcBRiBx0lxs8v9Kg8GDHR038IhyfS59Z6YkInnldewYZepDSzCcD6qmdc2Ca936abEaE8wFfz070jND9U50",
    "PIGPMhdPzh1COoMbpiM4siWTcLQ.XCQQbLuLzUJOIZ3w.I2y6PidLXKGLhkCnmbSoy2jxE/VrdfUdBSTLvR/50",
    "NJ6qvLbGMBXhzoPWDicZP9ujenpX37WXo1xoHKbBNUpNRvLXAlRMrsclgBaoy9Gvegyn83RVkCDhb88ACcCn9.",
];

for (let i = 0; i < samples.length; i++) {
    console.log(sha512(samples[i], salt) === hashes[i] ? `PASSED AT ${i}` : `FAILED AT ${i}` );
}
