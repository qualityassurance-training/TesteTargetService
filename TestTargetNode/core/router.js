var httpMsgs = require("../core/httpMsgs");
var functions = ["products", "clients", "order", "order-items"];

//controllers
var product = require("../controllers/product");
//--

function sendToTargetGET(req, resp) {
    var sentences = req.url.split("/");

    //Show Home Page
    if (sentences.length == 2 && sentences[1] == "") { httpMsgs.showHome(req, resp); }

    //Check for Without Parameters
    else if (sentences.length == 2 && sentences[1] != "") {
        wihoutParameters(sentences, req, resp);
    }

    //Check for With Parameters
    else if (sentences.length == 3 && sentences[1] != "" && sentences[2] != "") {
        withParameters(sentences, req, resp)
    }

    //Any other
    else {
        //Resource not found
        httpMsgs.show404(req, resp);
    }
}

function wihoutParameters(sentences, req, resp) {
    switch (sentences[1]) {
        case functions[0]:
            product.getList(req, resp);
            break;
        case functions[1]:
            break;
        case functions[2]:
            break;
        case functions[3]:
            break;
        default:
            httpMsgs.show404(req, resp);
            break;
    }
}

function withParameters(sentences, req, resp) {
    if (validateId(sentences[2], req, resp)) {
        switch (sentences[1]) {
            case functions[0]:
                product.getOne(req, resp, sentences[2]);
                break;
            case functions[1]:
                break;
            case functions[2]:
                break;
            case functions[3]:
                break;
            default:
                httpMsgs.show404(req, resp);
                break;
        }
    } else {
        httpMsgs.show500(req, resp, "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
    }

}

function validateId(id, req, resp) {
    var res = false;
    product.ObjectIdisValid(id, function (callback) { res = callback; });
    return res;
}

module.exports = { sendToTargetGET }