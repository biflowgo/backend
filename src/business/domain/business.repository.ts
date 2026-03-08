import { BusinessEntity } from "./business.entity";

export abstract class BusinessRepository {
    abstract findById(id: string): Promise<BusinessEntity|null>;
    abstract findAll(): Promise<BusinessEntity[]>;
    abstract save(business: BusinessEntity): Promise<void>;
    abstract update(business: BusinessEntity): Promise<void>;
}