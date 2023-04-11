import { describe, expect, it } from "vitest"

import { sendMail } from './index'

describe("Testing mailer service", () => {
    it("should send mail successfully", async () => {
        const mailInfos = {
            subject: 'email subject',
            text: 'email text'
        }

        const client = {
            post: async () => ({ data: { status: true, message: 'Email enviado com sucesso' } })
        }

        const mail = await sendMail(mailInfos, client)

        expect(mail.status).toBe(true)
        expect(mail.message).toBe('Email enviado com sucesso')
    })

    it("should have an error sending mail", async () => {
        const client = {
            post: async () => {
                throw new Error('test error')
            }
        }

        const mail = await sendMail({}, client)

        expect(mail.status).toBe(false)
        expect(mail.error.message).toBe('test error')
    })
})