export class Env {
    //
    // ─── DATABASE ───────────────────────────────────────────────────────────────────
    //

    static DATABASE_URL: string | null = process.env.DATABASE_URL ? process.env.DATABASE_URL : null;

    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── APPLICATION ────────────────────────────────────────────────────────────────
    //

    static PORT: number = Number(process.env.PORT) || 3000;

    // ────────────────────────────────────────────────────────────────────────────────
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── NODE ───────────────────────────────────────────────────────────────────────
    //

    static NODE_ENV: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

    // ────────────────────────────────────────────────────────────────────────────────
}

export enum PlatformNames {
    DEV = 'DEV',
    STAGING = 'STAGING',
    PRODUCTION = 'PRODUCTION',
}
