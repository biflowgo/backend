export interface CreateBusinessCommandProps {
    name: string;
    description?: string;
    address?: string;
    phone?: string;
    email: string;
    logo?: string;
}

export class CreateBusinessCommand {
    constructor(
        private readonly createBusinessCommandProps: CreateBusinessCommandProps
    ){}

    getData(): CreateBusinessCommandProps {
        return this.createBusinessCommandProps;
    }
}