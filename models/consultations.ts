import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript'

@Table({tableName: "consultations", underscored: true})
export class Consultations extends Model<Consultations> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.STRING)
    status  : string
    
    updatedAt: Date
    deletedAt: Date

}