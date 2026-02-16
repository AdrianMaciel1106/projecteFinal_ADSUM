import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuari } from '../entities/usuari.entity';
import { Dispositiu } from '../entities/dispositiu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuari, Dispositiu])],
  controllers: [],
  providers: [],
})
export class UsersModule {}
