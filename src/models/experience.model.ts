import { Table, Column, Model, DataType, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "experiences",
    modelName: "Experience",
    timestamps: true
})

//   position: String,           // Required
//   company: String,            // Required
//   location: String,           // Optional
//   startDate: Date,            // Required
//   endDate: Date,              // Optional
//   description: String,        // Optional
//   currentlyWorking: Boolean   // Optional (default: false)

class Experience extends Model{
    // define id column
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare id:string;

    // define position column
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare position:string

    // define company column
    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    declare company:string

    // define company location column
    @Column({
        type: DataType.STRING,

    }) 
    declare location: string

    // define startDate column
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    declare startDate:Date

    // define endDate column
    @Column({
        type: DataType.DATE,
    })
    declare endDate:Date
    
    // define description column
    @Column({
        type: DataType.JSON
    })
    declare description: string

    // define currentlyWorking column
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    declare currentlyWorking:boolean
}


export default Experience