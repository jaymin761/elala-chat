// import {NextFunction, Request, Response} from "express"
//
// const validator = require('../utils/validate');
//
// async function createTableValidation(req: Request, res: Response, next: NextFunction) {
//
//     const validationRule = {
//         "clubId": "required",
//         "name": "required|string",
//         "noOfPlayers": "required|minmax_player",
//         "password": "required|string|min:6|confirmed",
//         "gender": "string"
//     }
//
//     validator(req.body, validationRule, {}, (err: any, status: boolean) => {
//         if (!status) {
//             console.log("ERRORS :", err)
//
//             res.status(412)
//                 .send({
//                     success: false,
//                     message: 'Validation failed',
//                     data: err
//                 });
//         } else {
//             next();
//         }
//     });
//
// }
//
// export default {
//     createTableValidation
// }
//
