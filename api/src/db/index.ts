import mysql, { Connection, Pool } from "mysql2";
import { ResultCallback } from "../types";
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export function createConnection(): Connection {
    try {
        const connection: Connection = mysql.createConnection({
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

export function executeQuery(query: string, parameters: any[] | null) {
    return new Promise((resolve, reject)=>{
        const connection = createConnection()
        connection.query(query, parameters, (err, results)=> {
            if(err){
                console.error(err)
                reject(err)
                return
            }
            console.log(results)
            resolve(results)
        })
    });
}
