import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IdModule } from 'src/core/id/id.module';
import { BusinessController } from './presentation/business.controller';
// import { InMemoryBusinessRepository } from './infrastructure/in-memory-business.repository';
import { BusinessPostgresRepository } from './infrastructure/business-postgres.repository';
import { GetBusinessesUseCase } from './application/get-businesses.use-case';
import { CreateBusinessUseCase } from './application/create-business.use-case';
import { BusinessRepository } from './domain/business.repository';
import { IdGenerator } from 'src/core/id/id.generator';
import { BusinessOrmEntity } from './infrastructure/typeorm/business.orm-entity';
import { BusinessFinder } from './application/finder/business.finder';
import { UpdateBusinessUseCase } from './application/update-business.use-case';
import { GetBusinessUseCase } from './application/get-business.use-case';

@Module({
  imports: [
    IdModule,
    TypeOrmModule.forFeature([BusinessOrmEntity])
  ],
  controllers: [BusinessController],
  providers: [
    {
      provide: BusinessRepository,
      useClass: BusinessPostgresRepository
    },
    {
      provide: BusinessFinder,
      useFactory: (businessRepository: BusinessRepository) => new BusinessFinder(businessRepository),
      inject: [BusinessRepository]
    },
    {       
      provide: GetBusinessUseCase,
      useFactory: (businessFinder: BusinessFinder) => new GetBusinessUseCase(businessFinder),
      inject: [BusinessFinder]
    },
    {
      provide: GetBusinessesUseCase,
      useFactory: (businessRepository: BusinessRepository) => new GetBusinessesUseCase(businessRepository),
      inject: [BusinessRepository]
    }
    ,
    {
      provide: CreateBusinessUseCase,
      useFactory: (businessRepository: BusinessRepository, idGenerator: IdGenerator) => new CreateBusinessUseCase(businessRepository, idGenerator),
      inject: [BusinessRepository, IdGenerator]
    },
    {
      provide: UpdateBusinessUseCase,
      useFactory: (businessFinder: BusinessFinder, businessRepository: BusinessRepository) => new UpdateBusinessUseCase(businessFinder, businessRepository),
      inject: [BusinessFinder, BusinessRepository]
    }

  ],
})
export class BusinessModule {}
