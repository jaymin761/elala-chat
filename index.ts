// import {Server} from 'socket.io'
import { AppConstants } from './utils/appconstants'
import { SequelizeDbHelper } from "./dbhelpers/sequelizeDbHelper"
import { Conversations } from "./models/conversations";
import { Chats } from "./models/chats";
import bodyParser from "body-parser";
import decryptedData from "./middleware/secure/decryptedData";
import express from "express";
import { Socket } from 'socket.io';
const app = express();
const { Server } = require("socket.io");
import { QueryTypes } from "sequelize";
import SocketHandler from './controllers/SocketHandler';
const config = require('config')


// const server = require('http').Server(app)
const http = require('http');

const server = http.createServer(app);
// sequelize connect to mysql
let sequelizeDbHelper = SequelizeDbHelper.getInstance()
let sequelizeClient = sequelizeDbHelper.getSequelizeClint()

//Socket IO Server
// const io: Server = require('socket.io')(server)
const io = new Server(server);

AppConstants.userMap = {}
AppConstants.connectedUsers = {}
AppConstants.userRooms = {}
AppConstants.roomPeers = {}
AppConstants.roomInvitations = {}




app.use(bodyParser.json({ limit: '200mb' }))
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))
app.use(express.static('public'))
app.use(decryptedData.DecryptedData)

// async function DBSettings() {

//     await sequelizeDbHelper.getSequelizeClint().query("SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));", { type: QueryTypes.UPDATE, }).then(function () {
//         return true;
//     });
// }
server.listen(AppConstants.PORT, async () => {
    try {

        io.on('connection', (args: Socket) => SocketHandler.chatHandler(io, args));

        console.log(config.get("DB_CONNECTION"));
        console.log(config.get("DB_HOST"));
        console.log(config.get("DB_PORT"));
        console.log(config.get("DB_USERNAME"));
        console.log(config.get("DB_PASSWORD"));
        console.log(config.get("DB_DATABASE"));
        
        console.log(`⚡️[NodeJs server]: Server is running at http://localhost:${AppConstants.PORT}`)

        await sequelizeClient.authenticate().then(async () => {

            console.log('Connection has been established successfully.')
            // ORM Relation with DB table "User, AuthTokens, Conversations, Chats, Jobs"
            sequelizeClient.addModels([
                Conversations,
                Chats,
            ])

            await sequelizeClient.sync()
            // await DBSettings();


        }).catch((reason: any) => console.log('----------------[Sequelize Error] ', reason))
    } catch (error) {
        console.error('--------------------------------' + error)
    }


    process.on('uncaughtException', (error, origin) => {
        console.log('----- Uncaught exception -----')
        console.log(error)
        console.log('----- Exception origin -----')
        console.log(origin)
    })

    process.on('unhandledRejection', (reason, promise) => {
        console.log('----- Unhandled Rejection at -----')
        console.log(promise)
        console.log('----- Reason -----')
        console.log(reason)
    })
})
export { io}