import { DataSource } from "typeorm";
import { OrmOptions } from "../../interfaces/ormOptions.interface";
import { Post } from "./entity/post.entity";

export class DatabaseConnection {
    private dataSource: any
    private connection: any

    constructor(ormOptions: OrmOptions) {
        this.dataSource = new DataSource({
            type: "mysql",
            ...ormOptions,
            entities: [Post]
        })
    }

    start = async (callback: (status: boolean, dataSource?: DataSource | null, error?: any) => void) => {
        try {
            this.connection = await this.dataSource.initialize()
            callback(true, this.dataSource)
        } catch (error) {
            callback(false, null, error)
        }
    }

    stop = async () => {
        if(this.connection.isInitialized) await this.connection.destroy()
    }
}