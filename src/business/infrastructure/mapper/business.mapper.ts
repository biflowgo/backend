import { BusinessOrmEntity } from "../typeorm/business.orm-entity";
import { BusinessEntity } from '../../domain/business.entity';

export class BusinessMapper {

   static toDomain(orm: BusinessOrmEntity): BusinessEntity {
       return new BusinessEntity(
            orm.id,
            orm.name,
            orm.description,
            orm.address,
            orm.phone,
            orm.email,
            orm.logo
       );
   }

   static toOrm(domain: BusinessEntity): BusinessOrmEntity {
       const orm = new BusinessOrmEntity();
       orm.id = domain.id;
       orm.name = domain.name;
       orm.description = domain.description;
       orm.address = domain.address;
       orm.phone = domain.phone;
       orm.email = domain.email;
       orm.logo = domain.logo;
       return orm;
   }
}