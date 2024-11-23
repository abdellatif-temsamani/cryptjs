![NPMJS](https://img.shields.io/npm/v/%40abdellatif.dev%2Fcryptjs)
[![Run Tests](https://github.com/abdellatif-temsamani/cryptjs/actions/workflows/test.yml/badge.svg)](https://github.com/abdellatif-temsamani/cryptjs/actions/workflows/test.yml)

# Cryptjs

![Status: Alpha](https://img.shields.io/badge/Status-Alpha-orange)

> **Warning**: This library is **not production-ready** and is still in
> **alpha**. Use with caution and expect breaking changes.

- [Features](#features)
- [Installation](#installation)
  - [Using pnpm](#using-pnpm)
  - [Using npm](#using-npm)
  - [Using yarn](#using-yarn)
- [Usage](#usage)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
- [Supported Algorithms](#supported-algorithms)
- [Contributing](#contributing)
  - [Steps for Contributing](#steps-for-contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
  - [Key Points:](#key-points)
- [TODO](#todo)

# Cryptjs

`cryptjs` is a JavaScript/TypeScript library that brings cryptographic
functionality from Dart to the web. It is a port of Dart's cryptography
libraries, allowing you to perform various cryptographic operations such as
hashing, encryption, and decryption, all within your JavaScript/TypeScript
projects.

## Features

- **Hashing:** SHA-256, SHA-512.
- **Ported from Dart:** Brings Dart's reliable cryptography to
  JavaScript/TypeScript

## Installation

### Using pnpm

```bash
pnpm install @abdellatif.dev/cryptjs
```

### Using npm

```bash
npm install @abdellatif.dev/cryptjs
```

### Using yarn

```bash
yarn add @abdellatif.dev/cryptjs
```

## Usage

Once installed, you can import and use `cryptjs` in your JavaScript/TypeScript
code.

### JavaScript

```js
const Cryptjs = require("@abdellatif.dev/cryptjs");

/** @type {string} */
const message = "Hello, world!";
/** @type {string} */
const salt = "Salt";

/**
 * @description SHA-512
 * {salt, rounds} optional
 * @type {Cryptjs.Sha}
 */
const hash = Cryptjs.sha512(message, { salt: salt, rounds: 5000 });
console.log("SHA-512 Hash:", hash.toString());

/**
 * @description SHA-256
 * {salt, rounds} optional
 * @type {Cryptjs.Sha}
 */
const hash = Cryptjs.sha256(message, { salt: salt, rounds: 5000 });
console.log("SHA-256 Hash:", hash.toString());
```

### TypeScript

```ts
import Cryptjs from "@abdellatif.dev/cryptjs";

const message: string = "Hello, world!";
const salt: string = "Salt";

/**
 * @description SHA-512
 * {salt, rounds} optional
 */
const hash: Cryptjs.Sha = Cryptjs.sha512(message, { salt: salt, rounds: 5000 });
console.log("SHA-512 Hash:", hash.toString());

/**
 * @description SHA-256
 * {salt, rounds} optional
 */
const hash: Cryptjs.Sha = Cryptjs.sha256(message, { salt: salt, rounds: 5000 });
console.log("SHA-256 Hash:", hash.toString());
```

## Supported Algorithms

- SHA-256.
- SHA-512.

## Contributing

Contributions are welcome! If you have an idea for an improvement or find a bug,
please fork the repository and submit a pull request.

### Steps for Contributing

1. Fork the repository
2. Clone your fork locally
3. Make your changes or fix bugs
4. Ensure that tests are passing
5. Submit a pull request against the `dev` branch

## License

`cryptjs` is open source software, licensed under the MIT License. See the
[LICENSE](LICENSE) file for more information.

## Acknowledgments

This project is a port of Dart's cryptography libraries to
JavaScript/TypeScript, and it leverages established cryptographic algorithms to
ensure security and reliability.

### Key Points:

- The library name (`cryptjs`) is used throughout.
- It starts with an overview of features.
- Shows how to install and use it.
- Includes API references and code examples for common cryptographic functions.
- Encourages contributions from other developers.

You can adjust the examples, features, and details depending on the specific
functions your library supports!

## TODO

- [x] add sha256
- [x] types support
- [~] make salt optional and generate salt
- [x] add min and max rounds
- [x] tests use something like `jest`
