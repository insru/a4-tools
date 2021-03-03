import {readFileSync} from "fs";
import {appConfig} from "./appConfigInterface";
import path from "path";

const configPath = path.join(__dirname, '../../../appConfig.json');

let AppConfig: appConfig = JSON.parse(readFileSync(configPath).toString());

export function loadAppConfig(): appConfig {
    return AppConfig;
}
