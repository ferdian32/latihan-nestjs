import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Dosen {
    @PrimaryGeneratedColumn()
    id : number
    @Column({type:'varchar',length:30})
    name:string;
    @Column({type : 'text'})
    alamat : string;
    @Column({type : 'varchar',length:120})
    password:  string;
    @Column({type:'int'})
    age : number;
}
