import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Section } from 'src/entities/section.entity';
import { SectionsService } from './sections.service';

@Crud({
    model: {
        type: Section,
    },
})
@Controller('sections')
export class SectionsController {
    constructor(
        public service: SectionsService,
    ) {}
}
