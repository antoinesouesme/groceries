import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOtherEntities1613248253132 implements MigrationInterface {
    name = 'AddOtherEntities1613248253132';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "sections" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, "storeId" uuid, CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id"))');
        await queryRunner.query('CREATE TABLE "items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, "sectionId" uuid, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))');
        await queryRunner.query('CREATE TABLE "dishes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_f4748c8e8382ad34ef517520b7b" PRIMARY KEY ("id"))');
        await queryRunner.query('CREATE TABLE "dishes_items_items" ("dishesId" uuid NOT NULL, "itemsId" uuid NOT NULL, CONSTRAINT "PK_12c25ad65c2560756eb7f0bd8b9" PRIMARY KEY ("dishesId", "itemsId"))');
        await queryRunner.query('CREATE INDEX "IDX_04551f6823c2b15fa4e46fd80c" ON "dishes_items_items" ("dishesId") ');
        await queryRunner.query('CREATE INDEX "IDX_30b3f7d32b3e60b554224075d5" ON "dishes_items_items" ("itemsId") ');
        await queryRunner.query('ALTER TABLE "sections" ADD CONSTRAINT "FK_0eb87b602b7e4ea7eda3009b999" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "items" ADD CONSTRAINT "FK_244acfec5e1a28f9167a5739c82" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "dishes_items_items" ADD CONSTRAINT "FK_04551f6823c2b15fa4e46fd80c1" FOREIGN KEY ("dishesId") REFERENCES "dishes"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "dishes_items_items" ADD CONSTRAINT "FK_30b3f7d32b3e60b554224075d57" FOREIGN KEY ("itemsId") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "dishes_items_items" DROP CONSTRAINT "FK_30b3f7d32b3e60b554224075d57"');
        await queryRunner.query('ALTER TABLE "dishes_items_items" DROP CONSTRAINT "FK_04551f6823c2b15fa4e46fd80c1"');
        await queryRunner.query('ALTER TABLE "items" DROP CONSTRAINT "FK_244acfec5e1a28f9167a5739c82"');
        await queryRunner.query('ALTER TABLE "sections" DROP CONSTRAINT "FK_0eb87b602b7e4ea7eda3009b999"');
        await queryRunner.query('DROP INDEX "IDX_30b3f7d32b3e60b554224075d5"');
        await queryRunner.query('DROP INDEX "IDX_04551f6823c2b15fa4e46fd80c"');
        await queryRunner.query('DROP TABLE "dishes_items_items"');
        await queryRunner.query('DROP TABLE "dishes"');
        await queryRunner.query('DROP TABLE "items"');
        await queryRunner.query('DROP TABLE "sections"');
    }
}
