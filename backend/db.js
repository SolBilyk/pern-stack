import pg from "pg";
import{PG_PORT,PG_HOST,PG_USER,PG_PASSWORD,PG_DATABASE} from "./config.js"

// Puerto numero 5432
// Usuario: postgres 

export const pool = new pg.Pool({
    port: PG_PORT,
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
});

pool.on("connect", () => {
    console.log("Conectado a la base de datos");
});