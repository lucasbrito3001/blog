import dotenv from 'dotenv'
import { ApplicationServer } from "./src/main/app"
import { DatabaseConnection } from "./src/main/data-source"

dotenv.config()

// function gracefulShutdown(signal: string) {
//     console.log(`\n[APP] ${signal} sinal received\n`)
//     console.log('[APP] Closing server...')

//     appServer.stop((err: any) => {
//         if(err) {
//             console.log('[APP] Failed to stop the server')
//             process.exit(1)
//         }

//         console.log('[APP] The server stopped')
//         process.exit(0)
//     })
// }

// ['SIGTERM', 'SIGINT', 'SIGQUIT'].forEach(signal => 
//     process.on(signal, gracefulShutdown)
// )

const DBCONN_CONFIGS = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
}

class WebAPI {
    private appServer
    private databaseConnection

    constructor() {
        this.appServer = new ApplicationServer()
        this.databaseConnection = new DatabaseConnection(DBCONN_CONFIGS)
    }

    start = (): void => {
        // if(Object.values(DBCONN_CONFIGS).some(value => !value)) {
        //     console.log('\n[ERROR] Error with the database configuration, check the env variables.')
        //     return
        // }

        const PORT = process.env.PORT || '5003'

        console.log(`\n[APP] Starting server...\n`)

        this.databaseConnection.start((dbStatus, error) => {
            if(!dbStatus) {
                console.log('[DB] Error to initialize the database connection')
                console.log(error)
                return
            }

            this.appServer.start(PORT, async (serverStatus) => {

            })
        })
    }

    stop = (signal: string): void => {
        console.log(`\n[APP] ${signal} sinal received\n`)
        console.log('[APP] Shutdowning gracefully...')

        this.appServer.stop((err: any) => {
            if(err) {
                console.log('[APP] Failed to stop the server')
                process.exit(1)
            }

            console.log('[APP] The server stopped')
            process.exit(0)
        })
    }
}

const webapi = new WebAPI()
webapi.start()

const stopAppNodeEvents = ['SIGTERM', 'SIGINT', 'SIGQUIT']

stopAppNodeEvents.forEach(signal => 
    process.on(signal, () => webapi.stop(signal))
)