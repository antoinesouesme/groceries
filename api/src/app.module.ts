import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { withCache } from 'orm/config/orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { ItemsModule } from './items/items.module';
import { SectionsModule } from './sections/sections.module';
import { StoresModule } from './stores/stores.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(withCache),
        ItemsModule,
        SectionsModule,
        StoresModule,
        DishesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
