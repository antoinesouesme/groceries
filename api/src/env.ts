export class Env {
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
}

export enum PlatformNames {
    DEV = 'DEV',
    STAGING = 'STAGING',
    PRODUCTION = 'PRODUCTION',
}
