import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript'

@Table({tableName: "doctors", underscored: false , timestamps : false})
export class Doctor extends Model<Doctor> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.TEXT)
    default_lang: string

    @Column(DataType.TEXT)
    display_name: string
  
    @Column(DataType.TEXT)
    ar_display_name: string
    
    @Column(DataType.TEXT)
    email: string
    
    @Column(DataType.TEXT)
    country_code: string

    @Column(DataType.TEXT)
    phone: string

    @Column(DataType.TEXT)
    password: string

    @Column(DataType.TEXT)
    otp: string

    @Column(DataType.TEXT)
    prefer_language: string

    @Column(DataType.TEXT)
    profile: string

    @Column(DataType.TEXT)
    device_token: string

    @Column(DataType.TEXT)
    device_type: string
    
    @Column(DataType.INTEGER)
    notification_status: number
    
}