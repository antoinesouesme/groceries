import { writeFileSync } from 'fs';
import { createApp } from './main';

const SWAGGER_SPEC_FILE = './swagger.json';

export async function runSwagger(): Promise<void> {
    const { swaggerDocument } = await createApp();

    // Delete undefined paths
    const undefinedPaths = swaggerDocument.paths.undefined;
    if (undefinedPaths) {
        delete swaggerDocument.paths.undefined;
    }
    try {
        await writeFileSync(SWAGGER_SPEC_FILE, JSON.stringify(swaggerDocument, null, 4)); // spacing level = 4
    } catch (error) {
        process.emit('warning', new Error(`Impossible de générer le fichier ${SWAGGER_SPEC_FILE}`));
        process.exit(2);
    }

    process.exit(0);
}

runSwagger();
