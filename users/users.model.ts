import { DataTypes, Model, Sequelize } from 'sequelize';

export class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
}

export function model(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            firstName: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            lastName: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
        },
        {
            tableName: 'users',
            sequelize,
        }
    );

    return User;
}