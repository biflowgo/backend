import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BusinessModule } from './business/business.module';
import { IdModule } from './core/id/id.module';

@Module({
  imports: [CategoryModule, ProductModule, BusinessModule, IdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
