import { MigrationInterface, QueryRunner } from "typeorm";

export class shipping1676946061939 implements MigrationInterface {
    name = 'shipping1676946061939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "login_entity" (
                "id" SERIAL NOT NULL,
                "user_id" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_266c73764517083a40a9e715bf1" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "login_entity"
        `);
    }

}
