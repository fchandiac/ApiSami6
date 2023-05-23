const express = require('express')
const router = express.Router()
const users = require('../database/controllers/users')

router.post('/users/create', (req, res) => {
    users.create(req.body.name, req.body.email, req.body.password, req.body.role).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/users/findAll', (req, res) => {
    users.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/update', (req, res) => {
    users.update(req.body.id, req.body.name, req.body.email, req.body.password, req.body.role).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/findOneById', (req, res) => {
    users.findOneById(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/destroy', (req, res) => {
    users.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
