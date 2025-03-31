import { Module } from '@nestjs/common';
import { FileKita } from './filekita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports : [
        TypeOrmModule.forFeature([FileKita])
    ]
})
export class FilekitaModule {}
