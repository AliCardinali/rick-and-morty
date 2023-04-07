const http = require("http");
const getChardById = require("./controllers/getCharById");
//fs = requiere("fs");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    const id = url.split("/").at(-1);

    if (url.includes("/rickandmorty/character")) {
      getChardById(res, id);
    }
  })
  .listen(3001, "localhost");
