const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

/**
 * The req object provides request details.
 *
 * The res object is used to return data to the caller.
 */
const server = http.createServer((req, res) => {

    /* Indicates successful response */
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')

    /* Close the response with a message */
    res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
