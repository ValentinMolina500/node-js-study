const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv")

    /* Tells browser how to display the data, will download the file with the file name specified */
    res.setHeader("Content-Disposition", "attachment;filename=test.csv")

    res.writeHead(200)
    res.end(`id, name,email\n1,Sammy Shark,shark@ocean.com`)
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
