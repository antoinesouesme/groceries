import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Item]),
    ],
    providers: [
        ItemsService,
    ],
    exports: [
        ItemsService,
    ],
    controllers: [
        ItemsController,
    ],
})
export class ItemsModule { }
