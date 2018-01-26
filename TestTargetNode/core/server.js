var http = require("http");
var settings = require("../settings");
var product = require("../controllers/product");


http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                resp.end();
            } else if (req.url === "/products") {
                product.getList(req, resp);
            }
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }
}).listen(settings.webPort, function () {
    console.log("Start listening at: " + settings.webPort);
})