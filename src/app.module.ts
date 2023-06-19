import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/modules/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      "mongodb+srv://nesttest:YlVwYSNqOITodDEV@cluster0.hpzxhiq.mongodb.net/?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
