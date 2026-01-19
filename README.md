[![NPMJS](https://img.shields.io/npm/v/%40abdellatif.dev%2Fcryptjs)](https://www.npmjs.com/package/@abdellatif.dev/cryptjs?activeTab=readme)
[![Run Tests](https://github.com/abdellatif-temsamani/cryptjs/actions/workflows/test.yml/badge.svg)](https://github.com/abdellatif-temsamani/cryptjs/actions/workflows/test.yml)
![Status: Alpha](https://img.shields.io/badge/Status-Alpha-orange)

> **Personal Statement**
>
> I stand in solidarity with the Palestinian people and support their
> fundamental human rights. I oppose ongoing violence, occupation, and human
> rights violations, and I call for justice, dignity, and freedom for all.

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
import { sha256, sha512 } from "@abdellatif.dev/cryptjs";

const message = "Hello, world!";
const salt = "Salt";

// Simple usage
const hash1 = sha256(message);
console.log("SHA-256 Hash:", hash1.toString());

// Usage with salt and rounds
const hash2 = sha512(message, { salt: salt, rounds: 5000 });
console.log("SHA-512 Hash:", hash2.toString());

// you can also get the hash, and salt values
console.log("SHA-512 Hash:", hash2.hash);
console.log("SHA-512 salt:", hash2.salt);
```

### TypeScript

```ts
import { Sha, sha256, sha512 } from "@abdellatif.dev/cryptjs";

const message: string = "Hello, world!";
const salt: string = "Salt";

// Simple usage
const hash1: Sha = sha256(message);
console.log("SHA-256 Hash:", hash1.toString());

// Usage with salt and rounds
const hash2: Sha = sha512(message, { salt: salt, rounds: 5000 });
console.log("SHA-512 Hash:", hash2.toString());

// you can also get the hash, and salt values
console.log("SHA-512 Hash:", hash2.hash);
console.log("SHA-512 salt:", hash2.salt);
```

## Contributing

For contributing, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

`cryptjs` is open source software, licensed under the MIT License. See the
[LICENSE](LICENSE) file for more information.
