const express = require('express')
const router = express.Router()
const pays = require('../database/controllers/pays')

router.post('/pays/create', (req, res) => {
    pays.create(
        req.body.sale_id, 
        req.body.customer_id, 
        req.body.amount, 
        req.body.payment_method, 
        req.body.state,
        req.body.date
        ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/pays/findAll', (req, res) => {
    pays.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/pays/updateState', (req, res) => {
    pays.updateState(req.body.id, req.body.state).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/pays/destroy', (req, res) => {
    pays.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router