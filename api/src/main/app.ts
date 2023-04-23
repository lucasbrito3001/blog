import os from 'os'
import express, { Router } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { PostRouter } from "./post.routes"
import { Server } from 'http'
import { handleResponse } from '../middlewares/handleResponse'
import "reflect-metadata"
import { DataSource } from 'typeorm'
import { Post } from './database/entity/post.entity'

export class ApplicationServer {
    private app = express()
    private server: Server | undefined = undefined

    constructor() {}
    
    start(PORT: string, dataSource: DataSource, callback: (result: boolean) => void): void {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(morgan(process.env.MORGAN_CONFIG || 'dev'))

        this.app.get('/', (req, res) => {
            res.status(200).send('Hello world!')
        })

        this.app.get('/test-graceful-shutdown', (req, res) => {
            setTimeout(() => res.send('Hello world'), 5000)
        })

        this.app.use('/post', new PostRouter(dataSource, Post).getRoutes())

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

            callback(true)
        })
    }

    stop(callback: (err?: any) => Promise<never>): void {
        if(this.server instanceof Server) this.server.close(callback)
        else console.log(`[APP] The server is not open to be closed`)
    }
}