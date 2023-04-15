import { ApplicationServer } from "./src/main/app"

const appServer = new ApplicationServer()

const PORT = process.env.PORT || '5003'

console.log(`\n[APP] Starting server...\n`)

appServer.start(PORT)

function gracefulShutdown(signal: string) {
    console.log(`\n[APP] ${signal} sinal received\n`)
    console.log('[APP] Closing server...')

    appServer.stop((err: any) => {
        if(err) {
            console.log('[APP] Failed to stop the server')
            process.exit(1)
        }

        console.log('[APP] The server stopped')
        process.exit(0)
    })
}

['SIGTERM', 'SIGINT', 'SIGQUIT'].forEach(signal => 
    process.on(signal, gracefulShutdown)
)