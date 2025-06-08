import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
    tableName: "skills",
    modelName: "Skill",
    timestamps: true
})
class Skill extends Model{
    // define id column
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    declare id:string

    // define the skill name column
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name: string

    // define the category column
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare category:string

    // define icon column
    @Column({
        type: DataType.STRING
    })
    declare icon: string

    // define experience column
    @Column({
        type:DataType.STRING
    })
    declare experience:string
}

export default Skill