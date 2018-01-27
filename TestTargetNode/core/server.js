var http = require("http");
var settings = require("../settings");
var product = require("../controllers/product");
var httpMsgs = require("../core/httpMsgs");

http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                httpMsgs.showHome(req, resp);
            } else if (req.url === "/products") {
                product.getList(req, resp);
            } else {
                if (req.url.includes("/products/")) {
                    var id = req.url.substring(("/products/").length, req.url.length);
                    product.ObjectIdisValid(id, function (callback) {
                        if (callback) {
                            product.getOne(req, resp, id);
                        } else {
                            httpMsgs.show404(req, resp);
                        }
                    });
                }
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