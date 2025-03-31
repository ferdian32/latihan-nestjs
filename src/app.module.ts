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
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : 'localhost',
      port: 5432,
      username : 'postgres',
      password : 'postgres',
      database :'todolist',
      entities:  [User,Dosen],
      logging: true,
      synchronize : true
    }),
    FilekitaModule,
    UserModule,
    DosenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
