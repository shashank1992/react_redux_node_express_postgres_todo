import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
    type: "postgres",
    host : process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database:"todo_app_db",
    entities:["dist/entities/*.js"],
    migrations:["dist/migrations/*.js"],
    logging: true,
    synchronize: true,
})