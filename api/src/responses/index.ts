type Json =  object | JsonArray | string | number | boolean | null

type JsonArray = Json[]

export const DataResponse = (data: JsonArray) => {return {data}}

export const ErrorResponse = (error: string | null) => {return {error}}