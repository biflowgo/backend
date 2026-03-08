import { BusinessEntity } from "../domain/business.entity";
import { BusinessRepository } from "../domain/business.repository";

export class GetBusinessesUseCase {
    
    constructor(
        private readonly businessRepository: BusinessRepository,
    ){}

    async execute(): Promise<BusinessEntity[]> {
        return await this.businessRepository.findAll();
    }

}