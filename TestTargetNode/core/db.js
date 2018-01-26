var sqlDb = require("mssql");
var settings = require("../settings");

exports.executeSQL = function (sql, callback) {
    sqlDb.close();
    sqlDb.connect(settings.dbConfig, function (err) {
        if (err) {
            console.log(err);
        }

        var request = new sqlDb.Request();
        request.query(sql, function (err, recordset) {
            if (err) console.log(err);

            // send records as a response
            callback(recordset);
        })
    });
    
    

};