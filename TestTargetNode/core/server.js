var http = require("http");
var settings = require("../settings");
var router = require("./router");

http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            router.sendToTargetGET(req, resp);
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
