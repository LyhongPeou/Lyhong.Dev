require('dotenv').config()
const url = `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@portfolio.0caquhu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const mongoUrl = `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@portfolio.0caquhu.mongodb.net/${process.env.MONGO_DB}`

const mongoClient = require('mongodb').MongoClient;

let mongodb;

function connect(callback) {
    mongoClient.connect(mongoUrl).then((client) => {
        mongodb = client.db();
        callback();
    }
    ).catch((err) => {  
        console.log(err);
    }
    );

}

function get() {
    return mongodb;
}

function close() {
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};






