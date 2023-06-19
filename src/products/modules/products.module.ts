import { Module } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { ProductsController } from '../products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductScheme } from '../schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductScheme }]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
