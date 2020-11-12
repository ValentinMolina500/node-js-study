const http = require('http')

/**
 * Special private address that computers use to refer to themselves.
 *
 * Typically equal to interal IP address '127.0.0.1'. Only available to the local computer.
 */
const host = 'localhost'

/**
 * Servers use this an endpoint or 'door' for our IP address.
 */
const port = 8000

const requestListener = function (req, res) {
    /* Set HTTP status code */
    res.writeHead(200)

    /* Returns any data the server has to return */
    res.end("My first server")
}

const server = http.createServer(requestListener);

/* Explicit port and host needed for load balancing/DNS aliasing */
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})



