'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
    };
    Users.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Users',
        underscored: true,
    });
    return Users;
};