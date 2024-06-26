import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [UsuarioModule, MongooseModule.forRoot('mongodb://localhost/usuarios'), ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
