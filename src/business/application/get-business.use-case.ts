import { BusinessFinder } from "./finder/business.finder";

export class GetBusinessUseCase {
    constructor(
        private readonly businessFinder: BusinessFinder,
    ){}

    async execute(id: string): Promise<any> {
        return await this.businessFinder.findOneById(id);
    }
}