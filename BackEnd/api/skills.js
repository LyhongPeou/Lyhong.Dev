const { get } = require('../helper/db')

const {Router} = require('express')

const router = Router()

router.get("/", async (req, res) => {
    const db = get();

    const collection = db.collection('Skills')


    const skills = await collection.find().toArray().catch((err) => {
        console.log(err)

    });

    console.log(skills)

    res.status(200).send({
        skills: skills 
    })

})

module.exports = router