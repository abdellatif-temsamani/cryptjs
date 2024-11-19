![Status: Alpha](https://img.shields.io/badge/Status-Alpha-orange)

> **Warning**: This library is **not production-ready** and is still in
> **alpha**. Use with caution and expect breaking changes.

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

To install `cryptjs` for your project, you can use either npm or yarn.

### Using pnpm

```bash
pnpm install cryptjs
```

### Using npm

```bash
npm install cryptjs
```

### Using yarn

```bash
yarn add cryptjs
```

## Usage

Once installed, you can import and use `cryptjs` in your JavaScript/TypeScript
code.

### Example: Hashing with SHA-512

```javascript
import { sha512 } from "cryptjs";

const message = "Hello, world!";
const hash = sha512(message);
console.log("SHA-512 Hash:", hash);
```

<!-- ### Example: Generating Random Values

```javascript
import { generateRandomBytes } from "cryptjs";

const randomBytes = generateRandomBytes(16); // Generate 16 random bytes
console.log("Random Bytes:", randomBytes);
``` -->

## API Reference

### Hashing Functions

<!-- - **sha256(data: string | Uint8Array): string** - Returns the SHA-256 hash of -->
<!--   the input data. -->

- **sha512(data: string | Uint8Array): string** - Returns the SHA-512 hash of
  the input data.

### Random Number Generation

- **generateRandomBytes(length: number) (NOT-IMPLEMENTED YET): Uint8Array** -
  Generates cryptographically secure random bytes of the specified length.

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
4. Ensure that tests are passing (if applicable)
5. Submit a pull request

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

- [ ] make salt optional and generate salt
- [ ] secure random and not secure random
- [ ] add min and max rounds

```ts
const minRounds = 1000;
const maxRounds = 999999999;
const defaultRounds = 5000;
```

- [ ] tests use something like `jest`
- [ ] add sha256
- [ ] return object in following form:

```ts
type Sha256 = "5";
type Sha512 = "6";
type ShaType = Sha256 | Sha512;

type SaltedHash = `${ShaType}$${string}$${string}`;

type Sha = {
  hash: string;
  salt: string;
  saltedHash: SaltedHash;
};
```
