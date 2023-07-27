const { Router } = require('express')
const router = Router()

router.use('/projects', require('./projects'))
router.use('/classes', require('./classes'))
router.use('/skills', require('./skills'))
module.exports = router