const express = require('express');

require('dotenv').config();


const db = require('./helper/db');

const app = express();

const morgan = require('morgan')

app.use(express.json())

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})


const api = require('./api')

app.use(morgan('dev'))

app.use(express.json())

app.use('/', api)


app.use('*', function (req, res, next) {
    res.status(404).send({
        err: "This URL was not recognized: " + req.originalUrl
    })
})

app.use('*', function (err, req, res, next) {
    console.error("== Error:", err)
    res.status(500).send({
        err: "Server error.  Please try again later."
    })
})



db.connect(() => {
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
});





