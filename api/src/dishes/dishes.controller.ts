import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Dish } from 'src/entities/dish.entity';
import { DishesService } from './dishes.service';

@Crud({
    model: {
        type: Dish,
    },
})
@Controller('dishes')
export class DishesController {
    constructor(
        public service: DishesService,
    ) {}
}
