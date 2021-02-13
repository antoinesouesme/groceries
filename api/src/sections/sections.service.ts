import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Section } from 'src/entities/section.entity';

@Injectable()
export class SectionsService extends TypeOrmCrudService<Section> {
    constructor(
        @InjectRepository(Section) repo,
    ) {
        super(repo);
    }
}
