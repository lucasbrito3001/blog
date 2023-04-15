declare namespace Express {
    export interface Request {
        hash?: string
        token?: string
    }

    export interface Response {
        responseTemplateKey: string
    }
}