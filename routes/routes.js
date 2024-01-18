const express = require('express');
const router = express.Router()

//Get all Method
router.get('/', (req, res) => {
    res.render('index')
})

//Get by ID Method

module.exports = router;