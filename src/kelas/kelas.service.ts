import { Injectable } from '@nestjs/common';
import { CreateKelaDto } from './dto/create-kela.dto';
import { UpdateKelaDto } from './dto/update-kela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kelas } from './entities/kelas.entity';

@Injectable()
export class KelasService {
  constructor(@InjectRepository(Kelas) private readonly kelasRepository:Repository<Kelas>){}
  create(createKelaDto: CreateKelaDto) {
    const kelas:Kelas = new Kelas();
    kelas.name = createKelaDto.name ?? "";
    kelas.jurusan = createKelaDto.jurusan ?? "";
    kelas.angkatan = createKelaDto.angkatan ?? 0;
    return this.kelasRepository.save(kelas);
  };

  findAll():Promise<Kelas[]> {
    return this.kelasRepository.find();
  }

  findOne(id: number) {
    return this.kelasRepository.findOne({where:{id}});
  }

  update(id: number, updateKelaDto: UpdateKelaDto) {
    const kelas:Kelas = new Kelas();
    kelas.id = id;
    kelas.name = updateKelaDto.name ?? "";
    kelas.jurusan = updateKelaDto.jurusan ?? "";
    kelas.angkatan = updateKelaDto.angkatan ?? 0;
    return this.kelasRepository.save(kelas);  
  }

  remove(id: number) {
    return this.kelasRepository.delete({id});
  }
}
