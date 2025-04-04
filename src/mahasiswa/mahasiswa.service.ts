import { Injectable } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { createHmac } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MahasiswaService {
  constructor(@InjectRepository(Mahasiswa) private readonly mahasiswaRepository:Repository<Mahasiswa>){}
  create(createMahasiswaDto: CreateMahasiswaDto): Promise<Mahasiswa> {
    const mahasiswa:Mahasiswa = new Mahasiswa();
    mahasiswa.nim = createMahasiswaDto.nim ?? "";
    mahasiswa.nama = createMahasiswaDto.nama ?? "";
    mahasiswa.alamat = createMahasiswaDto.alamat ?? "";
    mahasiswa.telepon = createMahasiswaDto.telepon ?? "";
    mahasiswa.usia = createMahasiswaDto.usia ?? 0;
    return this.mahasiswaRepository.save(mahasiswa);
  }

  findAll() : Promise<Mahasiswa[]>{
    return this.mahasiswaRepository.find();
  }

  findOne(id: number) : Promise<Mahasiswa | null>{
    return this.mahasiswaRepository.findOne({where:{id}});
  }

  update(id: number, updateMahasiswaDto: UpdateMahasiswaDto):Promise<Mahasiswa | null> {
    const mahasiswa:Mahasiswa = new Mahasiswa();
    mahasiswa.id = id;
    mahasiswa.nim = updateMahasiswaDto.nim ?? "";   
    mahasiswa.nama = updateMahasiswaDto.nama ?? "";
    mahasiswa.alamat = updateMahasiswaDto.alamat ?? "";
    mahasiswa.telepon = updateMahasiswaDto.telepon ?? "";
    mahasiswa.usia = updateMahasiswaDto.usia ?? 0;
    return this.mahasiswaRepository.save(mahasiswa)
  }

  remove(id: number) : Promise<{affected?:number | null}> {
    return this.mahasiswaRepository.delete({id});
  }
}
