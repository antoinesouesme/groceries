import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';
import { AppModule } from './app.module';
import { Env, PlatformNames } from './env';

// Global crud options
// https://github.com/nestjsx/crud/wiki/Controllers#global-options
CrudConfigService.load({
    params: {
        id: {
            field: 'id',
            type: 'string',
            primary: true,
        },
    },
});

export const createApp = async (): Promise<{ app: INestApplication; swaggerDocument: OpenAPIObject; }> => {
    const app = await NestFactory.create(AppModule);

    //
    // ─── SWAGGER ────────────────────────────────────────────────────────────────────
    //

    // Swagger configuration
    const options = new DocumentBuilder()
        .setTitle('Groceries')
        .setDescription('')
        .setVersion('0.1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
            'bearer',
        )
        .build();

    // Create the document
    const swaggerDocument = SwaggerModule.createDocument(app, options);

    if (Env.NODE_ENV === PlatformNames.DEV) {
        SwaggerModule.setup('docs', app, swaggerDocument);
    }

    // ────────────────────────────────────────────────────────────────────────────────

    return {
        app,
        swaggerDocument,
    };
};

//
// ─── BOOTSTRAP ──────────────────────────────────────────────────────────────────
//

async function bootstrap(): Promise<void> {
    const { app } = await createApp();
    await app.listen(Env.PORT);
}

bootstrap();

// ────────────────────────────────────────────────────────────────────────────────
