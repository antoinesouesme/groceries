import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Store } from 'src/entities/store.entity';
import { StoresService } from './stores.service';

@Crud({
    model: {
        type: Store,
    },
})
@Controller('stores')
export class StoresController {
    constructor(
        public service: StoresService,
    ) {}
}
