import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602621718975 implements MigrationInterface {

  //Realizar alterações
  //Criar tabela, criar um novo campo, deletar algum campo
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name:'orphanages',
      columns:[{
        name: 'id',
        type: 'integer',
        unsigned: true, //Não pode ser negativa
        isPrimary: true, //Primary key
        isGenerated: true, //gerada automaticamente
        generationStrategy: 'increment', //gerada automaticamente incremental ( 1, 2 , 3)
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'latitude',
        type: 'decimal',
        scale: 10, // numeros depois da virgula
        precision: 2 // numeros antes da virgula
      },
      {
        name: 'longitude',
        type: 'decimal',
        scale: 10,
        precision: 2
      },
      {
        name: 'about',
        type: 'text'
      },
      {
        name: 'instructions',
        type: 'text'
      },
      {
        name: 'opening_hours',
        type: 'varchar'
      },
      {
        name: 'open_on_weekends',
        type: 'boolean',
        default: false,
      }
    ]
    }))

  }

  //desfazer o que foi feito no up
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');

  }

}
