import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "notifications", underscored: true})
export class Notifications extends Model<Notifications> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.INTEGER)
    userId: number

    @Column(DataType.STRING)
    title: string
    
    @Column(DataType.STRING)
    arTitle: string
    
    @Column(DataType.STRING)
    message: string

    @Column(DataType.STRING)
    arMessage: string

    @Column(DataType.INTEGER)
    userType: number

    @Column(DataType.INTEGER)
    status: number

    @Column(DataType.INTEGER)
    type: number
}