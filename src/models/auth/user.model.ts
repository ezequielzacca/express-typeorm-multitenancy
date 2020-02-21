import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar")
    username: string = "";

    @Column("varchar")
    password: string = "";

    @Column("varchar")
    database: string = "";
}
