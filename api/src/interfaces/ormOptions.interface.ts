import { DatabaseType } from 'typeorm'

export type OrmOptions = {
    host: string | undefined
    port: number | undefined
    username: string | undefined
    password: string | undefined
    database: string | undefined
    synchronize: boolean | undefined
    logging: boolean | undefined
}

// type: "postgres",
// host: "localhost",
// port: 5432,
// username: "test",
// password: "test",
// database: "test",
// synchronize: true,
// logging: true,
// entities: [],
// subscribers: [],
// migrations: [],