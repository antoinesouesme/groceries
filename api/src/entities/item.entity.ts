import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Section } from './section.entity';

@Entity('items')
export class Item extends BaseEntity {
    @Column({
        type: 'varchar',
    })
    name: string;

    @ManyToOne(() => Section, (section) => section.items)
    section: Section;
}
