import { Injectable } from '@nestjs/common';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { UpdateDosenDto } from './dto/update-dosen.dto';
import { Dosen } from './entities/dosen.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DosenService {
  constructor(@InjectRepository(Dosen) private readonly dosenRepository:Repository<Dosen>){}
  create(createDosenDto: CreateDosenDto):Promise<Dosen> {
    const dosen:Dosen = new Dosen();
    dosen.name = createDosenDto.name ?? "";
    dosen.alamat = createDosenDto.alamat ?? "";
    dosen.password = createDosenDto.password ?? "";
    dosen.age = createDosenDto.age ?? 0;
    return this.dosenRepository.save(dosen);
  }

  findAll():Promise<Dosen[]> {
    return this.dosenRepository.find();
  }

  findOne(id: number) : Promise <Dosen | null> {
    return this.dosenRepository.findOne({
      where : {id}
    })
  };

  update(id: number, updateDosenDto: UpdateDosenDto):Promise<Dosen> {
    const dosen : Dosen = new Dosen();
    dosen.id = id;
    dosen.name = updateDosenDto.name ?? "";
    dosen.alamat = updateDosenDto.alamat ?? "";
    dosen.password = updateDosenDto.password ?? "";
    dosen.age = updateDosenDto.age ?? 0;
    return this.dosenRepository.save(dosen);
  }

  remove(id: number) : Promise<{affected?:number | null} > {
    return this.dosenRepository.delete({id});
  }
}
