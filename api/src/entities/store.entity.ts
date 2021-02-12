import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('stores')
export class Store extends BaseEntity {
    @Column({
        type: 'varchar',
    })
    name: string;
}
