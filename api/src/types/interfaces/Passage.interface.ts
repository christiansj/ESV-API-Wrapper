export interface IEsvApiResponse {
    query: string,
    canonical: string,
    parsed: Array<Array<number>>,
    passages: Array<string>
}

export interface IPassageData {
    query: string,
    passage: string
}