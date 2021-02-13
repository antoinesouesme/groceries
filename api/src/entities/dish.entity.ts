import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Item } from './item.entity';

@Entity('dishes')
export class Dish extends BaseEntity {
    @Column({
        type: 'varchar',
    })
    name: string;

    @ManyToMany(() => Item)
    @JoinTable()
    items: Item[];
}
