import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1617143008760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },

            {
              name: "name",
              type: "varchar",
            },

            {
              name: "password",
              type: "varchar",
            },

            {
              name: "email",
              type: "varchar",
            },

            {
              name: "isAdmin",
              type: "boolean",
              default: false,
              isNullable: true,
            },  

            {
              name: "avatar",
              type: "varchar",
              isNullable: true,
            },

            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },

            {
              name: "updated_at",
              type: "timestamp",
              default: "now()",
            },

            {
              name: 'isBackup',
              type: 'integer',
              default: 0,
            },
            
          ],
        })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> 
  {
    await queryRunner.dropTable("users");
  }
}
