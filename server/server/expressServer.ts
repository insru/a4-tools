import {apiRouter} from "../routes/apiRoute";
import express from "express";
import cors from "cors";
import logger from "morgan";

export var expressServer: express.Application = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(express.urlencoded({extended: false}));
expressServer.use(logger('dev'));
expressServer.use('', apiRouter);
