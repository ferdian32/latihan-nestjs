import { Transform } from "class-transformer";
import { isNotEmpty, IsNotEmpty, isString, MinLength } from "class-validator";

export class CreateDosenDto {
  @IsNotEmpty()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @Transform(({ value }) => value.trim())
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  alamat: string;
  
  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  password: string;
}
