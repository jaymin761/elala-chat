import { Socket } from "socket.io";
import { AppConstants } from "../utils/appconstants";
import { ConnectedUser } from "../models/connectedUser";
import { SequelizeDbHelper } from "../dbhelpers/sequelizeDbHelper";
import { Chats } from "../models/chats";
import { Server } from "socket.io";

let sequelizeDbHelper = SequelizeDbHelper.getInstance()

async function chatHandler(io: Server, client: Socket) {
    let userId = client.handshake.query['user_id']?.toString() ?? "0"

    let clientId = client.id

    // console.log("---------QUERY : ", client.handshake.query, `: ${client.id}`)

    try {

        AppConstants.connectedUsers[clientId] = userId
        AppConstants.userMap[userId] = new ConnectedUser(userId, clientId)

    } catch (e) {
        console.log("CATCH", e)
    }
    console.log(AppConstants.userMap);
    
    client.on('supportMessage', async (data, ack) => {
        console.log("support message", data)
        if (typeof data == 'string') data = JSON.parse(data)

        try {
            let feedbackData = await Chats.create({
                receiverId: data.receiverId,
                message_text: data.message_text,
                user_id: data.user_id,
            })
           const id = AppConstants.userMap[data.receiverId?.toString()]?.socket_id
           console.log({id});
           io.sockets.sockets.get(id)?.emit('supportMessage', feedbackData)
           ack(data)

        } catch (er: any) {
            console.log('error for support message', er.message);
        }

    });
    client.on('joinChat', async (data, ack) => {
        if (typeof data == 'string') data = JSON.parse(data)
        let chatId = data.chat_id?.toString();
        console.log({ chatId });

        client.join(chatId);
    });

}


export default {
    chatHandler
}

