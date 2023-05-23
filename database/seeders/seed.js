'use strict';


module.exports = {
    async up(queryInterface, Sequelize) {
      
        await queryInterface.bulkInsert('categories',
        [
            {
                "name": "vehicular",
                "id": 1001
            },
            {
                "name": "jardin",
                "id": 1002
            },
            {
                "name": "ciclismo",
                "id": 1003
            },
            {
                "name": "mascota",
                "id": 1004
            },
            {
                "name": "herramienta manual",
                "id": 1005
            },
            {
                "name": "ruedas",
                "id": 1006
            },
            {
                "name": "hogar",
                "id": 1007
            },
            {
                "name": "accesorio herramienta",
                "id": 1008
            },
            {
                "name": "seguridad",
                "id": 1009
            },
            {
                "name": "herramienta electrica",
                "id": 1010
            },
            {
                "name": "muebleria",
                "id": 1011
            },
            {
                "name": "construccion",
                "id": 1012
            },
            {
                "name": "material accesorio",
                "id": 1013
            },
            {
                "name": "pintura",
                "id": 1014
            },
            {
                "name": "accesorio trabajo",
                "id": 1015
            },
            {
                "name": "ceramica",
                "id": 1016
            },
            {
                "name": "Herramientas",
                "id": 1017
            },
            {
                "name": "brocas",
                "id": 1018
            },
            {
                "name": "discos",
                "id": 1019
            },
            {
                "name": "gasfiteria",
                "id": 1020
            },
            {
                "name": "campo",
                "id": 1021
            },
            {
                "name": "electricidad",
                "id": 1022
            },
            {
                "name": "accesorio",
                "id": 1023
            },
            {
                "name": "herramienta a gas",
                "id": 1024
            },
            {
                "name": "combustible",
                "id": 1025
            },
            {
                "name": "adhesivos",
                "id": 1026
            },
            {
                "name": "cables",
                "id": 1027
            },
            {
                "name": "pvc sanitario",
                "id": 1028
            },
            {
                "name": "pvc hidraulico",
                "id": 1029
            },
            {
                "name": "planza",
                "id": 1030
            },
            {
                "name": "ppr",
                "id": 1031
            },
            {
                "name": "fierros",
                "id": 1032
            },
            {
                "name": "herramienta a bencina",
                "id": 1033
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

        
            await queryInterface.bulkInsert('products',
            [
                {
                    "id": 1001,
                    "code": "001",
                    "name": "Cable de traspaso de corriente 1200 amp",
                    "category_id": 1001,
                    "purchase": 230,
                    "sale": 13990,
                    "tax_id": 1001
                },
                {
                    "id": 1002,
                    "code": "002",
                    "name": "Set de conectores jardín manguera",
                    "category_id": 1002,
                    "purchase": 630,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1003,
                    "code": "003",
                    "name": "terminal de batería",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1004,
                    "code": "004",
                    "name": "Cadena de bicicleta",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 2890,
                    "tax_id": 1001
                },
                {
                    "id": 1005,
                    "code": "005",
                    "name": "Botella de agua",
                    "category_id": 1003,
                    "purchase": 100,
                    "sale": 2490,
                    "tax_id": 1001
                },
                {
                    "id": 1006,
                    "code": "006",
                    "name": "Corona pequeña",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1007,
                    "code": "007",
                    "name": "Corona mediana",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 850,
                    "tax_id": 1001
                },
                {
                    "id": 1008,
                    "code": "008",
                    "name": "Corona grande",
                    "category_id": 1003,
                    "purchase": 54,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1009,
                    "code": "009",
                    "name": "Broche malla rachel",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 150,
                    "tax_id": 1001
                },
                {
                    "id": 1010,
                    "code": "010",
                    "name": "Collar de perro grande",
                    "category_id": 1004,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1011,
                    "code": "011",
                    "name": "Muñequera Manubrio Bicicleta",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1012,
                    "code": "012",
                    "name": "Sillin chico",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1013,
                    "code": "013",
                    "name": "Nivel de metro",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 10500,
                    "tax_id": 1001
                },
                {
                    "id": 1014,
                    "code": "014",
                    "name": "Cadena de Perro",
                    "category_id": 1004,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1015,
                    "code": "015",
                    "name": "Espatula plastica",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1016,
                    "code": "016",
                    "name": "Espatula metalica de 4 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1017,
                    "code": "017",
                    "name": "Espátula metálica 5 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1018,
                    "code": "018",
                    "name": "Espátula metálica 3 pulgadas",
                    "category_id": 1005,
                    "purchase": 35,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1019,
                    "code": "019",
                    "name": "Nivel de aluminio de 18 pulgadas",
                    "category_id": 1005,
                    "purchase": 40,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1020,
                    "code": "020",
                    "name": "Rueda de llegua",
                    "category_id": 1006,
                    "purchase": 780,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1021,
                    "code": "021",
                    "name": "Antena de tv aire",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 15900,
                    "tax_id": 1001
                },
                {
                    "id": 1022,
                    "code": "022",
                    "name": "Set llave de punta corona",
                    "category_id": 1005,
                    "purchase": 1745,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 1023,
                    "code": "023",
                    "name": "Grapa de 10 mm para engrapadora rojo-azul",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1024,
                    "code": "024",
                    "name": "Engrapadora metalica",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10990,
                    "tax_id": 1001
                },
                {
                    "id": 1025,
                    "code": "025",
                    "name": "Caiman de 10 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1026,
                    "code": "026",
                    "name": "Caiman de 7 pulgadas",
                    "category_id": 1005,
                    "purchase": 845,
                    "sale": 5500,
                    "tax_id": 1001
                },
                {
                    "id": 1027,
                    "code": "027",
                    "name": "Pinza para anillo de 5 pulgadas",
                    "category_id": 1005,
                    "purchase": 2800,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1028,
                    "code": "028",
                    "name": "Pinza para anillo de 7 pulgadas",
                    "category_id": 1005,
                    "purchase": 2700,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1029,
                    "code": "029",
                    "name": "Juego de destornillador de 2 pcs",
                    "category_id": 1005,
                    "purchase": 500,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1030,
                    "code": "030",
                    "name": "Faja lumbar",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 1031,
                    "code": "031",
                    "name": "Juega de dado con pinza",
                    "category_id": 1005,
                    "purchase": 350,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1032,
                    "code": "032",
                    "name": "Llave marca Stilson de 14 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 1033,
                    "code": "033",
                    "name": "Set de destornilladores libres de 3pcs",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1034,
                    "code": "034",
                    "name": "Juego de llave allen de 9 pcs",
                    "category_id": 1005,
                    "purchase": 1730,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1035,
                    "code": "035",
                    "name": "Juego de llave allen de 13 pcs",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8600,
                    "tax_id": 1001
                },
                {
                    "id": 1036,
                    "code": "036",
                    "name": "Juego de llave estrella de 8 pcs",
                    "category_id": 1005,
                    "purchase": 1630,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1037,
                    "code": "037",
                    "name": "Llave francesa 6 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1038,
                    "code": "038",
                    "name": "Llave francesa 8 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1039,
                    "code": "039",
                    "name": "Llave francesa 10 pulgadas",
                    "category_id": 1005,
                    "purchase": 1541,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1040,
                    "code": "040",
                    "name": "Pinza marca Fujimo de 8 pulgadas",
                    "category_id": 1005,
                    "purchase": 2032,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1041,
                    "code": "041",
                    "name": "Cortante de 6 pulgadas",
                    "category_id": 1005,
                    "purchase": 9721,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1042,
                    "code": "042",
                    "name": "Alicate de 8 pulgadas marca Hotechi",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5500,
                    "tax_id": 1001
                },
                {
                    "id": 1043,
                    "code": "044",
                    "name": "Cautín plano",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1044,
                    "code": "045",
                    "name": "Cincel  5/8 x  8 pulgadas",
                    "category_id": 1005,
                    "purchase": 11200,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1045,
                    "code": "046",
                    "name": "Rueda de piso de 4 pulgadas",
                    "category_id": 1006,
                    "purchase": 205,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 1046,
                    "code": "047",
                    "name": "Rueda de piso de 3 pulgadas",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 1047,
                    "code": "048",
                    "name": "Rueda de piso 2,5 pulga",
                    "category_id": 1006,
                    "purchase": 2730,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 1048,
                    "code": "049",
                    "name": "Rueda de piso 2 pulga",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1049,
                    "code": "050",
                    "name": "Chaleco reflectante",
                    "category_id": 1009,
                    "purchase": 2470,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1050,
                    "code": "051",
                    "name": "Martillo mango den fibre marca Trupper",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 11900,
                    "tax_id": 1001
                },
                {
                    "id": 1051,
                    "code": "052",
                    "name": "Echona",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3990,
                    "tax_id": 1001
                },
                {
                    "id": 1052,
                    "code": "053",
                    "name": "Martillo de peña chico",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1053,
                    "code": "054",
                    "name": "Martillo de peña grande",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1054,
                    "code": "055",
                    "name": "Mazo de goma grande para cerámica",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1055,
                    "code": "056",
                    "name": "Escofina para madera Por Unidad",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1056,
                    "code": "057",
                    "name": "Riel telescópico para mueble de 14 pulgadas",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 3890,
                    "tax_id": 1001
                },
                {
                    "id": 1057,
                    "code": "058",
                    "name": "Fraguador de goma de 24 cm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1058,
                    "code": "059",
                    "name": "Serrucho de poda",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1059,
                    "code": "060",
                    "name": "Tijera para esquilar",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1060,
                    "code": "061",
                    "name": "Cincel 18x350 mm",
                    "category_id": 1005,
                    "purchase": 16,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1061,
                    "code": "062",
                    "name": "Alambre negro de kilo del 18",
                    "category_id": 1012,
                    "purchase": 22,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1062,
                    "code": "063",
                    "name": "Rueda mesa chica",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1063,
                    "code": "064",
                    "name": "Rueda mesa mediana",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 1064,
                    "code": "065",
                    "name": "Rueda mesa grande 4 Pulgadas",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1065,
                    "code": "066",
                    "name": "Alambre galvanizado de kilo del 18",
                    "category_id": 1012,
                    "purchase": 773,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1066,
                    "code": "067",
                    "name": "Alambre negro de kilo del 14",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1067,
                    "code": "068",
                    "name": "Ingletadora con serrucho",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 1068,
                    "code": "069",
                    "name": "Serrucho vulcanita",
                    "category_id": 1005,
                    "purchase": 950,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1069,
                    "code": "070",
                    "name": "Llave saca filtro",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1070,
                    "code": "071",
                    "name": "Bombin De Mano ",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1071,
                    "code": "072",
                    "name": "Plumilla de auto",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1072,
                    "code": "073",
                    "name": "Cadena de bici seguridad",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1073,
                    "code": "074",
                    "name": "Antena indoor tv",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1074,
                    "code": "075",
                    "name": "Amarra plástica 40 cm",
                    "category_id": 1013,
                    "purchase": 12134,
                    "sale": 150,
                    "tax_id": 1001
                },
                {
                    "id": 1075,
                    "code": "076",
                    "name": "Amarra plástica 15 cm",
                    "category_id": 1013,
                    "purchase": 0,
                    "sale": 80,
                    "tax_id": 1001
                },
                {
                    "id": 1076,
                    "code": "077",
                    "name": "Amarra Plastica 4.8 x 300mm",
                    "category_id": 1013,
                    "purchase": 0,
                    "sale": 100,
                    "tax_id": 1001
                },
                {
                    "id": 1077,
                    "code": "078",
                    "name": "Amarra plástica 50 cm",
                    "category_id": 1013,
                    "purchase": 3048,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1078,
                    "code": "079",
                    "name": "Juego de escobilla acero de 4 pcs",
                    "category_id": 1005,
                    "purchase": 3045,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1079,
                    "code": "080",
                    "name": "Huincha de 30 metros",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1080,
                    "code": "081",
                    "name": "Escuadra aluminio Hoteche 10 Pulg",
                    "category_id": 1005,
                    "purchase": 9854,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1081,
                    "code": "082",
                    "name": "Escuadra Triangular De Angulos",
                    "category_id": 1005,
                    "purchase": 9853,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1082,
                    "code": "083",
                    "name": "Rodillo texturado",
                    "category_id": 1014,
                    "purchase": 3050,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1083,
                    "code": "084",
                    "name": "Rodillo malla",
                    "category_id": 1014,
                    "purchase": 3046,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1084,
                    "code": "085",
                    "name": "Huincha de Medir 8mts x 25mm Toolcraft",
                    "category_id": 1005,
                    "purchase": 9353,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 1085,
                    "code": "086",
                    "name": "Huincha de medir 5 metros Toolcraft",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1086,
                    "code": "087",
                    "name": "Huincha de medir de 3 mts Nicholson",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1087,
                    "code": "088",
                    "name": "Rodillo chiporro de 18 cm Lizcal",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1088,
                    "code": "089",
                    "name": "Rodillo esponja H-Full 18 cm",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1089,
                    "code": "090",
                    "name": "coleto trupper porta herramientas",
                    "category_id": 1015,
                    "purchase": 3595,
                    "sale": 18590,
                    "tax_id": 1001
                },
                {
                    "id": 1090,
                    "code": "091",
                    "name": "Cortador ppr Marca Sata",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 14990,
                    "tax_id": 1001
                },
                {
                    "id": 1091,
                    "code": "092",
                    "name": "Separador de cerámica 2 mm",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1092,
                    "code": "093",
                    "name": "Separador de cerámica 3 mm",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1093,
                    "code": "094",
                    "name": "Separador de cerámica 5 mm",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1094,
                    "code": "095",
                    "name": "Remachadora de 13 pulgadas marca Ante",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 1095,
                    "code": "096",
                    "name": "Remachadora de 9 pulgadas marca Ante",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4790,
                    "tax_id": 1001
                },
                {
                    "id": 1096,
                    "code": "097",
                    "name": "Lima plana de 8 pulgadas",
                    "category_id": 1005,
                    "purchase": 1357,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1097,
                    "code": "098",
                    "name": "Lima triangular de 8 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1098,
                    "code": "099",
                    "name": "Arco de cierra para Manualidades",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1099,
                    "code": 100,
                    "name": "Formón con mango plástico por Unidad",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1100,
                    "code": 101,
                    "name": "Brocha de 4 pulgadas",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1101,
                    "code": 102,
                    "name": "Brocha de 3 pulgadas",
                    "category_id": 1014,
                    "purchase": 7200,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1102,
                    "code": 103,
                    "name": "Brocha de 2,5 pulgadas",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1103,
                    "code": 104,
                    "name": "Brocha de 2 pulgadas",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 1104,
                    "code": 105,
                    "name": "Brocha de 1,5 pulgadas",
                    "category_id": 1014,
                    "purchase": 4040,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1105,
                    "code": 106,
                    "name": "Set Atornilladores 6 pcs Ineco",
                    "category_id": 1005,
                    "purchase": 3160,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1106,
                    "code": 107,
                    "name": "Marco de cierra con hoja",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1107,
                    "code": 108,
                    "name": "Nivel torpedo pequeño",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1108,
                    "code": 109,
                    "name": "Destornillador 2 en 1",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1109,
                    "code": 110,
                    "name": "Repuesto de grapa de 12 mm",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1850,
                    "tax_id": 1001
                },
                {
                    "id": 1110,
                    "code": 111,
                    "name": "Internit 8",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 21000,
                    "tax_id": 1001
                },
                {
                    "id": 1111,
                    "code": 112,
                    "name": "Andaba de 1 pulgada",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1112,
                    "code": 113,
                    "name": "Andaba de 1, 1/2 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1113,
                    "code": 114,
                    "name": "Andaba de 2 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1114,
                    "code": 115,
                    "name": "Andaba de 6 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1115,
                    "code": 116,
                    "name": "Cerrojo portón de 10 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 1116,
                    "code": 117,
                    "name": "Formón 7/8 cabeza metálica",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1117,
                    "code": 118,
                    "name": "Picaporte 4 pulgadas",
                    "category_id": 1007,
                    "purchase": 3099,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1118,
                    "code": 119,
                    "name": "Picaporte de 4 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1119,
                    "code": 120,
                    "name": "Picaporte dorado de 5 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1120,
                    "code": 121,
                    "name": "Picaporte plano de 4 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1121,
                    "code": 122,
                    "name": "Picaporte lioli 2 pulgadas",
                    "category_id": 1007,
                    "purchase": 2820,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1122,
                    "code": 123,
                    "name": "Rodillera Tactix",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1123,
                    "code": 124,
                    "name": "Formón 3/8",
                    "category_id": 1005,
                    "purchase": 6300,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1124,
                    "code": 125,
                    "name": "Serrucho Barracuda marca Bhaco",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 15990,
                    "tax_id": 1001
                },
                {
                    "id": 1125,
                    "code": 126,
                    "name": "Tijera de cortar lata de corte recto",
                    "category_id": 1005,
                    "purchase": 1850,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1126,
                    "code": 127,
                    "name": "Pico loro de 12 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 1127,
                    "code": 128,
                    "name": "Tijera de podar 8 pulgadas marca Hoteche",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1128,
                    "code": 129,
                    "name": "Alargador de Zapatilla de 3 metros",
                    "category_id": 1007,
                    "purchase": 23020,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1129,
                    "code": 130,
                    "name": "Atornillador de chicharra doble café",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1130,
                    "code": 131,
                    "name": "Hilo de orilladora para cortar pasto",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1990,
                    "tax_id": 1001
                },
                {
                    "id": 1131,
                    "code": 132,
                    "name": "Diablo de 24 pulgadas",
                    "category_id": 1005,
                    "purchase": 3118,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1132,
                    "code": 133,
                    "name": "Set de lija banda 3x80",
                    "category_id": 1008,
                    "purchase": 6180,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1133,
                    "code": 134,
                    "name": "Kit de rodillos y bandeja",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1134,
                    "code": 135,
                    "name": "Escobilla de acero",
                    "category_id": 1005,
                    "purchase": 58,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1135,
                    "code": 136,
                    "name": "Juego de herramientas Redline 7pcs",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 14990,
                    "tax_id": 1001
                },
                {
                    "id": 1136,
                    "code": 137,
                    "name": "Revolvedor de Bekron",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 1137,
                    "code": 138,
                    "name": "Disco para sierra madera 7, 1/4 de 40 dientes",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1138,
                    "code": 139,
                    "name": "Disco de sierra madera 7, 1/4 de 24 dientes",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1139,
                    "code": 140,
                    "name": "Disco de sierra madera 4, 1/2 de 40 dientes",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1140,
                    "code": 141,
                    "name": "Disco de sierra madera 4, 1/2 de 24 dientes",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1141,
                    "code": 142,
                    "name": "Disco diamantado de 7 pulgadas",
                    "category_id": 1019,
                    "purchase": 9300,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1142,
                    "code": 143,
                    "name": "Disco diamantado de concreto de 4, 1/2",
                    "category_id": 1019,
                    "purchase": 2000,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1143,
                    "code": 144,
                    "name": "Disco diamantado de cerámica de 4, 1/2 marca Inko",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 1144,
                    "code": 145,
                    "name": "Disco de concreto marca Total de 4, 1/2",
                    "category_id": 1019,
                    "purchase": 7000,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1145,
                    "code": 146,
                    "name": "Disco de fierro de 14 pulga de trozadora",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 1146,
                    "code": 147,
                    "name": "Disco de fierro de 9 pulgadas",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 2800,
                    "tax_id": 1001
                },
                {
                    "id": 1147,
                    "code": 148,
                    "name": "Disco Corte De Metal 7pulg Corte Fino (1.6mm)",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 1790,
                    "tax_id": 1001
                },
                {
                    "id": 1148,
                    "code": 149,
                    "name": "Disco de fierro de 7 pulgadas de corte grueso",
                    "category_id": 1019,
                    "purchase": 1800,
                    "sale": 1390,
                    "tax_id": 1001
                },
                {
                    "id": 1149,
                    "code": 150,
                    "name": "Disco de desbaste de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 507,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1150,
                    "code": 151,
                    "name": "Disco de corte de 4, 1/2 de acero inoxidable",
                    "category_id": 1019,
                    "purchase": 1186,
                    "sale": 850,
                    "tax_id": 1001
                },
                {
                    "id": 1151,
                    "code": 152,
                    "name": "Disco de lija Grano 100 de madera de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 507,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1152,
                    "code": 153,
                    "name": "Disco de lija de fierro grano 60 de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 507,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1153,
                    "code": 154,
                    "name": "Disco de lija de fiero grano 100 de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 2150,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1154,
                    "code": 155,
                    "name": "Disco de desbaste de muro de cemento",
                    "category_id": 1019,
                    "purchase": 1369,
                    "sale": 7990,
                    "tax_id": 1001
                },
                {
                    "id": 1155,
                    "code": 156,
                    "name": "Disco De Sopapo Con Lijas De 4.5 ",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1156,
                    "code": 157,
                    "name": "Set Disco De Sopapo Con Lijas De 7",
                    "category_id": 1019,
                    "purchase": 1300,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1157,
                    "code": 158,
                    "name": "Repuesto de lija madera P60 para disco sopapo de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1158,
                    "code": 159,
                    "name": "Chascón de copa para galletero",
                    "category_id": 1019,
                    "purchase": 400,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1159,
                    "code": 160,
                    "name": "Set de copa escobilla 3 pcs",
                    "category_id": 1019,
                    "purchase": 5250,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1160,
                    "code": 161,
                    "name": "Juego de sierra de chapa",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1161,
                    "code": 162,
                    "name": "Set De Broca Paleta por unidad",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1162,
                    "code": 163,
                    "name": "Broca paleta de 7/8",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1163,
                    "code": 164,
                    "name": "Broca de paleta 3/4",
                    "category_id": 1018,
                    "purchase": 3960,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1164,
                    "code": 165,
                    "name": "Broca de paleta 3/5 Marca Trupper",
                    "category_id": 1018,
                    "purchase": 461,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1165,
                    "code": 166,
                    "name": "Broca de paleta de 1 pulgada",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1166,
                    "code": 167,
                    "name": "Broca de madera 4 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1167,
                    "code": 168,
                    "name": "Broca de madera 5 m.m.",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1168,
                    "code": 169,
                    "name": "Broca de madera 6 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1169,
                    "code": 170,
                    "name": "Broca de madera 8 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1170,
                    "code": 171,
                    "name": "Broca de madera 10 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1171,
                    "code": 172,
                    "name": "Broca de fierro de 10 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1172,
                    "code": 173,
                    "name": "Broca de fierro de 11 m.m.",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1173,
                    "code": 174,
                    "name": "Broca de fierro de 7,5 m.m.",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1490,
                    "tax_id": 1001
                },
                {
                    "id": 1174,
                    "code": 175,
                    "name": "Broca de fierro de 3 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1175,
                    "code": 176,
                    "name": "Fundente Para Soldar Plata 50 Gr Indep",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2590,
                    "tax_id": 1001
                },
                {
                    "id": 1176,
                    "code": 177,
                    "name": "Set de broca de fierro 6 pcs Marca Total",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 4700,
                    "tax_id": 1001
                },
                {
                    "id": 1177,
                    "code": 178,
                    "name": "Broca de cemento económica Marca ZHWEI 6 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1178,
                    "code": 179,
                    "name": "Set de broca fierro de 4 mm Marca Makita",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1179,
                    "code": 180,
                    "name": "Tubo Estufa Galvanizado 4. 1/2",
                    "category_id": 1007,
                    "purchase": 1960,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1180,
                    "code": 181,
                    "name": "Broca de cemento 8 mm bosh",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1181,
                    "code": 182,
                    "name": "Broca de cemento de 8 mm Marca  Wurth",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1182,
                    "code": 183,
                    "name": "picaporte de 3  pulgadas",
                    "category_id": 1007,
                    "purchase": 4640,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1183,
                    "code": 184,
                    "name": "Broca de cemento de 10 mm Marca Bosh",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 2700,
                    "tax_id": 1001
                },
                {
                    "id": 1184,
                    "code": 185,
                    "name": "Set de cierra para caladora",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1185,
                    "code": 186,
                    "name": "Plomo Cono 500 gr",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1186,
                    "code": 187,
                    "name": "Chapa Sobrepuesta De Puerta Oister 30 A 50mm ",
                    "category_id": 1007,
                    "purchase": 339,
                    "sale": 17900,
                    "tax_id": 1001
                },
                {
                    "id": 1187,
                    "code": 188,
                    "name": "Chapa de reja con caja metálica",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 20990,
                    "tax_id": 1001
                },
                {
                    "id": 1188,
                    "code": 189,
                    "name": "Chapa de portón reja Marca Bash",
                    "category_id": 1007,
                    "purchase": 600,
                    "sale": 33990,
                    "tax_id": 1001
                },
                {
                    "id": 1189,
                    "code": 190,
                    "name": "Chapa tubular sin llave para baño",
                    "category_id": 1007,
                    "purchase": 604,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1190,
                    "code": 191,
                    "name": "Chapa Odis tubular con llave para dormitorio/oficina",
                    "category_id": 1007,
                    "purchase": 1230,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1191,
                    "code": 192,
                    "name": "Tubo Estufa 6",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1192,
                    "code": 193,
                    "name": "Broca de punta flecha de 6 mm para cortador de vidrio",
                    "category_id": 1018,
                    "purchase": 1490,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1193,
                    "code": 201,
                    "name": "Curva Estufa 5",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1194,
                    "code": 202,
                    "name": "Curva Estufa 4. 1/2",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1195,
                    "code": 203,
                    "name": "Llana lisa Marca Toolmalk",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1196,
                    "code": 204,
                    "name": "Llana dentada Marca Moller",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 1197,
                    "code": 205,
                    "name": "Hacha sin mango",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1198,
                    "code": 206,
                    "name": "Buzo de pintar",
                    "category_id": 1009,
                    "purchase": 1290,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1199,
                    "code": 207,
                    "name": "Combo de 2 kg Marca Hoteche",
                    "category_id": 1005,
                    "purchase": 360,
                    "sale": 10990,
                    "tax_id": 1001
                },
                {
                    "id": 1200,
                    "code": 208,
                    "name": "Platacho de hela",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 1201,
                    "code": 209,
                    "name": "Rueda de carretilla masisa",
                    "category_id": 1006,
                    "purchase": 270,
                    "sale": 19500,
                    "tax_id": 1001
                },
                {
                    "id": 1202,
                    "code": 210,
                    "name": "Rueda de carretilla con cámara",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 15900,
                    "tax_id": 1001
                },
                {
                    "id": 1203,
                    "code": 211,
                    "name": "Forro de rueda de carretilla",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1204,
                    "code": 212,
                    "name": "Hacha chica mango madera",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1205,
                    "code": 213,
                    "name": "Cincel",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 1206,
                    "code": 214,
                    "name": "Antiparras transparentes",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1207,
                    "code": 215,
                    "name": "Antiparras amarillas",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1208,
                    "code": 216,
                    "name": "Antiparras negras",
                    "category_id": 1009,
                    "purchase": 3610,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1209,
                    "code": 218,
                    "name": "Cemento Polpaico",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4200,
                    "tax_id": 1001
                },
                {
                    "id": 1210,
                    "code": 219,
                    "name": "Hormigon preparado h20 de 25 kg",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1211,
                    "code": 220,
                    "name": "Bekron de 25 kg",
                    "category_id": 1016,
                    "purchase": 40,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 1212,
                    "code": 221,
                    "name": "Yeso espuma Romeral de 25kg",
                    "category_id": 1012,
                    "purchase": 980,
                    "sale": 7800,
                    "tax_id": 1001
                },
                {
                    "id": 1213,
                    "code": 222,
                    "name": "Yeso volcán rojo",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 1214,
                    "code": 223,
                    "name": "Pinta cal",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 1215,
                    "code": 224,
                    "name": "Pegamento porcelanoto Marca Weber",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 9500,
                    "tax_id": 1001
                },
                {
                    "id": 1216,
                    "code": 225,
                    "name": "Bekron AC tineta de 25 kg",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 21990,
                    "tax_id": 1001
                },
                {
                    "id": 1217,
                    "code": 226,
                    "name": "Bekron AC tineta mediana de 15 kg",
                    "category_id": 1016,
                    "purchase": 146,
                    "sale": 16700,
                    "tax_id": 1001
                },
                {
                    "id": 1218,
                    "code": 227,
                    "name": "Bekron tarro de 6 kg",
                    "category_id": 1016,
                    "purchase": 150,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1219,
                    "code": 228,
                    "name": "Pasta muro tricolor en tineta",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 16990,
                    "tax_id": 1001
                },
                {
                    "id": 1220,
                    "code": 229,
                    "name": "Pasta muro Interior Soquina Tineta",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 15990,
                    "tax_id": 1001
                },
                {
                    "id": 1221,
                    "code": 230,
                    "name": "Soporte de tv fijo de 26 a 63 pulgadas",
                    "category_id": 1007,
                    "purchase": 650,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1222,
                    "code": 231,
                    "name": "Soporte de tv giratorio de 14 a 65 pulgadas",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 21000,
                    "tax_id": 1001
                },
                {
                    "id": 1223,
                    "code": 232,
                    "name": "Acople para compresor de 5 pcs",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1224,
                    "code": 233,
                    "name": "Cautin lapiz 30W",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 6750,
                    "tax_id": 1001
                },
                {
                    "id": 1225,
                    "code": 234,
                    "name": "Cadena de puerta",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1226,
                    "code": 235,
                    "name": "Lengüeta de 7 pulgadas Marca Total",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1227,
                    "code": 236,
                    "name": "Candado economico de 32 mm",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1228,
                    "code": 237,
                    "name": "Caja de dado chico de 40 pcs",
                    "category_id": 1005,
                    "purchase": 1250,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1229,
                    "code": 238,
                    "name": "Rejilla para lavaplato",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1230,
                    "code": 239,
                    "name": "Serrucho de 20 pulgadas Marca Hoteche",
                    "category_id": 1005,
                    "purchase": 15050,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1231,
                    "code": 240,
                    "name": "Andaba 3, 1/2",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1232,
                    "code": 241,
                    "name": "Hoja de cartonero larga",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1233,
                    "code": 242,
                    "name": "Tenaza de 8 pulgadas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1234,
                    "code": 243,
                    "name": "Cortador de vidrio Marca Toolmax",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1235,
                    "code": 244,
                    "name": "Adaptador americano universal",
                    "category_id": 1022,
                    "purchase": 660,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1236,
                    "code": 245,
                    "name": "Disco de lija de madera  Grano 120  de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 3500,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1237,
                    "code": 246,
                    "name": "Disco de lija de madera Grano 80 de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 4000,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1238,
                    "code": 247,
                    "name": "Disco de lija de madera Grano 60 de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1239,
                    "code": 248,
                    "name": "Alicates mini",
                    "category_id": 1005,
                    "purchase": 4732,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1240,
                    "code": 249,
                    "name": "Sala de baño de 30 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 94990,
                    "tax_id": 1001
                },
                {
                    "id": 1241,
                    "code": 250,
                    "name": "fulminantes para pistola de clavo rojo",
                    "category_id": 1012,
                    "purchase": 1320,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1242,
                    "code": 251,
                    "name": "fulminantes para pistola de clavo amarillo",
                    "category_id": 1012,
                    "purchase": 1730,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1243,
                    "code": 252,
                    "name": "esponja topex",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 2990,
                    "tax_id": 1001
                },
                {
                    "id": 1244,
                    "code": 253,
                    "name": "escuadra repisa 20 x 15 cm",
                    "category_id": 1007,
                    "purchase": 3010,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1245,
                    "code": 254,
                    "name": "escuadra repisa 15 x 13 cm",
                    "category_id": 1007,
                    "purchase": 7351,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1246,
                    "code": 255,
                    "name": "escuadra repisa 10 x 12 cm",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1247,
                    "code": 256,
                    "name": "escuadra repisa 35 x 30",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1248,
                    "code": 257,
                    "name": "brocha de 3/4",
                    "category_id": 1014,
                    "purchase": 3915,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1249,
                    "code": 258,
                    "name": "brocha de 1/2",
                    "category_id": 1014,
                    "purchase": 1507,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1250,
                    "code": 259,
                    "name": "gancho canala metalica pintada",
                    "category_id": 1007,
                    "purchase": 1350,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1251,
                    "code": 260,
                    "name": "bombin de pies",
                    "category_id": 1003,
                    "purchase": 1350,
                    "sale": 12000,
                    "tax_id": 1001
                },
                {
                    "id": 1252,
                    "code": 261,
                    "name": "pega mosca fly catcher",
                    "category_id": 1007,
                    "purchase": 1800,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1253,
                    "code": 262,
                    "name": "flamax pastilla de encendido",
                    "category_id": 1007,
                    "purchase": 1300,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1254,
                    "code": 263,
                    "name": "piton de mangera",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1255,
                    "code": 264,
                    "name": "espersor para planza",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 150,
                    "tax_id": 1001
                },
                {
                    "id": 1256,
                    "code": 265,
                    "name": "conector de llave mangera 1/2 pulg",
                    "category_id": 1002,
                    "purchase": 460,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1257,
                    "code": 266,
                    "name": "union de mangera de media",
                    "category_id": 1002,
                    "purchase": 692,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1258,
                    "code": 267,
                    "name": "adaptador de llave media y 3/4",
                    "category_id": 1002,
                    "purchase": 5140,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1259,
                    "code": 268,
                    "name": "broca para madera para bisagra",
                    "category_id": 1018,
                    "purchase": 1785,
                    "sale": 14990,
                    "tax_id": 1001
                },
                {
                    "id": 1260,
                    "code": 269,
                    "name": "Gorro Campana Estufa 6",
                    "category_id": 1007,
                    "purchase": 3420,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1261,
                    "code": 270,
                    "name": "Gorro Campana Estufa 4. 1/2",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1262,
                    "code": 271,
                    "name": "sierra caladora 570 w",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 49990,
                    "tax_id": 1001
                },
                {
                    "id": 1263,
                    "code": 272,
                    "name": "Tubo Estufa Galvanizado 4. 1/2 Con Mariposa",
                    "category_id": 1007,
                    "purchase": 1270,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 1264,
                    "code": 273,
                    "name": "Esmeril Angular 4,5 Bauker",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 34990,
                    "tax_id": 1001
                },
                {
                    "id": 1265,
                    "code": 274,
                    "name": "linterna llavero",
                    "category_id": 1023,
                    "purchase": 950,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1266,
                    "code": 275,
                    "name": "piola de  freno delantero",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1267,
                    "code": 276,
                    "name": "soplete para tubo marca yanes",
                    "category_id": 1033,
                    "purchase": 1040,
                    "sale": 19990,
                    "tax_id": 1001
                },
                {
                    "id": 1268,
                    "code": 277,
                    "name": "lijadora orvital 1/4 hoja black decker",
                    "category_id": 1010,
                    "purchase": 5262,
                    "sale": 47000,
                    "tax_id": 1001
                },
                {
                    "id": 1269,
                    "code": 278,
                    "name": "tubo mapp gas 3600 F",
                    "category_id": 1025,
                    "purchase": 127,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 1270,
                    "code": 279,
                    "name": "cartucho gas desechable 330 gr providus",
                    "category_id": 1025,
                    "purchase": 13140,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1271,
                    "code": 280,
                    "name": "cinta doble contacto",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1272,
                    "code": 281,
                    "name": "aislante de puerta doble esponja",
                    "category_id": 1007,
                    "purchase": 2600,
                    "sale": 11300,
                    "tax_id": 1001
                },
                {
                    "id": 1273,
                    "code": 282,
                    "name": "linterna cabeza",
                    "category_id": 1015,
                    "purchase": 900,
                    "sale": 3990,
                    "tax_id": 1001
                },
                {
                    "id": 1274,
                    "code": 283,
                    "name": "linterna magnetica",
                    "category_id": 1015,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1275,
                    "code": 284,
                    "name": "cyperkill veneno",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7990,
                    "tax_id": 1001
                },
                {
                    "id": 1276,
                    "code": 285,
                    "name": "ampolleta refrigerador",
                    "category_id": 1007,
                    "purchase": 4500,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1277,
                    "code": 286,
                    "name": "trampa para ratones pegamento grande",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1278,
                    "code": 287,
                    "name": "trampa para ratanes pegamento chica",
                    "category_id": 1007,
                    "purchase": 2047,
                    "sale": 990,
                    "tax_id": 1001
                },
                {
                    "id": 1279,
                    "code": 288,
                    "name": "led cascada azul navida",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1280,
                    "code": 289,
                    "name": "led navida arbol 300 led  azul",
                    "category_id": 1007,
                    "purchase": 3689,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1281,
                    "code": 290,
                    "name": "led navida arbol 300 led  rosado",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1282,
                    "code": 291,
                    "name": "Abrazadera Metalica 1/2 Pulg",
                    "category_id": 1013,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1283,
                    "code": 292,
                    "name": "Union Cable Coaxial",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1284,
                    "code": 293,
                    "name": "terminal de coaxial",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1285,
                    "code": 294,
                    "name": "Tarugo Tornillo Nylon P/Volcanita",
                    "category_id": 1013,
                    "purchase": 750,
                    "sale": 50,
                    "tax_id": 1001
                },
                {
                    "id": 1286,
                    "code": 295,
                    "name": "tarugo paloma nylon",
                    "category_id": 1013,
                    "purchase": 7061,
                    "sale": 50,
                    "tax_id": 1001
                },
                {
                    "id": 1287,
                    "code": 296,
                    "name": "mascara de soldar kraster",
                    "category_id": 1009,
                    "purchase": 7061,
                    "sale": 34990,
                    "tax_id": 1001
                },
                {
                    "id": 1288,
                    "code": 297,
                    "name": "mascara de soldar delta",
                    "category_id": 1009,
                    "purchase": 7061,
                    "sale": 38000,
                    "tax_id": 1001
                },
                {
                    "id": 1289,
                    "code": 298,
                    "name": "mascara de soldar normal 2x4.1/2 toolcraft",
                    "category_id": 1009,
                    "purchase": 7061,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 1290,
                    "code": 299,
                    "name": "guantes rojo nitrilo",
                    "category_id": 1009,
                    "purchase": 3800,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 1291,
                    "code": 300,
                    "name": "guantes amarillo latex",
                    "category_id": 1009,
                    "purchase": 3800,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1292,
                    "code": 301,
                    "name": "rodillo poliester de 5 cm",
                    "category_id": 1014,
                    "purchase": 600,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1293,
                    "code": 302,
                    "name": "flexible he-hi de 35 cm",
                    "category_id": 1020,
                    "purchase": 25071,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1294,
                    "code": 303,
                    "name": "llave jardin media he-he",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1295,
                    "code": 304,
                    "name": "terminal so-hi 1/2 x 3/4",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1296,
                    "code": 305,
                    "name": "tee so-so-so 3/4 x 3/4 x 1/2",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1297,
                    "code": 306,
                    "name": "tee so-so-so 3/4 x 1/2 x 3/4",
                    "category_id": 1020,
                    "purchase": 15500,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1298,
                    "code": 307,
                    "name": "copla so-so 3/8",
                    "category_id": 1020,
                    "purchase": 7691,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1299,
                    "code": 308,
                    "name": "tapa gorro so 3/4",
                    "category_id": 1020,
                    "purchase": 14120,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1300,
                    "code": 309,
                    "name": "tapa gorro so 3/8",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1301,
                    "code": 310,
                    "name": "set de anclaje tasa de baño",
                    "category_id": 1020,
                    "purchase": 2200,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1302,
                    "code": 311,
                    "name": "tee de bronce conector de mangera",
                    "category_id": 1020,
                    "purchase": 2200,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1303,
                    "code": 312,
                    "name": "soplete gas de bombona yanes",
                    "category_id": 1033,
                    "purchase": 0,
                    "sale": 16500,
                    "tax_id": 1001
                },
                {
                    "id": 1304,
                    "code": 313,
                    "name": "pomel con golilla 1 pulg",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1305,
                    "code": 314,
                    "name": "carcamo abierto de 9 pulg",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1306,
                    "code": 315,
                    "name": "punta phillips doble  65 mm con tope",
                    "category_id": 1008,
                    "purchase": 3690,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1307,
                    "code": 316,
                    "name": "punta para destornillador yeso carton",
                    "category_id": 1008,
                    "purchase": 16000,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1308,
                    "code": 317,
                    "name": "canaleta 20 x 10 mm blanca",
                    "category_id": 1022,
                    "purchase": 39690,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1309,
                    "code": 318,
                    "name": "Tapa Tornillo Pvc Hidraulico He 1/2 pulg",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1310,
                    "code": 319,
                    "name": "copla hi - hi 3/4",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1311,
                    "code": 320,
                    "name": "tijera podar mango largo 28 pulg",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 14990,
                    "tax_id": 1001
                },
                {
                    "id": 1312,
                    "code": 321,
                    "name": "plomo dos en uno 340 gr",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 1313,
                    "code": 322,
                    "name": "chascon para tubo de estufa 4,5 pulg",
                    "category_id": 1007,
                    "purchase": 940,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1314,
                    "code": 323,
                    "name": "chascon para tubo de estufa 5 pulg",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 1315,
                    "code": 324,
                    "name": "chascon para tubo de estufa 6 pulg",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1316,
                    "code": 325,
                    "name": "Pala Punta Huevo Sin Mango H-Full",
                    "category_id": 1005,
                    "purchase": 1610,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1317,
                    "code": 326,
                    "name": "tisador tiralinea truper",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1318,
                    "code": 327,
                    "name": "pila alkalina 23 amp 12 volt",
                    "category_id": 1007,
                    "purchase": 1092,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1319,
                    "code": 328,
                    "name": "mecha de estufa a parafina",
                    "category_id": 1007,
                    "purchase": 2728,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1320,
                    "code": 329,
                    "name": "gotita economica",
                    "category_id": 1026,
                    "purchase": 5500,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1321,
                    "code": 330,
                    "name": "flexible para gas hi-hi 1/2 x 1/2 60 cm",
                    "category_id": 1020,
                    "purchase": 200,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 1322,
                    "code": 331,
                    "name": "flexible para gas hi-hi 1/2 x 3/8  60 cm",
                    "category_id": 1020,
                    "purchase": 299,
                    "sale": 850,
                    "tax_id": 1001
                },
                {
                    "id": 1323,
                    "code": 332,
                    "name": "parche de piscina",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1324,
                    "code": 333,
                    "name": "flexible para gas hi-hi 1/2 x 1/2 100 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1325,
                    "code": 334,
                    "name": "flexible para gas hi-hi 3/8 x 1/2 100 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1326,
                    "code": 335,
                    "name": "cortador de cañeria y tubo",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 1327,
                    "code": 336,
                    "name": "linterna magnetica roja",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1328,
                    "code": 337,
                    "name": "soporte de cortina muro de media",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1329,
                    "code": 338,
                    "name": "soporte cortina pared metalhsa",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1330,
                    "code": 339,
                    "name": "saca bocado total",
                    "category_id": 1005,
                    "purchase": 1250,
                    "sale": 9600,
                    "tax_id": 1001
                },
                {
                    "id": 1331,
                    "code": 340,
                    "name": "Andaba De 3.5",
                    "category_id": 1007,
                    "purchase": 120,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1332,
                    "code": 341,
                    "name": "rueda carro 16 cm",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 4200,
                    "tax_id": 1001
                },
                {
                    "id": 1333,
                    "code": 342,
                    "name": "rueda con base 10 cm",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 2990,
                    "tax_id": 1001
                },
                {
                    "id": 1334,
                    "code": 343,
                    "name": "mosqueton de acero 5716 8MM",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1335,
                    "code": 344,
                    "name": "destorcedor de 4101mm",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1336,
                    "code": 345,
                    "name": "destorcedor de 3 76,2mm",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 1290,
                    "tax_id": 1001
                },
                {
                    "id": 1337,
                    "code": 346,
                    "name": "punta de dados magnetica 3/8 de exagonal",
                    "category_id": 1008,
                    "purchase": 290,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1338,
                    "code": 347,
                    "name": "Adaptador Hexagonal 5/16 Punta ",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1339,
                    "code": 348,
                    "name": "candado con clave economico",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1340,
                    "code": 349,
                    "name": "piton lavaplatos",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1341,
                    "code": 349,
                    "name": "Vinilit Adhesivo Pvc Humedo (azul) Tarro 240cc",
                    "category_id": 1026,
                    "purchase": 420,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1342,
                    "code": 350,
                    "name": "adhesivo de acero liquido marca REX",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1343,
                    "code": 351,
                    "name": "copa para exagonal power",
                    "category_id": 1008,
                    "purchase": 1720,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1344,
                    "code": 352,
                    "name": "alicate multiproposito sata",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1345,
                    "code": 353,
                    "name": "punta phillips simple ph2 larga",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1346,
                    "code": 354,
                    "name": "punta phillips corta ph2",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1347,
                    "code": 355,
                    "name": "Espliter de 4 vias",
                    "category_id": 1007,
                    "purchase": 6394,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1348,
                    "code": 356,
                    "name": "tierra de color roja 1 kg",
                    "category_id": 1013,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1349,
                    "code": 357,
                    "name": "tierra de color amarilla 1 kg",
                    "category_id": 1013,
                    "purchase": 680,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1350,
                    "code": 358,
                    "name": "internit de 4",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 1351,
                    "code": 359,
                    "name": "internit de 5",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 1352,
                    "code": 360,
                    "name": "internit de 6",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 1353,
                    "code": 361,
                    "name": "Volcanita 10mm (Yeso Carton)",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1354,
                    "code": 362,
                    "name": "terciado estructural 15 mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 25900,
                    "tax_id": 1001
                },
                {
                    "id": 1355,
                    "code": 363,
                    "name": "terciado estructural 18 mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 31900,
                    "tax_id": 1001
                },
                {
                    "id": 1356,
                    "code": 364,
                    "name": "osb 9,5 mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 17500,
                    "tax_id": 1001
                },
                {
                    "id": 1357,
                    "code": 365,
                    "name": "terciado ranulado de 9 primera",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 24000,
                    "tax_id": 1001
                },
                {
                    "id": 1358,
                    "code": 366,
                    "name": "terciado ranulado de 12",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 30000,
                    "tax_id": 1001
                },
                {
                    "id": 1359,
                    "code": 367,
                    "name": "osb 11,5  mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 1360,
                    "code": 368,
                    "name": "terciado ranulado 9 segunda",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 21000,
                    "tax_id": 1001
                },
                {
                    "id": 1361,
                    "code": 369,
                    "name": "rotamartillo 1500 w bauker",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 175000,
                    "tax_id": 1001
                },
                {
                    "id": 1362,
                    "code": 370,
                    "name": "orilladora",
                    "category_id": 1010,
                    "purchase": 230,
                    "sale": 49990,
                    "tax_id": 1001
                },
                {
                    "id": 1363,
                    "code": 371,
                    "name": "punta phillips ph2 larga doble",
                    "category_id": 1008,
                    "purchase": 230,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1364,
                    "code": 372,
                    "name": "probador de corriente automotris 6 a 24 volt",
                    "category_id": 1022,
                    "purchase": 1050,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1365,
                    "code": 373,
                    "name": "bisagra 3 x 1 pulg",
                    "category_id": 1007,
                    "purchase": 1409,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1366,
                    "code": 374,
                    "name": "kit de estaño",
                    "category_id": 1013,
                    "purchase": 2350,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1367,
                    "code": 375,
                    "name": "resistencia de ducha grande",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1368,
                    "code": 376,
                    "name": "resistencia de ducha chica",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1369,
                    "code": 377,
                    "name": "infla y sella",
                    "category_id": 1001,
                    "purchase": 7621,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1370,
                    "code": 378,
                    "name": "la gotita gel",
                    "category_id": 1026,
                    "purchase": 13380,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1371,
                    "code": 379,
                    "name": "la gotita tradicional",
                    "category_id": 1026,
                    "purchase": 9250,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1372,
                    "code": 380,
                    "name": "poxipol transparente",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 4600,
                    "tax_id": 1001
                },
                {
                    "id": 1373,
                    "code": 381,
                    "name": "acero liquido rex",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1374,
                    "code": 382,
                    "name": "liensa 65 metros",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1375,
                    "code": 383,
                    "name": "Valvula de inflar pelota",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1376,
                    "code": 384,
                    "name": "bisagra mueble recta",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 1377,
                    "code": 385,
                    "name": "aguja de cocer saco",
                    "category_id": 1007,
                    "purchase": 850,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1378,
                    "code": 386,
                    "name": "spliter triple",
                    "category_id": 1007,
                    "purchase": 450,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1379,
                    "code": 387,
                    "name": "Broca De Fierro 7mm",
                    "category_id": 1018,
                    "purchase": 150,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1380,
                    "code": 388,
                    "name": "broca de fierro 8 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1381,
                    "code": 389,
                    "name": "broca de fierro de 6 mm makita",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1382,
                    "code": 390,
                    "name": "diferencial de 2x25 amp ",
                    "category_id": 1022,
                    "purchase": 352,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 1383,
                    "code": 391,
                    "name": "cable de alimetacion 1,5 mts",
                    "category_id": 1027,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1384,
                    "code": 392,
                    "name": "calafatera truper pistola",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1385,
                    "code": 393,
                    "name": "calafatera toper pistola",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1386,
                    "code": 394,
                    "name": "sifon doble han",
                    "category_id": 1020,
                    "purchase": 170,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 1387,
                    "code": 395,
                    "name": "Sifon Lavaplato Loa Salida Curva Estandar 40mm Entrada 1.1/2 y 1.1/4",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1388,
                    "code": 396,
                    "name": "gas butano tubo",
                    "category_id": 1025,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1389,
                    "code": 397,
                    "name": "gas butano bombona",
                    "category_id": 1025,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1390,
                    "code": 398,
                    "name": "sello antifuga",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1391,
                    "code": 399,
                    "name": "Aceite De mezcla de motocierra huckvarna 100 cc",
                    "category_id": 1025,
                    "purchase": 0,
                    "sale": 2300,
                    "tax_id": 1001
                },
                {
                    "id": 1392,
                    "code": 400,
                    "name": "alta temperatura sachet 70 ml",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1393,
                    "code": 401,
                    "name": "foco sobre puesto plafon 12 watts redondo",
                    "category_id": 1007,
                    "purchase": 1012,
                    "sale": 5500,
                    "tax_id": 1001
                },
                {
                    "id": 1394,
                    "code": 402,
                    "name": "foco sobre puesto plafon 18 watts redondo",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1395,
                    "code": 403,
                    "name": "foco embutido redondo 18 watts plafon",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 6800,
                    "tax_id": 1001
                },
                {
                    "id": 1396,
                    "code": 404,
                    "name": "foco embutido redondo 12 watts plafon",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 5800,
                    "tax_id": 1001
                },
                {
                    "id": 1397,
                    "code": 405,
                    "name": "foco embutito redondo 9 watts plafon",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1398,
                    "code": 406,
                    "name": "caja estanco embutida 5 automaticos",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1399,
                    "code": 407,
                    "name": "extractor 150 watts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 35000,
                    "tax_id": 1001
                },
                {
                    "id": 1400,
                    "code": 408,
                    "name": "extractor 120 watts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 22900,
                    "tax_id": 1001
                },
                {
                    "id": 1401,
                    "code": 409,
                    "name": "proyector de 10 watts",
                    "category_id": 1007,
                    "purchase": 243,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1402,
                    "code": 410,
                    "name": "proyector de 20 watts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1403,
                    "code": 411,
                    "name": "proyector con sensor 10 watts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1404,
                    "code": 412,
                    "name": "proyector con sensor 20 watts",
                    "category_id": 1007,
                    "purchase": 274,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 1405,
                    "code": 413,
                    "name": "lampara solar exterior",
                    "category_id": 1007,
                    "purchase": 700,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1406,
                    "code": 414,
                    "name": "ampolleta led de 9,5 watts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1407,
                    "code": 415,
                    "name": "ampolleta choclo 16 watts",
                    "category_id": 1007,
                    "purchase": 310,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1408,
                    "code": 416,
                    "name": "ampolleta led de 9 watts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1409,
                    "code": 417,
                    "name": "tablero estanco sobre puesto 6 auto",
                    "category_id": 1022,
                    "purchase": 190,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1410,
                    "code": 418,
                    "name": "tablero estanco embutido puesto 6 auto",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1411,
                    "code": 419,
                    "name": "Regulador De Gas Cemco 11-15 Kg Para Flexible",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 11500,
                    "tax_id": 1001
                },
                {
                    "id": 1412,
                    "code": 420,
                    "name": "ladron de corriente 16 con 10 amp",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1413,
                    "code": 421,
                    "name": "ladron de corriente  10 amp",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1414,
                    "code": 422,
                    "name": "calota de automatico saime negra",
                    "category_id": 1022,
                    "purchase": 32500,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1415,
                    "code": 423,
                    "name": "calota de automatico riel blana",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1416,
                    "code": 424,
                    "name": "enchufe triple  sobrepuesto en linea",
                    "category_id": 1022,
                    "purchase": 1650,
                    "sale": 4200,
                    "tax_id": 1001
                },
                {
                    "id": 1417,
                    "code": 425,
                    "name": "enchufe triple  embutido en linea",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 1418,
                    "code": 426,
                    "name": "caja chuki",
                    "category_id": 1022,
                    "purchase": 4950,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1419,
                    "code": 427,
                    "name": "interruptor simple embutido",
                    "category_id": 1022,
                    "purchase": 42200,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1420,
                    "code": 428,
                    "name": "interruptor simple embutido escalera 9/24",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1421,
                    "code": 429,
                    "name": "enchufe triple sobrepuesto protegido",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3300,
                    "tax_id": 1001
                },
                {
                    "id": 1422,
                    "code": 430,
                    "name": "interruptor sobrepuesto triple",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3700,
                    "tax_id": 1001
                },
                {
                    "id": 1423,
                    "code": 431,
                    "name": "enchufe simple sobrepuesta 10 amp",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1424,
                    "code": 432,
                    "name": "interruprtor doble sobrepuesto",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1425,
                    "code": 433,
                    "name": "interruptor doble embutido",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1426,
                    "code": 434,
                    "name": "interruptor + enchufe 16 amp sobrepuesto",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3400,
                    "tax_id": 1001
                },
                {
                    "id": 1427,
                    "code": 435,
                    "name": "enchufe 10-16 amp triple embutido",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1428,
                    "code": 436,
                    "name": "curva 16mm conduit",
                    "category_id": 1022,
                    "purchase": 140,
                    "sale": 130,
                    "tax_id": 1001
                },
                {
                    "id": 1429,
                    "code": 437,
                    "name": "enchufe simple embutido 10 amp mec",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2100,
                    "tax_id": 1001
                },
                {
                    "id": 1430,
                    "code": 438,
                    "name": "enchufe simple embutido 10 amp lexo",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1431,
                    "code": 439,
                    "name": "enchufe simple embutido 10 amp ponelli",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1432,
                    "code": 440,
                    "name": "macho de 10 amp fanton",
                    "category_id": 1022,
                    "purchase": 1297,
                    "sale": 1550,
                    "tax_id": 1001
                },
                {
                    "id": 1433,
                    "code": 441,
                    "name": "caja de distribucion naranja tigre",
                    "category_id": 1022,
                    "purchase": 290,
                    "sale": 550,
                    "tax_id": 1001
                },
                {
                    "id": 1434,
                    "code": 442,
                    "name": "soquete de losa Base Recta",
                    "category_id": 1022,
                    "purchase": 441,
                    "sale": 750,
                    "tax_id": 1001
                },
                {
                    "id": 1435,
                    "code": 443,
                    "name": "interruptor triple embutido mec",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3300,
                    "tax_id": 1001
                },
                {
                    "id": 1436,
                    "code": 444,
                    "name": "enchufe doble sobrepuesto mec",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1437,
                    "code": 445,
                    "name": "enchufe doble embutido",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1438,
                    "code": 446,
                    "name": "interruptor simbre sobrepuesto",
                    "category_id": 1022,
                    "purchase": 5300,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1439,
                    "code": 447,
                    "name": "llave bola de 1/2 de jardin",
                    "category_id": 1002,
                    "purchase": 1703,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1440,
                    "code": 448,
                    "name": "Extractor de 100W",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 20000,
                    "tax_id": 1001
                },
                {
                    "id": 1441,
                    "code": 449,
                    "name": "enchufe simple embutido de 10-16 amp",
                    "category_id": 1022,
                    "purchase": 4921,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1442,
                    "code": 450,
                    "name": "Vinilit Pomo 60cc",
                    "category_id": 1026,
                    "purchase": 5350,
                    "sale": 1750,
                    "tax_id": 1001
                },
                {
                    "id": 1443,
                    "code": 451,
                    "name": "Vinilit Pomo 25cc",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1444,
                    "code": 452,
                    "name": "Vinilit Tarro 240cc",
                    "category_id": 1026,
                    "purchase": 1510,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1445,
                    "code": 453,
                    "name": "Spray Negro Brillante",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1446,
                    "code": 454,
                    "name": "spray brillante beige",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1447,
                    "code": 455,
                    "name": "spray brillante cromo plateado",
                    "category_id": 1014,
                    "purchase": 890,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1448,
                    "code": 456,
                    "name": "Spray Brillante Blanco",
                    "category_id": 1014,
                    "purchase": 280,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1449,
                    "code": 457,
                    "name": "spray brillante dorado",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1450,
                    "code": 458,
                    "name": "spray brillante violeta",
                    "category_id": 1014,
                    "purchase": 8870,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1451,
                    "code": 459,
                    "name": "spray brillante amarillo",
                    "category_id": 1014,
                    "purchase": 11790,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1452,
                    "code": 460,
                    "name": "spray brillante negro mate",
                    "category_id": 1014,
                    "purchase": 2420,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1453,
                    "code": 461,
                    "name": "spray brillante negro antioxido y esmalte 2 en 1",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1454,
                    "code": 462,
                    "name": "spray brillante gris",
                    "category_id": 1014,
                    "purchase": 1988,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1455,
                    "code": 463,
                    "name": "spray brillante azul oscuro",
                    "category_id": 1014,
                    "purchase": 9180,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1456,
                    "code": 464,
                    "name": "spray brillante azul pacifico",
                    "category_id": 1014,
                    "purchase": 1250,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1457,
                    "code": 465,
                    "name": "spray brillante rojo",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1458,
                    "code": 466,
                    "name": "spray brillante amarillo fluor florecente",
                    "category_id": 1014,
                    "purchase": 250,
                    "sale": 4290,
                    "tax_id": 1001
                },
                {
                    "id": 1459,
                    "code": 467,
                    "name": "spray plateado alta temperatura passol",
                    "category_id": 1014,
                    "purchase": 1703,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1460,
                    "code": 468,
                    "name": "spray brillante verde fluorescente passol",
                    "category_id": 1014,
                    "purchase": 5500,
                    "sale": 4290,
                    "tax_id": 1001
                },
                {
                    "id": 1461,
                    "code": 469,
                    "name": "spray brillante naranja fluorescente passol",
                    "category_id": 1014,
                    "purchase": 4150,
                    "sale": 4290,
                    "tax_id": 1001
                },
                {
                    "id": 1462,
                    "code": 470,
                    "name": "spray brillante marron",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1463,
                    "code": 471,
                    "name": "adhesivo universal pegamac 750cc neoplen",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1464,
                    "code": 472,
                    "name": "adhesivo de contacto pren rex 236cc neoplen",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3300,
                    "tax_id": 1001
                },
                {
                    "id": 1465,
                    "code": 473,
                    "name": "adhesivo de contacto pren rex 120cc neoplen",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 2300,
                    "tax_id": 1001
                },
                {
                    "id": 1466,
                    "code": 474,
                    "name": "Spray Pintura Negra Alta Temperatura",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1467,
                    "code": 475,
                    "name": "cinta enmascarar pegote 48x30mts",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1468,
                    "code": 476,
                    "name": "sifon lavaplatos recto + desague",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1469,
                    "code": 477,
                    "name": "cemento blanco",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1470,
                    "code": 478,
                    "name": "frague café claro",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1471,
                    "code": 479,
                    "name": "frague gris",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1472,
                    "code": 480,
                    "name": "frague blanco",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1473,
                    "code": 481,
                    "name": "frague almond",
                    "category_id": 1016,
                    "purchase": 1501,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1474,
                    "code": 482,
                    "name": "frague café oscuro",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1475,
                    "code": 483,
                    "name": "frague beige ceniza",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1476,
                    "code": 484,
                    "name": "frague negro",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1477,
                    "code": 485,
                    "name": "frague bio bio",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1478,
                    "code": 486,
                    "name": "frague alpaca",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1350,
                    "tax_id": 1001
                },
                {
                    "id": 1479,
                    "code": 487,
                    "name": "cable rca audio",
                    "category_id": 1027,
                    "purchase": 4400,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1480,
                    "code": 488,
                    "name": "silicona hojalatera sachet de 85 gr",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1481,
                    "code": 489,
                    "name": "prensa de 4 pulgadas",
                    "category_id": 1005,
                    "purchase": 650,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1482,
                    "code": 490,
                    "name": "bateria de 9 volt rayovac",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1483,
                    "code": 491,
                    "name": "cable de audio auxiliar",
                    "category_id": 1027,
                    "purchase": 4959,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1484,
                    "code": 492,
                    "name": "lapiz carpintero bicolor",
                    "category_id": 1005,
                    "purchase": 2018,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1485,
                    "code": 493,
                    "name": "Lapiz Carpintero Negro Hoteche",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1486,
                    "code": 494,
                    "name": "sensor d movimiento acceso",
                    "category_id": 1007,
                    "purchase": 1820,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1487,
                    "code": 495,
                    "name": "llave de mandril drill chuck 13mm",
                    "category_id": 1008,
                    "purchase": 857,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1488,
                    "code": 496,
                    "name": "llave de mandril drill chuck 10mm",
                    "category_id": 1008,
                    "purchase": 930,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1489,
                    "code": 497,
                    "name": "cartonera industrial",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1490,
                    "code": 498,
                    "name": "broca pino o escalonada 4 hasta 20 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 1491,
                    "code": 499,
                    "name": "tope bellota tapa de fierro de cortina",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1492,
                    "code": 500,
                    "name": "broca hilti sds makita 12 mm 21 cm",
                    "category_id": 1018,
                    "purchase": 2015,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1493,
                    "code": 501,
                    "name": "linga economica",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1494,
                    "code": 502,
                    "name": "timbre bticino",
                    "category_id": 1007,
                    "purchase": 2820,
                    "sale": 20000,
                    "tax_id": 1001
                },
                {
                    "id": 1495,
                    "code": 503,
                    "name": "cartonera industrial con repuesto",
                    "category_id": 1005,
                    "purchase": 3118,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1496,
                    "code": 504,
                    "name": "macho de 16 amp volante",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1497,
                    "code": 505,
                    "name": "hembra de 10 amp volante",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1498,
                    "code": 506,
                    "name": "hembra de 10 amp volante mec",
                    "category_id": 1022,
                    "purchase": 6500,
                    "sale": 1390,
                    "tax_id": 1001
                },
                {
                    "id": 1499,
                    "code": 507,
                    "name": "hembra de 16-10 amp volante",
                    "category_id": 1022,
                    "purchase": 2368,
                    "sale": 1990,
                    "tax_id": 1001
                },
                {
                    "id": 1500,
                    "code": 508,
                    "name": "perillon manilla puerta acceso",
                    "category_id": 1007,
                    "purchase": 64250,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1501,
                    "code": 509,
                    "name": "interruptor mas enchufe 10 embutido mec",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3590,
                    "tax_id": 1001
                },
                {
                    "id": 1502,
                    "code": 510,
                    "name": "interruptor triple embutido panelli",
                    "category_id": 1022,
                    "purchase": 9950,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 1503,
                    "code": 511,
                    "name": "base de tubo fluorecente o led",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1504,
                    "code": 512,
                    "name": "Interruptor 9/12 Volante Negro Mec Pera",
                    "category_id": 1022,
                    "purchase": 3000,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1505,
                    "code": 513,
                    "name": "Interruptor 9/12 Volante Blanco Mec Pera",
                    "category_id": 1022,
                    "purchase": 1951,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1506,
                    "code": 514,
                    "name": "interruptor volante panelli",
                    "category_id": 1022,
                    "purchase": 30,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1507,
                    "code": 515,
                    "name": "soquete de plastico volante blanco",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1508,
                    "code": 516,
                    "name": "soquete de plastico volante negro",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1509,
                    "code": 517,
                    "name": "soquete lampara ampolleta",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1510,
                    "code": 518,
                    "name": "broca hilti sds 8 x110 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1511,
                    "code": 519,
                    "name": "broca hilti sds 6 x 110 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 1512,
                    "code": 520,
                    "name": "huincha aisladora 5 mtrs chica 3M",
                    "category_id": 1022,
                    "purchase": 3800,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1513,
                    "code": 521,
                    "name": "huincha aisladora 10 mtrs mediana 3M",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1514,
                    "code": 522,
                    "name": "huincha aisladora 20 mtrs grande 3M",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1515,
                    "code": 523,
                    "name": "huincha aisladora roja 20 mts lexo",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1516,
                    "code": 524,
                    "name": "huincha aisladora azul 20 mts lexo",
                    "category_id": 1022,
                    "purchase": 946,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1517,
                    "code": 525,
                    "name": "huincha aisladora blanca 20 mts lexo",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1518,
                    "code": 526,
                    "name": "huincha aisladora blanca 10 mts lexo",
                    "category_id": 1022,
                    "purchase": 380,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1519,
                    "code": 527,
                    "name": "tapa ciega blanca",
                    "category_id": 1022,
                    "purchase": 1650,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1520,
                    "code": 528,
                    "name": "llave de bujia 16 mm",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1521,
                    "code": 529,
                    "name": "llave de bujia 21 mm",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1522,
                    "code": 530,
                    "name": "llave punta corona 10 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1523,
                    "code": 531,
                    "name": "llave punta corona 11 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1524,
                    "code": 532,
                    "name": "llave punta corona 12 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2300,
                    "tax_id": 1001
                },
                {
                    "id": 1525,
                    "code": 533,
                    "name": "llave punta corona 13 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2400,
                    "tax_id": 1001
                },
                {
                    "id": 1526,
                    "code": 534,
                    "name": "llave punta corona 14 mm",
                    "category_id": 1005,
                    "purchase": 49000,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1527,
                    "code": 535,
                    "name": "llave punta corona 15 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1528,
                    "code": 536,
                    "name": "llave punta corona 17 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 1529,
                    "code": 537,
                    "name": "llave punta corona 19 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1530,
                    "code": 538,
                    "name": "llave punta corona 21mm",
                    "category_id": 1005,
                    "purchase": 2630,
                    "sale": 3990,
                    "tax_id": 1001
                },
                {
                    "id": 1531,
                    "code": 539,
                    "name": "llave punta corona 22 mm",
                    "category_id": 1005,
                    "purchase": 2600,
                    "sale": 4350,
                    "tax_id": 1001
                },
                {
                    "id": 1532,
                    "code": 540,
                    "name": "llave punta corona 23 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1533,
                    "code": 541,
                    "name": "llave punta corona 24 mm",
                    "category_id": 1005,
                    "purchase": 5472,
                    "sale": 5990,
                    "tax_id": 1001
                },
                {
                    "id": 1534,
                    "code": 542,
                    "name": "llave punta corona 27 mm",
                    "category_id": 1005,
                    "purchase": 19123,
                    "sale": 6600,
                    "tax_id": 1001
                },
                {
                    "id": 1535,
                    "code": 543,
                    "name": "broca de cemento ecef hiltin 10 x 160 mm",
                    "category_id": 1018,
                    "purchase": 5540,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1536,
                    "code": 544,
                    "name": "espuma expansiva 500 ml",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1537,
                    "code": 545,
                    "name": "dispersador automatico para galon de agua",
                    "category_id": 1002,
                    "purchase": 5540,
                    "sale": 7990,
                    "tax_id": 1001
                },
                {
                    "id": 1538,
                    "code": 546,
                    "name": "copla blanca 50 mm anillo incluido",
                    "category_id": 1028,
                    "purchase": 2250,
                    "sale": 1050,
                    "tax_id": 1001
                },
                {
                    "id": 1539,
                    "code": 547,
                    "name": "copla blanca 75 mm anillo incluido",
                    "category_id": 1028,
                    "purchase": 17560,
                    "sale": 1490,
                    "tax_id": 1001
                },
                {
                    "id": 1540,
                    "code": 548,
                    "name": "copla blanca 110 mm anillo incluido",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 2250,
                    "tax_id": 1001
                },
                {
                    "id": 1541,
                    "code": 549,
                    "name": "Manguito Flexible Wc Excentrico",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 6800,
                    "tax_id": 1001
                },
                {
                    "id": 1542,
                    "code": 550,
                    "name": "flexible ducha 2 mtrs",
                    "category_id": 1020,
                    "purchase": 5540,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1543,
                    "code": 551,
                    "name": "llave de paso hi-hi de bola 1/2",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1544,
                    "code": 552,
                    "name": "llave de paso hi-hi de bola de 3/4pulg",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1545,
                    "code": 553,
                    "name": "llave de paso hi-hi de bola de 1 pulg",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1546,
                    "code": 554,
                    "name": "llave campana soldar cromada de paso de media",
                    "category_id": 1020,
                    "purchase": 5470,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 1547,
                    "code": 555,
                    "name": "flexible de lavadora",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1548,
                    "code": 556,
                    "name": "llave de paso soldar media",
                    "category_id": 1020,
                    "purchase": 38450,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 1549,
                    "code": 557,
                    "name": "llave de paso soldar 3/4",
                    "category_id": 1020,
                    "purchase": 17100,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1550,
                    "code": 558,
                    "name": "llave campana soldar cromada de paso de 3/4",
                    "category_id": 1020,
                    "purchase": 45550,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 1551,
                    "code": 559,
                    "name": "llave de jardin de  bola 3/4",
                    "category_id": 1020,
                    "purchase": 1000,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1552,
                    "code": 560,
                    "name": "Cerradura sobre puesto de acceso puerta principal y bodega 2004 Marca Scaravini",
                    "category_id": 1012,
                    "purchase": 1200,
                    "sale": 32900,
                    "tax_id": 1001
                },
                {
                    "id": 1553,
                    "code": 561,
                    "name": "pileta universal 110x75x50x40",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1554,
                    "code": 562,
                    "name": "pileta universal 100x50x40",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1555,
                    "code": 563,
                    "name": "sika tapagotera 300 ml gris",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1556,
                    "code": 564,
                    "name": "gorro galvanizado 5 pulgada",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 5500,
                    "tax_id": 1001
                },
                {
                    "id": 1557,
                    "code": 565,
                    "name": "tornillo escuadra 3",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1558,
                    "code": 566,
                    "name": "tornillo escuadra 2 1/2",
                    "category_id": 1007,
                    "purchase": 2323,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1559,
                    "code": 567,
                    "name": "tornillo escuadra 2",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 100,
                    "tax_id": 1001
                },
                {
                    "id": 1560,
                    "code": 568,
                    "name": "latex aplauso galon blanco",
                    "category_id": 1014,
                    "purchase": 620,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1561,
                    "code": 569,
                    "name": "latex aplauso tineta blanco",
                    "category_id": 1014,
                    "purchase": 620,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 1562,
                    "code": 570,
                    "name": "esmalte premiun tineta blanco",
                    "category_id": 1014,
                    "purchase": 620,
                    "sale": 65990,
                    "tax_id": 1001
                },
                {
                    "id": 1563,
                    "code": 571,
                    "name": "pasta muro exterior tajamar tineta",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 31990,
                    "tax_id": 1001
                },
                {
                    "id": 1564,
                    "code": 572,
                    "name": "marmolina tajamar R1 tineta blanca",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 32900,
                    "tax_id": 1001
                },
                {
                    "id": 1565,
                    "code": 573,
                    "name": "Marmolina Blanca EF5 Tineta Tajamar",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 26990,
                    "tax_id": 1001
                },
                {
                    "id": 1566,
                    "code": 574,
                    "name": "adhesivo montaje 5 kg",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 20000,
                    "tax_id": 1001
                },
                {
                    "id": 1567,
                    "code": 575,
                    "name": "pasta muro exterior tajamar galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 9800,
                    "tax_id": 1001
                },
                {
                    "id": 1568,
                    "code": 576,
                    "name": "pasta muro interior tajamar galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1569,
                    "code": 577,
                    "name": "pasta muro interior Pm-15 soquina galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 5990,
                    "tax_id": 1001
                },
                {
                    "id": 1570,
                    "code": 578,
                    "name": "marmolina tajamar R1 blanca galon",
                    "category_id": 1014,
                    "purchase": 4090,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1571,
                    "code": 579,
                    "name": "pintura en bolsa lila",
                    "category_id": 1014,
                    "purchase": 2680,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1572,
                    "code": 580,
                    "name": "pintura en bolsa  rosado palido",
                    "category_id": 1014,
                    "purchase": 1520,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1573,
                    "code": 581,
                    "name": "pintura en bolsa naranja",
                    "category_id": 1014,
                    "purchase": 200,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1574,
                    "code": 582,
                    "name": "pintura en bolsa SANDIA",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1575,
                    "code": 583,
                    "name": "pintura en bolsa Cafe Chocolate",
                    "category_id": 1014,
                    "purchase": 9300,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1576,
                    "code": 584,
                    "name": "pintura en bolsa  NEGRA",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1577,
                    "code": 585,
                    "name": "pintura en bolsa  CELESTE",
                    "category_id": 1014,
                    "purchase": 1000,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1578,
                    "code": 586,
                    "name": "pintura en bolsa  VERDE NILO",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1579,
                    "code": 587,
                    "name": "pintura en bolsa  BLANCO",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1580,
                    "code": 588,
                    "name": "pintura en bolsa  verde esmeralda",
                    "category_id": 1014,
                    "purchase": 1130,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1581,
                    "code": 589,
                    "name": "pintura en bolsa  blanco invierno",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1582,
                    "code": 590,
                    "name": "pintura en bolsa  damasco",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1583,
                    "code": 591,
                    "name": "pintura en bolsa verde Manzana",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1584,
                    "code": 592,
                    "name": "pintura en bolsa  plomo GRIS",
                    "category_id": 1014,
                    "purchase": 1100,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 1585,
                    "code": 593,
                    "name": "soldadura a la plata 5 %",
                    "category_id": 1020,
                    "purchase": 972,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1586,
                    "code": 594,
                    "name": "gancho canaleta café",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1587,
                    "code": 595,
                    "name": "tapa canaleta universal marron",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1600,
                    "tax_id": 1001
                },
                {
                    "id": 1588,
                    "code": 596,
                    "name": "union blanca canaleta universal ph25 /110",
                    "category_id": 1028,
                    "purchase": 1244,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1589,
                    "code": 597,
                    "name": "union marron canaleta universal",
                    "category_id": 1028,
                    "purchase": 1490,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1590,
                    "code": 598,
                    "name": "codo canaleta marron 80x67,5",
                    "category_id": 1028,
                    "purchase": 1000,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1591,
                    "code": 599,
                    "name": "union + bajada de agua marron",
                    "category_id": 1028,
                    "purchase": 850,
                    "sale": 5500,
                    "tax_id": 1001
                },
                {
                    "id": 1592,
                    "code": 600,
                    "name": "copla bajada pvc p25 marron",
                    "category_id": 1028,
                    "purchase": 5490,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1593,
                    "code": 601,
                    "name": "sopapo",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1594,
                    "code": 602,
                    "name": "sifon tina salida orientable (recept)1 1/2",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1595,
                    "code": 603,
                    "name": "rastrillo jardinero14 dientes c/mango",
                    "category_id": 1002,
                    "purchase": 5090,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1596,
                    "code": 604,
                    "name": "multimetro digital fp007",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1597,
                    "code": 605,
                    "name": "probador de corriente",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1598,
                    "code": 606,
                    "name": "martillo fibra de vidrio de uña curva 16oz t",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 1599,
                    "code": 607,
                    "name": "pala cuadrada mango largo",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 15900,
                    "tax_id": 1001
                },
                {
                    "id": 1600,
                    "code": 608,
                    "name": "Union Americana Pvc Hidraulica 32mm Cementar",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1601,
                    "code": 609,
                    "name": "Tee Pvc Hidraulico 20mm Cementar",
                    "category_id": 1029,
                    "purchase": 4530,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1602,
                    "code": 610,
                    "name": "codo 20 mm Pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1603,
                    "code": 611,
                    "name": "terminal he pvc 25 mm hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1604,
                    "code": 612,
                    "name": "Codo Pvc Hidraulico 32mm Cementar",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1605,
                    "code": 613,
                    "name": "union americana pvc 25 mm cementar hidraulica",
                    "category_id": 1029,
                    "purchase": 3300,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1606,
                    "code": 614,
                    "name": "capacho 10 bolsillo h full",
                    "category_id": 1015,
                    "purchase": 3500,
                    "sale": 10990,
                    "tax_id": 1001
                },
                {
                    "id": 1607,
                    "code": 615,
                    "name": "porta martillo  giratorio H FULL",
                    "category_id": 1015,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1608,
                    "code": 616,
                    "name": "terminal Conector Manguera HE 1/2 de bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1609,
                    "code": 617,
                    "name": "codo soldar soldar 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1950,
                    "tax_id": 1001
                },
                {
                    "id": 1610,
                    "code": 618,
                    "name": "llave de paso de gas HI-HE media",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1611,
                    "code": 619,
                    "name": "terminal HE 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1612,
                    "code": 620,
                    "name": "tee so-so media bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1613,
                    "code": 621,
                    "name": "Monomando Lavaplatos Vertical Eco H-Full",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 16990,
                    "tax_id": 1001
                },
                {
                    "id": 1614,
                    "code": 622,
                    "name": "monomando lavaplatos vertical eco hant",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 16990,
                    "tax_id": 1001
                },
                {
                    "id": 1615,
                    "code": 623,
                    "name": "escuadra repisa 20x25 cm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1616,
                    "code": 624,
                    "name": "celosia acero blanca 2525 cm",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1617,
                    "code": 625,
                    "name": "candado acero 50 mm h-full",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1618,
                    "code": 626,
                    "name": "clavo concreto estriado de 2,740 mm 10 uni x $500",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1619,
                    "code": 627,
                    "name": "clavo concreto liso de 2,540 mm $1000 bolsa",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1620,
                    "code": 628,
                    "name": "silicona multiuso aluminio",
                    "category_id": 1026,
                    "purchase": 2850,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1621,
                    "code": 629,
                    "name": "huincha de medir 8 mts toolcraf",
                    "category_id": 1005,
                    "purchase": 8900,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1622,
                    "code": 630,
                    "name": "tee 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 1978,
                    "sale": 2400,
                    "tax_id": 1001
                },
                {
                    "id": 1623,
                    "code": 631,
                    "name": "copla 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 1624,
                    "code": 632,
                    "name": "copla 1 pulg bronce",
                    "category_id": 1020,
                    "purchase": 710,
                    "sale": 1600,
                    "tax_id": 1001
                },
                {
                    "id": 1625,
                    "code": 633,
                    "name": "reduccion de 1/2 a 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1626,
                    "code": 634,
                    "name": "reduccion de 1/2 a 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 1627,
                    "code": 635,
                    "name": "copla 1/2 bronce SO-SO",
                    "category_id": 1020,
                    "purchase": 1550,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1628,
                    "code": 636,
                    "name": "tapa hi 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 698400,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1629,
                    "code": 637,
                    "name": "tapon he 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 1620,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1630,
                    "code": 638,
                    "name": "tapa gorro 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1631,
                    "code": 639,
                    "name": "terminal hi 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 1632,
                    "code": 640,
                    "name": "codo 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1633,
                    "code": 641,
                    "name": "codo hi 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 2891,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1634,
                    "code": 642,
                    "name": "codo he 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1635,
                    "code": 643,
                    "name": "codo he 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 3020,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1636,
                    "code": 644,
                    "name": "codo con reduccion 3/4 a 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1637,
                    "code": 645,
                    "name": "codo hi 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 7,
                    "sale": 2700,
                    "tax_id": 1001
                },
                {
                    "id": 1638,
                    "code": 646,
                    "name": "codo con reduccion 1/2 a 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 3580,
                    "sale": 1590,
                    "tax_id": 1001
                },
                {
                    "id": 1639,
                    "code": 647,
                    "name": "codo 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 850,
                    "tax_id": 1001
                },
                {
                    "id": 1640,
                    "code": 648,
                    "name": "terminal he bronce 3/8 para gas",
                    "category_id": 1020,
                    "purchase": 1250,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1641,
                    "code": 649,
                    "name": "terminal hi 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1642,
                    "code": 650,
                    "name": "Tee Bronce 1/2 Hi-So-So",
                    "category_id": 1020,
                    "purchase": 750,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1643,
                    "code": 651,
                    "name": "tee hi 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2350,
                    "tax_id": 1001
                },
                {
                    "id": 1644,
                    "code": 652,
                    "name": "tee 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1645,
                    "code": 653,
                    "name": "teflon1 para agua 50 mts",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1646,
                    "code": 654,
                    "name": "teflon 1/2 para agua 50 mts",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1647,
                    "code": 655,
                    "name": "teflon 3/4 para agua 10mts",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1648,
                    "code": 656,
                    "name": "teflon 1/2 para agua 10 mts",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1649,
                    "code": 657,
                    "name": "teflon 1/2 para gas 6,6 mts",
                    "category_id": 1020,
                    "purchase": 1330,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1650,
                    "code": 658,
                    "name": "teflon 3/4 para gas 6,6 mts",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1651,
                    "code": 659,
                    "name": "esmalte sintetico 200cc café moro",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1652,
                    "code": 660,
                    "name": "esmalte sintetico 200cc verde reja",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1653,
                    "code": 661,
                    "name": "esmalte sintetico 200cc negro",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1654,
                    "code": 662,
                    "name": "esmalte sintetico 200cc bermellon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1655,
                    "code": 663,
                    "name": "esmalte sintetico 200cc amarillo rey",
                    "category_id": 1014,
                    "purchase": 500,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1656,
                    "code": 664,
                    "name": "Esmalte Sintetico Blanco 230cc Iris",
                    "category_id": 1014,
                    "purchase": 930,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1657,
                    "code": 665,
                    "name": "esmalte sintetico 200cc azul pacifico",
                    "category_id": 1014,
                    "purchase": 1030,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1658,
                    "code": 666,
                    "name": "grasa consistente  400grm",
                    "category_id": 1008,
                    "purchase": 2935,
                    "sale": 4700,
                    "tax_id": 1001
                },
                {
                    "id": 1659,
                    "code": 667,
                    "name": "barniz marino natural 400 cc",
                    "category_id": 1014,
                    "purchase": 820,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1660,
                    "code": 668,
                    "name": "abrasadera metalica de 1 pulgada",
                    "category_id": 1027,
                    "purchase": 1517,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1661,
                    "code": 669,
                    "name": "masilla magica 575 grms",
                    "category_id": 1026,
                    "purchase": 374,
                    "sale": 5100,
                    "tax_id": 1001
                },
                {
                    "id": 1662,
                    "code": 670,
                    "name": "endurecedor de masilla magica",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1663,
                    "code": 671,
                    "name": "pasta para soldar 1mt con estaño",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 1664,
                    "code": 672,
                    "name": "pasta para juntas placa yeso carton",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 1665,
                    "code": 673,
                    "name": "cinta americana 45 mts",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1666,
                    "code": 674,
                    "name": "cera crema kit lata 200 gr",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1667,
                    "code": 675,
                    "name": "renovador de gomas silimax 650 cc",
                    "category_id": 1001,
                    "purchase": 4827,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1668,
                    "code": 676,
                    "name": "silicona r-66 650 cc",
                    "category_id": 1001,
                    "purchase": 5937,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1669,
                    "code": 677,
                    "name": "Silicona renovadora de tablero y cuero",
                    "category_id": 1001,
                    "purchase": 7730,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1670,
                    "code": 678,
                    "name": "Desodorante ambiental de auto",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1671,
                    "code": 679,
                    "name": "Afloja Todo Truper",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1672,
                    "code": 680,
                    "name": "brasso",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 1673,
                    "code": 681,
                    "name": "flappers para estanque wc",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1674,
                    "code": 682,
                    "name": "klerat veneno para ratas",
                    "category_id": 1007,
                    "purchase": 6833,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1675,
                    "code": 683,
                    "name": "Sifon Lavatorio Regio Salida Recta Estandar 1.1/4 Hoffens",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1676,
                    "code": 684,
                    "name": "regulador de gas kasongas",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 1677,
                    "code": 685,
                    "name": "kit instalacion wc descarga al piso",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 1678,
                    "code": 686,
                    "name": "combinacion lavaplato SOFIA H-FULL",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 17500,
                    "tax_id": 1001
                },
                {
                    "id": 1679,
                    "code": 687,
                    "name": "desague lavaplato cromado 1 1/2",
                    "category_id": 1020,
                    "purchase": 780,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 1680,
                    "code": 688,
                    "name": "monomando ducha hahn",
                    "category_id": 1020,
                    "purchase": 780,
                    "sale": 16990,
                    "tax_id": 1001
                },
                {
                    "id": 1681,
                    "code": 689,
                    "name": "monomando ducha mallorca mixa",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 16990,
                    "tax_id": 1001
                },
                {
                    "id": 1682,
                    "code": 690,
                    "name": "combinacion tina ducha elegant h-full",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 25990,
                    "tax_id": 1001
                },
                {
                    "id": 1683,
                    "code": 691,
                    "name": "fitting completo wc doble descarga",
                    "category_id": 1020,
                    "purchase": 998,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 1684,
                    "code": 692,
                    "name": "monomando ducha eco",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 24500,
                    "tax_id": 1001
                },
                {
                    "id": 1685,
                    "code": 693,
                    "name": "llave lavaplato un agua",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 7600,
                    "tax_id": 1001
                },
                {
                    "id": 1686,
                    "code": 694,
                    "name": "Llave Lavamano Eco H-Full",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 10990,
                    "tax_id": 1001
                },
                {
                    "id": 1687,
                    "code": 695,
                    "name": "llave lavatorio individual",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1688,
                    "code": 696,
                    "name": "Monomando Lavamanos Mixa",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 12500,
                    "tax_id": 1001
                },
                {
                    "id": 1689,
                    "code": 697,
                    "name": "Flexible Hi-Hi De 1/2 x 40cms",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2400,
                    "tax_id": 1001
                },
                {
                    "id": 1690,
                    "code": 698,
                    "name": "flexible hi - hi de 1/2 x 3/8 de 30 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1691,
                    "code": 699,
                    "name": "flexible hi - he M10 X 1/2 de 35 cm",
                    "category_id": 1020,
                    "purchase": 3800,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1692,
                    "code": 700,
                    "name": "flexible hi hi 1/2 35 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1693,
                    "code": 701,
                    "name": "flexible hi hi 1/2 x 15/16  35 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1694,
                    "code": 702,
                    "name": "flexible hi - hi califon de media 25 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1695,
                    "code": 703,
                    "name": "valvula de descarga de boton doble",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1696,
                    "code": 704,
                    "name": "Nivel De 24 Pulgada Hoteche",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1697,
                    "code": 705,
                    "name": "llave angular 1/2",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1698,
                    "code": 706,
                    "name": "piedra lumbre 1 kg",
                    "category_id": 1013,
                    "purchase": 5145,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1699,
                    "code": 707,
                    "name": "sulfato de cobre 1 kg",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1700,
                    "code": 708,
                    "name": "soda caustica 1/2 kg",
                    "category_id": 1007,
                    "purchase": 3800,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1701,
                    "code": 709,
                    "name": "Sifon Lavatorio 1 1/4 Salida Curva 32mm Regio Hof",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1702,
                    "code": 710,
                    "name": "escuadra repisa 8 x 10 pulgada",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1703,
                    "code": 711,
                    "name": "llave lavaplato economica cuello cisne",
                    "category_id": 1020,
                    "purchase": 8243,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1704,
                    "code": 712,
                    "name": "Desague Lavaplato Pvc 1. 1/2 Pulg",
                    "category_id": 1020,
                    "purchase": 7860,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1705,
                    "code": 713,
                    "name": "Desague Lavamanos Pvc 1. 1/4 Pulg",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1706,
                    "code": 714,
                    "name": "tee de 3/4 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 750,
                    "tax_id": 1001
                },
                {
                    "id": 1707,
                    "code": 715,
                    "name": "tee de 3/4 x 1/2  planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 950,
                    "tax_id": 1001
                },
                {
                    "id": 1708,
                    "code": 716,
                    "name": "terminal he 1/2 x 1/2 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1709,
                    "code": 717,
                    "name": "reduccuion 3/4 x 1/2 planza negra",
                    "category_id": 1030,
                    "purchase": 1313,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1710,
                    "code": 718,
                    "name": "terminal hi 1/2 x 1/2 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1711,
                    "code": 719,
                    "name": "union 3/4 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1712,
                    "code": 720,
                    "name": "terminal hi 1 1/4 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 890,
                    "tax_id": 1001
                },
                {
                    "id": 1713,
                    "code": 721,
                    "name": "codo 1/2 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1714,
                    "code": 722,
                    "name": "union 1/2 planza negra",
                    "category_id": 1030,
                    "purchase": 481,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1715,
                    "code": 723,
                    "name": "tee 1/2 planza negra",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1716,
                    "code": 724,
                    "name": "terminal hi 3/4 planza negra",
                    "category_id": 1030,
                    "purchase": 126,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1717,
                    "code": 725,
                    "name": "desague 1 1/2 lavaplato con rejilla y tapon",
                    "category_id": 1020,
                    "purchase": 4100,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1718,
                    "code": 726,
                    "name": "bushing bronce hi 3/8 x he 1/2 Buje",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1719,
                    "code": 727,
                    "name": "Niple Bronce He/He 1/2",
                    "category_id": 1020,
                    "purchase": 4760,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1720,
                    "code": 728,
                    "name": "Niple he he 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 4760,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1721,
                    "code": 729,
                    "name": "terminal hi- so 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 4760,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 1722,
                    "code": 730,
                    "name": "terminal he- so 3/8 bronce",
                    "category_id": 1020,
                    "purchase": 4760,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1723,
                    "code": 731,
                    "name": "tee he 25 mm ppr",
                    "category_id": 1031,
                    "purchase": 4760,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1724,
                    "code": 732,
                    "name": "tee he 20 mm ppr",
                    "category_id": 1031,
                    "purchase": 4500,
                    "sale": 1850,
                    "tax_id": 1001
                },
                {
                    "id": 1725,
                    "code": 733,
                    "name": "tee hi 25 x 3/4 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1726,
                    "code": 734,
                    "name": "tee hi 20 x 1/2 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1750,
                    "tax_id": 1001
                },
                {
                    "id": 1727,
                    "code": 735,
                    "name": "tee 32 x 20 x 32 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1728,
                    "code": 736,
                    "name": "tee 25x20x25 ppr",
                    "category_id": 1031,
                    "purchase": 1850,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1729,
                    "code": 737,
                    "name": "tee 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1730,
                    "code": 738,
                    "name": "tee 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1731,
                    "code": 739,
                    "name": "tee 25x25x20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1732,
                    "code": 740,
                    "name": "tee 4 aguas 25 ppr",
                    "category_id": 1031,
                    "purchase": 507,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1733,
                    "code": 741,
                    "name": "reduccion 63x40 ppr",
                    "category_id": 1031,
                    "purchase": 420,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1734,
                    "code": 742,
                    "name": "tee 40 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1735,
                    "code": 743,
                    "name": "llave paso 32 ppr",
                    "category_id": 1031,
                    "purchase": 140,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 1736,
                    "code": 744,
                    "name": "llave paso 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1737,
                    "code": 745,
                    "name": "llave paso 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 1738,
                    "code": 746,
                    "name": "llave paso campana cromada 20 ppr",
                    "category_id": 1031,
                    "purchase": 125,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 1739,
                    "code": 747,
                    "name": "llave paso campana cromada 25 ppr",
                    "category_id": 1031,
                    "purchase": 13480,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 1740,
                    "code": 748,
                    "name": "codo doble so he 1/2 x 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 1741,
                    "code": 749,
                    "name": "curva sobrepaso 25 ppr",
                    "category_id": 1031,
                    "purchase": 670,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1742,
                    "code": 750,
                    "name": "curva sobrepaso 20 ppr",
                    "category_id": 1031,
                    "purchase": 670,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1743,
                    "code": 751,
                    "name": "copla 40 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1744,
                    "code": 752,
                    "name": "union americana 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1745,
                    "code": 753,
                    "name": "union americana 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1746,
                    "code": 754,
                    "name": "union americana 32 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 1747,
                    "code": 755,
                    "name": "copla 32 ppr",
                    "category_id": 1031,
                    "purchase": 3250,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1748,
                    "code": 756,
                    "name": "copla 25 ppr",
                    "category_id": 1031,
                    "purchase": 500,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1749,
                    "code": 757,
                    "name": "copla 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1750,
                    "code": 758,
                    "name": "reduccion 40x20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1751,
                    "code": 759,
                    "name": "reduccion 40x32 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 1752,
                    "code": 760,
                    "name": "reduccion 32x25 ppr",
                    "category_id": 1031,
                    "purchase": 4000,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1753,
                    "code": 761,
                    "name": "reduccion 40x25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1754,
                    "code": 762,
                    "name": "reduccion 25x16 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1755,
                    "code": 763,
                    "name": "reduccion 25x20 ppr",
                    "category_id": 1031,
                    "purchase": 1790,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1756,
                    "code": 764,
                    "name": "reduccion Ppr 32x20",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1757,
                    "code": 765,
                    "name": "terminal hi 25x1/2 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1758,
                    "code": 766,
                    "name": "terminal hi 25x3/4 ppr",
                    "category_id": 1031,
                    "purchase": 6900,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1759,
                    "code": 767,
                    "name": "terminal he 25x3/4 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1760,
                    "code": 768,
                    "name": "union americana hi 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 1761,
                    "code": 769,
                    "name": "union americana hi 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1762,
                    "code": 770,
                    "name": "tee 25x20x20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1763,
                    "code": 771,
                    "name": "codo so-hi 25x1/2 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2700,
                    "tax_id": 1001
                },
                {
                    "id": 1764,
                    "code": 772,
                    "name": "terminal he 25x1/2 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1765,
                    "code": 773,
                    "name": "roseta de madera",
                    "category_id": 1022,
                    "purchase": 840,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1766,
                    "code": 774,
                    "name": "caleco 3 x 2,5",
                    "category_id": 1022,
                    "purchase": 1460,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1767,
                    "code": 775,
                    "name": "traje de agua xl",
                    "category_id": 1009,
                    "purchase": 2860,
                    "sale": 11000,
                    "tax_id": 1001
                },
                {
                    "id": 1768,
                    "code": 776,
                    "name": "ppr terminal he 20 x 1/2",
                    "category_id": 1031,
                    "purchase": 1493,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1769,
                    "code": 777,
                    "name": "ppr codo hi 20 x media",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 1770,
                    "code": 778,
                    "name": "ppr codo hi 25 x 3/4",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2400,
                    "tax_id": 1001
                },
                {
                    "id": 1771,
                    "code": 779,
                    "name": "ppr codo he 25 x 1/2",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1772,
                    "code": 780,
                    "name": "ppr codo he 20 x1/2",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1773,
                    "code": 781,
                    "name": "ppr codo he 25 x 3/4",
                    "category_id": 1031,
                    "purchase": 17900,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1774,
                    "code": 782,
                    "name": "codo hi 32 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 3650,
                    "tax_id": 1001
                },
                {
                    "id": 1775,
                    "code": 783,
                    "name": "codo 40 ppr",
                    "category_id": 1031,
                    "purchase": 4000,
                    "sale": 1050,
                    "tax_id": 1001
                },
                {
                    "id": 1776,
                    "code": 784,
                    "name": "codo 32 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1777,
                    "code": 785,
                    "name": "codo 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1778,
                    "code": 786,
                    "name": "codo 20 ppr",
                    "category_id": 1031,
                    "purchase": 2368,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1779,
                    "code": 787,
                    "name": "codo 25x20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1780,
                    "code": 788,
                    "name": "curva 32 ppr",
                    "category_id": 1031,
                    "purchase": 4037,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1781,
                    "code": 789,
                    "name": "curva 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1782,
                    "code": 790,
                    "name": "curva 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1783,
                    "code": 791,
                    "name": "tapa gorro 20 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 150,
                    "tax_id": 1001
                },
                {
                    "id": 1784,
                    "code": 792,
                    "name": "tapa gorro 25 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1785,
                    "code": 793,
                    "name": "ppr terminal hi 20 x 1/2",
                    "category_id": 1031,
                    "purchase": 3920,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1786,
                    "code": 794,
                    "name": "abrasadera ppr de media 1/2",
                    "category_id": 1027,
                    "purchase": 5000,
                    "sale": 150,
                    "tax_id": 1001
                },
                {
                    "id": 1787,
                    "code": 795,
                    "name": "copla de 40 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1788,
                    "code": 796,
                    "name": "copla de 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1789,
                    "code": 797,
                    "name": "copla de 75 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 1790,
                    "code": 798,
                    "name": "copla de 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1791,
                    "code": 799,
                    "name": "tapa de 40 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1792,
                    "code": 800,
                    "name": "tapa de 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1793,
                    "code": 801,
                    "name": "tapa de 75 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1794,
                    "code": 802,
                    "name": "tapa de 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1795,
                    "code": 803,
                    "name": "Reduccion Larga Pvc 32 x 25mm / 40 x 32mm",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1796,
                    "code": 804,
                    "name": "tee de 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 850,
                    "tax_id": 1001
                },
                {
                    "id": 1797,
                    "code": 805,
                    "name": "tee de 50 x 40 x 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1798,
                    "code": 806,
                    "name": "tee de 40 pvc snitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1799,
                    "code": 807,
                    "name": "tee de 75 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 1800,
                    "code": 808,
                    "name": "tee de 75 x 50 x 75 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1550,
                    "tax_id": 1001
                },
                {
                    "id": 1801,
                    "code": 809,
                    "name": "tee de 75 x 40 x 75 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1250,
                    "tax_id": 1001
                },
                {
                    "id": 1802,
                    "code": 810,
                    "name": "tee de 110 x 50 x 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1803,
                    "code": 811,
                    "name": "tee de 110 x 40 x 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 2350,
                    "tax_id": 1001
                },
                {
                    "id": 1804,
                    "code": 812,
                    "name": "vee de 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 1805,
                    "code": 813,
                    "name": "tee 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 1250,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1806,
                    "code": 814,
                    "name": "tee 110x 75 x110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 921,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1807,
                    "code": 815,
                    "name": "reduccion 110 x 50 cm pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1808,
                    "code": 816,
                    "name": "codo 110 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1809,
                    "code": 817,
                    "name": "Curva Pvc Sanitario 110mm (semicodo)",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1810,
                    "code": 818,
                    "name": "reduccion de 110 x 75 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1811,
                    "code": 819,
                    "name": "Reduccion Pvc Sanitario 50x40mm",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1812,
                    "code": 820,
                    "name": "reduccion de 75 x 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1813,
                    "code": 821,
                    "name": "curva 75 pvc sanitario semi curva",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1814,
                    "code": 822,
                    "name": "codo de 75 pvc sanitrio",
                    "category_id": 1028,
                    "purchase": 50730,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1815,
                    "code": 823,
                    "name": "curva 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1816,
                    "code": 824,
                    "name": "codo 50 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1817,
                    "code": 825,
                    "name": "curva de 40 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1818,
                    "code": 826,
                    "name": "codo de 40 pvc sanitario",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1819,
                    "code": 827,
                    "name": "terminal hi 40 x 1, 1/4 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1820,
                    "code": 828,
                    "name": "terminal hi de 32 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 750,
                    "tax_id": 1001
                },
                {
                    "id": 1821,
                    "code": 829,
                    "name": "terminal hi de 50 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 1822,
                    "code": 830,
                    "name": "terminal hi de 20 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 2950,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1823,
                    "code": 831,
                    "name": "terminal hi de 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1824,
                    "code": 832,
                    "name": "tee al medio hi de 25 hidraulico",
                    "category_id": 1029,
                    "purchase": 500,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1825,
                    "code": 833,
                    "name": "tee hi al medio de 20 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 170,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1826,
                    "code": 834,
                    "name": "tee de 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1827,
                    "code": 835,
                    "name": "Tee Pvc Hidraulico De 32mm",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1828,
                    "code": 836,
                    "name": "tee de 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 1829,
                    "code": 837,
                    "name": "copla de 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1830,
                    "code": 838,
                    "name": "terminal he de 50 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1831,
                    "code": 839,
                    "name": "Terminal Pvc Hidrauliuco 32mm He x 1 Pulg Cementar",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1832,
                    "code": 840,
                    "name": "termial he de 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1833,
                    "code": 841,
                    "name": "codo hi - hi de 3/4 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 4820,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1834,
                    "code": 842,
                    "name": "codo hi hi de 1/2 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 1740,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1835,
                    "code": 843,
                    "name": "codo hi - hi de 1 pulg pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 1980,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1836,
                    "code": 844,
                    "name": "union america de 3/4 bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1837,
                    "code": 845,
                    "name": "union americana de 1/2 bronce",
                    "category_id": 1020,
                    "purchase": 310,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1838,
                    "code": 846,
                    "name": "union americana de 1 pulg bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1839,
                    "code": 847,
                    "name": "Reduccion 32 x 25mm Pvc Hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1840,
                    "code": 848,
                    "name": "reduccion de 40 a 32 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 58500,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1841,
                    "code": 849,
                    "name": "copla de 32 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1842,
                    "code": 850,
                    "name": "copla de 50 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1843,
                    "code": 851,
                    "name": "buje hi - he 3/4 x 1/2 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 15267,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1844,
                    "code": 852,
                    "name": "buje hi - he 1 x 3/4 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1845,
                    "code": 853,
                    "name": "codo hi - so 32 x 3/4 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1846,
                    "code": 854,
                    "name": "copla hi hi 1/2 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1847,
                    "code": 855,
                    "name": "copla hi- hi de 1 pulg pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 5290,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 1848,
                    "code": 856,
                    "name": "buje redutor corto 25 x 20 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 7810,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1849,
                    "code": 857,
                    "name": "buje redutor corto 32 x 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1850,
                    "code": 858,
                    "name": "buje reductor corto 40 x 32 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1851,
                    "code": 859,
                    "name": "Conector Rapido Jardin 1  Y 3/4 Pulg",
                    "category_id": 1002,
                    "purchase": 5504,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1852,
                    "code": 860,
                    "name": "copla de 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1853,
                    "code": 861,
                    "name": "buje reductor hi he  1 x 1/2 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 8330,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1854,
                    "code": 862,
                    "name": "niple he - he de 1 pulg pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1855,
                    "code": 863,
                    "name": "niple he - he de 3/4 pulg pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 1990,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1856,
                    "code": 864,
                    "name": "niple he - he de 1/2 pulg pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1857,
                    "code": 865,
                    "name": "union americana de 20 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1858,
                    "code": 866,
                    "name": "unio americana de 50 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1859,
                    "code": 867,
                    "name": "abrasadera de cobre de 1/2 media",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 1860,
                    "code": 868,
                    "name": "abrasadera de cobre de 3/4",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 1861,
                    "code": 869,
                    "name": "valvula de admision CON BOYA H-FULL",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1862,
                    "code": 870,
                    "name": "Kit Wc Para Estanque H-Full",
                    "category_id": 1020,
                    "purchase": 3380,
                    "sale": 14990,
                    "tax_id": 1001
                },
                {
                    "id": 1863,
                    "code": 871,
                    "name": "fitting universal manilla plastica cromada",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 14500,
                    "tax_id": 1001
                },
                {
                    "id": 1864,
                    "code": 872,
                    "name": "copla de 1/2 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1865,
                    "code": 873,
                    "name": "termInal he 20x1/2 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1866,
                    "code": 874,
                    "name": "reduccion larga 32x20 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 17132,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1867,
                    "code": 875,
                    "name": "tee hi hi hi 20 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1868,
                    "code": 876,
                    "name": "tapa tornillo he 3/4 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1869,
                    "code": 877,
                    "name": "Abrazadera 3/4 Pvc Hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1870,
                    "code": 878,
                    "name": "Tapa Gorro 20mm Hi Pvc Hidraulico",
                    "category_id": 1029,
                    "purchase": 8300,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1871,
                    "code": 879,
                    "name": "tapa gorro hi 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 9500,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1872,
                    "code": 880,
                    "name": "Reduccion Pvc Hidraulico 25x20mm",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1873,
                    "code": 881,
                    "name": "codo hi 25 x 3/4 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 8870,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1874,
                    "code": 882,
                    "name": "Codo Pvc Hidraulico Hi-Cementar 20mm x 1/2",
                    "category_id": 1029,
                    "purchase": 8095,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1875,
                    "code": 883,
                    "name": "codo hi 32 x 1 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 2707,
                    "sale": 750,
                    "tax_id": 1001
                },
                {
                    "id": 1876,
                    "code": 884,
                    "name": "codo 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1877,
                    "code": 885,
                    "name": "codo 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 4177,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 1878,
                    "code": 886,
                    "name": "codo 50 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 550,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 1879,
                    "code": 887,
                    "name": "abrazadera 3/4 ppr",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1880,
                    "code": 888,
                    "name": "abrazadera de 1 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 778,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1881,
                    "code": 889,
                    "name": "Abrazadera 20mm Pvc Hidraulico",
                    "category_id": 1029,
                    "purchase": 670,
                    "sale": 160,
                    "tax_id": 1001
                },
                {
                    "id": 1882,
                    "code": 890,
                    "name": "Tapa gorro 20mm Pvc Hidraulico Cementar",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 200,
                    "tax_id": 1001
                },
                {
                    "id": 1883,
                    "code": 891,
                    "name": "tapa gorro 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1884,
                    "code": 892,
                    "name": "Tapa Gorro Pvc Hidraulico 32mm Cementar",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1885,
                    "code": 893,
                    "name": "tapa gorro 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 550,
                    "tax_id": 1001
                },
                {
                    "id": 1886,
                    "code": 894,
                    "name": "valvula bola 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 4200,
                    "sale": 4200,
                    "tax_id": 1001
                },
                {
                    "id": 1887,
                    "code": 895,
                    "name": "Valvula Compacta Pvc Hidraulico 20mm",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1888,
                    "code": 896,
                    "name": "valvula bola 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1889,
                    "code": 897,
                    "name": "valvula bola 32 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 1050,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1890,
                    "code": 898,
                    "name": "llave paso cementar 25 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1891,
                    "code": 899,
                    "name": "Llave de paso (ducha) Pvc Hid De 20mm Cem",
                    "category_id": 1029,
                    "purchase": 19990,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1892,
                    "code": 900,
                    "name": "toma a tierra 500 amp",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 4400,
                    "tax_id": 1001
                },
                {
                    "id": 1893,
                    "code": 901,
                    "name": "porta electrodo 600 amp",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 1894,
                    "code": 902,
                    "name": "brokero con llave de 13 mm",
                    "category_id": 1008,
                    "purchase": 10061,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1895,
                    "code": 903,
                    "name": "brokero con llave de 10 mm",
                    "category_id": 1008,
                    "purchase": 2950,
                    "sale": 4700,
                    "tax_id": 1001
                },
                {
                    "id": 1896,
                    "code": 904,
                    "name": "parche bicicleta grande",
                    "category_id": 1003,
                    "purchase": 4560,
                    "sale": 100,
                    "tax_id": 1001
                },
                {
                    "id": 1897,
                    "code": 905,
                    "name": "solucion parche bicicleta",
                    "category_id": 1003,
                    "purchase": 25,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1898,
                    "code": 906,
                    "name": "candado oister xtra 60 mm",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 11000,
                    "tax_id": 1001
                },
                {
                    "id": 1899,
                    "code": 907,
                    "name": "candado acero rectangular 70 mm",
                    "category_id": 1007,
                    "purchase": 850,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1900,
                    "code": 908,
                    "name": "visor puerta ojo magico",
                    "category_id": 1007,
                    "purchase": 7534,
                    "sale": 1990,
                    "tax_id": 1001
                },
                {
                    "id": 1901,
                    "code": 909,
                    "name": "vidrio soldar #10  100-200 amp",
                    "category_id": 1008,
                    "purchase": 26303,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1902,
                    "code": 910,
                    "name": "caja 100 postones 5,5 gamo",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 1903,
                    "code": 911,
                    "name": "caja 100 postones 4,5 gamo",
                    "category_id": 1023,
                    "purchase": 11310,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1904,
                    "code": 912,
                    "name": "candado economico 63 mm",
                    "category_id": 1007,
                    "purchase": 14515,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1905,
                    "code": 913,
                    "name": "candado economico 38 mm",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1906,
                    "code": 914,
                    "name": "candado economico 20 mm",
                    "category_id": 1007,
                    "purchase": 12780,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1907,
                    "code": 915,
                    "name": "escuadra esquina 3 x 3",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 1908,
                    "code": 916,
                    "name": "bisagra 1 pulgada",
                    "category_id": 1011,
                    "purchase": 3636,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1909,
                    "code": 917,
                    "name": "escuadra esquina plana 40 x 40 x 20 mm",
                    "category_id": 1011,
                    "purchase": 3835,
                    "sale": 230,
                    "tax_id": 1001
                },
                {
                    "id": 1910,
                    "code": 918,
                    "name": "escuadra esquina plana 50 x 50 x 20 mm",
                    "category_id": 1011,
                    "purchase": 2750,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1911,
                    "code": 919,
                    "name": "bisagra de 2 1/2 pilg",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 490,
                    "tax_id": 1001
                },
                {
                    "id": 1912,
                    "code": 920,
                    "name": "escudra esquina 2 1/2 x 2 1/2",
                    "category_id": 1011,
                    "purchase": 2451,
                    "sale": 600,
                    "tax_id": 1001
                },
                {
                    "id": 1913,
                    "code": 921,
                    "name": "escuadra esquina 2 x 2",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1914,
                    "code": 922,
                    "name": "escuadra esquina 1 1/2 x 1 1/2",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 1915,
                    "code": 923,
                    "name": "bisagra de 2",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 1916,
                    "code": 924,
                    "name": "sellador tapagoteras gris 150 grs frasco",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 1917,
                    "code": 925,
                    "name": "silicona neutra universal valkolor gris",
                    "category_id": 1026,
                    "purchase": 20551,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 1918,
                    "code": 926,
                    "name": "silicona multiuso gris oscuro",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1919,
                    "code": 927,
                    "name": "silicona neutra titanio siltop",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1920,
                    "code": 928,
                    "name": "silicona roja alta temperatura",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1921,
                    "code": 929,
                    "name": "silicona acetica transparente",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1922,
                    "code": 930,
                    "name": "silicona acetica blanca",
                    "category_id": 1026,
                    "purchase": 10764,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1923,
                    "code": 931,
                    "name": "silicona acetica negra",
                    "category_id": 1026,
                    "purchase": 14362,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1924,
                    "code": 932,
                    "name": "sika tapagotera en humedo negra",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1925,
                    "code": 933,
                    "name": "Llave Lavadora Labadero Doble",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 14500,
                    "tax_id": 1001
                },
                {
                    "id": 1926,
                    "code": 934,
                    "name": "Silicona adhesivo montaje tubo",
                    "category_id": 1026,
                    "purchase": 6700,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1927,
                    "code": 935,
                    "name": "soldadura estaño por rollo",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 22900,
                    "tax_id": 1001
                },
                {
                    "id": 1928,
                    "code": 936,
                    "name": "manta de agua",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 1929,
                    "code": 937,
                    "name": "set fijacion estanque taza",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1990,
                    "tax_id": 1001
                },
                {
                    "id": 1930,
                    "code": 938,
                    "name": "rejilla ecologica redonda blanca",
                    "category_id": 1020,
                    "purchase": 12270,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 1931,
                    "code": 939,
                    "name": "desague lavatorio 1 1/4 sin cola",
                    "category_id": 1020,
                    "purchase": 17646,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 1932,
                    "code": 940,
                    "name": "valvula fondo hi hi con filtro",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1933,
                    "code": 941,
                    "name": "codo cachimba 1/2",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1934,
                    "code": 942,
                    "name": "manilla cromada estanque metalica",
                    "category_id": 1020,
                    "purchase": 1600,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1935,
                    "code": 943,
                    "name": "rodillo poliester de 9 cm h-full",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1936,
                    "code": 944,
                    "name": "goma con pernos acople estanque y taza h-full",
                    "category_id": 1020,
                    "purchase": 472,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1937,
                    "code": 945,
                    "name": "soporte para fierro de cortina doble",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1938,
                    "code": 946,
                    "name": "flexible hi hi 1/2x 15/16x35cm con llave angular",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 5990,
                    "tax_id": 1001
                },
                {
                    "id": 1939,
                    "code": 947,
                    "name": "bencina blanca 1 lt",
                    "category_id": 1014,
                    "purchase": 850,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 1940,
                    "code": 948,
                    "name": "diluyente poliuretano 1 lt",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 2990,
                    "tax_id": 1001
                },
                {
                    "id": 1941,
                    "code": 949,
                    "name": "acido muriatico 1 lt",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 1942,
                    "code": 950,
                    "name": "diluyente duco plus 1 lt",
                    "category_id": 1014,
                    "purchase": 1002,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 1943,
                    "code": 951,
                    "name": "aguarras 1 lt",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 1944,
                    "code": 952,
                    "name": "aceite para impregnar madera 1 lt",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 1945,
                    "code": 953,
                    "name": "aguarras 5lts",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 1946,
                    "code": 954,
                    "name": "diluyente duco 5 lts",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 16000,
                    "tax_id": 1001
                },
                {
                    "id": 1947,
                    "code": 955,
                    "name": "alcohol gelificado 70%  5lts",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 0,
                    "tax_id": 1001
                },
                {
                    "id": 1948,
                    "code": 956,
                    "name": "alcohol gelificado 70%  1 lts",
                    "category_id": 1014,
                    "purchase": 10000,
                    "sale": 0,
                    "tax_id": 1001
                },
                {
                    "id": 1949,
                    "code": 957,
                    "name": "botella con rociador",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 1950,
                    "code": 958,
                    "name": "coneccion lavaplatos doble entrada",
                    "category_id": 1020,
                    "purchase": 2850,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 1951,
                    "code": 959,
                    "name": "Abrazadera Pvc Sanitario 75mm ",
                    "category_id": 1029,
                    "purchase": 6500,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1952,
                    "code": 960,
                    "name": "abrazadera 50mm pvc sanitario",
                    "category_id": 1029,
                    "purchase": 34030,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 1953,
                    "code": 961,
                    "name": "abrazadera 40mm pvc saniratio",
                    "category_id": 1029,
                    "purchase": 2890,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 1954,
                    "code": 962,
                    "name": "uñeta estándard line fijacion lavamanos",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 1955,
                    "code": 963,
                    "name": "terminal de conduit de 16 mm",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 100,
                    "tax_id": 1001
                },
                {
                    "id": 1956,
                    "code": 964,
                    "name": "terminal de conduit de 20 mm",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 120,
                    "tax_id": 1001
                },
                {
                    "id": 1957,
                    "code": 965,
                    "name": "Hoja De Sierra Bahco",
                    "category_id": 1005,
                    "purchase": 2658,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1958,
                    "code": 966,
                    "name": "Hoja De Sierra Sandflex ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 1959,
                    "code": 967,
                    "name": "cierra doble fierro y madera shrplit",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 1960,
                    "code": 968,
                    "name": "Barredor De Hojas ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1961,
                    "code": 969,
                    "name": "esmalte sintetico negro 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 7190,
                    "tax_id": 1001
                },
                {
                    "id": 1962,
                    "code": 970,
                    "name": "esmalte sintetico blanco 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 7190,
                    "tax_id": 1001
                },
                {
                    "id": 1963,
                    "code": 971,
                    "name": "anticorrosivo alquid rojo oxido 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1964,
                    "code": 972,
                    "name": "anticorrosivo alquid gris 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1965,
                    "code": 973,
                    "name": "anticorrosivo alquid negro 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 1966,
                    "code": 974,
                    "name": "laca madera 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1967,
                    "code": 975,
                    "name": "sellador de madera 1/4 galon",
                    "category_id": 1014,
                    "purchase": 2470,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1968,
                    "code": 976,
                    "name": "cerestain natural 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 1969,
                    "code": 977,
                    "name": "aceite de linaza 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 1970,
                    "code": 978,
                    "name": "barniz marino alerce 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1971,
                    "code": 979,
                    "name": "barniz marino miel 1/4 galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1972,
                    "code": 980,
                    "name": "barniz vitrificante brillante 1/4 galon",
                    "category_id": 1014,
                    "purchase": 24320,
                    "sale": 13990,
                    "tax_id": 1001
                },
                {
                    "id": 1973,
                    "code": 981,
                    "name": "barniz marino roble 1/4 galon",
                    "category_id": 1014,
                    "purchase": 1100,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1974,
                    "code": 982,
                    "name": "barniz marino incoloro 1/4 galon",
                    "category_id": 1014,
                    "purchase": 10900,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 1975,
                    "code": 983,
                    "name": "oleo opaco damasco tricolor  1/4 galon",
                    "category_id": 1014,
                    "purchase": 12081,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 1976,
                    "code": 984,
                    "name": "pala punta huevo tramontina",
                    "category_id": 1005,
                    "purchase": 27000,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 1977,
                    "code": 985,
                    "name": "puerta terciado 60 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 22900,
                    "tax_id": 1001
                },
                {
                    "id": 1978,
                    "code": 986,
                    "name": "puerta terciado  65 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 23900,
                    "tax_id": 1001
                },
                {
                    "id": 1979,
                    "code": 987,
                    "name": "puerta de terciado 70 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 25500,
                    "tax_id": 1001
                },
                {
                    "id": 1980,
                    "code": 988,
                    "name": "puerta de terciado 75 cm",
                    "category_id": 1012,
                    "purchase": 4760,
                    "sale": 27500,
                    "tax_id": 1001
                },
                {
                    "id": 1981,
                    "code": 989,
                    "name": "puerta de terciado de 80 cm",
                    "category_id": 1012,
                    "purchase": 1650,
                    "sale": 30000,
                    "tax_id": 1001
                },
                {
                    "id": 1982,
                    "code": 990,
                    "name": "puerta de terciado de 90 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 33000,
                    "tax_id": 1001
                },
                {
                    "id": 1983,
                    "code": 991,
                    "name": "purta de sifonia de 60 cm",
                    "category_id": 1012,
                    "purchase": 2437,
                    "sale": 33900,
                    "tax_id": 1001
                },
                {
                    "id": 1984,
                    "code": 992,
                    "name": "puerta de sinfonia de 65 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 34900,
                    "tax_id": 1001
                },
                {
                    "id": 1985,
                    "code": 993,
                    "name": "puerta de sinfonia de 70 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 35900,
                    "tax_id": 1001
                },
                {
                    "id": 1986,
                    "code": 994,
                    "name": "puerta de sinfoia de 75 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 36900,
                    "tax_id": 1001
                },
                {
                    "id": 1987,
                    "code": 995,
                    "name": "puerta de sinfonia de 80 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 37900,
                    "tax_id": 1001
                },
                {
                    "id": 1988,
                    "code": 996,
                    "name": "puerta de sinfonia de 85 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 38900,
                    "tax_id": 1001
                },
                {
                    "id": 1989,
                    "code": 997,
                    "name": "puerta de sinfonia de 90 cm",
                    "category_id": 1012,
                    "purchase": 5255,
                    "sale": 39900,
                    "tax_id": 1001
                },
                {
                    "id": 1990,
                    "code": 998,
                    "name": "puerta de pino radiata madera 75 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 129000,
                    "tax_id": 1001
                },
                {
                    "id": 1991,
                    "code": 999,
                    "name": "puerta de pino radiata madera 80 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 139000,
                    "tax_id": 1001
                },
                {
                    "id": 1992,
                    "code": 1000,
                    "name": "marco de puerta de 7 cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 1993,
                    "code": 1001,
                    "name": "marco de puerta de 9 cm",
                    "category_id": 1012,
                    "purchase": 8925,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 1994,
                    "code": 1002,
                    "name": "cuarto rodon",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 1995,
                    "code": 1003,
                    "name": "guardapolvo de 2 pulg",
                    "category_id": 1012,
                    "purchase": 3484,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 1996,
                    "code": 1004,
                    "name": "guardapolvo de 3 pulg",
                    "category_id": 1012,
                    "purchase": 760,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 1997,
                    "code": 1005,
                    "name": "media caña",
                    "category_id": 1012,
                    "purchase": 1700,
                    "sale": 4400,
                    "tax_id": 1001
                },
                {
                    "id": 1998,
                    "code": 1006,
                    "name": "fieltro liso de 40 mts",
                    "category_id": 1012,
                    "purchase": 1340,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 1999,
                    "code": 1007,
                    "name": "fieltro liso de 16 mts",
                    "category_id": 1012,
                    "purchase": 1349,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 2000,
                    "code": 1008,
                    "name": "fieltro crepado de 40 mtrs",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 23990,
                    "tax_id": 1001
                },
                {
                    "id": 2001,
                    "code": 1009,
                    "name": "maquina fumigadora de 15 lts",
                    "category_id": 1005,
                    "purchase": 1291,
                    "sale": 31990,
                    "tax_id": 1001
                },
                {
                    "id": 2002,
                    "code": 1010,
                    "name": "pvc hidraulico 20 mm 6mt",
                    "category_id": 1029,
                    "purchase": 3580,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 2003,
                    "code": 1011,
                    "name": "pvc hidraulico 32 mm 6mt",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2004,
                    "code": 1012,
                    "name": "Tubo PPR 20mm x 6mts",
                    "category_id": 1031,
                    "purchase": 1000,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2005,
                    "code": 1013,
                    "name": "pvc sanitario 40mm 6 mts",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 2006,
                    "code": 1014,
                    "name": "pvc hidraulico 40 mm 6mts",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 2007,
                    "code": 1015,
                    "name": "ppr 25mm 6mts",
                    "category_id": 1031,
                    "purchase": 880,
                    "sale": 9500,
                    "tax_id": 1001
                },
                {
                    "id": 2008,
                    "code": 1016,
                    "name": "pvc sanitario 50mm 6 mts",
                    "category_id": 1028,
                    "purchase": 1570,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 2009,
                    "code": 1017,
                    "name": "pvc hidraulico 25mm 6mts",
                    "category_id": 1029,
                    "purchase": 5791,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2010,
                    "code": 1018,
                    "name": "pvc sanitario 75mm 6mts",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 2011,
                    "code": 1019,
                    "name": "cobre 1/2 agua tipo L 3 mts",
                    "category_id": 1020,
                    "purchase": 5633,
                    "sale": 19500,
                    "tax_id": 1001
                },
                {
                    "id": 2012,
                    "code": 1020,
                    "name": "cobre 3/4 agua tipo m 5 mts",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 50000,
                    "tax_id": 1001
                },
                {
                    "id": 2013,
                    "code": 1022,
                    "name": "Pvc Sanitario 110mm x 6mts",
                    "category_id": 1028,
                    "purchase": 12045,
                    "sale": 17500,
                    "tax_id": 1001
                },
                {
                    "id": 2014,
                    "code": 1023,
                    "name": "cobre 1/2 gas tipo L 6 mts",
                    "category_id": 1020,
                    "purchase": 1411,
                    "sale": 39000,
                    "tax_id": 1001
                },
                {
                    "id": 2015,
                    "code": 1024,
                    "name": "canala pvc café",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 11990,
                    "tax_id": 1001
                },
                {
                    "id": 2016,
                    "code": 1025,
                    "name": "tubo bajada agua 75mm sanitario café 3mts",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 2017,
                    "code": 1026,
                    "name": "caballete 2mts",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 2018,
                    "code": 1027,
                    "name": "caballete 0,35x308mmx3nts",
                    "category_id": 1012,
                    "purchase": 632,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 2019,
                    "code": 1028,
                    "name": "Malla Bizcocho 1.5x25mts",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 74990,
                    "tax_id": 1001
                },
                {
                    "id": 2020,
                    "code": 1029,
                    "name": "Pilar Electro Soldado 15x15x3 Mts 8 Mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 15900,
                    "tax_id": 1001
                },
                {
                    "id": 2021,
                    "code": 1030,
                    "name": "cadena 15x20x9,2x4,5mts",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 27900,
                    "tax_id": 1001
                },
                {
                    "id": 2022,
                    "code": 1031,
                    "name": "cadena Echicha 15x20x9,2x 3 mts",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 18900,
                    "tax_id": 1001
                },
                {
                    "id": 2023,
                    "code": 1032,
                    "name": "disco diamantado 4 1/2 porcelanato",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2024,
                    "code": 1033,
                    "name": "lampara portatil 5mts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 2025,
                    "code": 1034,
                    "name": "conector tv balum interior",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2026,
                    "code": 1035,
                    "name": "guante nitrilo azul construccion",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 2027,
                    "code": 1036,
                    "name": "bisagra 3x3 bronce par jaque",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2028,
                    "code": 1037,
                    "name": "cadena 3mm",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2029,
                    "code": 1038,
                    "name": "malla asadera 60x 90cm",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 2030,
                    "code": 1039,
                    "name": "malla asadera 50x60 cm",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2031,
                    "code": 1040,
                    "name": "cola fria botella 1 kilo rex",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2032,
                    "code": 1041,
                    "name": "broca sds plus 20 mm",
                    "category_id": 1018,
                    "purchase": 17720,
                    "sale": 20000,
                    "tax_id": 1001
                },
                {
                    "id": 2033,
                    "code": 1042,
                    "name": "broca sds plus 25 mm",
                    "category_id": 1018,
                    "purchase": 19813,
                    "sale": 25000,
                    "tax_id": 1001
                },
                {
                    "id": 2034,
                    "code": 1043,
                    "name": "automatico 6 amp de riel",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2035,
                    "code": 1044,
                    "name": "automatico 10 amp de riel",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2036,
                    "code": 1045,
                    "name": "automatico de 16 amp de riel",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2037,
                    "code": 1046,
                    "name": "automatico de 20 amp de riel",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2038,
                    "code": 1047,
                    "name": "automatico de 25 amp de riel",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2039,
                    "code": 1048,
                    "name": "automatico de 32 amp de riel",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2040,
                    "code": 1049,
                    "name": "automatico saime negro de 20 amp",
                    "category_id": 1022,
                    "purchase": 749,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 2041,
                    "code": 1050,
                    "name": "automatico saime negro de 25 amp",
                    "category_id": 1022,
                    "purchase": 393,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 2042,
                    "code": 1051,
                    "name": "automatico trifasico de 16 amp",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 12000,
                    "tax_id": 1001
                },
                {
                    "id": 2043,
                    "code": 1052,
                    "name": "automatico trifasico de 20 amp",
                    "category_id": 1022,
                    "purchase": 1107,
                    "sale": 12000,
                    "tax_id": 1001
                },
                {
                    "id": 2044,
                    "code": 1053,
                    "name": "plafon foco led de 12 watts cuadrado",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2045,
                    "code": 1054,
                    "name": "latex constructor 1gl rojo colonial soquina",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2046,
                    "code": 1055,
                    "name": "latex constructor 1gl sandia soquina",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2047,
                    "code": 1056,
                    "name": "latex constructor 1gl verde limon soquina",
                    "category_id": 1014,
                    "purchase": 3200,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2048,
                    "code": 1057,
                    "name": "latex constructor 1gl lila soquina",
                    "category_id": 1014,
                    "purchase": 2610,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2049,
                    "code": 1058,
                    "name": "latex constructor 1gl rojo celeste agua soquina",
                    "category_id": 1014,
                    "purchase": 3500,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2050,
                    "code": 1059,
                    "name": "mastil bandera 2,4 mts blanco",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2051,
                    "code": 1060,
                    "name": "guante escarne par",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2052,
                    "code": 1061,
                    "name": "rejilla de desague cuadrada 10 cm",
                    "category_id": 1020,
                    "purchase": 8925,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 2053,
                    "code": 1062,
                    "name": "Tubo Conduit 16mm x 3mts",
                    "category_id": 1022,
                    "purchase": 4280,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2054,
                    "code": 1063,
                    "name": "Tubo Conduit de 20mm x 3mts",
                    "category_id": 1022,
                    "purchase": 4990,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 2055,
                    "code": 1064,
                    "name": "adaptador schuko 10 amp",
                    "category_id": 1022,
                    "purchase": 7500,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2056,
                    "code": 1065,
                    "name": "camara de carretilla",
                    "category_id": 1006,
                    "purchase": 6812,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2057,
                    "code": 1066,
                    "name": "llave de cruz de rueda de vehiculo",
                    "category_id": 1001,
                    "purchase": 1570,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2058,
                    "code": 1067,
                    "name": "cordel nylon de 10 mm",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2059,
                    "code": 1068,
                    "name": "Flexible Hi-He 1/2 x 50cms",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2800,
                    "tax_id": 1001
                },
                {
                    "id": 2060,
                    "code": 1069,
                    "name": "flexible hi - hi de 50 cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2800,
                    "tax_id": 1001
                },
                {
                    "id": 2061,
                    "code": 1070,
                    "name": "soporte para ducha telefono",
                    "category_id": 1020,
                    "purchase": 252,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2062,
                    "code": 1071,
                    "name": "prensa de 2 pulg",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2063,
                    "code": 1072,
                    "name": "prensa de 4 pulga",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 6500,
                    "tax_id": 1001
                },
                {
                    "id": 2064,
                    "code": 1073,
                    "name": "esmalte al agua galon verde musgo passol",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 2065,
                    "code": 1074,
                    "name": "malla soldada 0,90 mtrs de alto precio por metro",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 2066,
                    "code": 1075,
                    "name": "malla pollo  gallinero de metro de alto   precio por metro",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 2067,
                    "code": 1076,
                    "name": "malla pollo  gallinero de 1,2 de alto   precio por metro",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1600,
                    "tax_id": 1001
                },
                {
                    "id": 2068,
                    "code": 1077,
                    "name": "Naylon Transparente Manga 2 Mtros A 4 Metros",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2069,
                    "code": 1078,
                    "name": "naylon negro por metro",
                    "category_id": 1012,
                    "purchase": 830,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2070,
                    "code": 1079,
                    "name": "manguera jardin 1/2",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2071,
                    "code": 1080,
                    "name": "maguera jardin 3/4",
                    "category_id": 1002,
                    "purchase": 490,
                    "sale": 1100,
                    "tax_id": 1001
                },
                {
                    "id": 2072,
                    "code": 1081,
                    "name": "manguera para gas  1/2",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2073,
                    "code": 1082,
                    "name": "manguera tranparente de 6 mm",
                    "category_id": 1012,
                    "purchase": 260,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 2074,
                    "code": 1083,
                    "name": "manguera transparente de 9 mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2075,
                    "code": 1084,
                    "name": "manguera de presion",
                    "category_id": 1020,
                    "purchase": 150,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2076,
                    "code": 1085,
                    "name": "manguera planza de media",
                    "category_id": 1030,
                    "purchase": 300,
                    "sale": 350,
                    "tax_id": 1001
                },
                {
                    "id": 2077,
                    "code": 1086,
                    "name": "manguera planza 3/4",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 2078,
                    "code": 1087,
                    "name": "corrugado de 1/2",
                    "category_id": 1022,
                    "purchase": 7360,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 2079,
                    "code": 1088,
                    "name": "alambre de 1,5 electrico",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 270,
                    "tax_id": 1001
                },
                {
                    "id": 2080,
                    "code": 1089,
                    "name": "alambre de 2,5 electrico",
                    "category_id": 1022,
                    "purchase": 4501,
                    "sale": 370,
                    "tax_id": 1001
                },
                {
                    "id": 2081,
                    "code": 1090,
                    "name": "cable eva 2,5 Rojo ",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 470,
                    "tax_id": 1001
                },
                {
                    "id": 2082,
                    "code": 1091,
                    "name": "cable eva 2,5 Verde ",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 470,
                    "tax_id": 1001
                },
                {
                    "id": 2083,
                    "code": 1092,
                    "name": "Perfil Rectangular 20x30x1.5mm",
                    "category_id": 1032,
                    "purchase": 250,
                    "sale": 17000,
                    "tax_id": 1001
                },
                {
                    "id": 2084,
                    "code": 1093,
                    "name": "perfil rectangular 30x20x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 19000,
                    "tax_id": 1001
                },
                {
                    "id": 2085,
                    "code": 1094,
                    "name": "perfil rectangular 40x20x1,5",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 18000,
                    "tax_id": 1001
                },
                {
                    "id": 2086,
                    "code": 1095,
                    "name": "perfil rectangular 40x20x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 21000,
                    "tax_id": 1001
                },
                {
                    "id": 2087,
                    "code": 1096,
                    "name": "Perfil Rectangular 50x30x2mm x 6mts",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 28000,
                    "tax_id": 1001
                },
                {
                    "id": 2088,
                    "code": 1097,
                    "name": "perfil rectangular 80x40x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 42000,
                    "tax_id": 1001
                },
                {
                    "id": 2089,
                    "code": 1098,
                    "name": "perfil cuadrado 15x15x1,5",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 2090,
                    "code": 1099,
                    "name": "perfil cuadrado 15x15x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 11000,
                    "tax_id": 1001
                },
                {
                    "id": 2091,
                    "code": 1100,
                    "name": "perfil cuadrado 20x20x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 13000,
                    "tax_id": 1001
                },
                {
                    "id": 2092,
                    "code": 1101,
                    "name": "perfil cuadrado 40x40x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 18900,
                    "tax_id": 1001
                },
                {
                    "id": 2093,
                    "code": 1102,
                    "name": "perfil cuadrado 50x50x2MM X 3MTS",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 18000,
                    "tax_id": 1001
                },
                {
                    "id": 2094,
                    "code": 1103,
                    "name": "perfil cuadrado 75x75x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 54000,
                    "tax_id": 1001
                },
                {
                    "id": 2095,
                    "code": 1104,
                    "name": "perfil cuadrado 100x100x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 73000,
                    "tax_id": 1001
                },
                {
                    "id": 2096,
                    "code": 1105,
                    "name": "perfil angulo 30x30x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 12000,
                    "tax_id": 1001
                },
                {
                    "id": 2097,
                    "code": 1106,
                    "name": "perfil angulo 20x20x2",
                    "category_id": 1032,
                    "purchase": 2451,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 2098,
                    "code": 1107,
                    "name": "perfil angulo 25x25x2",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 11000,
                    "tax_id": 1001
                },
                {
                    "id": 2099,
                    "code": 1108,
                    "name": "Angulo Laminado 30x30x3",
                    "category_id": 1032,
                    "purchase": 3650,
                    "sale": 16000,
                    "tax_id": 1001
                },
                {
                    "id": 2100,
                    "code": 1109,
                    "name": "pletina 16x3",
                    "category_id": 1032,
                    "purchase": 2450,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2101,
                    "code": 1110,
                    "name": "pletina 20x3",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 2102,
                    "code": 1111,
                    "name": "pletina 38x3",
                    "category_id": 1032,
                    "purchase": 322,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2103,
                    "code": 1112,
                    "name": "pletina 50x3",
                    "category_id": 1032,
                    "purchase": 1034,
                    "sale": 14000,
                    "tax_id": 1001
                },
                {
                    "id": 2104,
                    "code": 1113,
                    "name": "fierro liso 6",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 2105,
                    "code": 1114,
                    "name": "fierro estriado 8",
                    "category_id": 1032,
                    "purchase": 162,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2106,
                    "code": 1115,
                    "name": "fierro estriado 10",
                    "category_id": 1032,
                    "purchase": 59990,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 2107,
                    "code": 1116,
                    "name": "canal de 150x50x2",
                    "category_id": 1032,
                    "purchase": 60180,
                    "sale": 43000,
                    "tax_id": 1001
                },
                {
                    "id": 2108,
                    "code": 1117,
                    "name": "tubo de 2 pulg",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 18000,
                    "tax_id": 1001
                },
                {
                    "id": 2109,
                    "code": 1119,
                    "name": "perfil u 30302",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 15000,
                    "tax_id": 1001
                },
                {
                    "id": 2110,
                    "code": 1120,
                    "name": "riel aereo 291,5",
                    "category_id": 1012,
                    "purchase": 11240,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 2111,
                    "code": 1121,
                    "name": "malla rachel por metro",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2112,
                    "code": 1122,
                    "name": "malla mosquetera por metro",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2113,
                    "code": 1123,
                    "name": "malla harnero por metro",
                    "category_id": 1012,
                    "purchase": 3856,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2114,
                    "code": 1124,
                    "name": "malla cierre 7 hebras (ovejera)",
                    "category_id": 1021,
                    "purchase": 4873,
                    "sale": 110000,
                    "tax_id": 1001
                },
                {
                    "id": 2115,
                    "code": 1125,
                    "name": "siding fibrocemento",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2116,
                    "code": 1126,
                    "name": "hilo metro 1/4",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2117,
                    "code": 1127,
                    "name": "hilo metro 5/16",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2118,
                    "code": 1128,
                    "name": "esmalte al agua galon azul piedra",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 2119,
                    "code": 1129,
                    "name": "esmalte al agua galon damasco",
                    "category_id": 1014,
                    "purchase": 2940,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 2120,
                    "code": 1130,
                    "name": "esmalte al agua blanco galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 19900,
                    "tax_id": 1001
                },
                {
                    "id": 2121,
                    "code": 1131,
                    "name": "esmalte sintetico ocre galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 22990,
                    "tax_id": 1001
                },
                {
                    "id": 2122,
                    "code": 1133,
                    "name": "Esmalte Sintetico Blanco Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 2123,
                    "code": 1134,
                    "name": "esmalte sintetico azul galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 2124,
                    "code": 1135,
                    "name": "esmalte sintetico café moro",
                    "category_id": 1014,
                    "purchase": 170,
                    "sale": 22990,
                    "tax_id": 1001
                },
                {
                    "id": 2125,
                    "code": 1136,
                    "name": "esmalte sintetico negro galon",
                    "category_id": 1014,
                    "purchase": 7928,
                    "sale": 22990,
                    "tax_id": 1001
                },
                {
                    "id": 2126,
                    "code": 1137,
                    "name": "Zinc Acanalado 2mts x 0,35mm",
                    "category_id": 1012,
                    "purchase": 1150,
                    "sale": 11000,
                    "tax_id": 1001
                },
                {
                    "id": 2127,
                    "code": 1138,
                    "name": "esmalte epoxipol para piso galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 26500,
                    "tax_id": 1001
                },
                {
                    "id": 2128,
                    "code": 1139,
                    "name": "ceraestain protector de madera ceresita galon natural",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 36990,
                    "tax_id": 1001
                },
                {
                    "id": 2129,
                    "code": 1140,
                    "name": "ceraestain protector de madera verde ceresita galon",
                    "category_id": 1014,
                    "purchase": 1178,
                    "sale": 36990,
                    "tax_id": 1001
                },
                {
                    "id": 2130,
                    "code": 1141,
                    "name": "aceite linasa galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 21990,
                    "tax_id": 1001
                },
                {
                    "id": 2131,
                    "code": 1142,
                    "name": "barniz miel galon passol",
                    "category_id": 1014,
                    "purchase": 150,
                    "sale": 19990,
                    "tax_id": 1001
                },
                {
                    "id": 2132,
                    "code": 1143,
                    "name": "barniz roble galon passol",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 19990,
                    "tax_id": 1001
                },
                {
                    "id": 2133,
                    "code": 1144,
                    "name": "barniz caoba galon passol",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 19990,
                    "tax_id": 1001
                },
                {
                    "id": 2134,
                    "code": 1145,
                    "name": "barniz alerce galon passol",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 19990,
                    "tax_id": 1001
                },
                {
                    "id": 2135,
                    "code": 1146,
                    "name": "barniz Marino incoloro galon passol",
                    "category_id": 1014,
                    "purchase": 9520,
                    "sale": 19990,
                    "tax_id": 1001
                },
                {
                    "id": 2136,
                    "code": 1147,
                    "name": "alambre pua de 500  16",
                    "category_id": 1021,
                    "purchase": 3950,
                    "sale": 80000,
                    "tax_id": 1001
                },
                {
                    "id": 2137,
                    "code": 1148,
                    "name": "alambre pua de 275x16",
                    "category_id": 1021,
                    "purchase": 0,
                    "sale": 48000,
                    "tax_id": 1001
                },
                {
                    "id": 2138,
                    "code": 1149,
                    "name": "malla acma cierre galbanizada 1,8 X 3 mtrs",
                    "category_id": 1012,
                    "purchase": 2750,
                    "sale": 29000,
                    "tax_id": 1001
                },
                {
                    "id": 2139,
                    "code": 1150,
                    "name": "Malla Acma Cierre Galvanizada 1.8 X 5 Mtrs",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 40000,
                    "tax_id": 1001
                },
                {
                    "id": 2140,
                    "code": 1151,
                    "name": "Malla Acma Cierre Galbanizada 1.8x 2 Mtrs",
                    "category_id": 1012,
                    "purchase": 3950,
                    "sale": 23000,
                    "tax_id": 1001
                },
                {
                    "id": 2141,
                    "code": 1152,
                    "name": "Tapa Baño Wc",
                    "category_id": 1020,
                    "purchase": 13090,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 2142,
                    "code": 1153,
                    "name": "Barniz Caoba De Litro",
                    "category_id": 1014,
                    "purchase": 2850,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2143,
                    "code": 1154,
                    "name": "zinc acanalado 4 mtrs",
                    "category_id": 1012,
                    "purchase": 4801,
                    "sale": 23900,
                    "tax_id": 1001
                },
                {
                    "id": 2144,
                    "code": 1155,
                    "name": "zinc acanalado 3,66 mtrs 0,35",
                    "category_id": 1012,
                    "purchase": 6600,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 2145,
                    "code": 1156,
                    "name": "zinc acanalado 3 mts 0,35",
                    "category_id": 1012,
                    "purchase": 583,
                    "sale": 15900,
                    "tax_id": 1001
                },
                {
                    "id": 2146,
                    "code": 1157,
                    "name": "zinc acanalado 2,5 mtrs",
                    "category_id": 1012,
                    "purchase": 2350,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 2147,
                    "code": 1158,
                    "name": "zinc acanalado 2 mts 0,30",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 11900,
                    "tax_id": 1001
                },
                {
                    "id": 2148,
                    "code": 1159,
                    "name": "Cadena Electro Soldada 15X20x4.5 Mt 8 Mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 21900,
                    "tax_id": 1001
                },
                {
                    "id": 2149,
                    "code": 1160,
                    "name": "saco papero 25 kg",
                    "category_id": 1021,
                    "purchase": 15830,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 2150,
                    "code": 1161,
                    "name": "cañamo plastico 200 grs",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2151,
                    "code": 1162,
                    "name": "tee de registro 110",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 3700,
                    "tax_id": 1001
                },
                {
                    "id": 2152,
                    "code": 1163,
                    "name": "pasta para soldar estaño 100 grs",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2153,
                    "code": 1164,
                    "name": "rueda giratoria con rodamiento 4 pulg",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2154,
                    "code": 1165,
                    "name": "caja metalica lioli 30 mm",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 4300,
                    "tax_id": 1001
                },
                {
                    "id": 2155,
                    "code": 1166,
                    "name": "Tirante Barra Cortina 3/4",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2156,
                    "code": 1167,
                    "name": "Valvula De Retencion Horizontal Chapaleta",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 2157,
                    "code": 1168,
                    "name": "pistola de riego economica",
                    "category_id": 1002,
                    "purchase": 1200,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2158,
                    "code": 1169,
                    "name": "Amarra Plastica 4.8 x 200mm",
                    "category_id": 1013,
                    "purchase": 0,
                    "sale": 90,
                    "tax_id": 1001
                },
                {
                    "id": 2159,
                    "code": 1170,
                    "name": "barra seguridad 45 cm",
                    "category_id": 1007,
                    "purchase": 9900,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2160,
                    "code": 1171,
                    "name": "brazo ducha plastico al muro",
                    "category_id": 1020,
                    "purchase": 1000,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2161,
                    "code": 1172,
                    "name": "filtro aireador para lavaplato",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2162,
                    "code": 1173,
                    "name": "llave electrica eco",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 25000,
                    "tax_id": 1001
                },
                {
                    "id": 2163,
                    "code": 1174,
                    "name": "rodillo lizcal 18 cm Antigoteo",
                    "category_id": 1014,
                    "purchase": 44990,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2164,
                    "code": 1175,
                    "name": "tope puerta piso",
                    "category_id": 1007,
                    "purchase": 33120,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2165,
                    "code": 1176,
                    "name": "plana 7",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2166,
                    "code": 1177,
                    "name": "cortador tubo pvc y ppr",
                    "category_id": 1005,
                    "purchase": 2958,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 2167,
                    "code": 1178,
                    "name": "escuadra iman 4",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2168,
                    "code": 1179,
                    "name": "maquina termofusion 800-1500w total",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 85000,
                    "tax_id": 1001
                },
                {
                    "id": 2169,
                    "code": 1180,
                    "name": "cerradura cajon toro negro",
                    "category_id": 1011,
                    "purchase": 1820,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2170,
                    "code": 1181,
                    "name": "cerradura mueble odis guantera 2101",
                    "category_id": 1011,
                    "purchase": 2537,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2171,
                    "code": 1182,
                    "name": "Barra Cortina Metal 12mm 2 mts",
                    "category_id": 1007,
                    "purchase": 25600,
                    "sale": 5400,
                    "tax_id": 1001
                },
                {
                    "id": 2172,
                    "code": 1183,
                    "name": "AISLAPOL",
                    "category_id": 1012,
                    "purchase": 3705,
                    "sale": 15000,
                    "tax_id": 1001
                },
                {
                    "id": 2173,
                    "code": 1185,
                    "name": "terminal he ppr 32 x 1 pulg",
                    "category_id": 1031,
                    "purchase": 5500,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 2174,
                    "code": 1186,
                    "name": "terminal hi ppr 32x1",
                    "category_id": 1031,
                    "purchase": 1780,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2175,
                    "code": 1187,
                    "name": "trampa de raton prastica",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2176,
                    "code": 1188,
                    "name": "enchufe macho volante blanco",
                    "category_id": 1022,
                    "purchase": 1500,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 2177,
                    "code": 1189,
                    "name": "enchufe macho volante negro",
                    "category_id": 1022,
                    "purchase": 1170,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2178,
                    "code": 1190,
                    "name": "lija madera grano 180",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 2179,
                    "code": 1191,
                    "name": "tarugo de 6 mm",
                    "category_id": 1012,
                    "purchase": 1370,
                    "sale": 20,
                    "tax_id": 1001
                },
                {
                    "id": 2180,
                    "code": 1192,
                    "name": "punta doble phillip",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2181,
                    "code": 1193,
                    "name": "aspersores de plastico con estaca metalica",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2182,
                    "code": 1194,
                    "name": "broca para metal de 12 mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 6000,
                    "tax_id": 1001
                },
                {
                    "id": 2183,
                    "code": 1195,
                    "name": "union de planza 1 pulg",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 2184,
                    "code": 1196,
                    "name": "terminal he planza 1 pulg",
                    "category_id": 1030,
                    "purchase": 0,
                    "sale": 800,
                    "tax_id": 1001
                },
                {
                    "id": 2185,
                    "code": 1197,
                    "name": "porta candado simple negro",
                    "category_id": 1011,
                    "purchase": 1820,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2186,
                    "code": 1198,
                    "name": "rodillo lizcal 23 cm verde",
                    "category_id": 1014,
                    "purchase": 1150,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 2187,
                    "code": 1199,
                    "name": "tope puerta muro",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2188,
                    "code": 1200,
                    "name": "cinta enmascarar 48 mm",
                    "category_id": 1014,
                    "purchase": 1150,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2189,
                    "code": 1201,
                    "name": "cinta enmascarar 24 mm  30 mtrs",
                    "category_id": 1014,
                    "purchase": 3050,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2190,
                    "code": 1202,
                    "name": "chascon copa trensado",
                    "category_id": 1019,
                    "purchase": 2950,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2191,
                    "code": 1203,
                    "name": "ducha telefono sin manguera",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2192,
                    "code": 1204,
                    "name": "broca madera 35 mm para bisagra",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2193,
                    "code": 1205,
                    "name": "Corchete Makawa 8mm",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 2700,
                    "tax_id": 1001
                },
                {
                    "id": 2194,
                    "code": 1206,
                    "name": "escofina para herrar con mango",
                    "category_id": 1005,
                    "purchase": 18758,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2195,
                    "code": 1207,
                    "name": "manguera de nivel 5/16",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 450,
                    "tax_id": 1001
                },
                {
                    "id": 2196,
                    "code": 1208,
                    "name": "fumigador 2 ltrs",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3990,
                    "tax_id": 1001
                },
                {
                    "id": 2197,
                    "code": 1209,
                    "name": "fumigador 5 ltrs",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 2198,
                    "code": 1210,
                    "name": "Cable Paralelo Negro 2 x 1 mm",
                    "category_id": 1027,
                    "purchase": 5500,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 2199,
                    "code": 1211,
                    "name": "set lija con velcro DE 7 1/4 MAKAWA",
                    "category_id": 1019,
                    "purchase": 11567,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2200,
                    "code": 1212,
                    "name": "caja de dado 40 piesas",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2201,
                    "code": 1213,
                    "name": "soplete de reposteria hoteche",
                    "category_id": 1033,
                    "purchase": 0,
                    "sale": 9900,
                    "tax_id": 1001
                },
                {
                    "id": 2202,
                    "code": 1214,
                    "name": "tablero embutido de 12 modulo",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 2203,
                    "code": 1215,
                    "name": "tablero embutido de 8 modulo",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2204,
                    "code": 1216,
                    "name": "tablero sobrepuesto de 12 modulo",
                    "category_id": 1022,
                    "purchase": 4500,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 2205,
                    "code": 1217,
                    "name": "tablero sobrepuesto de 8 modulo",
                    "category_id": 1022,
                    "purchase": 10500,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2206,
                    "code": 1218,
                    "name": "Repuesto de lija madera P100 para disco sopapo de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 1530,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2207,
                    "code": 1219,
                    "name": "Repuesto de lija madera P120 para disco sopapo de 4 pulgadas",
                    "category_id": 1019,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2208,
                    "code": 1220,
                    "name": "clavo de herrar ASV-4  CABEZA CHICA",
                    "category_id": 1021,
                    "purchase": 490,
                    "sale": 70,
                    "tax_id": 1001
                },
                {
                    "id": 2209,
                    "code": 1221,
                    "name": "clavo de herrar T-3  CABEZA GRANDE",
                    "category_id": 1021,
                    "purchase": 0,
                    "sale": 70,
                    "tax_id": 1001
                },
                {
                    "id": 2210,
                    "code": 1222,
                    "name": "PIEDRA PARA AFILAR CUCHILLOS",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2211,
                    "code": 1223,
                    "name": "Rueda de riel porton 3 pulgada",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2212,
                    "code": 1224,
                    "name": "abrasadera de piola 3/8 pulg",
                    "category_id": 1012,
                    "purchase": 353,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2213,
                    "code": 1225,
                    "name": "rueda de porton con pasador ducasse 3 pulg",
                    "category_id": 1006,
                    "purchase": 0,
                    "sale": 5500,
                    "tax_id": 1001
                },
                {
                    "id": 2214,
                    "code": 1226,
                    "name": "conector coaxial t.v azul",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 2215,
                    "code": 1227,
                    "name": "balansa electronica hoteche",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 2216,
                    "code": 1228,
                    "name": "abrasadera de piola 1/4 pulg",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2217,
                    "code": 1229,
                    "name": "guia de riel pibote 20 mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2218,
                    "code": 1230,
                    "name": "guia de riel doble pibote 20 mm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2219,
                    "code": 1231,
                    "name": "tensor doble 3/8 pulg",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2220,
                    "code": 1232,
                    "name": "barra de cortina extendible de 110 a 2 mts",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2221,
                    "code": 1233,
                    "name": "soporte de cortina simple par",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2222,
                    "code": 1234,
                    "name": "esquinero vulcanita",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 2223,
                    "code": 1235,
                    "name": "POLICARBONATO ACANALADO 2 METROS",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 10000,
                    "tax_id": 1001
                },
                {
                    "id": 2224,
                    "code": 1236,
                    "name": "POLICARBONATO ACANALADO 2.5 MT X 0.5 MM",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 13000,
                    "tax_id": 1001
                },
                {
                    "id": 2225,
                    "code": 1237,
                    "name": "POLICARBONATO ACANALADO  3 METROS",
                    "category_id": 1012,
                    "purchase": 1220,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2226,
                    "code": 1238,
                    "name": "POLICARBONATO ACANALADO 3.66 METROS",
                    "category_id": 1012,
                    "purchase": 1720,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 2227,
                    "code": 1239,
                    "name": "Abrazadera Metalica De 16mm",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 120,
                    "tax_id": 1001
                },
                {
                    "id": 2228,
                    "code": 1240,
                    "name": "laucha para destapar 5 mtrs x 5 mm",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 2229,
                    "code": 1241,
                    "name": "Punta De Tiburon 1 Mt",
                    "category_id": 1002,
                    "purchase": 1720,
                    "sale": 3990,
                    "tax_id": 1001
                },
                {
                    "id": 2230,
                    "code": 1242,
                    "name": "VALVULA DE RETENCION HI-HI VERTICAL 32MM",
                    "category_id": 1020,
                    "purchase": 2071,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2231,
                    "code": 1243,
                    "name": "SALIDA DE ESTANQUE PVC HIDRAULICO DE 32MM X 1 HI-HE",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 3690,
                    "tax_id": 1001
                },
                {
                    "id": 2232,
                    "code": 1244,
                    "name": "PVC HIDRAULICO 50 MM",
                    "category_id": 1029,
                    "purchase": 2935,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 2233,
                    "code": 1245,
                    "name": "SOLDADURA 60/11 PUNTO AZUL 1/8",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 4800,
                    "tax_id": 1001
                },
                {
                    "id": 2234,
                    "code": 1246,
                    "name": "Soldadura 60/11 Punto Azul 3/32",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2235,
                    "code": 1247,
                    "name": "Azadon 2 Lb Sin Mango H-Full",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2236,
                    "code": 1248,
                    "name": "Manilla Puerta 5 Pulgadas Lata",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2237,
                    "code": 1249,
                    "name": "Mango Madera Para Azadon ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2238,
                    "code": 1250,
                    "name": "Manguera De Gas 1/2",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2239,
                    "code": 1251,
                    "name": "Grapa 5/16x8mm Stanley 1000 Un",
                    "category_id": 1008,
                    "purchase": 3,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2240,
                    "code": 1252,
                    "name": "Enchufe Doble Sobrepuesto 10-16 Amp",
                    "category_id": 1022,
                    "purchase": 19540,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 2241,
                    "code": 1253,
                    "name": "Caja De Herramientas",
                    "category_id": 1015,
                    "purchase": 41440,
                    "sale": 14990,
                    "tax_id": 1001
                },
                {
                    "id": 2242,
                    "code": 1254,
                    "name": "Tubo Estufa Galvanizado 5",
                    "category_id": 1007,
                    "purchase": 35750,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 2243,
                    "code": 1255,
                    "name": "Tubo Estufa Galvanizado 5 Pulg Con Mariposa",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2244,
                    "code": 1256,
                    "name": "Gorro Campana Estufa 5",
                    "category_id": 1007,
                    "purchase": 670,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2245,
                    "code": 1257,
                    "name": "Destorcedor (bandola) 4.1/4 Para 75kg",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2246,
                    "code": 1258,
                    "name": "Chuzo",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 23990,
                    "tax_id": 1001
                },
                {
                    "id": 2247,
                    "code": 1259,
                    "name": "Cable Eva 2,5 Blanco ",
                    "category_id": 1022,
                    "purchase": 500,
                    "sale": 470,
                    "tax_id": 1001
                },
                {
                    "id": 2248,
                    "code": 1260,
                    "name": "Caja Estanca 70x70x35 C/4 Con 3/8-5/8",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2249,
                    "code": 1261,
                    "name": "Pasta Muro Interior Tajamar F-15 (tineta)",
                    "category_id": 1014,
                    "purchase": 300,
                    "sale": 18900,
                    "tax_id": 1001
                },
                {
                    "id": 2250,
                    "code": 1262,
                    "name": "Tornillo Volcanita Punta Broca 8x3 ",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2251,
                    "code": 1263,
                    "name": "Manguera 3/4",
                    "category_id": 1002,
                    "purchase": 6900,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2252,
                    "code": 1264,
                    "name": "Lija al Agua 600",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 2253,
                    "code": 1265,
                    "name": "Lija al Agua 121",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 650,
                    "tax_id": 1001
                },
                {
                    "id": 2254,
                    "code": 1266,
                    "name": "Lija Fierro 180",
                    "category_id": 1012,
                    "purchase": 120,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 2255,
                    "code": 1267,
                    "name": "Lija Fierro 120",
                    "category_id": 1012,
                    "purchase": 80,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 2256,
                    "code": 1268,
                    "name": "Lija Fierro 80",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 2257,
                    "code": 1269,
                    "name": "Cable Thhn 14 De 1,5",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 470,
                    "tax_id": 1001
                },
                {
                    "id": 2258,
                    "code": 1270,
                    "name": "Lija Madera 60",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 2259,
                    "code": 1271,
                    "name": "Lija Madera 120",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 2260,
                    "code": 1272,
                    "name": "Lija Madera 150",
                    "category_id": 1012,
                    "purchase": 136,
                    "sale": 250,
                    "tax_id": 1001
                },
                {
                    "id": 2261,
                    "code": 1273,
                    "name": "Martillo Goma 8 Onza",
                    "category_id": 1005,
                    "purchase": 750,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2262,
                    "code": 1274,
                    "name": "Foco led con sensor",
                    "category_id": 1022,
                    "purchase": 274,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 2263,
                    "code": 1275,
                    "name": "Esmalte Sintetico Café Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 2264,
                    "code": 1276,
                    "name": "Esmalte Sintetico Rojo Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 2265,
                    "code": 1277,
                    "name": "Anticorrosivo Galon Gris",
                    "category_id": 1014,
                    "purchase": 166,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 2266,
                    "code": 1278,
                    "name": "Anticorrosivo Galon Negro",
                    "category_id": 1014,
                    "purchase": 1535,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 2267,
                    "code": 1279,
                    "name": "Llave De Mandril Universal 6-16mm",
                    "category_id": 1008,
                    "purchase": 1535,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2268,
                    "code": 1281,
                    "name": "Barniz Vetrificante Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 46900,
                    "tax_id": 1001
                },
                {
                    "id": 2269,
                    "code": 1282,
                    "name": "UNION AMERICANA DE 40 PVC HIDRAUCLICO",
                    "category_id": 1029,
                    "purchase": 10,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 2270,
                    "code": 1283,
                    "name": "buje reductor corto 50 X 40 pvc hidraulico",
                    "category_id": 1029,
                    "purchase": 81,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2271,
                    "code": 1284,
                    "name": "TORNILLO SPACK 1 1/4 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 2272,
                    "code": 1285,
                    "name": "TORNILLO SPACK 1 1/4 pulgada 200 u",
                    "category_id": 1012,
                    "purchase": 27,
                    "sale": 3400,
                    "tax_id": 1001
                },
                {
                    "id": 2273,
                    "code": 1286,
                    "name": "TORNILLO SPACK 1 5/8 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2274,
                    "code": 1287,
                    "name": "TORNILLO SPACK 1 5/8 pulgada 200 u",
                    "category_id": 1012,
                    "purchase": 1860,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 2275,
                    "code": 1288,
                    "name": "TORNILLO SPACK 1 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 1530,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 2276,
                    "code": 1289,
                    "name": "TORNILLO SPACK 2 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2200,
                    "tax_id": 1001
                },
                {
                    "id": 2277,
                    "code": 1290,
                    "name": "TORNILLO SPACK 2 1/2 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 220,
                    "sale": 2400,
                    "tax_id": 1001
                },
                {
                    "id": 2278,
                    "code": 1291,
                    "name": "TORNILLO SPACK 3 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2279,
                    "code": 1292,
                    "name": "TORNILLO SPACK 3 1/2 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2280,
                    "code": 1293,
                    "name": "TORNILLO SPACK 4 pulgada 100 u",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2281,
                    "code": 1294,
                    "name": "tornillo volcanita punta broca 6 x 1 pulgada",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2282,
                    "code": 1295,
                    "name": "tornillo cabeza de lenteja punta broca 8 x 1/2 pulgada",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2283,
                    "code": 1296,
                    "name": "tornillo volcanita punta broca 6 x 1 1/4 pulgadas",
                    "category_id": 1012,
                    "purchase": 340,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2284,
                    "code": 1297,
                    "name": "tornillo volcanita punta broca 6 x 1 5/8 pulgadas",
                    "category_id": 1012,
                    "purchase": 260,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2285,
                    "code": 1298,
                    "name": "tornillo lenteja punta broca 8 x 3/4  pulgadas",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2286,
                    "code": 1299,
                    "name": "tornillo volcanitan punta broca 6 x 2 pulgadas",
                    "category_id": 1012,
                    "purchase": 600,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2287,
                    "code": 1300,
                    "name": "perno hexagonal punta broca 12 x 1 1/2 pulgadas",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2288,
                    "code": 1301,
                    "name": "tornillo punta espada hexagonal  1 1/2 pulg",
                    "category_id": 1012,
                    "purchase": 1375,
                    "sale": 8000,
                    "tax_id": 1001
                },
                {
                    "id": 2289,
                    "code": 1302,
                    "name": "tornillo hexagonal punta broca 2 1/2 pulg",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 6600,
                    "tax_id": 1001
                },
                {
                    "id": 2290,
                    "code": 1303,
                    "name": "tornillo hexagonal punta broca 2  pulgadas",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 5600,
                    "tax_id": 1001
                },
                {
                    "id": 2291,
                    "code": 1304,
                    "name": "tornillo punta espada  2 1/2  pulg",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 2292,
                    "code": 1305,
                    "name": "tornillo hexagonal PUNTA BROCA  3/4 pulgadas",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 3300,
                    "tax_id": 1001
                },
                {
                    "id": 2293,
                    "code": 1306,
                    "name": "Tornillo Spack 6 X 5/8 ",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2294,
                    "code": 1307,
                    "name": "Cadena 5 mm x 1 m",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2295,
                    "code": 1308,
                    "name": "Canaleta 20 x10 con auto adhesivo",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2296,
                    "code": 1309,
                    "name": "Automatico saime negro 30 amp",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 2297,
                    "code": 1310,
                    "name": "buje reduccion he hi pvc hidraulico 1 1/2 x 1",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 1700,
                    "tax_id": 1001
                },
                {
                    "id": 2298,
                    "code": 1311,
                    "name": "Buje Reduccion Hi-He 1 x 1.1/4 Pvc Hidraulico",
                    "category_id": 1029,
                    "purchase": 1090,
                    "sale": 1400,
                    "tax_id": 1001
                },
                {
                    "id": 2299,
                    "code": 1312,
                    "name": "cal viva saco 25 kg",
                    "category_id": 1012,
                    "purchase": 890,
                    "sale": 9600,
                    "tax_id": 1001
                },
                {
                    "id": 2300,
                    "code": 1313,
                    "name": "CORDEL PERLON DE 4 MM",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 2301,
                    "code": 1314,
                    "name": "Pintura En Bolsa Rojo Colonial",
                    "category_id": 1014,
                    "purchase": 928,
                    "sale": 3800,
                    "tax_id": 1001
                },
                {
                    "id": 2302,
                    "code": 1315,
                    "name": "PASTA PULIR 30 GR MOTOR LIFE",
                    "category_id": 1001,
                    "purchase": 2800,
                    "sale": 3850,
                    "tax_id": 1001
                },
                {
                    "id": 2303,
                    "code": 1316,
                    "name": "PASTA MURO 1KG INTERIOR F-6 TAJAMAR",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2304,
                    "code": 1317,
                    "name": "PERFIL COSTANERA 80X40X15X2MM",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 27000,
                    "tax_id": 1001
                },
                {
                    "id": 2305,
                    "code": 1318,
                    "name": "PERFIL CUADRADO 30X30X2MM X 6MTS",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2306,
                    "code": 1319,
                    "name": "Tee Pvc Hidraulico 50mm Cementar",
                    "category_id": 1029,
                    "purchase": 0,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2307,
                    "code": 1320,
                    "name": "calafatera profesional ploma",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 2308,
                    "code": 1321,
                    "name": "Caja Estanca Ext 100x100x60-70 C/Cono",
                    "category_id": 1022,
                    "purchase": 299,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2309,
                    "code": 1322,
                    "name": "PPR TUBO PN-20 32MM 6 MTS",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 16000,
                    "tax_id": 1001
                },
                {
                    "id": 2310,
                    "code": 1323,
                    "name": "PPR TERMINAL HE 40 MM X 1. 1/4",
                    "category_id": 1031,
                    "purchase": 152,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 2311,
                    "code": 1324,
                    "name": "PPR TERMINAL  HI 40 MM X 1. 1/4",
                    "category_id": 1031,
                    "purchase": 876,
                    "sale": 7600,
                    "tax_id": 1001
                },
                {
                    "id": 2312,
                    "code": 1325,
                    "name": "PPR UNION AMERICANA  40 MM",
                    "category_id": 1031,
                    "purchase": 252,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2313,
                    "code": 1326,
                    "name": "Tubo Led 120 Cm",
                    "category_id": 1022,
                    "purchase": 750,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2314,
                    "code": 1327,
                    "name": "Valvula Compacta 50mm Pvc Hidraulico (llave)",
                    "category_id": 1029,
                    "purchase": 1833,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2315,
                    "code": 1328,
                    "name": "Broca De Fierro 13 Mm",
                    "category_id": 1018,
                    "purchase": 1630,
                    "sale": 7400,
                    "tax_id": 1001
                },
                {
                    "id": 2316,
                    "code": 1329,
                    "name": "Cordel Perlon 10 Mm X Metro",
                    "category_id": 1002,
                    "purchase": 165,
                    "sale": 500,
                    "tax_id": 1001
                },
                {
                    "id": 2317,
                    "code": 1330,
                    "name": "Flexible Hi-Hi 1/2 25cms",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2318,
                    "code": 1331,
                    "name": "Pomel Con Golilla 1/2",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2319,
                    "code": 1332,
                    "name": "Pomel Con Golilla 5/8",
                    "category_id": 1012,
                    "purchase": 170,
                    "sale": 3700,
                    "tax_id": 1001
                },
                {
                    "id": 2320,
                    "code": 1333,
                    "name": "Pomel Con Golilla 3/4",
                    "category_id": 1012,
                    "purchase": 370,
                    "sale": 4700,
                    "tax_id": 1001
                },
                {
                    "id": 2321,
                    "code": 1334,
                    "name": "Tachuela Dorada 10x15mm",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 20,
                    "tax_id": 1001
                },
                {
                    "id": 2322,
                    "code": 1335,
                    "name": "Broca Copa Diamante 32mm Ceramica Y Vidrio",
                    "category_id": 1018,
                    "purchase": 2400,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2323,
                    "code": 1336,
                    "name": "Lima Para Motosierra 4,8mm ",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2324,
                    "code": 1337,
                    "name": "Lima Para Motosierra 4,8mm Con Mango",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2325,
                    "code": 1338,
                    "name": "Tierra Magnetica Soldador ",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 5000,
                    "tax_id": 1001
                },
                {
                    "id": 2326,
                    "code": 1339,
                    "name": "Tapa De Baño Caida Lenta",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 12900,
                    "tax_id": 1001
                },
                {
                    "id": 2327,
                    "code": 1340,
                    "name": "Monomando Lavamanos Taumm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 14500,
                    "tax_id": 1001
                },
                {
                    "id": 2328,
                    "code": 1341,
                    "name": "Combinacion Monomando Recta Lavaplatos Taumm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 13990,
                    "tax_id": 1001
                },
                {
                    "id": 2329,
                    "code": 1342,
                    "name": "Kit De Estanque De WC (fiting) Economico",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 5990,
                    "tax_id": 1001
                },
                {
                    "id": 2330,
                    "code": 1343,
                    "name": "Cable De Poder Hembra Universal 3 Patas",
                    "category_id": 1027,
                    "purchase": 945,
                    "sale": 1990,
                    "tax_id": 1001
                },
                {
                    "id": 2331,
                    "code": 1344,
                    "name": "Linterna Hoteche 3Watt",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 2332,
                    "code": 1345,
                    "name": "Bola Remolque 6000 Lbs",
                    "category_id": 1001,
                    "purchase": 0,
                    "sale": 18900,
                    "tax_id": 1001
                },
                {
                    "id": 2333,
                    "code": 1346,
                    "name": "Set Broca Conica Escalonada",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 2334,
                    "code": 1347,
                    "name": "Camara Bicicleta Aro 26",
                    "category_id": 1003,
                    "purchase": 48,
                    "sale": 3600,
                    "tax_id": 1001
                },
                {
                    "id": 2335,
                    "code": 1348,
                    "name": "Carro Aereo ",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 2336,
                    "code": 1349,
                    "name": "Disco Sierra Madera 9 Pulg x 60 Dientes",
                    "category_id": 1019,
                    "purchase": 590,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 2337,
                    "code": 1350,
                    "name": "Escuadra De Silla 25x25mm",
                    "category_id": 1011,
                    "purchase": 240,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 2338,
                    "code": 1351,
                    "name": "Forro Bicicleta Pistera Aro 26",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2339,
                    "code": 1352,
                    "name": "Forro Bicicleta Mountain Bike Aro 26",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2340,
                    "code": 1353,
                    "name": "Grapa Para Cable 9mm",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 20,
                    "tax_id": 1001
                },
                {
                    "id": 2341,
                    "code": 1354,
                    "name": "Manilla Fierro Forjado ",
                    "category_id": 1012,
                    "purchase": 650,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 2342,
                    "code": 1355,
                    "name": "Extencion Para Dado 1/4 (6.35mm)",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 2343,
                    "code": 1356,
                    "name": "Extencion Para Dado 3/8 (9.52mm)",
                    "category_id": 1008,
                    "purchase": 486,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2344,
                    "code": 1357,
                    "name": "Extencion Para Dado 1/2 (12.5mm)",
                    "category_id": 1008,
                    "purchase": 3753,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2345,
                    "code": 1358,
                    "name": "Chicharra De 1/2",
                    "category_id": 1005,
                    "purchase": 117,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 2346,
                    "code": 1359,
                    "name": "Mascara De Soldar Economica ",
                    "category_id": 1009,
                    "purchase": 0,
                    "sale": 4990,
                    "tax_id": 1001
                },
                {
                    "id": 2347,
                    "code": 1360,
                    "name": "Set Luces De Bicicleta",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2348,
                    "code": 1361,
                    "name": "Barrote L de 1/2 ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2349,
                    "code": 1362,
                    "name": "Cerradura Jaque Esferica C/Llave Color Aluminio",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 2350,
                    "code": 1363,
                    "name": "Cerradura Jaque Tubular C/Llave Color Dorado",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 8500,
                    "tax_id": 1001
                },
                {
                    "id": 2351,
                    "code": 1364,
                    "name": "Perillon De Puerta",
                    "category_id": 1012,
                    "purchase": 1450,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 2352,
                    "code": 1365,
                    "name": "Separador Ceramica 2.5mm",
                    "category_id": 1016,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2353,
                    "code": 1366,
                    "name": "Serrucho De Poda 13 Pulg. Para Mango",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 5900,
                    "tax_id": 1001
                },
                {
                    "id": 2354,
                    "code": 1367,
                    "name": "Luz Trasera Bicicleta Recargable",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 2355,
                    "code": 1368,
                    "name": "Broca Cemento 6x400mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1500,
                    "tax_id": 1001
                },
                {
                    "id": 2356,
                    "code": 1369,
                    "name": "Broca Cemento 8x400mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2357,
                    "code": 1370,
                    "name": "Broca Cemento 10x400mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2358,
                    "code": 1371,
                    "name": "Set 4 Brocas Avellanadoras 6/8/10/12mm",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 2359,
                    "code": 1372,
                    "name": "Destronillador JC 4+",
                    "category_id": 1005,
                    "purchase": 2890,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2360,
                    "code": 1373,
                    "name": "Abrazadera 104-112mm",
                    "category_id": 1023,
                    "purchase": 0,
                    "sale": 4000,
                    "tax_id": 1001
                },
                {
                    "id": 2361,
                    "code": 1374,
                    "name": "Abrazadera 80-85mm",
                    "category_id": 1023,
                    "purchase": 170,
                    "sale": 3700,
                    "tax_id": 1001
                },
                {
                    "id": 2362,
                    "code": 1375,
                    "name": "Abrazadera 74-79mm",
                    "category_id": 1023,
                    "purchase": 1106,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2363,
                    "code": 1376,
                    "name": "Abrazadera 60-63mm",
                    "category_id": 1023,
                    "purchase": 1345,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 2364,
                    "code": 1377,
                    "name": "Abrazadera 52-55mm",
                    "category_id": 1023,
                    "purchase": 1428,
                    "sale": 2700,
                    "tax_id": 1001
                },
                {
                    "id": 2365,
                    "code": 1378,
                    "name": "Barniz Natural 1/8 Galon Ceresita",
                    "category_id": 1014,
                    "purchase": 1428,
                    "sale": 4200,
                    "tax_id": 1001
                },
                {
                    "id": 2366,
                    "code": 1379,
                    "name": "Codo Corrugado 4 Pulg Galvanizado",
                    "category_id": 1007,
                    "purchase": 2100,
                    "sale": 8900,
                    "tax_id": 1001
                },
                {
                    "id": 2367,
                    "code": 1380,
                    "name": "Piton Lavamanos Con Cadena 25 Cm",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2368,
                    "code": 1381,
                    "name": "MANILLA PLASTICA ESTANQUE WC ",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2369,
                    "code": 1382,
                    "name": "Generador Electrico Gasolina 6000 W Bauker",
                    "category_id": 1033,
                    "purchase": 3800,
                    "sale": 959990,
                    "tax_id": 1001
                },
                {
                    "id": 2370,
                    "code": 1383,
                    "name": "Martillo Carpintero Uberman 20 OZ",
                    "category_id": 1005,
                    "purchase": 9123,
                    "sale": 15990,
                    "tax_id": 1001
                },
                {
                    "id": 2371,
                    "code": 1384,
                    "name": "Martillo Carpintero RedLine 24 Oz ",
                    "category_id": 1005,
                    "purchase": 9900,
                    "sale": 15990,
                    "tax_id": 1001
                },
                {
                    "id": 2372,
                    "code": 1385,
                    "name": "Set 3 Tijeras Hojalatera RedLine",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 2373,
                    "code": 1386,
                    "name": "Caja De Herramienras 16 Lts Bauker",
                    "category_id": 1015,
                    "purchase": 820,
                    "sale": 7990,
                    "tax_id": 1001
                },
                {
                    "id": 2374,
                    "code": 1387,
                    "name": "Sierra Sable Inalambrica 18V",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 75990,
                    "tax_id": 1001
                },
                {
                    "id": 2375,
                    "code": 1388,
                    "name": "Set De Caja De Herramientas Bauker 22 Y 14 Lts",
                    "category_id": 1015,
                    "purchase": 3100,
                    "sale": 24990,
                    "tax_id": 1001
                },
                {
                    "id": 2376,
                    "code": 1389,
                    "name": "Lijadora Bauker 200W ",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 34990,
                    "tax_id": 1001
                },
                {
                    "id": 2377,
                    "code": 1390,
                    "name": "Bateria Recargable Bauker 18V",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 46990,
                    "tax_id": 1001
                },
                {
                    "id": 2378,
                    "code": 1391,
                    "name": "Rotamartillo Inalambrico Bauker 18V ",
                    "category_id": 1010,
                    "purchase": 1349,
                    "sale": 89990,
                    "tax_id": 1001
                },
                {
                    "id": 2379,
                    "code": 1392,
                    "name": "Pistola De Calor Bauker 2000W",
                    "category_id": 1010,
                    "purchase": 850,
                    "sale": 49990,
                    "tax_id": 1001
                },
                {
                    "id": 2380,
                    "code": 1393,
                    "name": "Taladro Bauker 650W",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 39990,
                    "tax_id": 1001
                },
                {
                    "id": 2381,
                    "code": 1394,
                    "name": "Taladro Inalambrico Bauker 12V",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 54990,
                    "tax_id": 1001
                },
                {
                    "id": 2382,
                    "code": 1395,
                    "name": "Sierra Circular Black + Decker 7P",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 59990,
                    "tax_id": 1001
                },
                {
                    "id": 2383,
                    "code": 1396,
                    "name": "Esmeril Angular Bauker 2100W 7P",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 89990,
                    "tax_id": 1001
                },
                {
                    "id": 2384,
                    "code": 1397,
                    "name": "Cinta Reflectante 45mts Bicolor",
                    "category_id": 1009,
                    "purchase": 2080,
                    "sale": 15900,
                    "tax_id": 1001
                },
                {
                    "id": 2385,
                    "code": 1398,
                    "name": "Esmalte Sintetico Amarillo 1/4 Galon",
                    "category_id": 1014,
                    "purchase": 1370,
                    "sale": 7190,
                    "tax_id": 1001
                },
                {
                    "id": 2386,
                    "code": 1399,
                    "name": "Esmalte Sintetico Rojo 1/4 Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 7190,
                    "tax_id": 1001
                },
                {
                    "id": 2387,
                    "code": 1400,
                    "name": "Esmalte Sintetico Azul 1/4 Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 7190,
                    "tax_id": 1001
                },
                {
                    "id": 2388,
                    "code": 1401,
                    "name": "Esmalte Sintetico Gris 1/4 Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 7190,
                    "tax_id": 1001
                },
                {
                    "id": 2389,
                    "code": 1402,
                    "name": "Raticida Pellet 50gr Ratador",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2490,
                    "tax_id": 1001
                },
                {
                    "id": 2390,
                    "code": 1403,
                    "name": "Perfil Rectangular 40x30x2mm",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 15990,
                    "tax_id": 1001
                },
                {
                    "id": 2391,
                    "code": 1404,
                    "name": "Sika 1 Impermeabilizante Tineta",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 33990,
                    "tax_id": 1001
                },
                {
                    "id": 2392,
                    "code": 1405,
                    "name": "Lapiz Carpintero BAHCO ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2393,
                    "code": 1406,
                    "name": "Cordel Polipropileno Trenzado 8mm x Metro",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 2394,
                    "code": 1407,
                    "name": "Cinta Multiuso Para Ductos 48mm x 27mts ",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2395,
                    "code": 1408,
                    "name": "Pistola Para Pintar De Aluminio Baja Presion",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 15990,
                    "tax_id": 1001
                },
                {
                    "id": 2396,
                    "code": 1409,
                    "name": "Terminal So/He 3/4 Bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1600,
                    "tax_id": 1001
                },
                {
                    "id": 2397,
                    "code": 1410,
                    "name": "Combinacion Lavaplato Recta Antonia",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 12990,
                    "tax_id": 1001
                },
                {
                    "id": 2398,
                    "code": 1411,
                    "name": "Monoblock Lavatorio Master H-Full",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 22500,
                    "tax_id": 1001
                },
                {
                    "id": 2399,
                    "code": 1412,
                    "name": "Valvula Para Estanque Wc H-Full ",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 4490,
                    "tax_id": 1001
                },
                {
                    "id": 2400,
                    "code": 1413,
                    "name": "Monomando Lavatorio Eco H-Full",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 11990,
                    "tax_id": 1001
                },
                {
                    "id": 2401,
                    "code": 1414,
                    "name": "Cerradura Cilindrica De Acceso Poli Color Alumnio",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 2402,
                    "code": 1415,
                    "name": "Cerradura Cilindrica De Oficina/Dormitorio Poli Color Aluminio",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 2403,
                    "code": 1416,
                    "name": "Cerradura Cilindrica De Acceso Poli Color Dorada",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 2404,
                    "code": 1417,
                    "name": "Cerradura Cilindrica De Oficina/Dormitorio Poli Color Dorada",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 9990,
                    "tax_id": 1001
                },
                {
                    "id": 2405,
                    "code": 1418,
                    "name": "Desague Lavatorio 1.1/4 Metalico C/Rebalse",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2406,
                    "code": 1419,
                    "name": "Desague Tina 1.1/2 Metalico",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 2407,
                    "code": 1420,
                    "name": "Soldadura 7018 3/32",
                    "category_id": 1008,
                    "purchase": 10500,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2408,
                    "code": 1421,
                    "name": "Soldadura 7018 1/8",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2409,
                    "code": 1422,
                    "name": "Soldadura Indura 7018 1/8",
                    "category_id": 1008,
                    "purchase": 2463,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 2410,
                    "code": 1423,
                    "name": "Juego Atornillador Electricista 6pcs Neva",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 7500,
                    "tax_id": 1001
                },
                {
                    "id": 2411,
                    "code": 1424,
                    "name": "Bombin Jaque Aluminio De Pie",
                    "category_id": 1003,
                    "purchase": 0,
                    "sale": 10900,
                    "tax_id": 1001
                },
                {
                    "id": 2412,
                    "code": 1425,
                    "name": "Llana Fraguadora Makawa",
                    "category_id": 1005,
                    "purchase": 9416,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 2413,
                    "code": 1426,
                    "name": "Conector Rapido Macho Hi 1/2 Y 3/4",
                    "category_id": 1002,
                    "purchase": 0,
                    "sale": 990,
                    "tax_id": 1001
                },
                {
                    "id": 2414,
                    "code": 1428,
                    "name": "Regulador Gas Manguera Economico GasEsp",
                    "category_id": 1020,
                    "purchase": 4950,
                    "sale": 9000,
                    "tax_id": 1001
                },
                {
                    "id": 2415,
                    "code": 1429,
                    "name": "Cable Paralelo Blanco 2 x 1 mm",
                    "category_id": 1027,
                    "purchase": 476,
                    "sale": 400,
                    "tax_id": 1001
                },
                {
                    "id": 2416,
                    "code": 1430,
                    "name": "Pegamento Ecole",
                    "category_id": 1026,
                    "purchase": 715,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2417,
                    "code": 1431,
                    "name": "Tijeron Altura 29 Pulg Ineco",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 13990,
                    "tax_id": 1001
                },
                {
                    "id": 2418,
                    "code": 1432,
                    "name": "Pistola Pintar 450W 800cc Emtop",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 34990,
                    "tax_id": 1001
                },
                {
                    "id": 2419,
                    "code": 1433,
                    "name": "Pistola Infladora Emtop",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2420,
                    "code": 1434,
                    "name": "Set 16 Brocas Y Puntas Emtop",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 2421,
                    "code": 1435,
                    "name": "Cortador Ceramica 60cms Emtop",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 44900,
                    "tax_id": 1001
                },
                {
                    "id": 2422,
                    "code": 1436,
                    "name": "Tizador Con Polvo 3pcs Emtop",
                    "category_id": 1005,
                    "purchase": 5058,
                    "sale": 6900,
                    "tax_id": 1001
                },
                {
                    "id": 2423,
                    "code": 1437,
                    "name": "Escuadra Aluminio Hoteche 8 Pulg",
                    "category_id": 1005,
                    "purchase": 1420,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2424,
                    "code": 1438,
                    "name": "Cable De Parlante Rojo y Negro 24h 2x20",
                    "category_id": 1027,
                    "purchase": 0,
                    "sale": 300,
                    "tax_id": 1001
                },
                {
                    "id": 2425,
                    "code": 1439,
                    "name": "Perno Anclaje 3/8 x 5 ",
                    "category_id": 1012,
                    "purchase": 3558,
                    "sale": 1000,
                    "tax_id": 1001
                },
                {
                    "id": 2426,
                    "code": 1440,
                    "name": "Bizagra 3x2 2un C/Tornillo H-Full",
                    "category_id": 1011,
                    "purchase": 0,
                    "sale": 2000,
                    "tax_id": 1001
                },
                {
                    "id": 2427,
                    "code": 1442,
                    "name": "PLETINA 12 X 3 MM",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 3200,
                    "tax_id": 1001
                },
                {
                    "id": 2428,
                    "code": 1445,
                    "name": "Ladrillo Refractario Liso 236.52.5cm Unidad",
                    "category_id": 1007,
                    "purchase": 145,
                    "sale": 1800,
                    "tax_id": 1001
                },
                {
                    "id": 2429,
                    "code": 1446,
                    "name": "Tubo 1 1/4 X 2 Mm ",
                    "category_id": 1032,
                    "purchase": 0,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 2430,
                    "code": 1447,
                    "name": "Diluyente Sintetico 5 Litros Bidon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 12990,
                    "tax_id": 1001
                },
                {
                    "id": 2431,
                    "code": 1448,
                    "name": "Diluyente Sintetico 1 Litro",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2432,
                    "code": 1449,
                    "name": "Anticorrosivo Ocre 1/4 Galon",
                    "category_id": 1014,
                    "purchase": 540,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 2433,
                    "code": 1450,
                    "name": "Anticorrosivo Ocre Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 16900,
                    "tax_id": 1001
                },
                {
                    "id": 2434,
                    "code": 1451,
                    "name": "Esmalte Sintetico Amarillo Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 24900,
                    "tax_id": 1001
                },
                {
                    "id": 2435,
                    "code": 1452,
                    "name": "Anticorrosivo Gris Verdoso 1/4 Galon",
                    "category_id": 1014,
                    "purchase": 0,
                    "sale": 4900,
                    "tax_id": 1001
                },
                {
                    "id": 2436,
                    "code": 1453,
                    "name": "Silicona Sellador Blanco Pintable Wurth",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 2600,
                    "tax_id": 1001
                },
                {
                    "id": 2437,
                    "code": 1454,
                    "name": "Adhesivo Epoxipo 16 Gr Wurth",
                    "category_id": 1026,
                    "purchase": 0,
                    "sale": 3000,
                    "tax_id": 1001
                },
                {
                    "id": 2438,
                    "code": 1455,
                    "name": "Broca Cemento 6mm X 200 Mm  Makita",
                    "category_id": 1018,
                    "purchase": 0,
                    "sale": 1650,
                    "tax_id": 1001
                },
                {
                    "id": 2439,
                    "code": 1456,
                    "name": "Montero Estuco Interior 25 Kg",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2440,
                    "code": 1457,
                    "name": "W-40 155 GRS",
                    "category_id": 1001,
                    "purchase": 702,
                    "sale": 5700,
                    "tax_id": 1001
                },
                {
                    "id": 2441,
                    "code": 1458,
                    "name": "Tornillo Hexagonal 1 Pulg  Punta Broca",
                    "category_id": 1012,
                    "purchase": 1185,
                    "sale": 3700,
                    "tax_id": 1001
                },
                {
                    "id": 2442,
                    "code": 1459,
                    "name": "Tarugo Ficher 860mm",
                    "category_id": 1012,
                    "purchase": 790,
                    "sale": 150,
                    "tax_id": 1001
                },
                {
                    "id": 2443,
                    "code": 1460,
                    "name": "Gancho Canaleta Blanca",
                    "category_id": 1028,
                    "purchase": 100,
                    "sale": 1200,
                    "tax_id": 1001
                },
                {
                    "id": 2444,
                    "code": 1461,
                    "name": "CURVA CONDUIT 20 MM",
                    "category_id": 1022,
                    "purchase": 400,
                    "sale": 180,
                    "tax_id": 1001
                },
                {
                    "id": 2445,
                    "code": 1462,
                    "name": "Bajada canaleta Blanca ",
                    "category_id": 1028,
                    "purchase": 634,
                    "sale": 3950,
                    "tax_id": 1001
                },
                {
                    "id": 2446,
                    "code": 1463,
                    "name": "Tapa Canaleta Blanca",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 900,
                    "tax_id": 1001
                },
                {
                    "id": 2447,
                    "code": 1464,
                    "name": "Codo Canaleta",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 2300,
                    "tax_id": 1001
                },
                {
                    "id": 2448,
                    "code": 1465,
                    "name": "Adaptador 10 16 Amp",
                    "category_id": 1022,
                    "purchase": 0,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2449,
                    "code": 1466,
                    "name": "Juego De Sierra 5 Pieza ",
                    "category_id": 1008,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 2450,
                    "code": 1467,
                    "name": "Cinta Multiuso 48mm x 9 M",
                    "category_id": 1007,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                },
                {
                    "id": 2451,
                    "code": 1468,
                    "name": "FLEXIBLE HI-HI 1 METRO",
                    "category_id": 1020,
                    "purchase": 2780,
                    "sale": 3900,
                    "tax_id": 1001
                },
                {
                    "id": 2452,
                    "code": 1469,
                    "name": "CACHIMBA HI",
                    "category_id": 1020,
                    "purchase": 647,
                    "sale": 1300,
                    "tax_id": 1001
                },
                {
                    "id": 2453,
                    "code": 1469,
                    "name": "CANALETA BLANCA 4 MTS",
                    "category_id": 1028,
                    "purchase": 3335,
                    "sale": 7900,
                    "tax_id": 1001
                },
                {
                    "id": 2454,
                    "code": 1470,
                    "name": "TUBO BAJADA CANAL Blanca  75X3 MTRS",
                    "category_id": 1028,
                    "purchase": 0,
                    "sale": 7000,
                    "tax_id": 1001
                },
                {
                    "id": 2455,
                    "code": 1471,
                    "name": "Llave Francesa 12 Pulg",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 6990,
                    "tax_id": 1001
                },
                {
                    "id": 2456,
                    "code": 1472,
                    "name": "Tee 32 Mm Ppr ",
                    "category_id": 1031,
                    "purchase": 0,
                    "sale": 700,
                    "tax_id": 1001
                },
                {
                    "id": 2457,
                    "code": 1473,
                    "name": "Torno Mecanico 2 Pulg Hoteche",
                    "category_id": 1005,
                    "purchase": 5461,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2458,
                    "code": 1474,
                    "name": "Set Llave Punta Corona 8 Piezas Ingco",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 13900,
                    "tax_id": 1001
                },
                {
                    "id": 2459,
                    "code": 1475,
                    "name": "Llave Cromada De Paso 32mm Ppr",
                    "category_id": 1031,
                    "purchase": 2145,
                    "sale": 14900,
                    "tax_id": 1001
                },
                {
                    "id": 2460,
                    "code": 1476,
                    "name": "Cortadora Ceramica Y Marmol ",
                    "category_id": 1010,
                    "purchase": 2670,
                    "sale": 59990,
                    "tax_id": 1001
                },
                {
                    "id": 2461,
                    "code": 1477,
                    "name": "Cargador De Bateria 18 V",
                    "category_id": 1010,
                    "purchase": 0,
                    "sale": 22900,
                    "tax_id": 1001
                },
                {
                    "id": 2462,
                    "code": 1478,
                    "name": "Esmeril Angular 4 Pulg Inalambrico 18 D",
                    "category_id": 1010,
                    "purchase": 3880,
                    "sale": 55990,
                    "tax_id": 1001
                },
                {
                    "id": 2463,
                    "code": 1479,
                    "name": "Taladro Inalambrico 18 V ",
                    "category_id": 1010,
                    "purchase": 681,
                    "sale": 59990,
                    "tax_id": 1001
                },
                {
                    "id": 2464,
                    "code": 1480,
                    "name": "Cierra Circular 1300 W",
                    "category_id": 1010,
                    "purchase": 1205,
                    "sale": 55990,
                    "tax_id": 1001
                },
                {
                    "id": 2465,
                    "code": 1481,
                    "name": "Escalera Redline",
                    "category_id": 1005,
                    "purchase": 3765,
                    "sale": 80000,
                    "tax_id": 1001
                },
                {
                    "id": 2466,
                    "code": 1482,
                    "name": "terminal Conector Manguera HI 1/2 de bronce",
                    "category_id": 1020,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2467,
                    "code": 1483,
                    "name": "Pintura Doble Accion Galon Tricolor",
                    "category_id": 1014,
                    "purchase": 5593,
                    "sale": 47900,
                    "tax_id": 1001
                },
                {
                    "id": 2468,
                    "code": 1484,
                    "name": "Epoxico Titanio ",
                    "category_id": 1026,
                    "purchase": 4370,
                    "sale": 4500,
                    "tax_id": 1001
                },
                {
                    "id": 2469,
                    "code": 1485,
                    "name": "tapagotera blanco wurth",
                    "category_id": 1026,
                    "purchase": 5510,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2470,
                    "code": 1486,
                    "name": "tapagotera gris wurth",
                    "category_id": 1026,
                    "purchase": 5418,
                    "sale": 3500,
                    "tax_id": 1001
                },
                {
                    "id": 2471,
                    "code": 1487,
                    "name": "carretilla uro ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 65900,
                    "tax_id": 1001
                },
                {
                    "id": 2472,
                    "code": 1488,
                    "name": "atornillador de cruz ",
                    "category_id": 1005,
                    "purchase": 0,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2473,
                    "code": 1489,
                    "name": "atornillador de paleta",
                    "category_id": 1005,
                    "purchase": 6545,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2474,
                    "code": 1490,
                    "name": "moldura aislapol 5cm",
                    "category_id": 1012,
                    "purchase": 9272,
                    "sale": 1900,
                    "tax_id": 1001
                },
                {
                    "id": 2475,
                    "code": 1491,
                    "name": "moldura aislapol 6cm",
                    "category_id": 1012,
                    "purchase": 12670,
                    "sale": 2500,
                    "tax_id": 1001
                },
                {
                    "id": 2476,
                    "code": 1492,
                    "name": "moldura aislapol 7cm",
                    "category_id": 1012,
                    "purchase": 0,
                    "sale": 2900,
                    "tax_id": 1001
                }
            ]
            , {})

            await queryInterface.bulkInsert('stocks',
            [
                {
                    "id": 1001,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1001
                },
                {
                    "id": 1002,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1002
                },
                {
                    "id": 1003,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1003
                },
                {
                    "id": 1004,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1004
                },
                {
                    "id": 1005,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1005
                },
                {
                    "id": 1006,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1006
                },
                {
                    "id": 1007,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1007
                },
                {
                    "id": 1008,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1008
                },
                {
                    "id": 1009,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1009
                },
                {
                    "id": 1010,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1010
                },
                {
                    "id": 1011,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1011
                },
                {
                    "id": 1012,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1012
                },
                {
                    "id": 1013,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1013
                },
                {
                    "id": 1014,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1014
                },
                {
                    "id": 1015,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1015
                },
                {
                    "id": 1016,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1016
                },
                {
                    "id": 1017,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1017
                },
                {
                    "id": 1018,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1018
                },
                {
                    "id": 1019,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1019
                },
                {
                    "id": 1020,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1020
                },
                {
                    "id": 1021,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1021
                },
                {
                    "id": 1022,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1022
                },
                {
                    "id": 1023,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1023
                },
                {
                    "id": 1024,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1024
                },
                {
                    "id": 1025,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1025
                },
                {
                    "id": 1026,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1026
                },
                {
                    "id": 1027,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1027
                },
                {
                    "id": 1028,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1028
                },
                {
                    "id": 1029,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1029
                },
                {
                    "id": 1030,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1030
                },
                {
                    "id": 1031,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1031
                },
                {
                    "id": 1032,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1032
                },
                {
                    "id": 1033,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1033
                },
                {
                    "id": 1034,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1034
                },
                {
                    "id": 1035,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1035
                },
                {
                    "id": 1036,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1036
                },
                {
                    "id": 1037,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1037
                },
                {
                    "id": 1038,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1038
                },
                {
                    "id": 1039,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1039
                },
                {
                    "id": 1040,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1040
                },
                {
                    "id": 1041,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1041
                },
                {
                    "id": 1042,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1042
                },
                {
                    "id": 1043,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1043
                },
                {
                    "id": 1044,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1044
                },
                {
                    "id": 1045,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1045
                },
                {
                    "id": 1046,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1046
                },
                {
                    "id": 1047,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1047
                },
                {
                    "id": 1048,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1048
                },
                {
                    "id": 1049,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1049
                },
                {
                    "id": 1050,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1050
                },
                {
                    "id": 1051,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1051
                },
                {
                    "id": 1052,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1052
                },
                {
                    "id": 1053,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1053
                },
                {
                    "id": 1054,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1054
                },
                {
                    "id": 1055,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1055
                },
                {
                    "id": 1056,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1056
                },
                {
                    "id": 1057,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1057
                },
                {
                    "id": 1058,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1058
                },
                {
                    "id": 1059,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1059
                },
                {
                    "id": 1060,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1060
                },
                {
                    "id": 1061,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1061
                },
                {
                    "id": 1062,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1062
                },
                {
                    "id": 1063,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1063
                },
                {
                    "id": 1064,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1064
                },
                {
                    "id": 1065,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1065
                },
                {
                    "id": 1066,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1066
                },
                {
                    "id": 1067,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1067
                },
                {
                    "id": 1068,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1068
                },
                {
                    "id": 1069,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1069
                },
                {
                    "id": 1070,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1070
                },
                {
                    "id": 1071,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1071
                },
                {
                    "id": 1072,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1072
                },
                {
                    "id": 1073,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1073
                },
                {
                    "id": 1074,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1074
                },
                {
                    "id": 1075,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1075
                },
                {
                    "id": 1076,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1076
                },
                {
                    "id": 1077,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1077
                },
                {
                    "id": 1078,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1078
                },
                {
                    "id": 1079,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1079
                },
                {
                    "id": 1080,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1080
                },
                {
                    "id": 1081,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1081
                },
                {
                    "id": 1082,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1082
                },
                {
                    "id": 1083,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1083
                },
                {
                    "id": 1084,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1084
                },
                {
                    "id": 1085,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1085
                },
                {
                    "id": 1086,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1086
                },
                {
                    "id": 1087,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1087
                },
                {
                    "id": 1088,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1088
                },
                {
                    "id": 1089,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1089
                },
                {
                    "id": 1090,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1090
                },
                {
                    "id": 1091,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1091
                },
                {
                    "id": 1092,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1092
                },
                {
                    "id": 1093,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1093
                },
                {
                    "id": 1094,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1094
                },
                {
                    "id": 1095,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1095
                },
                {
                    "id": 1096,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1096
                },
                {
                    "id": 1097,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1097
                },
                {
                    "id": 1098,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1098
                },
                {
                    "id": 1099,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1099
                },
                {
                    "id": 1100,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1100
                },
                {
                    "id": 1101,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1101
                },
                {
                    "id": 1102,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1102
                },
                {
                    "id": 1103,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1103
                },
                {
                    "id": 1104,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1104
                },
                {
                    "id": 1105,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1105
                },
                {
                    "id": 1106,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1106
                },
                {
                    "id": 1107,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1107
                },
                {
                    "id": 1108,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1108
                },
                {
                    "id": 1109,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1109
                },
                {
                    "id": 1110,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1110
                },
                {
                    "id": 1111,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1111
                },
                {
                    "id": 1112,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1112
                },
                {
                    "id": 1113,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1113
                },
                {
                    "id": 1114,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1114
                },
                {
                    "id": 1115,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1115
                },
                {
                    "id": 1116,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1116
                },
                {
                    "id": 1117,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1117
                },
                {
                    "id": 1118,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1118
                },
                {
                    "id": 1119,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1119
                },
                {
                    "id": 1120,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1120
                },
                {
                    "id": 1121,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1121
                },
                {
                    "id": 1122,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1122
                },
                {
                    "id": 1123,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1123
                },
                {
                    "id": 1124,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1124
                },
                {
                    "id": 1125,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1125
                },
                {
                    "id": 1126,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1126
                },
                {
                    "id": 1127,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1127
                },
                {
                    "id": 1128,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1128
                },
                {
                    "id": 1129,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1129
                },
                {
                    "id": 1130,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1130
                },
                {
                    "id": 1131,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1131
                },
                {
                    "id": 1132,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1132
                },
                {
                    "id": 1133,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1133
                },
                {
                    "id": 1134,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1134
                },
                {
                    "id": 1135,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1135
                },
                {
                    "id": 1136,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1136
                },
                {
                    "id": 1137,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1137
                },
                {
                    "id": 1138,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1138
                },
                {
                    "id": 1139,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1139
                },
                {
                    "id": 1140,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1140
                },
                {
                    "id": 1141,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1141
                },
                {
                    "id": 1142,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1142
                },
                {
                    "id": 1143,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1143
                },
                {
                    "id": 1144,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1144
                },
                {
                    "id": 1145,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1145
                },
                {
                    "id": 1146,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1146
                },
                {
                    "id": 1147,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1147
                },
                {
                    "id": 1148,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1148
                },
                {
                    "id": 1149,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1149
                },
                {
                    "id": 1150,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1150
                },
                {
                    "id": 1151,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1151
                },
                {
                    "id": 1152,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1152
                },
                {
                    "id": 1153,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1153
                },
                {
                    "id": 1154,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1154
                },
                {
                    "id": 1155,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1155
                },
                {
                    "id": 1156,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1156
                },
                {
                    "id": 1157,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1157
                },
                {
                    "id": 1158,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1158
                },
                {
                    "id": 1159,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1159
                },
                {
                    "id": 1160,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1160
                },
                {
                    "id": 1161,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1161
                },
                {
                    "id": 1162,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1162
                },
                {
                    "id": 1163,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1163
                },
                {
                    "id": 1164,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1164
                },
                {
                    "id": 1165,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1165
                },
                {
                    "id": 1166,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1166
                },
                {
                    "id": 1167,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1167
                },
                {
                    "id": 1168,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1168
                },
                {
                    "id": 1169,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1169
                },
                {
                    "id": 1170,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1170
                },
                {
                    "id": 1171,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1171
                },
                {
                    "id": 1172,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1172
                },
                {
                    "id": 1173,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1173
                },
                {
                    "id": 1174,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1174
                },
                {
                    "id": 1175,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1175
                },
                {
                    "id": 1176,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1176
                },
                {
                    "id": 1177,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1177
                },
                {
                    "id": 1178,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1178
                },
                {
                    "id": 1179,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1179
                },
                {
                    "id": 1180,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1180
                },
                {
                    "id": 1181,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1181
                },
                {
                    "id": 1182,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1182
                },
                {
                    "id": 1183,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1183
                },
                {
                    "id": 1184,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1184
                },
                {
                    "id": 1185,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1185
                },
                {
                    "id": 1186,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1186
                },
                {
                    "id": 1187,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1187
                },
                {
                    "id": 1188,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1188
                },
                {
                    "id": 1189,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1189
                },
                {
                    "id": 1190,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1190
                },
                {
                    "id": 1191,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1191
                },
                {
                    "id": 1192,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1192
                },
                {
                    "id": 1193,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1193
                },
                {
                    "id": 1194,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1194
                },
                {
                    "id": 1195,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1195
                },
                {
                    "id": 1196,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1196
                },
                {
                    "id": 1197,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1197
                },
                {
                    "id": 1198,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1198
                },
                {
                    "id": 1199,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1199
                },
                {
                    "id": 1200,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1200
                },
                {
                    "id": 1201,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1201
                },
                {
                    "id": 1202,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1202
                },
                {
                    "id": 1203,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1203
                },
                {
                    "id": 1204,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1204
                },
                {
                    "id": 1205,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1205
                },
                {
                    "id": 1206,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1206
                },
                {
                    "id": 1207,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1207
                },
                {
                    "id": 1208,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1208
                },
                {
                    "id": 1209,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1209
                },
                {
                    "id": 1210,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1210
                },
                {
                    "id": 1211,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1211
                },
                {
                    "id": 1212,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1212
                },
                {
                    "id": 1213,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1213
                },
                {
                    "id": 1214,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1214
                },
                {
                    "id": 1215,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1215
                },
                {
                    "id": 1216,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1216
                },
                {
                    "id": 1217,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1217
                },
                {
                    "id": 1218,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1218
                },
                {
                    "id": 1219,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1219
                },
                {
                    "id": 1220,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1220
                },
                {
                    "id": 1221,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1221
                },
                {
                    "id": 1222,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1222
                },
                {
                    "id": 1223,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1223
                },
                {
                    "id": 1224,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1224
                },
                {
                    "id": 1225,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1225
                },
                {
                    "id": 1226,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1226
                },
                {
                    "id": 1227,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1227
                },
                {
                    "id": 1228,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1228
                },
                {
                    "id": 1229,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1229
                },
                {
                    "id": 1230,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1230
                },
                {
                    "id": 1231,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1231
                },
                {
                    "id": 1232,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1232
                },
                {
                    "id": 1233,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1233
                },
                {
                    "id": 1234,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1234
                },
                {
                    "id": 1235,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1235
                },
                {
                    "id": 1236,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1236
                },
                {
                    "id": 1237,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1237
                },
                {
                    "id": 1238,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1238
                },
                {
                    "id": 1239,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1239
                },
                {
                    "id": 1240,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1240
                },
                {
                    "id": 1241,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1241
                },
                {
                    "id": 1242,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1242
                },
                {
                    "id": 1243,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1243
                },
                {
                    "id": 1244,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1244
                },
                {
                    "id": 1245,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1245
                },
                {
                    "id": 1246,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1246
                },
                {
                    "id": 1247,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1247
                },
                {
                    "id": 1248,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1248
                },
                {
                    "id": 1249,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1249
                },
                {
                    "id": 1250,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1250
                },
                {
                    "id": 1251,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1251
                },
                {
                    "id": 1252,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1252
                },
                {
                    "id": 1253,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1253
                },
                {
                    "id": 1254,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1254
                },
                {
                    "id": 1255,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1255
                },
                {
                    "id": 1256,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1256
                },
                {
                    "id": 1257,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1257
                },
                {
                    "id": 1258,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1258
                },
                {
                    "id": 1259,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1259
                },
                {
                    "id": 1260,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1260
                },
                {
                    "id": 1261,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1261
                },
                {
                    "id": 1262,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1262
                },
                {
                    "id": 1263,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1263
                },
                {
                    "id": 1264,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1264
                },
                {
                    "id": 1265,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1265
                },
                {
                    "id": 1266,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1266
                },
                {
                    "id": 1267,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1267
                },
                {
                    "id": 1268,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1268
                },
                {
                    "id": 1269,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1269
                },
                {
                    "id": 1270,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1270
                },
                {
                    "id": 1271,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1271
                },
                {
                    "id": 1272,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1272
                },
                {
                    "id": 1273,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1273
                },
                {
                    "id": 1274,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1274
                },
                {
                    "id": 1275,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1275
                },
                {
                    "id": 1276,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1276
                },
                {
                    "id": 1277,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1277
                },
                {
                    "id": 1278,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1278
                },
                {
                    "id": 1279,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1279
                },
                {
                    "id": 1280,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1280
                },
                {
                    "id": 1281,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1281
                },
                {
                    "id": 1282,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1282
                },
                {
                    "id": 1283,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1283
                },
                {
                    "id": 1284,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1284
                },
                {
                    "id": 1285,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1285
                },
                {
                    "id": 1286,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1286
                },
                {
                    "id": 1287,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1287
                },
                {
                    "id": 1288,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1288
                },
                {
                    "id": 1289,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1289
                },
                {
                    "id": 1290,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1290
                },
                {
                    "id": 1291,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1291
                },
                {
                    "id": 1292,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1292
                },
                {
                    "id": 1293,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1293
                },
                {
                    "id": 1294,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1294
                },
                {
                    "id": 1295,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1295
                },
                {
                    "id": 1296,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1296
                },
                {
                    "id": 1297,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1297
                },
                {
                    "id": 1298,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1298
                },
                {
                    "id": 1299,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1299
                },
                {
                    "id": 1300,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1300
                },
                {
                    "id": 1301,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1301
                },
                {
                    "id": 1302,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1302
                },
                {
                    "id": 1303,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1303
                },
                {
                    "id": 1304,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1304
                },
                {
                    "id": 1305,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1305
                },
                {
                    "id": 1306,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1306
                },
                {
                    "id": 1307,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1307
                },
                {
                    "id": 1308,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1308
                },
                {
                    "id": 1309,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1309
                },
                {
                    "id": 1310,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1310
                },
                {
                    "id": 1311,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1311
                },
                {
                    "id": 1312,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1312
                },
                {
                    "id": 1313,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1313
                },
                {
                    "id": 1314,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1314
                },
                {
                    "id": 1315,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1315
                },
                {
                    "id": 1316,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1316
                },
                {
                    "id": 1317,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1317
                },
                {
                    "id": 1318,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1318
                },
                {
                    "id": 1319,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1319
                },
                {
                    "id": 1320,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1320
                },
                {
                    "id": 1321,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1321
                },
                {
                    "id": 1322,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1322
                },
                {
                    "id": 1323,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1323
                },
                {
                    "id": 1324,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1324
                },
                {
                    "id": 1325,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1325
                },
                {
                    "id": 1326,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1326
                },
                {
                    "id": 1327,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1327
                },
                {
                    "id": 1328,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1328
                },
                {
                    "id": 1329,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1329
                },
                {
                    "id": 1330,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1330
                },
                {
                    "id": 1331,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1331
                },
                {
                    "id": 1332,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1332
                },
                {
                    "id": 1333,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1333
                },
                {
                    "id": 1334,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1334
                },
                {
                    "id": 1335,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1335
                },
                {
                    "id": 1336,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1336
                },
                {
                    "id": 1337,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1337
                },
                {
                    "id": 1338,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1338
                },
                {
                    "id": 1339,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1339
                },
                {
                    "id": 1340,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1340
                },
                {
                    "id": 1341,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1341
                },
                {
                    "id": 1342,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1342
                },
                {
                    "id": 1343,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1343
                },
                {
                    "id": 1344,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1344
                },
                {
                    "id": 1345,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1345
                },
                {
                    "id": 1346,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1346
                },
                {
                    "id": 1347,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1347
                },
                {
                    "id": 1348,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1348
                },
                {
                    "id": 1349,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1349
                },
                {
                    "id": 1350,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1350
                },
                {
                    "id": 1351,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1351
                },
                {
                    "id": 1352,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1352
                },
                {
                    "id": 1353,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1353
                },
                {
                    "id": 1354,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1354
                },
                {
                    "id": 1355,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1355
                },
                {
                    "id": 1356,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1356
                },
                {
                    "id": 1357,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1357
                },
                {
                    "id": 1358,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1358
                },
                {
                    "id": 1359,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1359
                },
                {
                    "id": 1360,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1360
                },
                {
                    "id": 1361,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1361
                },
                {
                    "id": 1362,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1362
                },
                {
                    "id": 1363,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1363
                },
                {
                    "id": 1364,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1364
                },
                {
                    "id": 1365,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1365
                },
                {
                    "id": 1366,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1366
                },
                {
                    "id": 1367,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1367
                },
                {
                    "id": 1368,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1368
                },
                {
                    "id": 1369,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1369
                },
                {
                    "id": 1370,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1370
                },
                {
                    "id": 1371,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1371
                },
                {
                    "id": 1372,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1372
                },
                {
                    "id": 1373,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1373
                },
                {
                    "id": 1374,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1374
                },
                {
                    "id": 1375,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1375
                },
                {
                    "id": 1376,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1376
                },
                {
                    "id": 1377,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1377
                },
                {
                    "id": 1378,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1378
                },
                {
                    "id": 1379,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1379
                },
                {
                    "id": 1380,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1380
                },
                {
                    "id": 1381,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1381
                },
                {
                    "id": 1382,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1382
                },
                {
                    "id": 1383,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1383
                },
                {
                    "id": 1384,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1384
                },
                {
                    "id": 1385,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1385
                },
                {
                    "id": 1386,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1386
                },
                {
                    "id": 1387,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1387
                },
                {
                    "id": 1388,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1388
                },
                {
                    "id": 1389,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1389
                },
                {
                    "id": 1390,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1390
                },
                {
                    "id": 1391,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1391
                },
                {
                    "id": 1392,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1392
                },
                {
                    "id": 1393,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1393
                },
                {
                    "id": 1394,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1394
                },
                {
                    "id": 1395,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1395
                },
                {
                    "id": 1396,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1396
                },
                {
                    "id": 1397,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1397
                },
                {
                    "id": 1398,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1398
                },
                {
                    "id": 1399,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1399
                },
                {
                    "id": 1400,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1400
                },
                {
                    "id": 1401,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1401
                },
                {
                    "id": 1402,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1402
                },
                {
                    "id": 1403,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1403
                },
                {
                    "id": 1404,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1404
                },
                {
                    "id": 1405,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1405
                },
                {
                    "id": 1406,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1406
                },
                {
                    "id": 1407,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1407
                },
                {
                    "id": 1408,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1408
                },
                {
                    "id": 1409,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1409
                },
                {
                    "id": 1410,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1410
                },
                {
                    "id": 1411,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1411
                },
                {
                    "id": 1412,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1412
                },
                {
                    "id": 1413,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1413
                },
                {
                    "id": 1414,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1414
                },
                {
                    "id": 1415,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1415
                },
                {
                    "id": 1416,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1416
                },
                {
                    "id": 1417,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1417
                },
                {
                    "id": 1418,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1418
                },
                {
                    "id": 1419,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1419
                },
                {
                    "id": 1420,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1420
                },
                {
                    "id": 1421,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1421
                },
                {
                    "id": 1422,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1422
                },
                {
                    "id": 1423,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1423
                },
                {
                    "id": 1424,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1424
                },
                {
                    "id": 1425,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1425
                },
                {
                    "id": 1426,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1426
                },
                {
                    "id": 1427,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1427
                },
                {
                    "id": 1428,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1428
                },
                {
                    "id": 1429,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1429
                },
                {
                    "id": 1430,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1430
                },
                {
                    "id": 1431,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1431
                },
                {
                    "id": 1432,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1432
                },
                {
                    "id": 1433,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1433
                },
                {
                    "id": 1434,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1434
                },
                {
                    "id": 1435,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1435
                },
                {
                    "id": 1436,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1436
                },
                {
                    "id": 1437,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1437
                },
                {
                    "id": 1438,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1438
                },
                {
                    "id": 1439,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1439
                },
                {
                    "id": 1440,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1440
                },
                {
                    "id": 1441,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1441
                },
                {
                    "id": 1442,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1442
                },
                {
                    "id": 1443,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1443
                },
                {
                    "id": 1444,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1444
                },
                {
                    "id": 1445,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1445
                },
                {
                    "id": 1446,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1446
                },
                {
                    "id": 1447,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1447
                },
                {
                    "id": 1448,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1448
                },
                {
                    "id": 1449,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1449
                },
                {
                    "id": 1450,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1450
                },
                {
                    "id": 1451,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1451
                },
                {
                    "id": 1452,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1452
                },
                {
                    "id": 1453,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1453
                },
                {
                    "id": 1454,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1454
                },
                {
                    "id": 1455,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1455
                },
                {
                    "id": 1456,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1456
                },
                {
                    "id": 1457,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1457
                },
                {
                    "id": 1458,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1458
                },
                {
                    "id": 1459,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1459
                },
                {
                    "id": 1460,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1460
                },
                {
                    "id": 1461,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1461
                },
                {
                    "id": 1462,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1462
                },
                {
                    "id": 1463,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1463
                },
                {
                    "id": 1464,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1464
                },
                {
                    "id": 1465,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1465
                },
                {
                    "id": 1466,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1466
                },
                {
                    "id": 1467,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1467
                },
                {
                    "id": 1468,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1468
                },
                {
                    "id": 1469,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1469
                },
                {
                    "id": 1470,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1470
                },
                {
                    "id": 1471,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1471
                },
                {
                    "id": 1472,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1472
                },
                {
                    "id": 1473,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1473
                },
                {
                    "id": 1474,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1474
                },
                {
                    "id": 1475,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1475
                },
                {
                    "id": 1476,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1476
                },
                {
                    "id": 1477,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1477
                },
                {
                    "id": 1478,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1478
                },
                {
                    "id": 1479,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1479
                },
                {
                    "id": 1480,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1480
                },
                {
                    "id": 1481,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1481
                },
                {
                    "id": 1482,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1482
                },
                {
                    "id": 1483,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1483
                },
                {
                    "id": 1484,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1484
                },
                {
                    "id": 1485,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1485
                },
                {
                    "id": 1486,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1486
                },
                {
                    "id": 1487,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1487
                },
                {
                    "id": 1488,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1488
                },
                {
                    "id": 1489,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1489
                },
                {
                    "id": 1490,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1490
                },
                {
                    "id": 1491,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1491
                },
                {
                    "id": 1492,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1492
                },
                {
                    "id": 1493,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1493
                },
                {
                    "id": 1494,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1494
                },
                {
                    "id": 1495,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1495
                },
                {
                    "id": 1496,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1496
                },
                {
                    "id": 1497,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1497
                },
                {
                    "id": 1498,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1498
                },
                {
                    "id": 1499,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1499
                },
                {
                    "id": 1500,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1500
                },
                {
                    "id": 1501,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1501
                },
                {
                    "id": 1502,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1502
                },
                {
                    "id": 1503,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1503
                },
                {
                    "id": 1504,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1504
                },
                {
                    "id": 1505,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1505
                },
                {
                    "id": 1506,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1506
                },
                {
                    "id": 1507,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1507
                },
                {
                    "id": 1508,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1508
                },
                {
                    "id": 1509,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1509
                },
                {
                    "id": 1510,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1510
                },
                {
                    "id": 1511,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1511
                },
                {
                    "id": 1512,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1512
                },
                {
                    "id": 1513,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1513
                },
                {
                    "id": 1514,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1514
                },
                {
                    "id": 1515,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1515
                },
                {
                    "id": 1516,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1516
                },
                {
                    "id": 1517,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1517
                },
                {
                    "id": 1518,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1518
                },
                {
                    "id": 1519,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1519
                },
                {
                    "id": 1520,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1520
                },
                {
                    "id": 1521,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1521
                },
                {
                    "id": 1522,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1522
                },
                {
                    "id": 1523,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1523
                },
                {
                    "id": 1524,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1524
                },
                {
                    "id": 1525,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1525
                },
                {
                    "id": 1526,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1526
                },
                {
                    "id": 1527,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1527
                },
                {
                    "id": 1528,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1528
                },
                {
                    "id": 1529,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1529
                },
                {
                    "id": 1530,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1530
                },
                {
                    "id": 1531,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1531
                },
                {
                    "id": 1532,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1532
                },
                {
                    "id": 1533,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1533
                },
                {
                    "id": 1534,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1534
                },
                {
                    "id": 1535,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1535
                },
                {
                    "id": 1536,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1536
                },
                {
                    "id": 1537,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1537
                },
                {
                    "id": 1538,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1538
                },
                {
                    "id": 1539,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1539
                },
                {
                    "id": 1540,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1540
                },
                {
                    "id": 1541,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1541
                },
                {
                    "id": 1542,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1542
                },
                {
                    "id": 1543,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1543
                },
                {
                    "id": 1544,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1544
                },
                {
                    "id": 1545,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1545
                },
                {
                    "id": 1546,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1546
                },
                {
                    "id": 1547,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1547
                },
                {
                    "id": 1548,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1548
                },
                {
                    "id": 1549,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1549
                },
                {
                    "id": 1550,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1550
                },
                {
                    "id": 1551,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1551
                },
                {
                    "id": 1552,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1552
                },
                {
                    "id": 1553,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1553
                },
                {
                    "id": 1554,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1554
                },
                {
                    "id": 1555,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1555
                },
                {
                    "id": 1556,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1556
                },
                {
                    "id": 1557,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1557
                },
                {
                    "id": 1558,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1558
                },
                {
                    "id": 1559,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1559
                },
                {
                    "id": 1560,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1560
                },
                {
                    "id": 1561,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1561
                },
                {
                    "id": 1562,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1562
                },
                {
                    "id": 1563,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1563
                },
                {
                    "id": 1564,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1564
                },
                {
                    "id": 1565,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1565
                },
                {
                    "id": 1566,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1566
                },
                {
                    "id": 1567,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1567
                },
                {
                    "id": 1568,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1568
                },
                {
                    "id": 1569,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1569
                },
                {
                    "id": 1570,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1570
                },
                {
                    "id": 1571,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1571
                },
                {
                    "id": 1572,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1572
                },
                {
                    "id": 1573,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1573
                },
                {
                    "id": 1574,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1574
                },
                {
                    "id": 1575,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1575
                },
                {
                    "id": 1576,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1576
                },
                {
                    "id": 1577,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1577
                },
                {
                    "id": 1578,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1578
                },
                {
                    "id": 1579,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1579
                },
                {
                    "id": 1580,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1580
                },
                {
                    "id": 1581,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1581
                },
                {
                    "id": 1582,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1582
                },
                {
                    "id": 1583,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1583
                },
                {
                    "id": 1584,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1584
                },
                {
                    "id": 1585,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1585
                },
                {
                    "id": 1586,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1586
                },
                {
                    "id": 1587,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1587
                },
                {
                    "id": 1588,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1588
                },
                {
                    "id": 1589,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1589
                },
                {
                    "id": 1590,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1590
                },
                {
                    "id": 1591,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1591
                },
                {
                    "id": 1592,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1592
                },
                {
                    "id": 1593,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1593
                },
                {
                    "id": 1594,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1594
                },
                {
                    "id": 1595,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1595
                },
                {
                    "id": 1596,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1596
                },
                {
                    "id": 1597,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1597
                },
                {
                    "id": 1598,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1598
                },
                {
                    "id": 1599,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1599
                },
                {
                    "id": 1600,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1600
                },
                {
                    "id": 1601,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1601
                },
                {
                    "id": 1602,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1602
                },
                {
                    "id": 1603,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1603
                },
                {
                    "id": 1604,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1604
                },
                {
                    "id": 1605,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1605
                },
                {
                    "id": 1606,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1606
                },
                {
                    "id": 1607,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1607
                },
                {
                    "id": 1608,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1608
                },
                {
                    "id": 1609,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1609
                },
                {
                    "id": 1610,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1610
                },
                {
                    "id": 1611,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1611
                },
                {
                    "id": 1612,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1612
                },
                {
                    "id": 1613,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1613
                },
                {
                    "id": 1614,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1614
                },
                {
                    "id": 1615,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1615
                },
                {
                    "id": 1616,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1616
                },
                {
                    "id": 1617,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1617
                },
                {
                    "id": 1618,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1618
                },
                {
                    "id": 1619,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1619
                },
                {
                    "id": 1620,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1620
                },
                {
                    "id": 1621,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1621
                },
                {
                    "id": 1622,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1622
                },
                {
                    "id": 1623,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1623
                },
                {
                    "id": 1624,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1624
                },
                {
                    "id": 1625,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1625
                },
                {
                    "id": 1626,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1626
                },
                {
                    "id": 1627,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1627
                },
                {
                    "id": 1628,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1628
                },
                {
                    "id": 1629,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1629
                },
                {
                    "id": 1630,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1630
                },
                {
                    "id": 1631,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1631
                },
                {
                    "id": 1632,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1632
                },
                {
                    "id": 1633,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1633
                },
                {
                    "id": 1634,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1634
                },
                {
                    "id": 1635,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1635
                },
                {
                    "id": 1636,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1636
                },
                {
                    "id": 1637,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1637
                },
                {
                    "id": 1638,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1638
                },
                {
                    "id": 1639,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1639
                },
                {
                    "id": 1640,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1640
                },
                {
                    "id": 1641,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1641
                },
                {
                    "id": 1642,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1642
                },
                {
                    "id": 1643,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1643
                },
                {
                    "id": 1644,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1644
                },
                {
                    "id": 1645,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1645
                },
                {
                    "id": 1646,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1646
                },
                {
                    "id": 1647,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1647
                },
                {
                    "id": 1648,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1648
                },
                {
                    "id": 1649,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1649
                },
                {
                    "id": 1650,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1650
                },
                {
                    "id": 1651,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1651
                },
                {
                    "id": 1652,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1652
                },
                {
                    "id": 1653,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1653
                },
                {
                    "id": 1654,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1654
                },
                {
                    "id": 1655,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1655
                },
                {
                    "id": 1656,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1656
                },
                {
                    "id": 1657,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1657
                },
                {
                    "id": 1658,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1658
                },
                {
                    "id": 1659,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1659
                },
                {
                    "id": 1660,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1660
                },
                {
                    "id": 1661,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1661
                },
                {
                    "id": 1662,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1662
                },
                {
                    "id": 1663,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1663
                },
                {
                    "id": 1664,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1664
                },
                {
                    "id": 1665,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1665
                },
                {
                    "id": 1666,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1666
                },
                {
                    "id": 1667,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1667
                },
                {
                    "id": 1668,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1668
                },
                {
                    "id": 1669,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1669
                },
                {
                    "id": 1670,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1670
                },
                {
                    "id": 1671,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1671
                },
                {
                    "id": 1672,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1672
                },
                {
                    "id": 1673,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1673
                },
                {
                    "id": 1674,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1674
                },
                {
                    "id": 1675,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1675
                },
                {
                    "id": 1676,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1676
                },
                {
                    "id": 1677,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1677
                },
                {
                    "id": 1678,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1678
                },
                {
                    "id": 1679,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1679
                },
                {
                    "id": 1680,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1680
                },
                {
                    "id": 1681,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1681
                },
                {
                    "id": 1682,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1682
                },
                {
                    "id": 1683,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1683
                },
                {
                    "id": 1684,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1684
                },
                {
                    "id": 1685,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1685
                },
                {
                    "id": 1686,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1686
                },
                {
                    "id": 1687,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1687
                },
                {
                    "id": 1688,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1688
                },
                {
                    "id": 1689,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1689
                },
                {
                    "id": 1690,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1690
                },
                {
                    "id": 1691,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1691
                },
                {
                    "id": 1692,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1692
                },
                {
                    "id": 1693,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1693
                },
                {
                    "id": 1694,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1694
                },
                {
                    "id": 1695,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1695
                },
                {
                    "id": 1696,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1696
                },
                {
                    "id": 1697,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1697
                },
                {
                    "id": 1698,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1698
                },
                {
                    "id": 1699,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1699
                },
                {
                    "id": 1700,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1700
                },
                {
                    "id": 1701,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1701
                },
                {
                    "id": 1702,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1702
                },
                {
                    "id": 1703,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1703
                },
                {
                    "id": 1704,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1704
                },
                {
                    "id": 1705,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1705
                },
                {
                    "id": 1706,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1706
                },
                {
                    "id": 1707,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1707
                },
                {
                    "id": 1708,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1708
                },
                {
                    "id": 1709,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1709
                },
                {
                    "id": 1710,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1710
                },
                {
                    "id": 1711,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1711
                },
                {
                    "id": 1712,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1712
                },
                {
                    "id": 1713,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1713
                },
                {
                    "id": 1714,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1714
                },
                {
                    "id": 1715,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1715
                },
                {
                    "id": 1716,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1716
                },
                {
                    "id": 1717,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1717
                },
                {
                    "id": 1718,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1718
                },
                {
                    "id": 1719,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1719
                },
                {
                    "id": 1720,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1720
                },
                {
                    "id": 1721,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1721
                },
                {
                    "id": 1722,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1722
                },
                {
                    "id": 1723,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1723
                },
                {
                    "id": 1724,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1724
                },
                {
                    "id": 1725,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1725
                },
                {
                    "id": 1726,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1726
                },
                {
                    "id": 1727,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1727
                },
                {
                    "id": 1728,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1728
                },
                {
                    "id": 1729,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1729
                },
                {
                    "id": 1730,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1730
                },
                {
                    "id": 1731,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1731
                },
                {
                    "id": 1732,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1732
                },
                {
                    "id": 1733,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1733
                },
                {
                    "id": 1734,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1734
                },
                {
                    "id": 1735,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1735
                },
                {
                    "id": 1736,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1736
                },
                {
                    "id": 1737,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1737
                },
                {
                    "id": 1738,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1738
                },
                {
                    "id": 1739,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1739
                },
                {
                    "id": 1740,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1740
                },
                {
                    "id": 1741,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1741
                },
                {
                    "id": 1742,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1742
                },
                {
                    "id": 1743,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1743
                },
                {
                    "id": 1744,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1744
                },
                {
                    "id": 1745,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1745
                },
                {
                    "id": 1746,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1746
                },
                {
                    "id": 1747,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1747
                },
                {
                    "id": 1748,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1748
                },
                {
                    "id": 1749,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1749
                },
                {
                    "id": 1750,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1750
                },
                {
                    "id": 1751,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1751
                },
                {
                    "id": 1752,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1752
                },
                {
                    "id": 1753,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1753
                },
                {
                    "id": 1754,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1754
                },
                {
                    "id": 1755,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1755
                },
                {
                    "id": 1756,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1756
                },
                {
                    "id": 1757,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1757
                },
                {
                    "id": 1758,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1758
                },
                {
                    "id": 1759,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1759
                },
                {
                    "id": 1760,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1760
                },
                {
                    "id": 1761,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1761
                },
                {
                    "id": 1762,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1762
                },
                {
                    "id": 1763,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1763
                },
                {
                    "id": 1764,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1764
                },
                {
                    "id": 1765,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1765
                },
                {
                    "id": 1766,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1766
                },
                {
                    "id": 1767,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1767
                },
                {
                    "id": 1768,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1768
                },
                {
                    "id": 1769,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1769
                },
                {
                    "id": 1770,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1770
                },
                {
                    "id": 1771,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1771
                },
                {
                    "id": 1772,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1772
                },
                {
                    "id": 1773,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1773
                },
                {
                    "id": 1774,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1774
                },
                {
                    "id": 1775,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1775
                },
                {
                    "id": 1776,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1776
                },
                {
                    "id": 1777,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1777
                },
                {
                    "id": 1778,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1778
                },
                {
                    "id": 1779,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1779
                },
                {
                    "id": 1780,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1780
                },
                {
                    "id": 1781,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1781
                },
                {
                    "id": 1782,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1782
                },
                {
                    "id": 1783,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1783
                },
                {
                    "id": 1784,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1784
                },
                {
                    "id": 1785,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1785
                },
                {
                    "id": 1786,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1786
                },
                {
                    "id": 1787,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1787
                },
                {
                    "id": 1788,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1788
                },
                {
                    "id": 1789,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1789
                },
                {
                    "id": 1790,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1790
                },
                {
                    "id": 1791,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1791
                },
                {
                    "id": 1792,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1792
                },
                {
                    "id": 1793,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1793
                },
                {
                    "id": 1794,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1794
                },
                {
                    "id": 1795,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1795
                },
                {
                    "id": 1796,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1796
                },
                {
                    "id": 1797,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1797
                },
                {
                    "id": 1798,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1798
                },
                {
                    "id": 1799,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1799
                },
                {
                    "id": 1800,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1800
                },
                {
                    "id": 1801,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1801
                },
                {
                    "id": 1802,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1802
                },
                {
                    "id": 1803,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1803
                },
                {
                    "id": 1804,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1804
                },
                {
                    "id": 1805,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1805
                },
                {
                    "id": 1806,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1806
                },
                {
                    "id": 1807,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1807
                },
                {
                    "id": 1808,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1808
                },
                {
                    "id": 1809,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1809
                },
                {
                    "id": 1810,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1810
                },
                {
                    "id": 1811,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1811
                },
                {
                    "id": 1812,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1812
                },
                {
                    "id": 1813,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1813
                },
                {
                    "id": 1814,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1814
                },
                {
                    "id": 1815,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1815
                },
                {
                    "id": 1816,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1816
                },
                {
                    "id": 1817,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1817
                },
                {
                    "id": 1818,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1818
                },
                {
                    "id": 1819,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1819
                },
                {
                    "id": 1820,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1820
                },
                {
                    "id": 1821,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1821
                },
                {
                    "id": 1822,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1822
                },
                {
                    "id": 1823,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1823
                },
                {
                    "id": 1824,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1824
                },
                {
                    "id": 1825,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1825
                },
                {
                    "id": 1826,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1826
                },
                {
                    "id": 1827,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1827
                },
                {
                    "id": 1828,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1828
                },
                {
                    "id": 1829,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1829
                },
                {
                    "id": 1830,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1830
                },
                {
                    "id": 1831,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1831
                },
                {
                    "id": 1832,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1832
                },
                {
                    "id": 1833,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1833
                },
                {
                    "id": 1834,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1834
                },
                {
                    "id": 1835,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1835
                },
                {
                    "id": 1836,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1836
                },
                {
                    "id": 1837,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1837
                },
                {
                    "id": 1838,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1838
                },
                {
                    "id": 1839,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1839
                },
                {
                    "id": 1840,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1840
                },
                {
                    "id": 1841,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1841
                },
                {
                    "id": 1842,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1842
                },
                {
                    "id": 1843,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1843
                },
                {
                    "id": 1844,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1844
                },
                {
                    "id": 1845,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1845
                },
                {
                    "id": 1846,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1846
                },
                {
                    "id": 1847,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1847
                },
                {
                    "id": 1848,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1848
                },
                {
                    "id": 1849,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1849
                },
                {
                    "id": 1850,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1850
                },
                {
                    "id": 1851,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1851
                },
                {
                    "id": 1852,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1852
                },
                {
                    "id": 1853,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1853
                },
                {
                    "id": 1854,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1854
                },
                {
                    "id": 1855,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1855
                },
                {
                    "id": 1856,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1856
                },
                {
                    "id": 1857,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1857
                },
                {
                    "id": 1858,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1858
                },
                {
                    "id": 1859,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1859
                },
                {
                    "id": 1860,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1860
                },
                {
                    "id": 1861,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1861
                },
                {
                    "id": 1862,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1862
                },
                {
                    "id": 1863,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1863
                },
                {
                    "id": 1864,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1864
                },
                {
                    "id": 1865,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1865
                },
                {
                    "id": 1866,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1866
                },
                {
                    "id": 1867,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1867
                },
                {
                    "id": 1868,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1868
                },
                {
                    "id": 1869,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1869
                },
                {
                    "id": 1870,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1870
                },
                {
                    "id": 1871,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1871
                },
                {
                    "id": 1872,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1872
                },
                {
                    "id": 1873,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1873
                },
                {
                    "id": 1874,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1874
                },
                {
                    "id": 1875,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1875
                },
                {
                    "id": 1876,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1876
                },
                {
                    "id": 1877,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1877
                },
                {
                    "id": 1878,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1878
                },
                {
                    "id": 1879,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1879
                },
                {
                    "id": 1880,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1880
                },
                {
                    "id": 1881,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1881
                },
                {
                    "id": 1882,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1882
                },
                {
                    "id": 1883,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1883
                },
                {
                    "id": 1884,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1884
                },
                {
                    "id": 1885,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1885
                },
                {
                    "id": 1886,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1886
                },
                {
                    "id": 1887,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1887
                },
                {
                    "id": 1888,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1888
                },
                {
                    "id": 1889,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1889
                },
                {
                    "id": 1890,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1890
                },
                {
                    "id": 1891,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1891
                },
                {
                    "id": 1892,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1892
                },
                {
                    "id": 1893,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1893
                },
                {
                    "id": 1894,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1894
                },
                {
                    "id": 1895,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1895
                },
                {
                    "id": 1896,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1896
                },
                {
                    "id": 1897,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1897
                },
                {
                    "id": 1898,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1898
                },
                {
                    "id": 1899,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1899
                },
                {
                    "id": 1900,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1900
                },
                {
                    "id": 1901,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1901
                },
                {
                    "id": 1902,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1902
                },
                {
                    "id": 1903,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1903
                },
                {
                    "id": 1904,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1904
                },
                {
                    "id": 1905,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1905
                },
                {
                    "id": 1906,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1906
                },
                {
                    "id": 1907,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1907
                },
                {
                    "id": 1908,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1908
                },
                {
                    "id": 1909,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1909
                },
                {
                    "id": 1910,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1910
                },
                {
                    "id": 1911,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1911
                },
                {
                    "id": 1912,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1912
                },
                {
                    "id": 1913,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1913
                },
                {
                    "id": 1914,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1914
                },
                {
                    "id": 1915,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1915
                },
                {
                    "id": 1916,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1916
                },
                {
                    "id": 1917,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1917
                },
                {
                    "id": 1918,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1918
                },
                {
                    "id": 1919,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1919
                },
                {
                    "id": 1920,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1920
                },
                {
                    "id": 1921,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1921
                },
                {
                    "id": 1922,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1922
                },
                {
                    "id": 1923,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1923
                },
                {
                    "id": 1924,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1924
                },
                {
                    "id": 1925,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1925
                },
                {
                    "id": 1926,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1926
                },
                {
                    "id": 1927,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1927
                },
                {
                    "id": 1928,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1928
                },
                {
                    "id": 1929,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1929
                },
                {
                    "id": 1930,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1930
                },
                {
                    "id": 1931,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1931
                },
                {
                    "id": 1932,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1932
                },
                {
                    "id": 1933,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1933
                },
                {
                    "id": 1934,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1934
                },
                {
                    "id": 1935,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1935
                },
                {
                    "id": 1936,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1936
                },
                {
                    "id": 1937,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1937
                },
                {
                    "id": 1938,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1938
                },
                {
                    "id": 1939,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1939
                },
                {
                    "id": 1940,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1940
                },
                {
                    "id": 1941,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1941
                },
                {
                    "id": 1942,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1942
                },
                {
                    "id": 1943,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1943
                },
                {
                    "id": 1944,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1944
                },
                {
                    "id": 1945,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1945
                },
                {
                    "id": 1946,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1946
                },
                {
                    "id": 1947,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1947
                },
                {
                    "id": 1948,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1948
                },
                {
                    "id": 1949,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1949
                },
                {
                    "id": 1950,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1950
                },
                {
                    "id": 1951,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1951
                },
                {
                    "id": 1952,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1952
                },
                {
                    "id": 1953,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1953
                },
                {
                    "id": 1954,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1954
                },
                {
                    "id": 1955,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1955
                },
                {
                    "id": 1956,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1956
                },
                {
                    "id": 1957,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1957
                },
                {
                    "id": 1958,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1958
                },
                {
                    "id": 1959,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1959
                },
                {
                    "id": 1960,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1960
                },
                {
                    "id": 1961,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1961
                },
                {
                    "id": 1962,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1962
                },
                {
                    "id": 1963,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1963
                },
                {
                    "id": 1964,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1964
                },
                {
                    "id": 1965,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1965
                },
                {
                    "id": 1966,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1966
                },
                {
                    "id": 1967,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1967
                },
                {
                    "id": 1968,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1968
                },
                {
                    "id": 1969,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1969
                },
                {
                    "id": 1970,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1970
                },
                {
                    "id": 1971,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1971
                },
                {
                    "id": 1972,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1972
                },
                {
                    "id": 1973,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1973
                },
                {
                    "id": 1974,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1974
                },
                {
                    "id": 1975,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1975
                },
                {
                    "id": 1976,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1976
                },
                {
                    "id": 1977,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1977
                },
                {
                    "id": 1978,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1978
                },
                {
                    "id": 1979,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1979
                },
                {
                    "id": 1980,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1980
                },
                {
                    "id": 1981,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1981
                },
                {
                    "id": 1982,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1982
                },
                {
                    "id": 1983,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1983
                },
                {
                    "id": 1984,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1984
                },
                {
                    "id": 1985,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1985
                },
                {
                    "id": 1986,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1986
                },
                {
                    "id": 1987,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1987
                },
                {
                    "id": 1988,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1988
                },
                {
                    "id": 1989,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1989
                },
                {
                    "id": 1990,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1990
                },
                {
                    "id": 1991,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1991
                },
                {
                    "id": 1992,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1992
                },
                {
                    "id": 1993,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1993
                },
                {
                    "id": 1994,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1994
                },
                {
                    "id": 1995,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1995
                },
                {
                    "id": 1996,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1996
                },
                {
                    "id": 1997,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1997
                },
                {
                    "id": 1998,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1998
                },
                {
                    "id": 1999,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 1999
                },
                {
                    "id": 2000,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2000
                },
                {
                    "id": 2001,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2001
                },
                {
                    "id": 2002,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2002
                },
                {
                    "id": 2003,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2003
                },
                {
                    "id": 2004,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2004
                },
                {
                    "id": 2005,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2005
                },
                {
                    "id": 2006,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2006
                },
                {
                    "id": 2007,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2007
                },
                {
                    "id": 2008,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2008
                },
                {
                    "id": 2009,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2009
                },
                {
                    "id": 2010,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2010
                },
                {
                    "id": 2011,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2011
                },
                {
                    "id": 2012,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2012
                },
                {
                    "id": 2013,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2013
                },
                {
                    "id": 2014,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2014
                },
                {
                    "id": 2015,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2015
                },
                {
                    "id": 2016,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2016
                },
                {
                    "id": 2017,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2017
                },
                {
                    "id": 2018,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2018
                },
                {
                    "id": 2019,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2019
                },
                {
                    "id": 2020,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2020
                },
                {
                    "id": 2021,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2021
                },
                {
                    "id": 2022,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2022
                },
                {
                    "id": 2023,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2023
                },
                {
                    "id": 2024,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2024
                },
                {
                    "id": 2025,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2025
                },
                {
                    "id": 2026,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2026
                },
                {
                    "id": 2027,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2027
                },
                {
                    "id": 2028,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2028
                },
                {
                    "id": 2029,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2029
                },
                {
                    "id": 2030,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2030
                },
                {
                    "id": 2031,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2031
                },
                {
                    "id": 2032,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2032
                },
                {
                    "id": 2033,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2033
                },
                {
                    "id": 2034,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2034
                },
                {
                    "id": 2035,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2035
                },
                {
                    "id": 2036,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2036
                },
                {
                    "id": 2037,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2037
                },
                {
                    "id": 2038,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2038
                },
                {
                    "id": 2039,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2039
                },
                {
                    "id": 2040,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2040
                },
                {
                    "id": 2041,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2041
                },
                {
                    "id": 2042,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2042
                },
                {
                    "id": 2043,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2043
                },
                {
                    "id": 2044,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2044
                },
                {
                    "id": 2045,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2045
                },
                {
                    "id": 2046,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2046
                },
                {
                    "id": 2047,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2047
                },
                {
                    "id": 2048,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2048
                },
                {
                    "id": 2049,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2049
                },
                {
                    "id": 2050,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2050
                },
                {
                    "id": 2051,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2051
                },
                {
                    "id": 2052,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2052
                },
                {
                    "id": 2053,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2053
                },
                {
                    "id": 2054,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2054
                },
                {
                    "id": 2055,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2055
                },
                {
                    "id": 2056,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2056
                },
                {
                    "id": 2057,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2057
                },
                {
                    "id": 2058,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2058
                },
                {
                    "id": 2059,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2059
                },
                {
                    "id": 2060,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2060
                },
                {
                    "id": 2061,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2061
                },
                {
                    "id": 2062,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2062
                },
                {
                    "id": 2063,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2063
                },
                {
                    "id": 2064,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2064
                },
                {
                    "id": 2065,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2065
                },
                {
                    "id": 2066,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2066
                },
                {
                    "id": 2067,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2067
                },
                {
                    "id": 2068,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2068
                },
                {
                    "id": 2069,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2069
                },
                {
                    "id": 2070,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2070
                },
                {
                    "id": 2071,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2071
                },
                {
                    "id": 2072,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2072
                },
                {
                    "id": 2073,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2073
                },
                {
                    "id": 2074,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2074
                },
                {
                    "id": 2075,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2075
                },
                {
                    "id": 2076,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2076
                },
                {
                    "id": 2077,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2077
                },
                {
                    "id": 2078,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2078
                },
                {
                    "id": 2079,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2079
                },
                {
                    "id": 2080,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2080
                },
                {
                    "id": 2081,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2081
                },
                {
                    "id": 2082,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2082
                },
                {
                    "id": 2083,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2083
                },
                {
                    "id": 2084,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2084
                },
                {
                    "id": 2085,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2085
                },
                {
                    "id": 2086,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2086
                },
                {
                    "id": 2087,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2087
                },
                {
                    "id": 2088,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2088
                },
                {
                    "id": 2089,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2089
                },
                {
                    "id": 2090,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2090
                },
                {
                    "id": 2091,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2091
                },
                {
                    "id": 2092,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2092
                },
                {
                    "id": 2093,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2093
                },
                {
                    "id": 2094,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2094
                },
                {
                    "id": 2095,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2095
                },
                {
                    "id": 2096,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2096
                },
                {
                    "id": 2097,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2097
                },
                {
                    "id": 2098,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2098
                },
                {
                    "id": 2099,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2099
                },
                {
                    "id": 2100,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2100
                },
                {
                    "id": 2101,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2101
                },
                {
                    "id": 2102,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2102
                },
                {
                    "id": 2103,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2103
                },
                {
                    "id": 2104,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2104
                },
                {
                    "id": 2105,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2105
                },
                {
                    "id": 2106,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2106
                },
                {
                    "id": 2107,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2107
                },
                {
                    "id": 2108,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2108
                },
                {
                    "id": 2109,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2109
                },
                {
                    "id": 2110,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2110
                },
                {
                    "id": 2111,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2111
                },
                {
                    "id": 2112,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2112
                },
                {
                    "id": 2113,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2113
                },
                {
                    "id": 2114,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2114
                },
                {
                    "id": 2115,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2115
                },
                {
                    "id": 2116,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2116
                },
                {
                    "id": 2117,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2117
                },
                {
                    "id": 2118,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2118
                },
                {
                    "id": 2119,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2119
                },
                {
                    "id": 2120,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2120
                },
                {
                    "id": 2121,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2121
                },
                {
                    "id": 2122,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2122
                },
                {
                    "id": 2123,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2123
                },
                {
                    "id": 2124,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2124
                },
                {
                    "id": 2125,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2125
                },
                {
                    "id": 2126,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2126
                },
                {
                    "id": 2127,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2127
                },
                {
                    "id": 2128,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2128
                },
                {
                    "id": 2129,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2129
                },
                {
                    "id": 2130,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2130
                },
                {
                    "id": 2131,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2131
                },
                {
                    "id": 2132,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2132
                },
                {
                    "id": 2133,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2133
                },
                {
                    "id": 2134,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2134
                },
                {
                    "id": 2135,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2135
                },
                {
                    "id": 2136,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2136
                },
                {
                    "id": 2137,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2137
                },
                {
                    "id": 2138,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2138
                },
                {
                    "id": 2139,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2139
                },
                {
                    "id": 2140,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2140
                },
                {
                    "id": 2141,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2141
                },
                {
                    "id": 2142,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2142
                },
                {
                    "id": 2143,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2143
                },
                {
                    "id": 2144,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2144
                },
                {
                    "id": 2145,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2145
                },
                {
                    "id": 2146,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2146
                },
                {
                    "id": 2147,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2147
                },
                {
                    "id": 2148,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2148
                },
                {
                    "id": 2149,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2149
                },
                {
                    "id": 2150,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2150
                },
                {
                    "id": 2151,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2151
                },
                {
                    "id": 2152,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2152
                },
                {
                    "id": 2153,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2153
                },
                {
                    "id": 2154,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2154
                },
                {
                    "id": 2155,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2155
                },
                {
                    "id": 2156,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2156
                },
                {
                    "id": 2157,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2157
                },
                {
                    "id": 2158,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2158
                },
                {
                    "id": 2159,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2159
                },
                {
                    "id": 2160,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2160
                },
                {
                    "id": 2161,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2161
                },
                {
                    "id": 2162,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2162
                },
                {
                    "id": 2163,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2163
                },
                {
                    "id": 2164,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2164
                },
                {
                    "id": 2165,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2165
                },
                {
                    "id": 2166,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2166
                },
                {
                    "id": 2167,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2167
                },
                {
                    "id": 2168,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2168
                },
                {
                    "id": 2169,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2169
                },
                {
                    "id": 2170,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2170
                },
                {
                    "id": 2171,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2171
                },
                {
                    "id": 2172,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2172
                },
                {
                    "id": 2173,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2173
                },
                {
                    "id": 2174,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2174
                },
                {
                    "id": 2175,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2175
                },
                {
                    "id": 2176,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2176
                },
                {
                    "id": 2177,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2177
                },
                {
                    "id": 2178,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2178
                },
                {
                    "id": 2179,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2179
                },
                {
                    "id": 2180,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2180
                },
                {
                    "id": 2181,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2181
                },
                {
                    "id": 2182,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2182
                },
                {
                    "id": 2183,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2183
                },
                {
                    "id": 2184,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2184
                },
                {
                    "id": 2185,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2185
                },
                {
                    "id": 2186,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2186
                },
                {
                    "id": 2187,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2187
                },
                {
                    "id": 2188,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2188
                },
                {
                    "id": 2189,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2189
                },
                {
                    "id": 2190,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2190
                },
                {
                    "id": 2191,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2191
                },
                {
                    "id": 2192,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2192
                },
                {
                    "id": 2193,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2193
                },
                {
                    "id": 2194,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2194
                },
                {
                    "id": 2195,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2195
                },
                {
                    "id": 2196,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2196
                },
                {
                    "id": 2197,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2197
                },
                {
                    "id": 2198,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2198
                },
                {
                    "id": 2199,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2199
                },
                {
                    "id": 2200,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2200
                },
                {
                    "id": 2201,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2201
                },
                {
                    "id": 2202,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2202
                },
                {
                    "id": 2203,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2203
                },
                {
                    "id": 2204,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2204
                },
                {
                    "id": 2205,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2205
                },
                {
                    "id": 2206,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2206
                },
                {
                    "id": 2207,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2207
                },
                {
                    "id": 2208,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2208
                },
                {
                    "id": 2209,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2209
                },
                {
                    "id": 2210,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2210
                },
                {
                    "id": 2211,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2211
                },
                {
                    "id": 2212,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2212
                },
                {
                    "id": 2213,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2213
                },
                {
                    "id": 2214,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2214
                },
                {
                    "id": 2215,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2215
                },
                {
                    "id": 2216,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2216
                },
                {
                    "id": 2217,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2217
                },
                {
                    "id": 2218,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2218
                },
                {
                    "id": 2219,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2219
                },
                {
                    "id": 2220,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2220
                },
                {
                    "id": 2221,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2221
                },
                {
                    "id": 2222,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2222
                },
                {
                    "id": 2223,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2223
                },
                {
                    "id": 2224,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2224
                },
                {
                    "id": 2225,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2225
                },
                {
                    "id": 2226,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2226
                },
                {
                    "id": 2227,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2227
                },
                {
                    "id": 2228,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2228
                },
                {
                    "id": 2229,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2229
                },
                {
                    "id": 2230,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2230
                },
                {
                    "id": 2231,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2231
                },
                {
                    "id": 2232,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2232
                },
                {
                    "id": 2233,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2233
                },
                {
                    "id": 2234,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2234
                },
                {
                    "id": 2235,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2235
                },
                {
                    "id": 2236,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2236
                },
                {
                    "id": 2237,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2237
                },
                {
                    "id": 2238,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2238
                },
                {
                    "id": 2239,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2239
                },
                {
                    "id": 2240,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2240
                },
                {
                    "id": 2241,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2241
                },
                {
                    "id": 2242,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2242
                },
                {
                    "id": 2243,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2243
                },
                {
                    "id": 2244,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2244
                },
                {
                    "id": 2245,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2245
                },
                {
                    "id": 2246,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2246
                },
                {
                    "id": 2247,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2247
                },
                {
                    "id": 2248,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2248
                },
                {
                    "id": 2249,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2249
                },
                {
                    "id": 2250,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2250
                },
                {
                    "id": 2251,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2251
                },
                {
                    "id": 2252,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2252
                },
                {
                    "id": 2253,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2253
                },
                {
                    "id": 2254,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2254
                },
                {
                    "id": 2255,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2255
                },
                {
                    "id": 2256,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2256
                },
                {
                    "id": 2257,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2257
                },
                {
                    "id": 2258,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2258
                },
                {
                    "id": 2259,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2259
                },
                {
                    "id": 2260,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2260
                },
                {
                    "id": 2261,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2261
                },
                {
                    "id": 2262,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2262
                },
                {
                    "id": 2263,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2263
                },
                {
                    "id": 2264,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2264
                },
                {
                    "id": 2265,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2265
                },
                {
                    "id": 2266,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2266
                },
                {
                    "id": 2267,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2267
                },
                {
                    "id": 2268,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2268
                },
                {
                    "id": 2269,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2269
                },
                {
                    "id": 2270,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2270
                },
                {
                    "id": 2271,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2271
                },
                {
                    "id": 2272,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2272
                },
                {
                    "id": 2273,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2273
                },
                {
                    "id": 2274,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2274
                },
                {
                    "id": 2275,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2275
                },
                {
                    "id": 2276,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2276
                },
                {
                    "id": 2277,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2277
                },
                {
                    "id": 2278,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2278
                },
                {
                    "id": 2279,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2279
                },
                {
                    "id": 2280,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2280
                },
                {
                    "id": 2281,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2281
                },
                {
                    "id": 2282,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2282
                },
                {
                    "id": 2283,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2283
                },
                {
                    "id": 2284,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2284
                },
                {
                    "id": 2285,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2285
                },
                {
                    "id": 2286,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2286
                },
                {
                    "id": 2287,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2287
                },
                {
                    "id": 2288,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2288
                },
                {
                    "id": 2289,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2289
                },
                {
                    "id": 2290,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2290
                },
                {
                    "id": 2291,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2291
                },
                {
                    "id": 2292,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2292
                },
                {
                    "id": 2293,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2293
                },
                {
                    "id": 2294,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2294
                },
                {
                    "id": 2295,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2295
                },
                {
                    "id": 2296,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2296
                },
                {
                    "id": 2297,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2297
                },
                {
                    "id": 2298,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2298
                },
                {
                    "id": 2299,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2299
                },
                {
                    "id": 2300,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2300
                },
                {
                    "id": 2301,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2301
                },
                {
                    "id": 2302,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2302
                },
                {
                    "id": 2303,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2303
                },
                {
                    "id": 2304,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2304
                },
                {
                    "id": 2305,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2305
                },
                {
                    "id": 2306,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2306
                },
                {
                    "id": 2307,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2307
                },
                {
                    "id": 2308,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2308
                },
                {
                    "id": 2309,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2309
                },
                {
                    "id": 2310,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2310
                },
                {
                    "id": 2311,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2311
                },
                {
                    "id": 2312,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2312
                },
                {
                    "id": 2313,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2313
                },
                {
                    "id": 2314,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2314
                },
                {
                    "id": 2315,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2315
                },
                {
                    "id": 2316,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2316
                },
                {
                    "id": 2317,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2317
                },
                {
                    "id": 2318,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2318
                },
                {
                    "id": 2319,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2319
                },
                {
                    "id": 2320,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2320
                },
                {
                    "id": 2321,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2321
                },
                {
                    "id": 2322,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2322
                },
                {
                    "id": 2323,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2323
                },
                {
                    "id": 2324,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2324
                },
                {
                    "id": 2325,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2325
                },
                {
                    "id": 2326,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2326
                },
                {
                    "id": 2327,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2327
                },
                {
                    "id": 2328,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2328
                },
                {
                    "id": 2329,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2329
                },
                {
                    "id": 2330,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2330
                },
                {
                    "id": 2331,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2331
                },
                {
                    "id": 2332,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2332
                },
                {
                    "id": 2333,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2333
                },
                {
                    "id": 2334,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2334
                },
                {
                    "id": 2335,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2335
                },
                {
                    "id": 2336,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2336
                },
                {
                    "id": 2337,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2337
                },
                {
                    "id": 2338,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2338
                },
                {
                    "id": 2339,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2339
                },
                {
                    "id": 2340,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2340
                },
                {
                    "id": 2341,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2341
                },
                {
                    "id": 2342,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2342
                },
                {
                    "id": 2343,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2343
                },
                {
                    "id": 2344,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2344
                },
                {
                    "id": 2345,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2345
                },
                {
                    "id": 2346,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2346
                },
                {
                    "id": 2347,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2347
                },
                {
                    "id": 2348,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2348
                },
                {
                    "id": 2349,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2349
                },
                {
                    "id": 2350,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2350
                },
                {
                    "id": 2351,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2351
                },
                {
                    "id": 2352,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2352
                },
                {
                    "id": 2353,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2353
                },
                {
                    "id": 2354,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2354
                },
                {
                    "id": 2355,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2355
                },
                {
                    "id": 2356,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2356
                },
                {
                    "id": 2357,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2357
                },
                {
                    "id": 2358,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2358
                },
                {
                    "id": 2359,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2359
                },
                {
                    "id": 2360,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2360
                },
                {
                    "id": 2361,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2361
                },
                {
                    "id": 2362,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2362
                },
                {
                    "id": 2363,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2363
                },
                {
                    "id": 2364,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2364
                },
                {
                    "id": 2365,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2365
                },
                {
                    "id": 2366,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2366
                },
                {
                    "id": 2367,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2367
                },
                {
                    "id": 2368,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2368
                },
                {
                    "id": 2369,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2369
                },
                {
                    "id": 2370,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2370
                },
                {
                    "id": 2371,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2371
                },
                {
                    "id": 2372,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2372
                },
                {
                    "id": 2373,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2373
                },
                {
                    "id": 2374,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2374
                },
                {
                    "id": 2375,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2375
                },
                {
                    "id": 2376,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2376
                },
                {
                    "id": 2377,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2377
                },
                {
                    "id": 2378,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2378
                },
                {
                    "id": 2379,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2379
                },
                {
                    "id": 2380,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2380
                },
                {
                    "id": 2381,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2381
                },
                {
                    "id": 2382,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2382
                },
                {
                    "id": 2383,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2383
                },
                {
                    "id": 2384,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2384
                },
                {
                    "id": 2385,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2385
                },
                {
                    "id": 2386,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2386
                },
                {
                    "id": 2387,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2387
                },
                {
                    "id": 2388,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2388
                },
                {
                    "id": 2389,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2389
                },
                {
                    "id": 2390,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2390
                },
                {
                    "id": 2391,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2391
                },
                {
                    "id": 2392,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2392
                },
                {
                    "id": 2393,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2393
                },
                {
                    "id": 2394,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2394
                },
                {
                    "id": 2395,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2395
                },
                {
                    "id": 2396,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2396
                },
                {
                    "id": 2397,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2397
                },
                {
                    "id": 2398,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2398
                },
                {
                    "id": 2399,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2399
                },
                {
                    "id": 2400,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2400
                },
                {
                    "id": 2401,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2401
                },
                {
                    "id": 2402,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2402
                },
                {
                    "id": 2403,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2403
                },
                {
                    "id": 2404,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2404
                },
                {
                    "id": 2405,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2405
                },
                {
                    "id": 2406,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2406
                },
                {
                    "id": 2407,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2407
                },
                {
                    "id": 2408,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2408
                },
                {
                    "id": 2409,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2409
                },
                {
                    "id": 2410,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2410
                },
                {
                    "id": 2411,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2411
                },
                {
                    "id": 2412,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2412
                },
                {
                    "id": 2413,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2413
                },
                {
                    "id": 2414,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2414
                },
                {
                    "id": 2415,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2415
                },
                {
                    "id": 2416,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2416
                },
                {
                    "id": 2417,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2417
                },
                {
                    "id": 2418,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2418
                },
                {
                    "id": 2419,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2419
                },
                {
                    "id": 2420,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2420
                },
                {
                    "id": 2421,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2421
                },
                {
                    "id": 2422,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2422
                },
                {
                    "id": 2423,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2423
                },
                {
                    "id": 2424,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2424
                },
                {
                    "id": 2425,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2425
                },
                {
                    "id": 2426,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2426
                },
                {
                    "id": 2427,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2427
                },
                {
                    "id": 2428,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2428
                },
                {
                    "id": 2429,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2429
                },
                {
                    "id": 2430,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2430
                },
                {
                    "id": 2431,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2431
                },
                {
                    "id": 2432,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2432
                },
                {
                    "id": 2433,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2433
                },
                {
                    "id": 2434,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2434
                },
                {
                    "id": 2435,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2435
                },
                {
                    "id": 2436,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2436
                },
                {
                    "id": 2437,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2437
                },
                {
                    "id": 2438,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2438
                },
                {
                    "id": 2439,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2439
                },
                {
                    "id": 2440,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2440
                },
                {
                    "id": 2441,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2441
                },
                {
                    "id": 2442,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2442
                },
                {
                    "id": 2443,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2443
                },
                {
                    "id": 2444,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2444
                },
                {
                    "id": 2445,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2445
                },
                {
                    "id": 2446,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2446
                },
                {
                    "id": 2447,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2447
                },
                {
                    "id": 2448,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2448
                },
                {
                    "id": 2449,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2449
                },
                {
                    "id": 2450,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2450
                },
                {
                    "id": 2451,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2451
                },
                {
                    "id": 2452,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2452
                },
                {
                    "id": 2453,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2453
                },
                {
                    "id": 2454,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2454
                },
                {
                    "id": 2455,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2455
                },
                {
                    "id": 2456,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2456
                },
                {
                    "id": 2457,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2457
                },
                {
                    "id": 2458,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2458
                },
                {
                    "id": 2459,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2459
                },
                {
                    "id": 2460,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2460
                },
                {
                    "id": 2461,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2461
                },
                {
                    "id": 2462,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2462
                },
                {
                    "id": 2463,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2463
                },
                {
                    "id": 2464,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2464
                },
                {
                    "id": 2465,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2465
                },
                {
                    "id": 2466,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2466
                },
                {
                    "id": 2467,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2467
                },
                {
                    "id": 2468,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2468
                },
                {
                    "id": 2469,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2469
                },
                {
                    "id": 2470,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2470
                },
                {
                    "id": 2471,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2471
                },
                {
                    "id": 2472,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2472
                },
                {
                    "id": 2473,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2473
                },
                {
                    "id": 2474,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2474
                },
                {
                    "id": 2475,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2475
                },
                {
                    "id": 2476,
                    "storage_id": 1001,
                    "stock": 0,
                    "critical_stock": 0,
                    "product_id": 2476
                }
            ]
            , {})


    },
};
