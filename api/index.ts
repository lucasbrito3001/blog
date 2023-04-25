import dotenv from 'dotenv'
import { ApplicationServer } from "./src/main/app"
import { DatabaseConnection } from "./src/main/database/data-source"

dotenv.config({ path: __dirname + '/.env' })

const DBCONN_CONFIGS = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV === 'development',
}

const stopAppNodeEvents = ['SIGTERM', 'SIGINT', 'SIGQUIT']
stopAppNodeEvents.forEach(signal => process.on(signal, () => webapi.stop(signal)))

class WebAPI {
    private appServer
    private databaseConnection

    constructor() {
        this.appServer = new ApplicationServer()
        this.databaseConnection = new DatabaseConnection(DBCONN_CONFIGS)
    }

    start = (): void => {
        console.log('\n=======================================================')
        console.log('> [APP] Welcome to the Blog Post - API')
        console.log('> [APP] Starting the infrastructure of application...')
        console.log('=======================================================')

        if(Object.values(DBCONN_CONFIGS).some(value => !value)) {
            console.log('\n> [ERROR] Error with the database configuration, check the env variables.')
            return
        }

        const PORT = process.env.PORT || '5003'

        console.log(`\n> [DB] Connecting...`)

        this.databaseConnection.start(async (dbStatus, dataSource, error) => {
            if(!dbStatus || !dataSource) {
                console.log('> [DB] Error to initialize the database connection\n')
                console.log(error)
                console.log('\n> [APP] The app bootstrap has stopped.')
                return
            }

            console.log('> [DB] Connected successfully!')

            console.log(`\n> [SERVER] Starting...`)

            this.appServer.start(PORT, dataSource, async (serverStatus) => {
                if(!serverStatus) {
                    console.log('> [SERVER] Error to start the server...')
                    this.killProcess()
                    return
                }

                console.log('> [SERVER] Started succesfully!\n')
            })

        })
    }

    stop = (signal: string): void => {
        console.log(`\n> [APP] ${signal} sinal received`)
        console.log('> [APP] Shutdowning gracefully')
        
        console.log('\n> [SERVER] Stopping...')
        console.log('> [SERVER] Closed to new and awaiting for pending requests...')

        this.appServer.stop(async (err: any) => {
            if(err) {
                console.log('> [SERVER] Failed to stop the server')
                process.exit(1)
            }
            
            console.log('> [SERVER] Stopped successfully!')

            console.log('> [DB] Stopping connection pools...')
            await this.databaseConnection.stop()
            console.log('> [DB] Stopped successfully!')

            process.exit(0)
        })
    }

    killProcess = () => process.kill(process.pid)
}

const webapi = new WebAPI()
webapi.start()