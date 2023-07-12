import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1689131425786 implements MigrationInterface {
    name = 'Initial1689131425786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "Name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "name" TO "Name"`);
    }

}
