import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/entities/store.entity';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Store]),
    ],
    exports: [
        StoresService,
    ],
    providers: [
        StoresService,
    ],
    controllers: [
        StoresController,
    ],
})
export class StoresModule { }
