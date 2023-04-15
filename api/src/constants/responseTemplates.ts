type dataType = { status: boolean, message?: string, errors?: string[] }

type responseTemplateType = {
    httpStatusCode: number
    data: dataType
}

export const RESPONSE_TEMPLATES_DICTIONARY: Record<string, responseTemplateType> = {
    "POST_CREATED": {
        httpStatusCode: 201,
        data: { status: true, message: 'Post created successfully' }
    },
    "MISSING_INFORMATIONS": {
        httpStatusCode: 400,
        data: { status: false, errors: ['There was an error creating, information is missing'] }
    },
    "INVALID_INFORMATIONS": {
        httpStatusCode: 400,
        data: { status: false, errors: ['Error to create, invalid informations'] }
    },
    "INTERNAL_USECASE_ERROR": {
        httpStatusCode: 500,
        data: { status: false, errors: ['An internal error ocurred, contact an administrator'] }
    },
    "DEFAULT": {
        httpStatusCode: 500,
        data: { status: false, errors: ['An internal error ocurred, contact an administrator'] }
    },
}