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


    static update(props: BusinessEntityProps): BusinessEntity {
        const { id, name, description, address, phone, email, logo } = props;

        if(!id){
            throw new Error('ID is required');
        }

        if(name !== undefined && name.trim() === ''){
            throw new Error('Name is required');
        }

        if(email !== undefined && (email.trim() === '' || !email.includes('@') && !email.includes('.') || email.length <= 6)){
            throw new Error('Email is required');
        }

        return new BusinessEntity({ id, name, description, address, phone, email, logo });
    }

    static createFromRegister(props: Omit<BusinessEntityProps, 'id'>): BusinessEntity{
        const { name, description, address, phone, email, logo } = props;

        if(!name){
            throw new Error('Name is required');
        }

        if(!email || email.trim() === '' || !email.includes('@') && !email.includes('.') || email.length <= 6){
            throw new Error('Email is required');
        }

        if(!phone || phone.trim() === '' || phone.length < 7){
            throw new Error('Phone is required');
        }

        return new BusinessEntity({ id: crypto.randomUUID(), name, description, address, phone, email, logo });
    }
}