exports.dbConfig = {
    user: "sa",
    password: "987654321",
    server: "DESKTOP-UB54GSB",
    database: "TestTarget",
    port: 1433
};
exports.webPort = 9000;

exports.dbMongoURI = "mongodb://kaossp:T3stTart3gServic3@cluster0-shard-00-00-eahtz.mongodb.net:27017,cluster0-shard-00-01-eahtz.mongodb.net:27017,cluster0-shard-00-02-eahtz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
exports.dbMongo = "test-target-service";

exports.httpMsgsFormat = "JSON"; // { "JSON", "HTML" };