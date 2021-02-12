const path = require('path');
const PostgressConnectionStringParser = require('pg-connection-string');

const useConnectionsOptions = !!process.env.DATABASE_URL;
const connectionOptions = useConnectionsOptions
    ? PostgressConnectionStringParser.parse(process.env.DATABASE_URL)
    : null;

module.exports = {
    type: 'postgres',
    ssl: !!((process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production')),
    host: useConnectionsOptions ? connectionOptions.host : '127.0.0.1',
    port: useConnectionsOptions ? connectionOptions.port : 5455,
    username: useConnectionsOptions ? connectionOptions.user : 'root',
    password: useConnectionsOptions ? connectionOptions.password : 'root',
    database: useConnectionsOptions ? connectionOptions.database : 'groceries',
    migrationsTableName: 'orm_migrations',
    entities: [
        path.join(__dirname, '../../src/**/*.entity{.ts,.js}'),
    ],
    migrations: [
        path.join(__dirname, '../../migrations/*{.ts,.js}'),
    ],
    cli: {
        migrationsDir: './migrations',
    },
};
