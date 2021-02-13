import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from 'src/entities/dish.entity';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Dish]),
    ],
    exports: [
        DishesService,
    ],
    providers: [
        DishesService,
    ],
    controllers: [
        DishesController,
    ],
})
export class DishesModule { }
