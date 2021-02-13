import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Item } from 'src/entities/item.entity';
import { ItemsService } from './items.service';

@Crud({
    model: {
        type: Item,
    },
})
@Controller('items')
export class ItemsController {
    constructor(
        public service: ItemsService,
    ) {}
}
