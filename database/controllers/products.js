const { Products, Categories, Taxes, Prices, Storages, Stocks} = require("../db");
const products = {}
const sequelize = require('sequelize');
const storages = require("../models/storages");

async function create(name, code, category_id, price_id){
    const product = await Products.create({
        name: name,
        code: code,
        category_id: category_id,
        price_id: price_id
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
        
    return product
 
}
// {include: [{model: Categories}, {model: Taxes}]}

async function findAll(){
    const products =  await Products.findAll(
        {
            include: [{model: Categories}, {model: Prices, include:[{model: Taxes}]}, {model: Stocks, include:[{model:Storages}]} ],
            order: [[sequelize.literal('name'), 'asc']]
        }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return products 
}

async function destroy(id){
    const product = await Products.destroy({where:{id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function findOneByName(name){
    const product = await Products.findOne({
        where: {name:name},
        include: [{model: Categories}, {model: Prices}]}
        ).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function findOneByCode(code){
    const product = await Products.findAll({
        where: {code:code},
        include: [{model: Categories}, {model: Prices}, {model: Stocks, include:[{model:Storages}]}]}
        ).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function find_all_by_code(code){
    const product = await Products.findAll({
        where: {code:code},
        include: [{model: Categories}, {model: Prices}]}
        ).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function findOneById(id){
    const product = await Products.findOne({
        where: {id:id},
        include: [{model: Categories}, {model: Prices}, {model: Stocks, include:[{model:Storages}]}]}
        ).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function updateFull(id, name, code, category_id, price_id){
    const product = await Products.update({
            name: name,
            code: code,
            category_id: category_id,
            price_id: price_id
        }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function update_no_price(id, name, code, category_id){
    const product = await Products.update({
            name: name,
            code: code,
            category_id: category_id,
        }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

async function updateFavorite(id, favorite){
    const product = await Products.update({
        favorite:favorite
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
return product
}

async function updateStockControl(id, stock_control){
    const product = await Products.update({
        stock_control:stock_control
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
return product
}

async function update_ticket(id, ticket){
    const product = await Products.update({
        ticket:ticket
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
return product
}

async function find_all_favorites(){
    const product = await Products.findAll({
        include: [{model: Categories}, 
            {model: Prices}],
        where: {favorite: true}
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return product
}

products.create = create
products.findAll = findAll
products.destroy = destroy
products.findOneByName = findOneByName
products.findOneById = findOneById
products.findOneByCode = findOneByCode
products.updateFull = updateFull
products.update_no_price = update_no_price
products.find_all_favorites = find_all_favorites
products.updateFavorite = updateFavorite
products.find_all_by_code = find_all_by_code
products.update_ticket = update_ticket
products.updateStockControl = updateStockControl
// products.update = update
module.exports = products