export type ResultCallback = (error: Error | null, result?: any) => void;

export class InvalidRequestError extends Error{
    errorCode: number;

    constructor(message: string, errorCode: number) {
        super(message); 
        this.errorCode = errorCode
        this.name = 'InvalidRequestError'; 
        Object.setPrototypeOf(this, InvalidRequestError.prototype); 
    }
}