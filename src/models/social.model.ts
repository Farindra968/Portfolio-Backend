import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
    tableName: "link",
    modelName: "Links",
    timestamps: true
})
class Links extends Model{
    // id, platform, url, icon

    // define platform column
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare platform:string

    // cdfine url column
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare url:string

    @Column({
        type: DataType.STRING,
    })
    declare icon:string
}

export default Links;