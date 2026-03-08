import { CreateBusinessCommand,CreateBusinessCommandProps, UpdateBusinessCommand, UpdateBusinessCommandProps } from "src/business/application/commands";
import { CreateBusinessDto, UpdateBusinessDto } from "../dto";

export class BusinessRequestMapper {

    static toCommand(createBusinessDto: CreateBusinessDto): CreateBusinessCommand {
        const createBusinessCommandProps: CreateBusinessCommandProps = {
            name: createBusinessDto.name,
            description: createBusinessDto.description,
            address: createBusinessDto.address,
            phone: createBusinessDto.phone,
            email: createBusinessDto.email,
            logo: createBusinessDto.logo
        }
        return new CreateBusinessCommand(createBusinessCommandProps);
    }

    static toUpdateCommand(id: string, updateBusinessDto: UpdateBusinessDto): UpdateBusinessCommand {
        const updateBusinessCommandProps: UpdateBusinessCommandProps = {
            id,
            name: updateBusinessDto.name,
            description: updateBusinessDto.description,
            address: updateBusinessDto.address,
            phone: updateBusinessDto.phone,
            email: updateBusinessDto.email,
            logo: updateBusinessDto.logo
        };
        return new UpdateBusinessCommand(updateBusinessCommandProps);
    }
}
