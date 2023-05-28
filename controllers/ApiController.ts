import {Request, Response} from 'express';

async function getMessages(req: Request, res: Response) {
    console.log("calling api");
    
}
export default {
    getMessages,
}