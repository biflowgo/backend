import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('business')
export class BusinessOrmEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: true })
    address?: string;

    @Column({ nullable: true })
    phone?: string;
    
    @Column()
    email: string;

    @Column({ nullable: true })
    logo?: string;
}