import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Kelas{
    @PrimaryGeneratedColumn()
    @Unique(['id'])
    id:number;
    @Column({type:'varchar',length:20,nullable:false,default:''})
    name:string;
    @Column({type:'varchar',length:30,nullable:false,default:''})
    jurusan:string;
    @Column({type:'int',nullable:false,default:0})
    angkatan:number;
};
