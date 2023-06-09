
const {Sequelize, DataTypes} = require('sequelize')
const db = {};
const config = require('./config/config')

db.connection = new Sequelize(
    'sami_6',
    'root',
    'Fenasantma', 
    {host: 'localhost', dialect: "mysql", timezone: '-04:00'})

db.Categories = require('./models/categories')(db.connection, DataTypes)
db.Taxes = require('./models/taxes')(db.connection, DataTypes)
db.Products = require('./models/products')(db.connection, DataTypes)
// db.Prices = require('./models/prices')(db.connection, DataTypes)
db.Storages = require('./models/storages')(db.connection, DataTypes)
db.Stocks = require('./models/stocks')(db.connection, DataTypes)
db.Sales = require('./models/sales')(db.connection, DataTypes)
db.Profiles = require('./models/profiles')(db.connection, DataTypes)
db.Users = require('./models/users')(db.connection, DataTypes)
db.SalesDetails = require('./models/sales_details')(db.connection, DataTypes)
db.Customers = require('./models/customers')(db.connection, DataTypes)
db.Pays = require('./models/pays')(db.connection, DataTypes)
db.Orders = require('./models/orders')(db.connection, DataTypes)
db.OrdersDetails = require('./models/orders_details')(db.connection, DataTypes)
// db.Deliveries = require('./models/deliveries')(db.connection, DataTypes)


db.Products.belongsTo(db.Categories)
// db.Products.belongsTo(db.Prices)
db.Products.belongsTo(db.Taxes)
db.Products.hasMany(db.Stocks)
db.Stocks.belongsTo(db.Products)
db.Stocks.belongsTo(db.Storages)
db.Users.belongsTo(db.Profiles)
db.SalesDetails.belongsTo(db.Products)
db.SalesDetails.belongsTo(db.Sales)
db.Sales.hasMany(db.SalesDetails)
db.OrdersDetails.belongsTo(db.Orders)
db.OrdersDetails.belongsTo(db.Products)
db.Orders.hasMany(db.OrdersDetails)
db.Users.belongsTo(db.Profiles)
// db.Deliveries.belongsTo(db.Orders)
// db.OrdersDetails.belongsTo(db.Products)
// db.Sales.hasMany(db.SalesDetails)
// db.SalesDetails.belongsTo(db.Products)
// db.SalesDetails.belongsTo(db.Categories)
// db.SalesDetails.belongsTo(db.Sales)




module.exports = db;


