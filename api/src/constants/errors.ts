export const ERRORS_DICTIONARY: Record<string, { statusCode: number, errors: string[] }> = {
    "MISSING_INFORMATIONS": { statusCode: 400, errors: ['There was an error creating, information is missing'] },
    "DEFAULT": { statusCode: 400, errors: ['There was an error creating, information is missing'] },
}