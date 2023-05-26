const express = require('express')
const router = express.Router()
const sales_detail = require('../database/controllers/salesDetails')


router.post('/salesDetails/create', (req, res) => {
    sales_detail.create(
        req.body.sale_id, 
        req.body.product_id, 
        req.body.quanty, 
        req.body.sale,  
        req.body.discount, 
        req.body.subtotal, 
        req.body.name
        ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/salesDetails/findAllBySale', (req, res) => {
    sales_detail.findAllBySale(req.body.sale_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.get('/sales_details/find_all', (req, res) => {
    sales_detail.find_all().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales_details/find_all_by_date_range_group_by_category', (req, res) => {
    sales_detail.find_all_by_date_range_group_by_category(req.body.start_date, req.body.end_date).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales_details/find_all_by_date_range_group_by_product', (req, res) => {
    sales_detail.find_all_by_date_range_group_by_product(req.body.start_date, req.body.end_date).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales_details/find_all_by_date_range', (req, res) => {
    sales_detail.find_all_by_date_range(req.body.start_date, req.body.end_date).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales_details/find_all_by_date_range_and_category', (req, res) => {
    sales_detail.find_all_by_date_range_and_category(req.body.start_date, req.body.end_date, req.body.category_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales_details/find_total_by_date_range', (req, res) => {
    sales_detail.find_total_by_date_range(req.body.start_date, req.body.end_date).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales_details/find_total_by_date_range_and_category', (req, res) => {
    sales_detail.find_total_by_date_range_and_category(req.body.start_date, req.body.end_date, req.body.category_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router