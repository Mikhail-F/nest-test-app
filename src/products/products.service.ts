import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './models/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { log } from 'console';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    var product  =  await this.productModel.findOne({_id: id});
    log(product);
    return product;
  }

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }
}
