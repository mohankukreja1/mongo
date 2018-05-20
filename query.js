const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/exampledb';

MongoClient.connect(url, function (err,database) {

    if(err) throw err;
    const db = database.db('myDatabaseNameAsAString')
    const collection = db.collection('documents');
    collection.find({
       $and:[
           {
           priority :{gt: 1}},
           {done:false}



       ]


    }).toArray(function(err, docs) {
        if(err) throw err;
        console.log("Found the following records");
        console.log(docs)
database.close();
    });

})