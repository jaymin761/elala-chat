import {AutoIncrement, Column, DataType, Default, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Patient} from "./patients";

@Table({tableName: "conversations", underscored: true})
export class Conversations extends Model<Conversations> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.INTEGER)
    userId: number
    @Column(DataType.INTEGER)
    deviceType: number

    @Column(DataType.INTEGER)
    loginId: number

    @Column(DataType.TEXT)
    chatId: string

    @Column(DataType.INTEGER)
    consultationsId: number

    @Column(DataType.INTEGER)
    isMute: number

    @Default(0)
    @Column(DataType.INTEGER)
    feedBackStatus: number

    @Column(DataType.INTEGER)
    isPin: number

    @Column(DataType.DATE)
    clearedAt: Date | string

    @Column(DataType.DATE)
    createdAt: Date | any

    @Default(0)
    @Column(DataType.INTEGER)
    isDeleted: number

    @Default(1)
    @Column(DataType.INTEGER)
    isActive: number

    @Default(1)
    @Column(DataType.INTEGER)
    convType: number

    @Column(DataType.INTEGER)
    user_type: number

    @Column(DataType.STRING)
    consultationFeesStatus  : number
    
    @Column(DataType.INTEGER)
    consultationsStatus: number
    sender: Patient
    receiver: Patient //////////Doctor 
    message: string
    messageId: string
    messageStatus: number
    senderId: number
    unreadCount: number
    totalCount: number
    updatedAt: Date
    deletedAt: Date
    cDate: Date | any


}