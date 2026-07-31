/* tslint:disable */
/* eslint-disable */

/**
 * An HPKE ciphertext, holding the encapsulated secret and the encrypted bytes.
 */
export class Ciphertext {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * The encrypted bytes.
     */
    readonly ct: Uint8Array;
    /**
     * The encapsulated secret.
     */
    readonly enc: Uint8Array;
}

/**
 * An HPKE ciphersuite configuration.
 *
 * The values are the RFC 9180 code points for the mode, KEM, KDF, and AEAD.
 */
export class HpkeConfig {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Create a new HPKE configuration from RFC 9180 code points.
     *
     * * `mode` — e.g. `0x00` for Base.
     * * `kem` — e.g. `0x0020` for DHKEM(X25519, HKDF-SHA256).
     * * `kdf` — e.g. `0x0001` for HKDF-SHA256.
     * * `aead` — e.g. `0x0003` for ChaCha20Poly1305.
     *
     * Panics if any code point is unknown.
     */
    constructor(mode: number, kem: number, kdf: number, aead: number);
}

/**
 * An HPKE key pair, holding the raw private and public key bytes.
 */
export class KeyPair {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * The raw public key bytes.
     */
    readonly pk: Uint8Array;
    /**
     * The raw private key bytes.
     */
    readonly sk: Uint8Array;
}

/**
 * Generate an HPKE key pair for the given ciphersuite.
 */
export function hpke_key_gen(config: HpkeConfig): KeyPair;

/**
 * Single-shot HPKE open (Base mode).
 *
 * Decrypts `ct` (with encapsulated secret `enc`) using the receiver private
 * key `sk_r`, returning the plaintext.
 */
export function hpke_open(config: HpkeConfig, enc: Uint8Array, sk_r: Uint8Array, info: Uint8Array, aad: Uint8Array, ct: Uint8Array): Uint8Array;

/**
 * Single-shot HPKE seal (Base mode).
 *
 * Encrypts `pt` to the receiver public key `pk_r`, returning the encapsulated
 * secret and the ciphertext.
 */
export function hpke_seal(config: HpkeConfig, pk_r: Uint8Array, info: Uint8Array, aad: Uint8Array, pt: Uint8Array): Ciphertext;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_ciphertext_free: (a: number, b: number) => void;
    readonly __wbg_hpkeconfig_free: (a: number, b: number) => void;
    readonly ciphertext_ct: (a: number, b: number) => void;
    readonly ciphertext_enc: (a: number, b: number) => void;
    readonly hpke_key_gen: (a: number) => number;
    readonly hpke_open: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => void;
    readonly hpke_seal: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
    readonly hpkeconfig_new: (a: number, b: number, c: number, d: number) => number;
    readonly keypair_pk: (a: number, b: number) => void;
    readonly keypair_sk: (a: number, b: number) => void;
    readonly __wbg_keypair_free: (a: number, b: number) => void;
    readonly __wbindgen_export: (a: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export3: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
