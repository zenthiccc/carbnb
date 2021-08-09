import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1628493204288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('carbnb', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('carbnb', true);
  }
}
