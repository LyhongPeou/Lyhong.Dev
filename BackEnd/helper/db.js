require('dotenv').config()
const url = `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@portfolio.0caquhu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const mongoClient = require('mongodb').MongoClient;

let mongodb;

function connect(callback) {
    mongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
        mongodb = db.collection('portfolio');
        callback();
    });
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






