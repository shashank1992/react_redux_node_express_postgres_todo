import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
    type: "postgres",
    host : 'localhost',
    port: 5432,
    username: "postgres",
    password: "todo_postgres_pass",
    database:"todo_app_db",
    entities:["dist/entities/*.js"],
    migrations:["dist/migrations/*.js"],
    logging: true,
    synchronize: false
})