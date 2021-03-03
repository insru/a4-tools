export function serverOnError(error, port: number) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind: string = `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
