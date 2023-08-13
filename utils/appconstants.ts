import {ConnectedUser} from "../models/connectedUser";
import {UniqueConnectedUser} from "../models/uniqueConnectedUser";

export class AppConstants {
    public static readonly PORT = 3002
    public static userMap: { [userKey: string]: ConnectedUser } = {}
    public static uniqueMap: { [userKey: string]: UniqueConnectedUser } = {}
    public static lastSeenMap: { [userKey: string]: string } = {}
    public static uniqueUserMap: { [userKey: string]: string } = {}
    public static connectedUsers: { [key: string]: string } = {}

    public static userRooms: { [key: string]: string } = {};
    public static roomPeers: { [key: string]: any[] } = {}
    public static roomInvitations: { [key: string]: any } = {}

    public static readonly API_ROUTE = "/socket/api"
    public static readonly ACCESS_TOKEN_SECRET = ""


    public static readonly API_PATH_CHAT_HISTORY = AppConstants.API_ROUTE + "/getMessages"
    public static readonly API_PATH_RTC_TOKEN = "/genrateRtcToken"
    public static readonly API_PATH_USER_MANAGEMENT = AppConstants.API_ROUTE + "/userManagement"
    public static readonly API_PATH_CREATE_GROUP = AppConstants.API_ROUTE + "/createGroup"
    public static readonly API_PATH_EDIT_GROUP = AppConstants.API_ROUTE + "/editGroup"
    public static readonly API_PATH_GET_GROUP = AppConstants.API_ROUTE + "/getGroupInfo"
    public static readonly API_PATH_ADD_REMOVE_MEMBER = AppConstants.API_ROUTE + "/addRemoveMember"
    public static readonly API_PATH_LEFT_GROUP = AppConstants.API_ROUTE + "/leftGroup"
    public static readonly API_PATH_DELETE_LEFT_GROUP = AppConstants.API_ROUTE + "/deleteGroup"

    // CHAT EVENT TYPES
    public static readonly MESSAGE_EVENT_MATCH = 12
    public static readonly MESSAGE_EVENT_VOICE_MISSED_CALL = 9
    public static readonly MESSAGE_EVENT_VIDEO_MISSED_CALL = 11

    public static readonly GROUP_MESSAGE_EVENT = 15
    public static readonly MESSAGE_EVENT_OTHER = 16
    public static readonly MESSAGE_EVENT_GIF = 17

    public static readonly GROUP_EVENT_CREATE_GROUP = 1
    public static readonly GROUP_EVENT_MEMBER_ADDED = 2
    public static readonly GROUP_EVENT_MEMBER_REMOVED = 3
    public static readonly GROUP_EVENT_MEMBER_LEFT = 4
    public static readonly GROUP_EVENT_CHANGE_GROUP_SUBJECT = 5
    public static readonly GROUP_EVENT_CHANGE_GROUP_ICON = 6
    public static readonly GROUP_EVENT_CHANGE_NUMBER = 7

    public static readonly groupMemLimit = 21

    public static readonly MAX_FILE_SIZE = 200 * 1000 * 1000
    public static readonly DATE_FORMAT: string = "yyyy-MM-DD HH:mm:ss";
    public static readonly DATE_FORMAT_SHORT: string = "yyyy-MM-DD HH:mm:ss";

    public static readonly SYNC_TYPE_MESSAGE = 1
    public static readonly SYNC_TYPE_DELIVERY = 17
    public static readonly SYNC_TYPE_READ = 18
    public static readonly SYNC_TYPE_DELETE = 4
    public static readonly SYNC_TYPE_BLOCK_UNBLOCK = 5
    public static readonly SYNC_TYPE_UNMATCH = 6
    public static readonly SYNC_TYPE_REACTION = 7
    public static readonly SYNC_TYPE_PROFILE = 8
    public static readonly SYNC_TYPE_CALL = 9
    public static readonly SYNC_TYPE_REAL_TIME = 10
    public static readonly SYNC_TYPE_CONSULTATION_STATUS_UPDATE= 19
    public static readonly SYNC_TYPE_CONSULTATION_STATUS_FEES= 20

}

declare global {
    interface String {
        isExists(): boolean;
    }

    interface Number {
        isExists(): boolean;
    }

    interface Boolean {
        isExists(): boolean;
    }


}

String.prototype.isExists = function () {
    return !(typeof (this) == 'undefined' || this == null);
}

Number.prototype.isExists = function () {
    return !(typeof (this) == 'undefined' || this == null);
}

Boolean.prototype.isExists = function () {
    return !(typeof (this) == 'undefined' || this == null);
}
