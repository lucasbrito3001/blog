import os from 'os'
import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { getRoutes as getPostRoutes } from "./post.routes"
import { Server } from 'http'
import { handleResponse } from '../middlewares/handleErrorResponse'

dotenv.config()

export class ApplicationServer {
    private app = express()
    private server: Server | undefined = undefined

    constructor() {}
    
    start(PORT: string): Server {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(morgan(process.env.MORGAN_CONFIG || 'dev'))

        this.app.get('/', (req, res) => { 
            setTimeout(() => res.send('Hello world'), 10000)
        })

        this.app.use('/post', getPostRoutes())

        this.app.use(handleResponse)

        this.server = this.app.listen(PORT, () => {
            console.log('=======================================================')
            console.log(`The app is running on port: ${PORT}`)
            console.log('-------------------------------------------------------')
            console.log(`- cpu: ${os.cpus()[0].model}`)
            console.log(`- threads: ${os.cpus().length}`)
            console.log(`- arch: ${process.arch}`)
            console.log(`- os: ${process.platform}`)
            console.log('=======================================================')
        })

        return this.server
    }

    stop(serverStopped: (err?: any) => never): void {
        if(this.server instanceof Server) this.server.close(serverStopped)
        else console.log(`[APP] The server is not open to be closed`)
    }
}