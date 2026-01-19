export type ShaType =
    | ({ name: "sha256" } & { code: "5" })
    | ({ name: "sha512" } & { code: "6" });

/**
 * @description Represents the supported SHA algorithm types.
 *
 * - `"5"` for SHA-256.
 * - `"6"` for SHA-512.
 */
type Type = "5" | "6";

/**
 * @description Represents a salted hash string.
 *
 * The format is: `$<ShaType>$<string>$<string>`.
 * - `<ShaType>`: The SHA algorithm type (either "5" for SHA-256 or "6" for SHA-512).
 * - The first `<string>`: The original hash value.
 * - The second `<string>`: The salt value used for hashing.
 *
 * Example format: `$5$abc123$xyz456`
 *
 */
export type SaltedHash = `$${Type}$${string}$${string}`;

/**
 * Configuration object for SHA hashing options.
 * Used in sha256() and sha512() functions.
 */
export interface ShaOptions {
    salt?: string;
    rounds?: number;
}

/**
 * Result object returned by the core SHA algorithm.
 */
export interface ShaAlgorithmResult {
    hashSeq: number[];
    salt: string;
}

/**
 * Configuration for rounds values in SHA hashing.
 */
export interface RoundsConfig {
    min: number;
    max: number;
    default: number;
}

/**
 * Block size for SHA algorithms (32 for SHA-256, 64 for SHA-512).
 */
export type ShaBlockSize = 32 | 64;

/**
 * Interface for the StringBuffer class.
 */
export interface StringBufferInterface {
    append(str: string): void;
    toString(): string;
}

/**
 * Type for salt length constants (currently 16).
 */
export type SaltLength = 16;

/**
 * Type alias for UTF-16 byte arrays.
 */
export type Utf16Bytes = number[];

/**
 * Type for hash digest arrays.
 */
export type HashDigest = number[];

/**
 * Function signature for generating a random salt.
 */
export type GenSaltFunction = (len?: number) => string;

/**
 * Function signature for validating salt.
 */
export type ValidateSaltFunction = (salt?: string | undefined) => string;

/**
 * Function signature for validating rounds.
 */
export type ValidateRoundsFunction = (rounds?: number | undefined) => number;

/**
 * Function signature for encoding 3 bytes to base64.
 */
export type Encode3BytesFunction = (
    result: StringBufferInterface,
    c: number,
    b?: number,
    a?: number,
) => void;

/**
 * Function signature for converting string to UTF-16 bytes.
 */
export type ToUtf16BytesFunction = (str: string) => Utf16Bytes;

/**
 * Function signature for hashing a buffer.
 */
export type HashBufferFunction = (
    data: Buffer,
    algorithm: ShaType,
) => HashDigest;

/**
 * Function signature for the core SHA algorithm.
 */
export type ShaAlgorithmFunction = (
    algorithm: ShaType,
    data: string,
    blockSize: ShaBlockSize,
    providedRounds?: number,
    providedSalt?: string,
) => ShaAlgorithmResult;

/**
 * Function signature for SHA-256 hashing.
 */
export type Sha256Function = (data: string, options?: ShaOptions) => Sha;

/**
 * Function signature for SHA-512 hashing.
 */
export type Sha512Function = (data: string, options?: ShaOptions) => Sha;

/**
 * Mapping of SHA types to their corresponding numeric identifiers.
 */
export declare const shaType: {
    sha256: ShaType;
    sha512: ShaType;
};

/**
 * Class representing a SHA object with its type, hash, salt, and salted hash.
 */
export declare class Sha {
    type: ShaType;
    hash: string;
    salt: string;
    constructor(algorithm: ShaType, salt: string, hash: string);
    toString(): SaltedHash;
}

/**
 * SHA-256 hashing function.
 */
export declare function sha256(data: string, options?: ShaOptions): Sha;

/**
 * SHA-512 hashing function.
 */
export declare function sha512(data: string, options?: ShaOptions): Sha;
