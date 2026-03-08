import { BusinessEntity } from "./business.entity";

export abstract class BusinessRepository {
    abstract findAll(): Promise<BusinessEntity[]>;
    abstract save(business: BusinessEntity): Promise<void>;
}