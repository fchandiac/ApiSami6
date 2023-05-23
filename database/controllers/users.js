const { Users } = require('../db')
const sequelize = require('sequelize')
const users = {}

async function create (name, password, profile_id){
    const user = await Users.create({
        name:name,
        password:password,
        profile_id:profile_id
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return user
}

async function findAll() {
    const users = await Users.findAll({
        order: [[sequelize.col('id'), 'DESC']]
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return users
}

async function findOneById(id) {
    const user = await Users.findOne({
        where: {id:id}
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return user
}

async function update(id, name, password, profile_id){
    const user = await Users.update({
        name:name,
        password:password,
        profile_id:profile_id
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return user
}

async function destroy(id){
    const user = await Users.destroy({
        where: {id:id}
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return user
}

// async function login(name, password){



users.create = create
users.findAll = findAll
users.findOneById = findOneById
users.update = update
users.destroy = destroy

module.exports = users