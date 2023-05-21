import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "chat", underscored: true})
export class Chats extends Model<Chats> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.STRING)
    user_id: number

    @Column(DataType.INTEGER)
    receiverId: number

    @Column(DataType.TEXT)
    message: string

    @Column(DataType.INTEGER)
    type: number

    @Column(DataType.INTEGER)
    message_text: number

    @Column(DataType.INTEGER)
    is_deleted: number

    @Column(DataType.INTEGER)
    deleted_by: number

    @Column(DataType.INTEGER)
    tick: number
    
}