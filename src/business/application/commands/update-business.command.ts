export interface UpdateBusinessCommandProps {
    name: string;
    description?: string;
    address?: string;
    phone?: string;
    email: string;
    logo?: string;
}


export class UpdateBusinessCommand {
    constructor(
        public readonly updateBusinessCommandProps: UpdateBusinessCommandProps
    ){}
}