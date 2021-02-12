import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import { join } from 'path';
import * as PostgressConnectionStringParser from 'pg-connection-string';
import { Env, PlatformNames } from 'src/env';

const connectionOptions: PostgressConnectionStringParser.ConnectionOptions | null = !isNil(Env.DATABASE_URL)
    ? PostgressConnectionStringParser.parse(Env.DATABASE_URL)
    : null;

export const withCache: TypeOrmModuleOptions = {
    type: 'postgres',
    ssl: !!((process.env.NODE_ENV === PlatformNames.STAGING || process.env.NODE_ENV === PlatformNames.PRODUCTION)),
    synchronize: false,
    logging: false,
    database: connectionOptions ? (connectionOptions.database as string) : 'groceries',
    host: connectionOptions ? (connectionOptions.host as string) : '127.0.0.1',
    port: connectionOptions ? parseInt(connectionOptions.port as string, 10) : 5455,
    username: connectionOptions ? connectionOptions.user : 'root',
    password: connectionOptions ? connectionOptions.password : 'root',
    entities: [
        join(__dirname, './**/*.entity{.ts,.js}'),
    ],
};
