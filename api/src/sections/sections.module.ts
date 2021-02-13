import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from 'src/entities/section.entity';
import { SectionsController } from './sections.controller';
import { SectionsService } from './sections.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Section]),
    ],
    exports: [
        SectionsService,
    ],
    controllers: [
        SectionsController,
    ],
    providers: [
        SectionsService,
    ],
})
export class SectionsModule {}
