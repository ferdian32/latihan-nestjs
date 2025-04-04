import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity()

export class Mahasiswa {
    @PrimaryGeneratedColumn()
    id:number;

    @Unique(['nim'])
    @Column({type:'varchar',length:8,nullable:false,default:''})
    @IsNotEmpty({message:'NIM Cannot be empty'})
    nim : string;

    @Column({type:'varchar',length:30,nullable:false,default:''})
    @IsNotEmpty({message:'Name Cannot be empty'})
    
    nama:string;

    @Column({type:'text',nullable:false,default:''})
    alamat : string;

    @Column({type:'varchar',length:12,nullable:false,default:''})
    telepon:string;

    @Column({type:'int',nullable:false,default:0})
    usia: number;
}
