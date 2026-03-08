import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BusinessModule } from './business/business.module';
import { IdModule } from './core/id/id.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Automatically load entities from the project
      synchronize: true,// Note: Set synchronize to false in production
    }),
    CategoryModule,
    ProductModule, 
    BusinessModule, 
    IdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
