import { CreateBusinessCommand } from "src/business/application/commands/create-business.command";
import { CreateBusinessDto } from "../dto/create-business.dto";

export class BusinessRequestMapper {

    static toCommand(createBusinessDto: CreateBusinessDto): CreateBusinessCommand {
        return new CreateBusinessCommand(createBusinessDto);
    }
}
