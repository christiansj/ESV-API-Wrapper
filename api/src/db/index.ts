import mysql, { Pool } from "mysql2";
import { ResultCallback } from "../types";
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export function createPool(): Pool {
    try {
        const connection: Pool = mysql.createPool({
            connectionLimit: 10,
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });
        return connection;
    } catch (err) {
        throw err;
    }

}

export function executeQuery(query: string, parameters: any[] | null, resultCallback: ResultCallback): void {
    const pool = createPool()

    pool.query(query, parameters, (err, results)=> {
        if(err){
            console.error(err)
            resultCallback(err, null)
            return
        }
        console.log(results)
        resultCallback(null, results)
    })
}