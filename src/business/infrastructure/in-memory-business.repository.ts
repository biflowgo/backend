import { BusinessEntity } from "../domain/business.entity";
import { BusinessRepository } from "../domain/business.repository";

const business1 = BusinessEntity.create({
    id: "some-uuid-1",
    name: "Business 1",
    description: "Description of Business 1",
    address: "Address of Business 1",
    phone: "123456789",
    email: "business1@example.com",
    logo: "logo1.png"
});

const business2 = BusinessEntity.create({
    id: "some-uuid-2",
    name: "Business 2",
    description: "Description of Business 2",
    address: "Address of Business 2",
    phone: "987654321",
    email: "business2@example.com",
    logo: "logo2.png"
});
const business3 = BusinessEntity.create({
    id: "some-uuid-3",
    name: "Business 3",
    description: "Description of Business 3",
    address: "Address of Business 3",
    phone: "555555555",
    email: "business3@example.com",
    logo: "logo3.png"
});

const businessList: BusinessEntity[] = [business1, business2, business3];

export class InMemoryBusinessRepository implements BusinessRepository {

    async findAll(): Promise<BusinessEntity[]> {
        return businessList;
    }

    async save(): Promise<void> {
        return;
    }
}