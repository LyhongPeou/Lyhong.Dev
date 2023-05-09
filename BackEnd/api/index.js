const { Router } = require('express')
const router = Router()

router.use('/projects', require('./projects'))
router.use('/classes', require('./classes'))

module.exports = router