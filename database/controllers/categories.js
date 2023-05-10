const { Categories } = require("../db");
const categories = {}



async function create(name) {
    const categorie = await Categories.create({
        name: name
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return categorie

}

async function findAll() {
    const categories = await Categories.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return categories

}

async function update(id, name) {
    const categorie = await Categories.update(
        { name: name },
        { where: { id: id } }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return categorie
}


categories.create = create
categories.findAll = findAll
categories.update = update
module.exports = categories