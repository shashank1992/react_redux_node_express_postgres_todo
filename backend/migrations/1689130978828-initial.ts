import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1689130978828 implements MigrationInterface {
    name = 'Initial1689130978828'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_4d46c89e3797f6fe11370bf65eb"`);
        await queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "name" TO "Name"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "boardId"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "text" character varying(2000)`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "isCompleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "board_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_b36476c54e9996fbcba95570a4b" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_b36476c54e9996fbcba95570a4b"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "board_id"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "isCompleted"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "boardId" integer`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" RENAME COLUMN "Name" TO "name"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_4d46c89e3797f6fe11370bf65eb" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
