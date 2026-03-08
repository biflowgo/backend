export interface BusinessEntityProps {
    id: string,
    name: string,
    description?: string,
    address?: string,
    phone?: string,
    email: string,
    logo?: string
}

export class BusinessEntity {

    constructor(
        public readonly businessEntityProps: BusinessEntityProps
    ){}

    static create(props: BusinessEntityProps): BusinessEntity {
        const { id, name, description, address, phone, email, logo } = props;

        if(!id){
            throw new Error('ID is required');
        }

        if(!name){
            throw new Error('Name is required');
        }

        if(!email || email.trim() === '' || !email.includes('@') && !email.includes('.') || email.length <= 6){
            throw new Error('Email is required');
        }

        return new BusinessEntity({ id, name, description, address, phone, email, logo });
    }


}