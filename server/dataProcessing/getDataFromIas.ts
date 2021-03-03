import {loadAppConfig} from "../appConfig/appConfig";

let url: string = loadAppConfig().apiLink;

const https = require('https');

export async function getDataFromIas(gameId: string) {
    return new Promise<string>((resolve, reject) => {
        https.get(`${url}/${gameId}`, (res) => {
            let Data: string = "";
            res.on('data', (d) => {
                Data = Data + d.toString();
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(Data)
                } else {
                    reject(Data)
                }
            })


        }).on('error', (e) => {
            reject(e)
        });
    })
}
