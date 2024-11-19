/**
 * Represents the supported SHA algorithm types.
 *
 * - `"5"` for SHA-256.
 * - `"6"` for SHA-512.
 */
export type ShaType = "5" | "6";

/**
 * Represents a salted hash string.
 *
 * The format is: `$<ShaType>$<string>$<string>`.
 * - `<ShaType>`: The SHA algorithm type (either "5" for SHA-256 or "6" for SHA-512).
 * - The first `<string>`: The original hash value.
 * - The second `<string>`: The salt value used for hashing.
 *
 * Example format: `$5$abc123$xyz456`
 *
 */
export type SaltedHash = `$${ShaType}$${string}$${string}`;
