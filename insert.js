const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/exampledb';

MongoClient.connect(url, function (err,database) {

    if(err) throw err;
    const db = database.db('myDatabaseNameAsAString')
    const collection = db.collection('documents');
    collection.insertMany([
    //     task:'one task',
    //     done:'true'
    //     },{
    //         task:'second task',
    //         done:'true'
    //     }
    //
            {
                task:'necessary task',
                priority :1

            },{
                task:'unnecessary task',
                priority :4
            },{
                task:'important task',
                priority :2

            }
    ],
        function (err,result) {
        console.log(result)
        database.close();
        }
    )
    
})