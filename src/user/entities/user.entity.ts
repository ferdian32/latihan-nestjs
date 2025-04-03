import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// file ini digunakan untuk membuat entity struktur table
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

    @Column({type :'varchar',length:120,nullable:false,default:"user.png"})
    image:string;
}
