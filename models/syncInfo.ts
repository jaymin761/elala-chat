import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Patient} from "./patients";

@Table({tableName: "syncinfo", underscored: true})
export class SyncInfo extends Model<SyncInfo> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.INTEGER)
    userId: number

    @Column(DataType.INTEGER)
    loginId: number

    @Column(DataType.STRING)
    chatId: string

    @Column(DataType.INTEGER)
    type: number

    @Column(DataType.TEXT)
    data: string

    updatedAt: Date
    createdAt: Date


}
