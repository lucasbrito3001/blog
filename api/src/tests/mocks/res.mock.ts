import { Response } from "express";

export function mockResponse() {
    return {
        status(code: number) {
            return { 
                json(content: any) {
                    return { status: code, data: content }
                }
            }
        }
    } as any as Response
}