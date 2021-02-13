import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresController } from './stores/stores.controller';
import { SectionsController } from './sections/sections.controller';
import { ItemsController } from './items/items.controller';
import { DishesController } from './dishes/dishes.controller';

@Module({
    imports: [],
    controllers: [AppController, StoresController, SectionsController, ItemsController, DishesController],
    providers: [AppService],
})
export class AppModule {}
