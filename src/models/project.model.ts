import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "projects",
  modelName: "Project",
  timestamps: true, //
})
class Project extends Model {
  // define the id column
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4, // Automatically generate a UUID
    primaryKey: true, // Set this column as the primary key
    allowNull: false,
  })
  declare id: string;

  // define title column
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  // define slug column
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare slug: string;

  // define description column
  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  declare description: string;

  // define thumbnailUrl colum
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare thumbnailUrl: string;

  // define gallery column
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  declare gallery: string[];

  // define technologies column
  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  declare technologies: string[];

  // define category column
  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  declare category: string[];

  // define tag column
  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  declare tags: string[];

  // define website Url column
  @Column({
    type: DataType.JSON,
  })
  declare websiteUrl: string[];

  // define github Url column
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  declare githubUrl: string[];

  // define project startDate column
  @Column({
    type: DataType.DATE,
  })
  declare startDate: Date;

  // define project endDate column
  @Column({
    type: DataType.DATE,
  })
  declare endDate: Date;
}

export default Project;
