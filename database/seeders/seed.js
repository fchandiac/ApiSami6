'use strict';

//SIMPLE CONFIGURATION
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('profiles',
            [
                {
                    id: 1001,
                    name: 'Administrador',
                    un_lock: true,
                    config: true,
                    products: true,
                    users: true,
                    accounting: true,
                }
            ]
            , {})
        await queryInterface.bulkInsert('users',
            [
                {
                    id: 1001,
                    user: 'admin',
                    name: 'Administrador',
                    pass: 'admin',
                    profile_id: 1001
                },
                {
                    id: 1002,
                    user: 'user',
                    name: 'user',
                    pass: 'user',
                    profile_id: 1001
                }
            ]
            , {})

    

        await queryInterface.bulkInsert('taxes',
            [
                { name: 'iva', value: 0.19 }
            ]
            , {})


        await queryInterface.bulkInsert('storages',
            [
                {
                    id: 1001,
                    name: 'Sala de ventas'
                },
                {
                    id: 1002,
                    name: 'Bodega'
                },

            ], {})


    },
};
