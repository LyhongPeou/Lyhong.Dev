const {Router} = require('express');
const {get} = require('../helper/db');


const router = Router();

router.get("/", async (req, res) => {
    const db = get();
    const collection = db.collection('Classes');
    

    const Classes = await collection.find({}).toArray().catch((err) => {
        console.log(err);
    })

    console.log(Classes);
    res.send({
        Classes: Classes
    })
})


module.exports = router