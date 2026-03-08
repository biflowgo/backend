import { BusinessRepository } from "src/business/domain/business.repository";
import { CreateBusinessCommand, CreateBusinessCommandProps } from './commands/create-business.command';
import { BusinessEntityProps, BusinessEntity } from "../domain/business.entity";
import { IdGenerator } from "src/core/id/id.generator";

export class CreateBusinessUseCase {

    constructor(
        private readonly businessRepository: BusinessRepository,
        private readonly idGenerator: IdGenerator
    ){}

    async execute(createBusinessCommand: CreateBusinessCommand): Promise<void> {
        const businessEntityPros: BusinessEntityProps = {
            id: this.idGenerator.generate(),
            name: createBusinessCommand.getData().name,
            description: createBusinessCommand.getData().description,
            address: createBusinessCommand.getData().address,
            phone: createBusinessCommand.getData().phone,
            email: createBusinessCommand.getData().email,
            logo: createBusinessCommand.getData().logo
        };

        const business = BusinessEntity.create(businessEntityPros);
        return this.businessRepository.save(business);
    }
}