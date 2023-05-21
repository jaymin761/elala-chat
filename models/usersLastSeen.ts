import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript'

@Table({tableName: "user_last_seen", underscored: true})
export class UserLastSeen extends Model<UserLastSeen> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.INTEGER)
    loginId: number

    @Column(DataType.STRING)
    lastSeen : string
}