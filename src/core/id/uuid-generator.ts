import { IdGenerator } from "./id.generator";
import { v4 as uuid } from 'uuid';

export class UuidGenerator extends IdGenerator {
    
    generate(): string {
        return uuid();
    }
}