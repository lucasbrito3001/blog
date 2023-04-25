import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Index({ unique: true })
    title: string
    
    @Column()
    subtitle: string

    @Column()
    creationDate: string

    @Column()
    likes: number
}