import pg from "pg";

// Puerto numero 5432
// Usuario: postgres 

export const pool = new pg.Pool ({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "PERN",
});

pool.on("connect", () => {
    console.log("Conectado a la base de datos");
});