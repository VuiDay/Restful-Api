const express = require('express')
const router = express.Router()
const {homePage, homeDev, homeAbc, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser} = require('../controllers/homeController')

router.get('/', homePage)
router.get('/dev', homeDev)
router.get('/abc', homeAbc)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdateUser)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)

module.exports = router