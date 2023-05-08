const express = require('express');

require('dotenv').config();


const db = require('./helper/db');

const app = express();

db.connect(() => {
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
});

console.log(db.get());


