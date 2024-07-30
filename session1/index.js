const http = require("http");
const crpto = require("crypto");
const PORT = 8082;

const server = http.createServer((req, res) => {
  const reqId = crpto.randomUUID();
  console.log("received request:", reqId);

  if (req.url === "/info") {
    const serverInfo = {
      serverName: "Crio Server",
      version: "1.0.0",
      currentDate: new Date().toDateString(),
      currentTime: new Date().toTimeString(),
    };

    res.writeHead(200, {
      "Content-type": "application/json",
      "x-req-id": reqId,
    });
    res.write(JSON.stringify(serverInfo));
    res.end();
  } else {
    res.writeHead(200, {
      "Content-type": "text/html",
      "x-req-id": reqId,
    });
    res.write(`
        <h1>hello from server</h1>
        <ul>
            <li>js</li>
        </ul>`);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
