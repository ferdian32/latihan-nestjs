import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}
   create(createUserDto: CreateUserDto, file: Express.Multer.File):Promise<User> {
    const user:User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.age = createUserDto.age;
    user.password = createUserDto.password;
    user.image = file ? file.filename :  '';
    return this.userRepository.save(user);
  };

  findAll(): Promise<User []> {
    return this.userRepository.find();
  }

  findOne(id: number) : Promise <User | null> {
    return this.userRepository.findOne({
      where : {id}
    })
  };

  update(id: number, updateUserDto: UpdateUserDto) : Promise<User> {
    const user:User = new User();
    user.name = updateUserDto.name ?? "";
    user.email = updateUserDto.email ?? "";
    user.age = updateUserDto.age ?? 0;
    user.password = updateUserDto.password ?? "";
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) :Promise <{affected?:number | null}>{
    return this.userRepository.delete({id});
  }
  hello() {
    return "hello";
  }
}
