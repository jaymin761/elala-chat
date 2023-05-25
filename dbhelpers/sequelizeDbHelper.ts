import {Sequelize} from "sequelize-typescript";
import {Patient} from "../models/patients";
import {Doctor} from "../models/doctors";

const config = require('config')

export class SequelizeDbHelper {
    private static instance: SequelizeDbHelper
    private readonly sequelize: Sequelize

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        this.sequelize = new Sequelize({
            // Memory
            /*
            host: 'localhost',
            database: "massttr",
            dialect: "sqlite",
            storage: ":memory:",
            */

            //Local
            // dialect: 'mysql',
            // host: 'localhost',
            // port: 3306,
            // username: 'root',
            // password: '',
            // database: 'massttr',
            // logging: true

            //Live - elaunch
            // dialect: 'mysql',
            // host: 'localhost',
            // port: 3306,
            // username: 'massttr',
            // password: 'W15im!n0',
            // database: 'massttr',
            // logging: true

            // Live - client
            dialect: config.get("DB_CONNECTION"),
            host: config.get("DB_HOST"),
            port: config.get("DB_PORT"),
            username: config.get("DB_USERNAME"),
            password: config.get("DB_PASSWORD"),
            database: config.get("DB_DATABASE"),
            logging: true

        });

    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): SequelizeDbHelper {
        if (!SequelizeDbHelper.instance) {
            SequelizeDbHelper.instance = new SequelizeDbHelper();
        }

        return SequelizeDbHelper.instance;
    }

    public getSequelizeClint() {
        return this.sequelize
    }

}