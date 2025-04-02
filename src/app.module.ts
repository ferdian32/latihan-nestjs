import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { UserModule } from './user/user.module';
import 'dotenv/config';
import { User } from './user/entities/user.entity';
import { DosenModule } from './dosen/dosen.module';
import { Dosen } from './dosen/entities/dosen.entity';
import { KelasModule } from './kelas/kelas.module';
import { Kelas } from './kelas/entities/kelas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : process.env.DB_TYPE as 'postgres',
      host : 'localhost',
      port: 5432,
      username : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database :process.env.DATABASE,
      entities:  [User,Dosen,Kelas],
      logging: true,
      synchronize : true
    }),
    FilekitaModule,
    UserModule,
    DosenModule,
    KelasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
