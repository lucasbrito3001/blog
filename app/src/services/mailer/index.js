import { httpClient } from "../httpClient"

export async function sendMail({ subject, text }, client = httpClient('nodejsmailer')) {
    try {
        const result = await client.post('/email', { subject, text });

        return result.data
    } catch (error) {
        return { status: false, error }
    }
}