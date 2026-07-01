import mysql, { Connection } from "mysql2";
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

let globalConnection: Connection | undefined = undefined;

export function connect(): Connection {
    try {
        if(globalConnection == undefined){
            globalConnection = mysql.createConnection({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_NAME
                
            });
        }
        
        return globalConnection;
    } catch (err) {
        throw err;
    }

}

export async function executeQuery(query: string, parameters: any[] | null): Promise<unknown> {
    const connection = connect()
    const [results, fields]: [Array<any>, Array<any>] = await connection.promise().query(query, parameters)
    return results;
}
