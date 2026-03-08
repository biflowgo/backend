import { BusinessRepository } from "../domain/business.repository";

export class BusinesPostgresRepository implements BusinessRepository {

    async findAll(): Promise<any> {
        return "find all businesses";
    }

    async save(): Promise<void> {
        console.log("save business");
    }
    
}