import { BusinessEntity, BusinessEntityProps } from '../domain/business.entity';
import { BusinessRepository } from "../domain/business.repository";
import { UpdateBusinessCommand } from './commands/update-business.command';
import { BusinessFinder } from './finder/business.finder';

export class UpdateBusinessUseCase {

    constructor(
        private readonly businessFinder: BusinessFinder,
        private readonly businessRepository: BusinessRepository
    ){}

    async execute(updateBusinessCommand: UpdateBusinessCommand): Promise<void> {

        const businessDB = await this.businessFinder.findOneById(updateBusinessCommand.getData().id);

        const businessEntityProps: BusinessEntityProps = {
            ...businessDB,
            ...updateBusinessCommand.getData(),
        };

        const business: BusinessEntity = BusinessEntity.update(businessEntityProps);

        return this.businessRepository.update(business);
    }
}
