const { Router } = require('express')
const { get } = require('../helper/db')


const router = Router()

router.get("/", async (req, res) => {
    const db = get();
    const collection = db.collection('Projects');
    

    const projects = await collection.find({}).toArray().catch((err) => {
        console.log(err);
    })

    
    res.send({
        projects: projects
    })


})

module.exports = router