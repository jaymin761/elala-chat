export class UniqueConnectedUser {

    constructor(unique_id: string,soc_id: string,user_type:number) {
        this.unique_id = unique_id;
        this.socket_id = soc_id;
        this.user_type = user_type;
    }

    unique_id: string
    socket_id: string
    user_type: number

}