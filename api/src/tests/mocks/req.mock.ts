import { Request } from "express";

export function mockRequest(content: any) {
    return content as any as Request
}