type Json =  object | JsonArray | string | number | boolean | null

type JsonArray = Json[]

export const DataResponse = (data: JsonArray) => {data}

export const ErrorResponse = (error: string | null) => {error}