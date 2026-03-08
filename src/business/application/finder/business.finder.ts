import { BusinessRepository } from "src/business/domain/business.repository";

export class BusinessFinder {

    constructor(
        private readonly businessRepository: BusinessRepository,
    ){}
    
    async findOneById(id: string){
        const business = await this.businessRepository.findById(id);

        if(!business){
            throw new Error('Business not found');
        }

        return business;
    }
}