import {expressServer} from './server/expressServer';
import {createServer} from "http";
import {serverOnError} from "./server/serverOnError";
import {loadAppConfig} from "./appConfig/appConfig";

/** port */
let port: number = loadAppConfig().port;

/** set express port */
expressServer.set('port', port);

/** assign express to server */
const server = createServer(expressServer);

server.listen(port);

server.on('error', err => {
    serverOnError(err, port)
});
server.on('listening', () => {
    console.log(`server listening on port: ${port}`)
});
