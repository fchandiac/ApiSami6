const {Pays} = require('../db')
const pays = {}
const sequelize = require('sequelize')

async function create(sale_id, customer_id, amount, payment_method, state, date) {
    const pay = await Pays.create({
        sale_id: sale_id,
        customer_id: customer_id,
        amount: amount,
        payment_method: payment_method,
        state: state,
        date: date
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})

    return pay
}

async function findAll() {
    const pays = await Pays.findAll(
        {order: [['state', 'ASC']]}
    ).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return pays
}


async function updateState(id, state) {
    const pay = await Pays.update(
        {state: state},
        {where: {id: id}}
    ).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return pay
}

async function destroy(id) {
    const pay = await Pays.destroy(
        {where: {id: id}}
    ).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return pay
}

async function findAllBetweenDates(start, end){
    const pays = await Pays.findAll(
        {
            where: {date: {[sequelize.Op.between]: [start, end]}}, 
            order: [['state', 'ASC'], ['createdAt', 'DESC']]
        }
    ).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return pays
}

pays.create = create
pays.findAll = findAll
pays.updateState = updateState
pays.destroy = destroy
pays.findAllBetweenDates = findAllBetweenDates

module.exports = pays