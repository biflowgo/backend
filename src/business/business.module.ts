import { Module } from '@nestjs/common';

import { IdModule } from 'src/core/id/id.module';
import { BusinessController } from './presentation/business.controller';
import { InMemoryBusinessRepository } from './infrastructure/in-memory-business.repository';
import { GetBusinessesUseCase } from './application/get-businesses.use-case';
import { CreateBusinessUseCase } from './application/create-business.use-case';
import { BusinessRepository } from './domain/business.repository';
import { IdGenerator } from 'src/core/id/id.generator';

@Module({
  imports: [IdModule],
  controllers: [BusinessController],
  providers: [
    {
      provide: BusinessRepository,
      useClass: InMemoryBusinessRepository
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
    }
  ],
})
export class BusinessModule {}
