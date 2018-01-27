var db = require("../core/db-mongo");
var httpMsgs = require("../core/httpMsgs")
const currentCollection = "products";

exports.getList = function (req, resp) {
    db.findAll(currentCollection, function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        } else {
            httpMsgs.sendJson(req, resp, data);
        }
    });
};

exports.getOne = function (req, resp, id) {
    db.findOne(currentCollection, id, function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        } else {
            httpMsgs.sendJson(req, resp, data);
        }
    });
};

exports.ObjectIdisValid = function (id, callback) {
    db.ObjectIdisValid(id, function (valid) { callback(valid); });
}

exports.add = function (req, resp, reqBody) {

};

exports.update = function (req, resp, reqBody) {

};

exports.delete = function (req, resp, reqBody) {

};