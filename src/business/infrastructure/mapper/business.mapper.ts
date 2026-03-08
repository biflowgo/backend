import { BusinessOrmEntity } from "../typeorm/business.orm-entity";
import { BusinessEntity, BusinessEntityProps } from '../../domain/business.entity';

export class BusinessMapper {

   static toDomain(orm: BusinessOrmEntity): BusinessEntity {
        const  data : BusinessEntityProps = {
                id: orm.id,
                name: orm.name,
                description: orm.description,
                address: orm.address,
                phone: orm.phone,
                email: orm.email,
                logo: orm.logo
        }

       return new BusinessEntity(data);
   }

   static toOrm(domain: BusinessEntity): BusinessOrmEntity {
       const orm = new BusinessOrmEntity();
       orm.id = domain.businessEntityProps.id;
       orm.name = domain.businessEntityProps.name;
       orm.description = domain.businessEntityProps.description;
       orm.address = domain.businessEntityProps.address;
       orm.phone = domain.businessEntityProps.phone;
       orm.email = domain.businessEntityProps.email;
       orm.logo = domain.businessEntityProps.logo;
       return orm;
   }
}