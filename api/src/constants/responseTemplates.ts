type dataType = { status: boolean, message?: string, errors?: string[] }

type responseTemplateType = {
    httpStatusCode: number
    data: dataType
}

export const RESPONSE_TEMPLATES_DICTIONARY: Record<string, responseTemplateType> = {
    "CREATED": {
        httpStatusCode: 201,
        data: { status: true, message: 'Created successfully' }
    },
    "OK": {
        httpStatusCode: 200,
        data: { status: true, message: 'ok' }
    },
    "NOT_FOUND_BY_KEY": {
        httpStatusCode: 200,
        data: { status: false, message: 'Resource not found' }
    },
    "MISSING_INFORMATIONS": {
        httpStatusCode: 400,
        data: { status: false, errors: ['There was an error creating, information is missing'] }
    },
    "MISSING_ID": {
        httpStatusCode: 400,
        data: { status: false, errors: ['There was an error to read value, missing ID'] }
    },
    "MISSING_PAGINATION_INFORMATIONS": {
        httpStatusCode: 400,
        data: { status: false, errors: ['There was an error getting values, pagination information is missing'] }
    },
    "INVALID_INFORMATIONS": {
        httpStatusCode: 400,
        data: { status: false, errors: ['Error to create, invalid informations'] }
    },
    "ER_DUP_ENTRY": {
        httpStatusCode: 400,
        data: { status: false, errors: ['Error to persist data, duplicated values'] }
    },
    "INTERNAL_USECASE_ERROR": {
        httpStatusCode: 500,
        data: { status: false, errors: ['An internal usecase error ocurred, contact an administrator'] }
    },
    "INTERNAL_CONTROLLER_ERROR": {
        httpStatusCode: 500,
        data: { status: false, errors: ['An internal controller error ocurred, contact an administrator'] }
    },
    "REPOSITORY_FAILED": {
        httpStatusCode: 500,
        data: { status: false, errors: ['A repository error ocurred, contact an administrator'] }
    },
    "DEFAULT": {
        httpStatusCode: 500,
        data: { status: false, errors: ['An internal error ocurred, contact an administrator'] }
    },
}