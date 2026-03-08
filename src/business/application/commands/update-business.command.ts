export interface UpdateBusinessCommandProps {
    id: string;
    name: string;
    description?: string;
    address?: string;
    phone?: string;
    email: string;
    logo?: string;
}


export class UpdateBusinessCommand {
    constructor(
        private readonly updateBusinessCommandProps: UpdateBusinessCommandProps
    ){}

    getData(): UpdateBusinessCommandProps {
        return this.updateBusinessCommandProps;
    }
}