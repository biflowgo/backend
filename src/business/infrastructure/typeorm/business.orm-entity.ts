import { Injectable } from "@nestjs/common";
import { Column, PrimaryColumn } from "typeorm";

@Injectable()
export class BusinessOrmEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;

    @Column()
    phone: string;
    
    @Column()
    email: string;

    @Column()
    logo: string;
}