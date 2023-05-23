const express = require('express')
const router = express.Router()
const customers = require('../database/controllers/customers')

router.post('/customers/create', (req, res) => {
    customers.create(
        req.body.rut,
        req.body.name,
        req.body.activity,
        req.body.distric,
        req.body.city,
        req.body.address
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/customers/findAll', (req, res) => {
    customers.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/customers/update', (req, res) => {
    customers.update(req.body.id, req.body.name, req.body.phone, req.body.address, req.body.email, req.body.rnc).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/customers/destroy', (req, res) => {
    customers.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router