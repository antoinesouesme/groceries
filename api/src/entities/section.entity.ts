import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Item } from './item.entity';
import { Store } from './store.entity';

@Entity('sections')
export class Section extends BaseEntity {
    @Column({
        type: 'varchar',
    })
    name: string;

    @ManyToOne(() => Store, (store) => store.sections)
    store: Store;

    @OneToMany(() => Item, (item) => item.section)
    items: Item[];
}
