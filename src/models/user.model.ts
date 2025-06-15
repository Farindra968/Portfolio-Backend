import { Table, Column, Model, DataType } from "sequelize-typescript";
import { ADMIN, SUPERADMIN, USER } from "../constant/role";

@Table({
    tableName: "users",
    timestamps: true, // Enable createdAt and updatedAt fields
    modelName: "User", 
})
class User extends Model{

    // Define the id column
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4, // Automatically generate a UUID
        primaryKey: true, // Set this column as the primary key
        allowNull: false,
    })
    declare id: string;

    // Define the username column
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare username: string;

    // Define the email column
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true, // Ensure email is unique
    })
    declare email: string;

    // Define the password column
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    // Define the role
    @Column({
        type: DataType.ENUM(SUPERADMIN, ADMIN, USER),
        defaultValue: USER,
        allowNull: false,
    })
    declare role: string

    // Define the profile picture column
    @Column({
        type: DataType.STRING,
        allowNull: true, // Profile picture is optional
    })
    declare profilePicture: string;


}

export default User;