import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript'

@Table({tableName: "doctor_ratings", underscored: true})
export class DoctorRatings extends Model<DoctorRatings> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.INTEGER)
    patientId : number

    @Column(DataType.STRING)
    doctorId  : number

    @Column(DataType.STRING)
    consultationId  : number

}