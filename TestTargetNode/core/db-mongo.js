var MongoClient = require("mongodb").MongoClient;
var settings = require("../settings");

exports.findAll = function (_collection, callback) {
    MongoClient.connect(settings.dbMongoURI, function (err, client) {
        if (err) { console.log(err); }

        // perform actions on the collection object
        const collection = client.db(settings.dbMongo).collection(_collection);
        collection.find({}).toArray(function (err, items) {
            client.close();

            // send records as a response
            callback(items);
        });
    });
};


var ObjectId = require("mongodb").ObjectId;
exports.findOne = function (_collection, id, callback) {
    
    MongoClient.connect(settings.dbMongoURI, function (err, client) {
        if (err) { console.log(err); }

        // perform actions on the collection object
        const collection = client.db(settings.dbMongo).collection(_collection);

        collection.find(new ObjectId(id)).toArray(function (err, items) {
            client.close();
            callback(items);
        });
    });
}

exports.ObjectIdisValid = function (id, callback) {
    callback(ObjectId.isValid(id));
}