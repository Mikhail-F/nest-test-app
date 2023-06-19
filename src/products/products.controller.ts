import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './models/create-product.dto';
import { ProductsService } from './products.service';
import { log } from 'console';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // @Get()
  // @Header("", "")
  // @Redirect('https://www.youtube.com/', 301)
  // redirect() {}

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.productService.getAll();
  }

  @Post()
  create(@Body() createProduct: CreateProductDto): string {
    this.productService.create(createProduct);
    return createProduct.title + ' - ' + createProduct.price;
  }

  @Post(':id')
  async find(
    // @Body() updateData: CreateProductDto,
    @Param('id') id: string,
  ): Promise<string> {
    log(id);
    return (await this.productService.getById(id)).title;
  }
}
