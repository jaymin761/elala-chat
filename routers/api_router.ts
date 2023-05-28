import {AppConstants} from "../utils/appconstants";
import express from "express";

import apiController from "../controllers/ApiController";

let Router = express.Router()

Router.route(AppConstants.API_PATH_CHAT_HISTORY).get(apiController.getMessages)
export {Router}
