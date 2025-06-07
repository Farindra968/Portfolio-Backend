import {Table, Model, DataType, Column} from "sequelize-typescript"

@Table({
    timestamps: true,
    tableName: "certificates",
    modelName: "Certificate"
})
class Certificate extends Model{

    // define the id column
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4, // Automatically generate a UUID
        primaryKey: true, // Set this column as the primary key
        allowNull: false,
    })
    declare id:string

    // define the certificate name
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare certificateName: string

    // define the Institute column
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare institute:string


    // define the course Started date
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    declare startedDate: Date

    // define the duration column
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare duration: string

    // define the Status column
    @Column({
        type: DataType.ENUM("Completed", "Ongoing"),
        defaultValue: "Completed",
        allowNull: false
    })
    declare status: "Completed" | "Ongoing"

    // deine the certificate image
    @Column({
        type: DataType.STRING,
    })
    declare certificateImage: string

    // define the description column
    @Column({
        type: DataType.JSON
    })
    declare description:string
}

export default Certificate