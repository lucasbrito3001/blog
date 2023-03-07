import client from "../httpClient"

export async function sendMail({ subject, text }) {
    try {
        const result = await client.post('/email', { subject, text });

        return result.data
    } catch (error) {
        return { status: false, error }
    }
}