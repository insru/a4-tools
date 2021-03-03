import {Request, Response, Router} from "express";
import {getGame} from "../dataProcessing/parseData";

export var apiRouter: Router = Router();

apiRouter.get('/game', function (req: Request, res: Response) {
    if (req.query.id != undefined) {
        let gameId: string = req.query.id.toString();
        getGame(gameId).then(
            result => {
                res.send(result);
            },
            reject => {
                res.status(404);
                res.send(reject);
            },
        )
    } else {
        res.sendStatus(500);
    }
});
