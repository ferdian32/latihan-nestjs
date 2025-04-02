import { Transform } from "class-transformer";
import {   IsNotEmpty, MinLength } from "class-validator";

export class CreateKelaDto {
    @IsNotEmpty({message:'Name cannot be empty'})
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    name: string;
    @IsNotEmpty({message:'Jurusan cannot be empty'})
    @MinLength(2, { message: 'Jurusan must have atleast 2 characters.' })   
    @Transform(({value})=> value.toLowerCase())
    jurusan: string;
    @IsNotEmpty({message:'angkatan cannot be empty'})
    @MinLength(2,{message:'angkatan must have atleast 2 characters.'})
    angkatan: number;
}
