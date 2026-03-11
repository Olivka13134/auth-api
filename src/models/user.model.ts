import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/database"

export class User extends Model {
    public id!: number
    public email!: string
    public password!: string
    public name!: string
    public birthDate!: Date
    public bio!: string
}

User.init(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },

        email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
        },

        password: {
        type: DataTypes.STRING,
        allowNull: false
        },

        name: {
        type: DataTypes.STRING
        },

        birthDate: {
        type: DataTypes.DATE
        },

        bio: {
        type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        tableName: "users"
    }
)