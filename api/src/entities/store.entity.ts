import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Section } from './section.entity';

@Entity('stores')
export class Store extends BaseEntity {
    @Column({
        type: 'varchar',
    })
    name: string;

    @OneToMany(() => Section, (section) => section.store)
    sections: Section[];
}
