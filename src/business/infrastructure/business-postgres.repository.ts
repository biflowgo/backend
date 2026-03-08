import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { BusinessRepository } from "../domain/business.repository";
import { BusinessOrmEntity } from "./typeorm/business.orm-entity";
import { BusinessEntity } from "../domain/business.entity";
import { BusinessMapper } from "./mapper/business.mapper";

export class BusinessPostgresRepository implements BusinessRepository {

    constructor(
        @InjectRepository(BusinessOrmEntity)
        private readonly businessOrm: Repository<BusinessOrmEntity>
    ) {}

    async findById(id: string): Promise<BusinessEntity|null> {
        const business = await this.businessOrm.findOneBy({ id });

        if(!business) 
            return null;

        return BusinessMapper.toDomain(business);
    }

    async findAll(): Promise<BusinessEntity[]> {
       const businesses = await this.businessOrm.find(); 
       return businesses.map( b => BusinessMapper.toDomain(b));
    }

    async save(businessEntity: BusinessEntity): Promise<void> {
        const business = BusinessMapper.toOrm(businessEntity);
        await this.businessOrm.save(business);
    }

    async update(businessEntity: BusinessEntity): Promise<void> {
        const businessData = BusinessMapper.toOrm(businessEntity);
        await this.businessOrm.update({ id: businessData.id }, businessData);
    }
    
}