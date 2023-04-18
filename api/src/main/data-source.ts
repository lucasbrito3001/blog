import { DataSource } from "typeorm";
import { OrmOptions } from "../interfaces/ormOptions.interface";

export class DatabaseConnection {
    private dataSource: any
    private connection: any

    constructor(ormOptions: OrmOptions) {
        this.dataSource = new DataSource({
            type: "mysql",
            ...ormOptions
        })
    }

    start = async (callback: (status: boolean, error?: any) => void) => {
        this.connection = await this.dataSource.initialize()
            .then(() => callback(true))
            .catch((error: any) => callback(false, error))
    }

    stop = () => {
        this.connection.destroy()
    }
}