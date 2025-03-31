import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:30,nullable:false})
    name:string;
    @Column({type:'varchar',length:40,nullable:false})
    email:string;
    @Column({type:'int'})
    age:number;
    @Column({type:'varchar'})
    password:string;
}
