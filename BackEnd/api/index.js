const { Router } = require('express')
const router = Router()

router.use('/projects', require('./projects'))

module.exports = router