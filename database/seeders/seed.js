'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        // await queryInterface.bulkInsert('profile',
        //     [

        //     ]
        //     , {})

        // await queryInterface.bulkInsert('users',
        //     [

        //     ]
        //     , {})
        await queryInterface.bulkInsert('categories',
        [
            {
                "id": 1001,
                "name": "Universal"
            },
            {
                "id": 1002,
                "name": "Fijaciones "
            },
            {
                "id": 1003,
                "name": "tratamiento de superficie"
            },
            {
                "id": 1004,
                "name": "Accesorios herramientas"
            },
            {
                "id": 1005,
                "name": "Adhesivos de pegamento"
            },
            {
                "id": 1006,
                "name": "liquidos"
            },
            {
                "id": 1007,
                "name": "Herramientas manuales"
            },
            {
                "id": 1008,
                "name": "Electricidad"
            },
            {
                "id": 1009,
                "name": "Jardin"
            },
            {
                "id": 1010,
                "name": "Herramientas manual"
            },
            {
                "id": 1011,
                "name": "Aislante"
            },
            {
                "id": 1012,
                "name": "Herramienta manual "
            },
            {
                "id": 1013,
                "name": "Fijaciones y adhesivos"
            },
            {
                "id": 1014,
                "name": "Accesorios para puertas"
            },
            {
                "id": 1015,
                "name": "Fierro"
            },
            {
                "id": 1016,
                "name": " Jardin"
            },
            {
                "id": 1017,
                "name": "Accesorios para baÃ±os"
            },
            {
                "id": 1018,
                "name": "Adhesivos "
            },
            {
                "id": 1019,
                "name": "Quimicos"
            },
            {
                "id": 1020,
                "name": "Automotriz"
            },
            {
                "id": 1021,
                "name": "Brocas"
            },
            {
                "id": 1022,
                "name": "Accesorios pintura"
            },
            {
                "id": 1023,
                "name": "Gafiteria"
            },
            {
                "id": 1024,
                "name": "seguridad"
            },
            {
                "id": 1025,
                "name": "Material Construccion "
            },
            {
                "id": 1026,
                "name": "Construccion "
            },
            {
                "id": 1027,
                "name": "Bicicleta"
            },
            {
                "id": 1028,
                "name": "Cerraduras"
            },
            {
                "id": 1029,
                "name": "Adhesivos  de pegamento "
            },
            {
                "id": 1030,
                "name": "Mascota"
            },
            {
                "id": 1031,
                "name": "Tubos"
            },
            {
                "id": 1032,
                "name": "Herramienta construccion "
            },
            {
                "id": 1033,
                "name": "Maderas"
            },
            {
                "id": 1034,
                "name": "Fijaciones"
            },
            {
                "id": 1035,
                "name": "Discos"
            },
            {
                "id": 1036,
                "name": "Pintura"
            },
            {
                "id": 1037,
                "name": "Herramienta electrica "
            },
            {
                "id": 1038,
                "name": "Electrohogar "
            },
            {
                "id": 1039,
                "name": "FRAGUES"
            },
            {
                "id": 1040,
                "name": "Cerraduras "
            },
            {
                "id": 1041,
                "name": "Jardin "
            },
            {
                "id": 1042,
                "name": "Accesorios herrramientas"
            },
            {
                "id": 1043,
                "name": "Quimicos "
            },
            {
                "id": 1044,
                "name": "Fierro "
            },
            {
                "id": 1045,
                "name": "Herramienta manual"
            },
            {
                "id": 1046,
                "name": "Madera"
            },
            {
                "id": 1047,
                "name": "Ruedas"
            },
            {
                "id": 1048,
                "name": " adhesivos"
            },
            {
                "id": 1049,
                "name": "Material contruccion"
            },
            {
                "id": 1050,
                "name": "Tornillos "
            },
            {
                "id": 1051,
                "name": "Tubos "
            },
            {
                "id": 1052,
                "name": "Adhesivos"
            },
            {
                "id": 1053,
                "name": "Techumbre"
            }
        ]
            , {})

        await queryInterface.bulkInsert('taxes',
            [
                { name: 'iva', value: 0.19 }
            ]
            , {})

        await queryInterface.bulkInsert('prices',
        [
            {
                "id": 1001,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 230
            },
            {
                "id": 1002,
                "tax_id": 1001,
                "sale": 900,
                "purchase": 630
            },
            {
                "id": 1003,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1004,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1005,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 100
            },
            {
                "id": 1006,
                "tax_id": 1001,
                "sale": 150,
                "purchase": 0
            },
            {
                "id": 1007,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1008,
                "tax_id": 1001,
                "sale": 160,
                "purchase": 54
            },
            {
                "id": 1009,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1010,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1011,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 0
            },
            {
                "id": 1012,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1013,
                "tax_id": 1001,
                "sale": 2700,
                "purchase": 0
            },
            {
                "id": 1014,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1015,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1016,
                "tax_id": 1001,
                "sale": 3700,
                "purchase": 0
            },
            {
                "id": 1017,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1018,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 35
            },
            {
                "id": 1019,
                "tax_id": 1001,
                "sale": 120,
                "purchase": 40
            },
            {
                "id": 1020,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 780
            },
            {
                "id": 1021,
                "tax_id": 1001,
                "sale": 6500,
                "purchase": 0
            },
            {
                "id": 1022,
                "tax_id": 1001,
                "sale": 2300,
                "purchase": 1745
            },
            {
                "id": 1023,
                "tax_id": 1001,
                "sale": 21990,
                "purchase": 0
            },
            {
                "id": 1024,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1025,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1026,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 845
            },
            {
                "id": 1027,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 2800
            },
            {
                "id": 1028,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 500
            },
            {
                "id": 1029,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1030,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 350
            },
            {
                "id": 1031,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1032,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1033,
                "tax_id": 1001,
                "sale": 2300,
                "purchase": 1730
            },
            {
                "id": 1034,
                "tax_id": 1001,
                "sale": 3300,
                "purchase": 0
            },
            {
                "id": 1035,
                "tax_id": 1001,
                "sale": 20000,
                "purchase": 0
            },
            {
                "id": 1036,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 0
            },
            {
                "id": 1037,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1038,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 2032
            },
            {
                "id": 1039,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 9721
            },
            {
                "id": 1040,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1041,
                "tax_id": 1001,
                "sale": 11300,
                "purchase": 0
            },
            {
                "id": 1042,
                "tax_id": 1001,
                "sale": 15000,
                "purchase": 0
            },
            {
                "id": 1043,
                "tax_id": 1001,
                "sale": 270,
                "purchase": 205
            },
            {
                "id": 1044,
                "tax_id": 1001,
                "sale": 370,
                "purchase": 0
            },
            {
                "id": 1045,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 2730
            },
            {
                "id": 1046,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1047,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 2470
            },
            {
                "id": 1048,
                "tax_id": 1001,
                "sale": 48000,
                "purchase": 0
            },
            {
                "id": 1049,
                "tax_id": 1001,
                "sale": 80000,
                "purchase": 0
            },
            {
                "id": 1050,
                "tax_id": 1001,
                "sale": 6500,
                "purchase": 0
            },
            {
                "id": 1051,
                "tax_id": 1001,
                "sale": 0,
                "purchase": 0
            },
            {
                "id": 1052,
                "tax_id": 1001,
                "sale": 0,
                "purchase": 0
            },
            {
                "id": 1053,
                "tax_id": 1001,
                "sale": 5500,
                "purchase": 0
            },
            {
                "id": 1054,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1055,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1056,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1057,
                "tax_id": 1001,
                "sale": 80,
                "purchase": 0
            },
            {
                "id": 1058,
                "tax_id": 1001,
                "sale": 90,
                "purchase": 16
            },
            {
                "id": 1059,
                "tax_id": 1001,
                "sale": 100,
                "purchase": 22
            },
            {
                "id": 1060,
                "tax_id": 1001,
                "sale": 150,
                "purchase": 0
            },
            {
                "id": 1061,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1062,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1063,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 773
            },
            {
                "id": 1064,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1065,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1066,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 950
            },
            {
                "id": 1067,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 0
            },
            {
                "id": 1068,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1069,
                "tax_id": 1001,
                "sale": 650,
                "purchase": 0
            },
            {
                "id": 1070,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1071,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1072,
                "tax_id": 1001,
                "sale": 16000,
                "purchase": 12134
            },
            {
                "id": 1073,
                "tax_id": 1001,
                "sale": 15900,
                "purchase": 0
            },
            {
                "id": 1074,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1075,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 3048
            },
            {
                "id": 1076,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 3045
            },
            {
                "id": 1077,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1078,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 9854
            },
            {
                "id": 1079,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 9853
            },
            {
                "id": 1080,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 3050
            },
            {
                "id": 1081,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 3046
            },
            {
                "id": 1082,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 9353
            },
            {
                "id": 1083,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1084,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1085,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1086,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1087,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 3595
            },
            {
                "id": 1088,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1089,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1090,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1091,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1092,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 1357
            },
            {
                "id": 1093,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1094,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1095,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 0
            },
            {
                "id": 1096,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 0
            },
            {
                "id": 1097,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 7200
            },
            {
                "id": 1098,
                "tax_id": 1001,
                "sale": 12000,
                "purchase": 0
            },
            {
                "id": 1099,
                "tax_id": 1001,
                "sale": 12000,
                "purchase": 0
            },
            {
                "id": 1100,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 4040
            },
            {
                "id": 1101,
                "tax_id": 1001,
                "sale": 6990,
                "purchase": 0
            },
            {
                "id": 1102,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1103,
                "tax_id": 1001,
                "sale": 19990,
                "purchase": 0
            },
            {
                "id": 1104,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1105,
                "tax_id": 1001,
                "sale": 19990,
                "purchase": 0
            },
            {
                "id": 1106,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1107,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1108,
                "tax_id": 1001,
                "sale": 19990,
                "purchase": 0
            },
            {
                "id": 1109,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1110,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1111,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1112,
                "tax_id": 1001,
                "sale": 19990,
                "purchase": 0
            },
            {
                "id": 1113,
                "tax_id": 1001,
                "sale": 4200,
                "purchase": 3099
            },
            {
                "id": 1114,
                "tax_id": 1001,
                "sale": 19990,
                "purchase": 0
            },
            {
                "id": 1115,
                "tax_id": 1001,
                "sale": 46900,
                "purchase": 0
            },
            {
                "id": 1116,
                "tax_id": 1001,
                "sale": 13990,
                "purchase": 0
            },
            {
                "id": 1117,
                "tax_id": 1001,
                "sale": 5400,
                "purchase": 2820
            },
            {
                "id": 1118,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1119,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 6300
            },
            {
                "id": 1120,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1121,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 1850
            },
            {
                "id": 1122,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1123,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1124,
                "tax_id": 1001,
                "sale": 46990,
                "purchase": 23020
            },
            {
                "id": 1125,
                "tax_id": 1001,
                "sale": 21990,
                "purchase": 0
            },
            {
                "id": 1126,
                "tax_id": 1001,
                "sale": 16700,
                "purchase": 0
            },
            {
                "id": 1127,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 3118
            },
            {
                "id": 1128,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 6180
            },
            {
                "id": 1129,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1130,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 58
            },
            {
                "id": 1131,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1132,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1133,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1134,
                "tax_id": 1001,
                "sale": 490,
                "purchase": 0
            },
            {
                "id": 1135,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 0
            },
            {
                "id": 1136,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1137,
                "tax_id": 1001,
                "sale": 18900,
                "purchase": 9300
            },
            {
                "id": 1138,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 2000
            },
            {
                "id": 1139,
                "tax_id": 1001,
                "sale": 12000,
                "purchase": 0
            },
            {
                "id": 1140,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 7000
            },
            {
                "id": 1141,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1142,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1143,
                "tax_id": 1001,
                "sale": 2490,
                "purchase": 0
            },
            {
                "id": 1144,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1145,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 1800
            },
            {
                "id": 1146,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 507
            },
            {
                "id": 1147,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 507
            },
            {
                "id": 1148,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 507
            },
            {
                "id": 1149,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2150
            },
            {
                "id": 1150,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 1120
            },
            {
                "id": 1151,
                "tax_id": 1001,
                "sale": 2700,
                "purchase": 0
            },
            {
                "id": 1152,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 0
            },
            {
                "id": 1153,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1154,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 400
            },
            {
                "id": 1155,
                "tax_id": 1001,
                "sale": 7400,
                "purchase": 5250
            },
            {
                "id": 1156,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1157,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1158,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1159,
                "tax_id": 1001,
                "sale": 2190,
                "purchase": 0
            },
            {
                "id": 1160,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1161,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1162,
                "tax_id": 1001,
                "sale": 1490,
                "purchase": 0
            },
            {
                "id": 1163,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1164,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1165,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1166,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1167,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1168,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1169,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1170,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1171,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1172,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1173,
                "tax_id": 1001,
                "sale": 3200,
                "purchase": 0
            },
            {
                "id": 1174,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1175,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1960
            },
            {
                "id": 1176,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1177,
                "tax_id": 1001,
                "sale": 14990,
                "purchase": 0
            },
            {
                "id": 1178,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 4403
            },
            {
                "id": 1179,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 0
            },
            {
                "id": 1180,
                "tax_id": 1001,
                "sale": 20000,
                "purchase": 0
            },
            {
                "id": 1181,
                "tax_id": 1001,
                "sale": 25000,
                "purchase": 0
            },
            {
                "id": 1182,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 339
            },
            {
                "id": 1183,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1184,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 600
            },
            {
                "id": 1185,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 604
            },
            {
                "id": 1186,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 1230
            },
            {
                "id": 1187,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1188,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 1490
            },
            {
                "id": 1189,
                "tax_id": 1001,
                "sale": 150,
                "purchase": 0
            },
            {
                "id": 1190,
                "tax_id": 1001,
                "sale": 4700,
                "purchase": 0
            },
            {
                "id": 1191,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1192,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1193,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1194,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 1290
            },
            {
                "id": 1195,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 360
            },
            {
                "id": 1196,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 0
            },
            {
                "id": 1197,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 270
            },
            {
                "id": 1198,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 0
            },
            {
                "id": 1199,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1200,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1201,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1202,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1203,
                "tax_id": 1001,
                "sale": 9000,
                "purchase": 0
            },
            {
                "id": 1204,
                "tax_id": 1001,
                "sale": 7000,
                "purchase": 3610
            },
            {
                "id": 1205,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 0
            },
            {
                "id": 1206,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1207,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 40
            },
            {
                "id": 1208,
                "tax_id": 1001,
                "sale": 1990,
                "purchase": 980
            },
            {
                "id": 1209,
                "tax_id": 1001,
                "sale": 13990,
                "purchase": 0
            },
            {
                "id": 1210,
                "tax_id": 1001,
                "sale": 470,
                "purchase": 0
            },
            {
                "id": 1211,
                "tax_id": 1001,
                "sale": 470,
                "purchase": 0
            },
            {
                "id": 1212,
                "tax_id": 1001,
                "sale": 470,
                "purchase": 0
            },
            {
                "id": 1213,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 146
            },
            {
                "id": 1214,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 150
            },
            {
                "id": 1215,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1216,
                "tax_id": 1001,
                "sale": 470,
                "purchase": 0
            },
            {
                "id": 1217,
                "tax_id": 1001,
                "sale": 27900,
                "purchase": 0
            },
            {
                "id": 1218,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1219,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1220,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1221,
                "tax_id": 1001,
                "sale": 2890,
                "purchase": 0
            },
            {
                "id": 1222,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1223,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1250
            },
            {
                "id": 1224,
                "tax_id": 1001,
                "sale": 18900,
                "purchase": 0
            },
            {
                "id": 1225,
                "tax_id": 1001,
                "sale": 21900,
                "purchase": 15050
            },
            {
                "id": 1226,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1227,
                "tax_id": 1001,
                "sale": 5500,
                "purchase": 0
            },
            {
                "id": 1228,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1229,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 0
            },
            {
                "id": 1230,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 660
            },
            {
                "id": 1231,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 3500
            },
            {
                "id": 1232,
                "tax_id": 1001,
                "sale": 550,
                "purchase": 0
            },
            {
                "id": 1233,
                "tax_id": 1001,
                "sale": 7990,
                "purchase": 4732
            },
            {
                "id": 1234,
                "tax_id": 1001,
                "sale": 14990,
                "purchase": 0
            },
            {
                "id": 1235,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 1320
            },
            {
                "id": 1236,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1730
            },
            {
                "id": 1237,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1238,
                "tax_id": 1001,
                "sale": 4300,
                "purchase": 3010
            },
            {
                "id": 1239,
                "tax_id": 1001,
                "sale": 9600,
                "purchase": 7351
            },
            {
                "id": 1240,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 0
            },
            {
                "id": 1241,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1242,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 3915
            },
            {
                "id": 1243,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 1507
            },
            {
                "id": 1244,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 1350
            },
            {
                "id": 1245,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 1350
            },
            {
                "id": 1246,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 1800
            },
            {
                "id": 1247,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 1300
            },
            {
                "id": 1248,
                "tax_id": 1001,
                "sale": 43000,
                "purchase": 0
            },
            {
                "id": 1249,
                "tax_id": 1001,
                "sale": 11990,
                "purchase": 0
            },
            {
                "id": 1250,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 460
            },
            {
                "id": 1251,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 692
            },
            {
                "id": 1252,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1785
            },
            {
                "id": 1253,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1254,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1255,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1256,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 1270
            },
            {
                "id": 1257,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1258,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 950
            },
            {
                "id": 1259,
                "tax_id": 1001,
                "sale": 11000,
                "purchase": 0
            },
            {
                "id": 1260,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 1040
            },
            {
                "id": 1261,
                "tax_id": 1001,
                "sale": 10990,
                "purchase": 5262
            },
            {
                "id": 1262,
                "tax_id": 1001,
                "sale": 18590,
                "purchase": 0
            },
            {
                "id": 1263,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 127
            },
            {
                "id": 1264,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 2600
            },
            {
                "id": 1265,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 900
            },
            {
                "id": 1266,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1267,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1268,
                "tax_id": 1001,
                "sale": 6750,
                "purchase": 4500
            },
            {
                "id": 1269,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 0
            },
            {
                "id": 1270,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 2047
            },
            {
                "id": 1271,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 0
            },
            {
                "id": 1272,
                "tax_id": 1001,
                "sale": 4200,
                "purchase": 3689
            },
            {
                "id": 1273,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1274,
                "tax_id": 1001,
                "sale": 36990,
                "purchase": 0
            },
            {
                "id": 1275,
                "tax_id": 1001,
                "sale": 36990,
                "purchase": 0
            },
            {
                "id": 1276,
                "tax_id": 1001,
                "sale": 9900,
                "purchase": 0
            },
            {
                "id": 1277,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 750
            },
            {
                "id": 1278,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 7061
            },
            {
                "id": 1279,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 7061
            },
            {
                "id": 1280,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 7061
            },
            {
                "id": 1281,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 7061
            },
            {
                "id": 1282,
                "tax_id": 1001,
                "sale": 8500,
                "purchase": 3800
            },
            {
                "id": 1283,
                "tax_id": 1001,
                "sale": 8500,
                "purchase": 3800
            },
            {
                "id": 1284,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 600
            },
            {
                "id": 1285,
                "tax_id": 1001,
                "sale": 32900,
                "purchase": 25071
            },
            {
                "id": 1286,
                "tax_id": 1001,
                "sale": 7000,
                "purchase": 0
            },
            {
                "id": 1287,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1288,
                "tax_id": 1001,
                "sale": 33990,
                "purchase": 0
            },
            {
                "id": 1289,
                "tax_id": 1001,
                "sale": 20990,
                "purchase": 15500
            },
            {
                "id": 1290,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 7691
            },
            {
                "id": 1291,
                "tax_id": 1001,
                "sale": 16500,
                "purchase": 11900
            },
            {
                "id": 1292,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1293,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 2200
            },
            {
                "id": 1294,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 2200
            },
            {
                "id": 1295,
                "tax_id": 1001,
                "sale": 6500,
                "purchase": 0
            },
            {
                "id": 1296,
                "tax_id": 1001,
                "sale": 7500,
                "purchase": 0
            },
            {
                "id": 1297,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 0
            },
            {
                "id": 1298,
                "tax_id": 1001,
                "sale": 7500,
                "purchase": 3690
            },
            {
                "id": 1299,
                "tax_id": 1001,
                "sale": 23990,
                "purchase": 16000
            },
            {
                "id": 1300,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1301,
                "tax_id": 1001,
                "sale": 9900,
                "purchase": 0
            },
            {
                "id": 1302,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1303,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1304,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 940
            },
            {
                "id": 1305,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1306,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 0
            },
            {
                "id": 1307,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1610
            },
            {
                "id": 1308,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1309,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 2728
            },
            {
                "id": 1310,
                "tax_id": 1001,
                "sale": 15900,
                "purchase": 5500
            },
            {
                "id": 1311,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 200
            },
            {
                "id": 1312,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 299
            },
            {
                "id": 1313,
                "tax_id": 1001,
                "sale": 70,
                "purchase": 0
            },
            {
                "id": 1314,
                "tax_id": 1001,
                "sale": 70,
                "purchase": 0
            },
            {
                "id": 1315,
                "tax_id": 1001,
                "sale": 19500,
                "purchase": 0
            },
            {
                "id": 1316,
                "tax_id": 1001,
                "sale": 39000,
                "purchase": 0
            },
            {
                "id": 1317,
                "tax_id": 1001,
                "sale": 50000,
                "purchase": 0
            },
            {
                "id": 1318,
                "tax_id": 1001,
                "sale": 0,
                "purchase": 0
            },
            {
                "id": 1319,
                "tax_id": 1001,
                "sale": 850,
                "purchase": 0
            },
            {
                "id": 1320,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1321,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 1250
            },
            {
                "id": 1322,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 120
            },
            {
                "id": 1323,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1324,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1325,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1326,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1327,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1328,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 0
            },
            {
                "id": 1329,
                "tax_id": 1001,
                "sale": 1050,
                "purchase": 0
            },
            {
                "id": 1330,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1331,
                "tax_id": 1001,
                "sale": 900,
                "purchase": 0
            },
            {
                "id": 1332,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 420
            },
            {
                "id": 1333,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1334,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 0
            },
            {
                "id": 1335,
                "tax_id": 1001,
                "sale": 1590,
                "purchase": 0
            },
            {
                "id": 1336,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1337,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 6394
            },
            {
                "id": 1338,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 0
            },
            {
                "id": 1339,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 680
            },
            {
                "id": 1340,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1341,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1342,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 0
            },
            {
                "id": 1343,
                "tax_id": 1001,
                "sale": 800,
                "purchase": 0
            },
            {
                "id": 1344,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1345,
                "tax_id": 1001,
                "sale": 650,
                "purchase": 0
            },
            {
                "id": 1346,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 0
            },
            {
                "id": 1347,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 0
            },
            {
                "id": 1348,
                "tax_id": 1001,
                "sale": 2700,
                "purchase": 0
            },
            {
                "id": 1349,
                "tax_id": 1001,
                "sale": 3650,
                "purchase": 0
            },
            {
                "id": 1350,
                "tax_id": 1001,
                "sale": 750,
                "purchase": 0
            },
            {
                "id": 1351,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1352,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 230
            },
            {
                "id": 1353,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 230
            },
            {
                "id": 1354,
                "tax_id": 1001,
                "sale": 2700,
                "purchase": 1050
            },
            {
                "id": 1355,
                "tax_id": 1001,
                "sale": 1950,
                "purchase": 1409
            },
            {
                "id": 1356,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2350
            },
            {
                "id": 1357,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1358,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 8200
            },
            {
                "id": 1359,
                "tax_id": 1001,
                "sale": 12990,
                "purchase": 7621
            },
            {
                "id": 1360,
                "tax_id": 1001,
                "sale": 13990,
                "purchase": 9250
            },
            {
                "id": 1361,
                "tax_id": 1001,
                "sale": 25990,
                "purchase": 0
            },
            {
                "id": 1362,
                "tax_id": 1001,
                "sale": 10990,
                "purchase": 0
            },
            {
                "id": 1363,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1364,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1365,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1366,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 850
            },
            {
                "id": 1367,
                "tax_id": 1001,
                "sale": 990,
                "purchase": 450
            },
            {
                "id": 1368,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 150
            },
            {
                "id": 1369,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1370,
                "tax_id": 1001,
                "sale": 1600,
                "purchase": 0
            },
            {
                "id": 1371,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1372,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1373,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1374,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 0
            },
            {
                "id": 1375,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1376,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1377,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 0
            },
            {
                "id": 1378,
                "tax_id": 1001,
                "sale": 2250,
                "purchase": 0
            },
            {
                "id": 1379,
                "tax_id": 1001,
                "sale": 1050,
                "purchase": 0
            },
            {
                "id": 1380,
                "tax_id": 1001,
                "sale": 1490,
                "purchase": 0
            },
            {
                "id": 1381,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1382,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 1012
            },
            {
                "id": 1383,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1384,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1385,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1386,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 0
            },
            {
                "id": 1387,
                "tax_id": 1001,
                "sale": 800,
                "purchase": 0
            },
            {
                "id": 1388,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1389,
                "tax_id": 1001,
                "sale": 900,
                "purchase": 0
            },
            {
                "id": 1390,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 243
            },
            {
                "id": 1391,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1392,
                "tax_id": 1001,
                "sale": 650,
                "purchase": 0
            },
            {
                "id": 1393,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 274
            },
            {
                "id": 1394,
                "tax_id": 1001,
                "sale": 1,
                "purchase": 0
            },
            {
                "id": 1395,
                "tax_id": 1001,
                "sale": 2700,
                "purchase": 700
            },
            {
                "id": 1396,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1397,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 310
            },
            {
                "id": 1398,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1399,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 190
            },
            {
                "id": 1400,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1401,
                "tax_id": 1001,
                "sale": 850,
                "purchase": 0
            },
            {
                "id": 1402,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1403,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 0
            },
            {
                "id": 1404,
                "tax_id": 1001,
                "sale": 44900,
                "purchase": 32500
            },
            {
                "id": 1405,
                "tax_id": 1001,
                "sale": 9900,
                "purchase": 0
            },
            {
                "id": 1406,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 1650
            },
            {
                "id": 1407,
                "tax_id": 1001,
                "sale": 14990,
                "purchase": 0
            },
            {
                "id": 1408,
                "tax_id": 1001,
                "sale": 9000,
                "purchase": 4950
            },
            {
                "id": 1409,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1410,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 0
            },
            {
                "id": 1411,
                "tax_id": 1001,
                "sale": 130,
                "purchase": 0
            },
            {
                "id": 1412,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1413,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1414,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 0
            },
            {
                "id": 1415,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1416,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1417,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1418,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1419,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 0
            },
            {
                "id": 1420,
                "tax_id": 1001,
                "sale": 111111,
                "purchase": 0
            },
            {
                "id": 1421,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 1297
            },
            {
                "id": 1422,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 290
            },
            {
                "id": 1423,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1424,
                "tax_id": 1001,
                "sale": 7990,
                "purchase": 0
            },
            {
                "id": 1425,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1426,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1427,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 5300
            },
            {
                "id": 1428,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 1703
            },
            {
                "id": 1429,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 0
            },
            {
                "id": 1430,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4921
            },
            {
                "id": 1431,
                "tax_id": 1001,
                "sale": 6990,
                "purchase": 5350
            },
            {
                "id": 1432,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1433,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 1510
            },
            {
                "id": 1434,
                "tax_id": 1001,
                "sale": 1290,
                "purchase": 0
            },
            {
                "id": 1435,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 0
            },
            {
                "id": 1436,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 890
            },
            {
                "id": 1437,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 280
            },
            {
                "id": 1438,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1439,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 8870
            },
            {
                "id": 1440,
                "tax_id": 1001,
                "sale": 16000,
                "purchase": 11790
            },
            {
                "id": 1441,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2420
            },
            {
                "id": 1442,
                "tax_id": 1001,
                "sale": 2990,
                "purchase": 0
            },
            {
                "id": 1443,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 1988
            },
            {
                "id": 1444,
                "tax_id": 1001,
                "sale": 12990,
                "purchase": 9180
            },
            {
                "id": 1445,
                "tax_id": 1001,
                "sale": 1790,
                "purchase": 1250
            },
            {
                "id": 1446,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1447,
                "tax_id": 1001,
                "sale": 850,
                "purchase": 250
            },
            {
                "id": 1448,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1703
            },
            {
                "id": 1449,
                "tax_id": 1001,
                "sale": 7990,
                "purchase": 5500
            },
            {
                "id": 1450,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 4150
            },
            {
                "id": 1451,
                "tax_id": 1001,
                "sale": 1390,
                "purchase": 0
            },
            {
                "id": 1452,
                "tax_id": 1001,
                "sale": 2800,
                "purchase": 0
            },
            {
                "id": 1453,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1454,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1455,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1456,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1457,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1458,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1459,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1460,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1461,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1462,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1501
            },
            {
                "id": 1463,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1464,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1465,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 0
            },
            {
                "id": 1466,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1467,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1468,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 4400
            },
            {
                "id": 1469,
                "tax_id": 1001,
                "sale": 7990,
                "purchase": 0
            },
            {
                "id": 1470,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 650
            },
            {
                "id": 1471,
                "tax_id": 1001,
                "sale": 3990,
                "purchase": 0
            },
            {
                "id": 1472,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 4959
            },
            {
                "id": 1473,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 2018
            },
            {
                "id": 1474,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 0
            },
            {
                "id": 1475,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1820
            },
            {
                "id": 1476,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 857
            },
            {
                "id": 1477,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 857
            },
            {
                "id": 1478,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1479,
                "tax_id": 1001,
                "sale": 2100,
                "purchase": 0
            },
            {
                "id": 1480,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1481,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 2015
            },
            {
                "id": 1482,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1483,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 2820
            },
            {
                "id": 1484,
                "tax_id": 1001,
                "sale": 4200,
                "purchase": 3118
            },
            {
                "id": 1485,
                "tax_id": 1001,
                "sale": 3300,
                "purchase": 0
            },
            {
                "id": 1486,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1487,
                "tax_id": 1001,
                "sale": 10990,
                "purchase": 6500
            },
            {
                "id": 1488,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1489,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 9950
            },
            {
                "id": 1490,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1491,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1492,
                "tax_id": 1001,
                "sale": 800,
                "purchase": 0
            },
            {
                "id": 1493,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 946
            },
            {
                "id": 1494,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1495,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 380
            },
            {
                "id": 1496,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 0
            },
            {
                "id": 1497,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1951
            },
            {
                "id": 1498,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 30
            },
            {
                "id": 1499,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1500,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1501,
                "tax_id": 1001,
                "sale": 800,
                "purchase": 0
            },
            {
                "id": 1502,
                "tax_id": 1001,
                "sale": 230,
                "purchase": 0
            },
            {
                "id": 1503,
                "tax_id": 1001,
                "sale": 300,
                "purchase": 0
            },
            {
                "id": 1504,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 3800
            },
            {
                "id": 1505,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1650
            },
            {
                "id": 1506,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1507,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1508,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 0
            },
            {
                "id": 1509,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 0
            },
            {
                "id": 1510,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 0
            },
            {
                "id": 1511,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 0
            },
            {
                "id": 1512,
                "tax_id": 1001,
                "sale": 26500,
                "purchase": 0
            },
            {
                "id": 1513,
                "tax_id": 1001,
                "sale": 65990,
                "purchase": 49000
            },
            {
                "id": 1514,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1515,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1516,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1517,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2630
            },
            {
                "id": 1518,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2600
            },
            {
                "id": 1519,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1520,
                "tax_id": 1001,
                "sale": 7190,
                "purchase": 5472
            },
            {
                "id": 1521,
                "tax_id": 1001,
                "sale": 24900,
                "purchase": 19123
            },
            {
                "id": 1522,
                "tax_id": 1001,
                "sale": 7190,
                "purchase": 5540
            },
            {
                "id": 1523,
                "tax_id": 1001,
                "sale": 24990,
                "purchase": 0
            },
            {
                "id": 1524,
                "tax_id": 1001,
                "sale": 7190,
                "purchase": 5540
            },
            {
                "id": 1525,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2250
            },
            {
                "id": 1526,
                "tax_id": 1001,
                "sale": 24990,
                "purchase": 17560
            },
            {
                "id": 1527,
                "tax_id": 1001,
                "sale": 24990,
                "purchase": 0
            },
            {
                "id": 1528,
                "tax_id": 1001,
                "sale": 22990,
                "purchase": 0
            },
            {
                "id": 1529,
                "tax_id": 1001,
                "sale": 7190,
                "purchase": 5540
            },
            {
                "id": 1530,
                "tax_id": 1001,
                "sale": 7190,
                "purchase": 0
            },
            {
                "id": 1531,
                "tax_id": 1001,
                "sale": 22990,
                "purchase": 0
            },
            {
                "id": 1532,
                "tax_id": 1001,
                "sale": 22990,
                "purchase": 0
            },
            {
                "id": 1533,
                "tax_id": 1001,
                "sale": 7190,
                "purchase": 5470
            },
            {
                "id": 1534,
                "tax_id": 1001,
                "sale": 24990,
                "purchase": 0
            },
            {
                "id": 1535,
                "tax_id": 1001,
                "sale": 34990,
                "purchase": 17100
            },
            {
                "id": 1536,
                "tax_id": 1001,
                "sale": 89990,
                "purchase": 45550
            },
            {
                "id": 1537,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 1000
            },
            {
                "id": 1538,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1200
            },
            {
                "id": 1539,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1540,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1541,
                "tax_id": 1001,
                "sale": 150,
                "purchase": 0
            },
            {
                "id": 1542,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1543,
                "tax_id": 1001,
                "sale": 2990,
                "purchase": 0
            },
            {
                "id": 1544,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 2323
            },
            {
                "id": 1545,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1546,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 620
            },
            {
                "id": 1547,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 620
            },
            {
                "id": 1548,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 620
            },
            {
                "id": 1549,
                "tax_id": 1001,
                "sale": 22900,
                "purchase": 0
            },
            {
                "id": 1550,
                "tax_id": 1001,
                "sale": 35000,
                "purchase": 0
            },
            {
                "id": 1551,
                "tax_id": 1001,
                "sale": 20000,
                "purchase": 0
            },
            {
                "id": 1552,
                "tax_id": 1001,
                "sale": 6990,
                "purchase": 0
            },
            {
                "id": 1553,
                "tax_id": 1001,
                "sale": 23990,
                "purchase": 0
            },
            {
                "id": 1554,
                "tax_id": 1001,
                "sale": 12900,
                "purchase": 0
            },
            {
                "id": 1555,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 0
            },
            {
                "id": 1556,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 4090
            },
            {
                "id": 1557,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 2680
            },
            {
                "id": 1558,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 1520
            },
            {
                "id": 1559,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 200
            },
            {
                "id": 1560,
                "tax_id": 1001,
                "sale": 9900,
                "purchase": 0
            },
            {
                "id": 1561,
                "tax_id": 1001,
                "sale": 14500,
                "purchase": 9300
            },
            {
                "id": 1562,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1563,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1564,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1565,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1566,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 1130
            },
            {
                "id": 1567,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1568,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1569,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1570,
                "tax_id": 1001,
                "sale": 2800,
                "purchase": 0
            },
            {
                "id": 1571,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1572,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1573,
                "tax_id": 1001,
                "sale": 5990,
                "purchase": 0
            },
            {
                "id": 1574,
                "tax_id": 1001,
                "sale": 2800,
                "purchase": 1244
            },
            {
                "id": 1575,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 1000
            },
            {
                "id": 1576,
                "tax_id": 1001,
                "sale": 2400,
                "purchase": 850
            },
            {
                "id": 1577,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 5490
            },
            {
                "id": 1578,
                "tax_id": 1001,
                "sale": 8500,
                "purchase": 0
            },
            {
                "id": 1579,
                "tax_id": 1001,
                "sale": 850,
                "purchase": 0
            },
            {
                "id": 1580,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 5090
            },
            {
                "id": 1581,
                "tax_id": 1001,
                "sale": 5800,
                "purchase": 0
            },
            {
                "id": 1582,
                "tax_id": 1001,
                "sale": 6800,
                "purchase": 0
            },
            {
                "id": 1583,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1584,
                "tax_id": 1001,
                "sale": 12900,
                "purchase": 0
            },
            {
                "id": 1585,
                "tax_id": 1001,
                "sale": 5500,
                "purchase": 0
            },
            {
                "id": 1586,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 4530
            },
            {
                "id": 1587,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1588,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 0
            },
            {
                "id": 1589,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1590,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 3300
            },
            {
                "id": 1591,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 3500
            },
            {
                "id": 1592,
                "tax_id": 1001,
                "sale": 6500,
                "purchase": 0
            },
            {
                "id": 1593,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1594,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1595,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1596,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1597,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1598,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1599,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1600,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1601,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1602,
                "tax_id": 1001,
                "sale": 1350,
                "purchase": 0
            },
            {
                "id": 1603,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1604,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1605,
                "tax_id": 1001,
                "sale": 3990,
                "purchase": 2850
            },
            {
                "id": 1606,
                "tax_id": 1001,
                "sale": 12900,
                "purchase": 8900
            },
            {
                "id": 1607,
                "tax_id": 1001,
                "sale": 2590,
                "purchase": 1978
            },
            {
                "id": 1608,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1609,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1610,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1611,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 1550
            },
            {
                "id": 1612,
                "tax_id": 1001,
                "sale": 959990,
                "purchase": 698400
            },
            {
                "id": 1613,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1620
            },
            {
                "id": 1614,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1615,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1616,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1617,
                "tax_id": 1001,
                "sale": 5500,
                "purchase": 2891
            },
            {
                "id": 1618,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1619,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 3020
            },
            {
                "id": 1620,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1621,
                "tax_id": 1001,
                "sale": 20,
                "purchase": 7
            },
            {
                "id": 1622,
                "tax_id": 1001,
                "sale": 4700,
                "purchase": 3580
            },
            {
                "id": 1623,
                "tax_id": 1001,
                "sale": 600,
                "purchase": 0
            },
            {
                "id": 1624,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1625,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 1250
            },
            {
                "id": 1626,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1627,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1628,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 0
            },
            {
                "id": 1629,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 0
            },
            {
                "id": 1630,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1631,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1632,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1633,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1634,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1635,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 1330
            },
            {
                "id": 1636,
                "tax_id": 1001,
                "sale": 1390,
                "purchase": 0
            },
            {
                "id": 1637,
                "tax_id": 1001,
                "sale": 1990,
                "purchase": 0
            },
            {
                "id": 1638,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1639,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1640,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1641,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1642,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1643,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1644,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1645,
                "tax_id": 1001,
                "sale": 1990,
                "purchase": 0
            },
            {
                "id": 1646,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1647,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1648,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 500
            },
            {
                "id": 1649,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 930
            },
            {
                "id": 1650,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 1030
            },
            {
                "id": 1651,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 3211
            },
            {
                "id": 1652,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 820
            },
            {
                "id": 1653,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 1517
            },
            {
                "id": 1654,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 374
            },
            {
                "id": 1655,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1656,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 0
            },
            {
                "id": 1657,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1658,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1659,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1660,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1661,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 5937
            },
            {
                "id": 1662,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 7730
            },
            {
                "id": 1663,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1664,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 5
            },
            {
                "id": 1665,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 0
            },
            {
                "id": 1666,
                "tax_id": 1001,
                "sale": 21000,
                "purchase": 0
            },
            {
                "id": 1667,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 6833
            },
            {
                "id": 1668,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 0
            },
            {
                "id": 1669,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 0
            },
            {
                "id": 1670,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 2
            },
            {
                "id": 1671,
                "tax_id": 1001,
                "sale": 3400,
                "purchase": 0
            },
            {
                "id": 1672,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 780
            },
            {
                "id": 1673,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 780
            },
            {
                "id": 1674,
                "tax_id": 1001,
                "sale": 2200,
                "purchase": 0
            },
            {
                "id": 1675,
                "tax_id": 1001,
                "sale": 3590,
                "purchase": 0
            },
            {
                "id": 1676,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 998
            },
            {
                "id": 1677,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1678,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1679,
                "tax_id": 1001,
                "sale": 3700,
                "purchase": 0
            },
            {
                "id": 1680,
                "tax_id": 1001,
                "sale": 3300,
                "purchase": 0
            },
            {
                "id": 1681,
                "tax_id": 1001,
                "sale": 3200,
                "purchase": 0
            },
            {
                "id": 1682,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1683,
                "tax_id": 1001,
                "sale": 7500,
                "purchase": 3800
            },
            {
                "id": 1684,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1685,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1686,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1687,
                "tax_id": 1001,
                "sale": 14990,
                "purchase": 0
            },
            {
                "id": 1688,
                "tax_id": 1001,
                "sale": 8600,
                "purchase": 0
            },
            {
                "id": 1689,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1690,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1691,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1692,
                "tax_id": 1001,
                "sale": 5990,
                "purchase": 3800
            },
            {
                "id": 1693,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1694,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1695,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 8243
            },
            {
                "id": 1696,
                "tax_id": 1001,
                "sale": 14990,
                "purchase": 7860
            },
            {
                "id": 1697,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1698,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1699,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1700,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1701,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 1313
            },
            {
                "id": 1702,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 0
            },
            {
                "id": 1703,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1704,
                "tax_id": 1001,
                "sale": 9000,
                "purchase": 0
            },
            {
                "id": 1705,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1706,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 481
            },
            {
                "id": 1707,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1708,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 126
            },
            {
                "id": 1709,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4100
            },
            {
                "id": 1710,
                "tax_id": 1001,
                "sale": 24990,
                "purchase": 0
            },
            {
                "id": 1711,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4760
            },
            {
                "id": 1712,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4760
            },
            {
                "id": 1713,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4760
            },
            {
                "id": 1714,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4760
            },
            {
                "id": 1715,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4760
            },
            {
                "id": 1716,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 4500
            },
            {
                "id": 1717,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1718,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1719,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1720,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1850
            },
            {
                "id": 1721,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1722,
                "tax_id": 1001,
                "sale": 650,
                "purchase": 0
            },
            {
                "id": 1723,
                "tax_id": 1001,
                "sale": 650,
                "purchase": 0
            },
            {
                "id": 1724,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 507
            },
            {
                "id": 1725,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 420
            },
            {
                "id": 1726,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1727,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 140
            },
            {
                "id": 1728,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1729,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1730,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 125
            },
            {
                "id": 1731,
                "tax_id": 1001,
                "sale": 34990,
                "purchase": 13480
            },
            {
                "id": 1732,
                "tax_id": 1001,
                "sale": 47000,
                "purchase": 0
            },
            {
                "id": 1733,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 670
            },
            {
                "id": 1734,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 670
            },
            {
                "id": 1735,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1736,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 0
            },
            {
                "id": 1737,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1738,
                "tax_id": 1001,
                "sale": 3990,
                "purchase": 0
            },
            {
                "id": 1739,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 3250
            },
            {
                "id": 1740,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 500
            },
            {
                "id": 1741,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1742,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1743,
                "tax_id": 1001,
                "sale": 7000,
                "purchase": 0
            },
            {
                "id": 1744,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 4000
            },
            {
                "id": 1745,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1746,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 0
            },
            {
                "id": 1747,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 1790
            },
            {
                "id": 1748,
                "tax_id": 1001,
                "sale": 12900,
                "purchase": 0
            },
            {
                "id": 1749,
                "tax_id": 1001,
                "sale": 7000,
                "purchase": 0
            },
            {
                "id": 1750,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1751,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1752,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1753,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1754,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1755,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1756,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 840
            },
            {
                "id": 1757,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 1460
            },
            {
                "id": 1758,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 2860
            },
            {
                "id": 1759,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 1493
            },
            {
                "id": 1760,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1761,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1762,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1763,
                "tax_id": 1001,
                "sale": 3600,
                "purchase": 0
            },
            {
                "id": 1764,
                "tax_id": 1001,
                "sale": 25000,
                "purchase": 17900
            },
            {
                "id": 1765,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1766,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1767,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1768,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2368
            },
            {
                "id": 1769,
                "tax_id": 1001,
                "sale": 6000,
                "purchase": 0
            },
            {
                "id": 1770,
                "tax_id": 1001,
                "sale": 14500,
                "purchase": 0
            },
            {
                "id": 1771,
                "tax_id": 1001,
                "sale": 10990,
                "purchase": 4037
            },
            {
                "id": 1772,
                "tax_id": 1001,
                "sale": 7600,
                "purchase": 0
            },
            {
                "id": 1773,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 0
            },
            {
                "id": 1774,
                "tax_id": 1001,
                "sale": 9900,
                "purchase": 0
            },
            {
                "id": 1775,
                "tax_id": 1001,
                "sale": 7900,
                "purchase": 0
            },
            {
                "id": 1776,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1777,
                "tax_id": 1001,
                "sale": 12900,
                "purchase": 0
            },
            {
                "id": 1778,
                "tax_id": 1001,
                "sale": 9900,
                "purchase": 0
            },
            {
                "id": 1779,
                "tax_id": 1001,
                "sale": 12900,
                "purchase": 0
            },
            {
                "id": 1780,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1781,
                "tax_id": 1001,
                "sale": 5990,
                "purchase": 0
            },
            {
                "id": 1782,
                "tax_id": 1001,
                "sale": 2300,
                "purchase": 0
            },
            {
                "id": 1783,
                "tax_id": 1001,
                "sale": 2400,
                "purchase": 0
            },
            {
                "id": 1784,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1785,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1786,
                "tax_id": 1001,
                "sale": 3200,
                "purchase": 0
            },
            {
                "id": 1787,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1788,
                "tax_id": 1001,
                "sale": 3990,
                "purchase": 0
            },
            {
                "id": 1789,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1790,
                "tax_id": 1001,
                "sale": 1400,
                "purchase": 0
            },
            {
                "id": 1791,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1792,
                "tax_id": 1001,
                "sale": 4350,
                "purchase": 0
            },
            {
                "id": 1793,
                "tax_id": 1001,
                "sale": 6600,
                "purchase": 0
            },
            {
                "id": 1794,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 0
            },
            {
                "id": 1795,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 0
            },
            {
                "id": 1796,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 1250
            },
            {
                "id": 1797,
                "tax_id": 1001,
                "sale": 1550,
                "purchase": 921
            },
            {
                "id": 1798,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1799,
                "tax_id": 1001,
                "sale": 1100,
                "purchase": 0
            },
            {
                "id": 1800,
                "tax_id": 1001,
                "sale": 74990,
                "purchase": 50730
            },
            {
                "id": 1801,
                "tax_id": 1001,
                "sale": 29000,
                "purchase": 0
            },
            {
                "id": 1802,
                "tax_id": 1001,
                "sale": 23000,
                "purchase": 0
            },
            {
                "id": 1803,
                "tax_id": 1001,
                "sale": 40000,
                "purchase": 0
            },
            {
                "id": 1804,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1805,
                "tax_id": 1001,
                "sale": 13900,
                "purchase": 0
            },
            {
                "id": 1806,
                "tax_id": 1001,
                "sale": 110000,
                "purchase": 0
            },
            {
                "id": 1807,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1808,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 0
            },
            {
                "id": 1809,
                "tax_id": 1001,
                "sale": 1600,
                "purchase": 0
            },
            {
                "id": 1810,
                "tax_id": 1001,
                "sale": 1300,
                "purchase": 0
            },
            {
                "id": 1811,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1812,
                "tax_id": 1001,
                "sale": 2600,
                "purchase": 0
            },
            {
                "id": 1813,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 2950
            },
            {
                "id": 1814,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1815,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 500
            },
            {
                "id": 1816,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 170
            },
            {
                "id": 1817,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1818,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1819,
                "tax_id": 1001,
                "sale": 1200,
                "purchase": 0
            },
            {
                "id": 1820,
                "tax_id": 1001,
                "sale": 700,
                "purchase": 0
            },
            {
                "id": 1821,
                "tax_id": 1001,
                "sale": 350,
                "purchase": 0
            },
            {
                "id": 1822,
                "tax_id": 1001,
                "sale": 400,
                "purchase": 0
            },
            {
                "id": 1823,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1824,
                "tax_id": 1001,
                "sale": 6800,
                "purchase": 4820
            },
            {
                "id": 1825,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1740
            },
            {
                "id": 1826,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 1980
            },
            {
                "id": 1827,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1828,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 310
            },
            {
                "id": 1829,
                "tax_id": 1001,
                "sale": 9990,
                "purchase": 0
            },
            {
                "id": 1830,
                "tax_id": 1001,
                "sale": 31990,
                "purchase": 0
            },
            {
                "id": 1831,
                "tax_id": 1001,
                "sale": 85000,
                "purchase": 58500
            },
            {
                "id": 1832,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1833,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 0
            },
            {
                "id": 1834,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 15267
            },
            {
                "id": 1835,
                "tax_id": 1001,
                "sale": 26990,
                "purchase": 0
            },
            {
                "id": 1836,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1837,
                "tax_id": 1001,
                "sale": 32900,
                "purchase": 0
            },
            {
                "id": 1838,
                "tax_id": 1001,
                "sale": 15990,
                "purchase": 5290
            },
            {
                "id": 1839,
                "tax_id": 1001,
                "sale": 15990,
                "purchase": 7810
            },
            {
                "id": 1840,
                "tax_id": 1001,
                "sale": 4900,
                "purchase": 0
            },
            {
                "id": 1841,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1842,
                "tax_id": 1001,
                "sale": 8900,
                "purchase": 5504
            },
            {
                "id": 1843,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1844,
                "tax_id": 1001,
                "sale": 11900,
                "purchase": 8330
            },
            {
                "id": 1845,
                "tax_id": 1001,
                "sale": 38000,
                "purchase": 0
            },
            {
                "id": 1846,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 1990
            },
            {
                "id": 1847,
                "tax_id": 1001,
                "sale": 34990,
                "purchase": 0
            },
            {
                "id": 1848,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 0
            },
            {
                "id": 1849,
                "tax_id": 1001,
                "sale": 5100,
                "purchase": 0
            },
            {
                "id": 1850,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 0
            },
            {
                "id": 1851,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1852,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1853,
                "tax_id": 1001,
                "sale": 4400,
                "purchase": 3380
            },
            {
                "id": 1854,
                "tax_id": 1001,
                "sale": 22500,
                "purchase": 17132
            },
            {
                "id": 1855,
                "tax_id": 1001,
                "sale": 24500,
                "purchase": 0
            },
            {
                "id": 1856,
                "tax_id": 1001,
                "sale": 16990,
                "purchase": 0
            },
            {
                "id": 1857,
                "tax_id": 1001,
                "sale": 16990,
                "purchase": 0
            },
            {
                "id": 1858,
                "tax_id": 1001,
                "sale": 12500,
                "purchase": 8300
            },
            {
                "id": 1859,
                "tax_id": 1001,
                "sale": 14500,
                "purchase": 9500
            },
            {
                "id": 1860,
                "tax_id": 1001,
                "sale": 16990,
                "purchase": 0
            },
            {
                "id": 1861,
                "tax_id": 1001,
                "sale": 16990,
                "purchase": 9307
            },
            {
                "id": 1862,
                "tax_id": 1001,
                "sale": 11990,
                "purchase": 8095
            },
            {
                "id": 1863,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1864,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4177
            },
            {
                "id": 1865,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 550
            },
            {
                "id": 1866,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1867,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 778
            },
            {
                "id": 1868,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 670
            },
            {
                "id": 1869,
                "tax_id": 1001,
                "sale": 450,
                "purchase": 0
            },
            {
                "id": 1870,
                "tax_id": 1001,
                "sale": 200,
                "purchase": 0
            },
            {
                "id": 1871,
                "tax_id": 1001,
                "sale": 250,
                "purchase": 0
            },
            {
                "id": 1872,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 0
            },
            {
                "id": 1873,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 4200
            },
            {
                "id": 1874,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1875,
                "tax_id": 1001,
                "sale": 10500,
                "purchase": 0
            },
            {
                "id": 1876,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1050
            },
            {
                "id": 1877,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1878,
                "tax_id": 1001,
                "sale": 49990,
                "purchase": 0
            },
            {
                "id": 1879,
                "tax_id": 1001,
                "sale": 19900,
                "purchase": 0
            },
            {
                "id": 1880,
                "tax_id": 1001,
                "sale": 17500,
                "purchase": 0
            },
            {
                "id": 1881,
                "tax_id": 1001,
                "sale": 15900,
                "purchase": 10061
            },
            {
                "id": 1882,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 2950
            },
            {
                "id": 1883,
                "tax_id": 1001,
                "sale": 9000,
                "purchase": 4560
            },
            {
                "id": 1884,
                "tax_id": 1001,
                "sale": 100,
                "purchase": 25
            },
            {
                "id": 1885,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1886,
                "tax_id": 1001,
                "sale": 1500,
                "purchase": 850
            },
            {
                "id": 1887,
                "tax_id": 1001,
                "sale": 9800,
                "purchase": 7534
            },
            {
                "id": 1888,
                "tax_id": 1001,
                "sale": 31990,
                "purchase": 26303
            },
            {
                "id": 1889,
                "tax_id": 1001,
                "sale": 5990,
                "purchase": 0
            },
            {
                "id": 1890,
                "tax_id": 1001,
                "sale": 15990,
                "purchase": 11310
            },
            {
                "id": 1891,
                "tax_id": 1001,
                "sale": 18900,
                "purchase": 14515
            },
            {
                "id": 1892,
                "tax_id": 1001,
                "sale": 6500,
                "purchase": 0
            },
            {
                "id": 1893,
                "tax_id": 1001,
                "sale": 16990,
                "purchase": 12780
            },
            {
                "id": 1894,
                "tax_id": 1001,
                "sale": 3200,
                "purchase": 0
            },
            {
                "id": 1895,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 3636
            },
            {
                "id": 1896,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 3835
            },
            {
                "id": 1897,
                "tax_id": 1001,
                "sale": 3850,
                "purchase": 2750
            },
            {
                "id": 1898,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1899,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 2451
            },
            {
                "id": 1900,
                "tax_id": 1001,
                "sale": 9500,
                "purchase": 0
            },
            {
                "id": 1901,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1902,
                "tax_id": 1001,
                "sale": 11000,
                "purchase": 0
            },
            {
                "id": 1903,
                "tax_id": 1001,
                "sale": 12000,
                "purchase": 0
            },
            {
                "id": 1904,
                "tax_id": 1001,
                "sale": 27000,
                "purchase": 20551
            },
            {
                "id": 1905,
                "tax_id": 1001,
                "sale": 73000,
                "purchase": 0
            },
            {
                "id": 1906,
                "tax_id": 1001,
                "sale": 8000,
                "purchase": 0
            },
            {
                "id": 1907,
                "tax_id": 1001,
                "sale": 11000,
                "purchase": 0
            },
            {
                "id": 1908,
                "tax_id": 1001,
                "sale": 13000,
                "purchase": 0
            },
            {
                "id": 1909,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 10764
            },
            {
                "id": 1910,
                "tax_id": 1001,
                "sale": 18900,
                "purchase": 14362
            },
            {
                "id": 1911,
                "tax_id": 1001,
                "sale": 18000,
                "purchase": 0
            },
            {
                "id": 1912,
                "tax_id": 1001,
                "sale": 54000,
                "purchase": 0
            },
            {
                "id": 1913,
                "tax_id": 1001,
                "sale": 17000,
                "purchase": 6700
            },
            {
                "id": 1914,
                "tax_id": 1001,
                "sale": 19000,
                "purchase": 0
            },
            {
                "id": 1915,
                "tax_id": 1001,
                "sale": 18000,
                "purchase": 0
            },
            {
                "id": 1916,
                "tax_id": 1001,
                "sale": 21000,
                "purchase": 0
            },
            {
                "id": 1917,
                "tax_id": 1001,
                "sale": 15990,
                "purchase": 12270
            },
            {
                "id": 1918,
                "tax_id": 1001,
                "sale": 28000,
                "purchase": 17646
            },
            {
                "id": 1919,
                "tax_id": 1001,
                "sale": 42000,
                "purchase": 0
            },
            {
                "id": 1920,
                "tax_id": 1001,
                "sale": 15000,
                "purchase": 0
            },
            {
                "id": 1921,
                "tax_id": 1001,
                "sale": 3200,
                "purchase": 1600
            },
            {
                "id": 1922,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1923,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 472
            },
            {
                "id": 1924,
                "tax_id": 1001,
                "sale": 4500,
                "purchase": 0
            },
            {
                "id": 1925,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1926,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 850
            },
            {
                "id": 1927,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1928,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1929,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 1002
            },
            {
                "id": 1930,
                "tax_id": 1001,
                "sale": 1700,
                "purchase": 0
            },
            {
                "id": 1931,
                "tax_id": 1001,
                "sale": 10900,
                "purchase": 0
            },
            {
                "id": 1932,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1933,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1934,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1935,
                "tax_id": 1001,
                "sale": 15900,
                "purchase": 10000
            },
            {
                "id": 1936,
                "tax_id": 1001,
                "sale": 4990,
                "purchase": 0
            },
            {
                "id": 1937,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 2850
            },
            {
                "id": 1938,
                "tax_id": 1001,
                "sale": 8500,
                "purchase": 6500
            },
            {
                "id": 1939,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 2890
            },
            {
                "id": 1940,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1941,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1942,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1943,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 2658
            },
            {
                "id": 1944,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1945,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1946,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1947,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1948,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1949,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1950,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1951,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1952,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 0
            },
            {
                "id": 1953,
                "tax_id": 1001,
                "sale": 3800,
                "purchase": 2470
            },
            {
                "id": 1954,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1955,
                "tax_id": 1001,
                "sale": 3000,
                "purchase": 0
            },
            {
                "id": 1956,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 0
            },
            {
                "id": 1957,
                "tax_id": 1001,
                "sale": 500,
                "purchase": 0
            },
            {
                "id": 1958,
                "tax_id": 1001,
                "sale": 49990,
                "purchase": 24320
            },
            {
                "id": 1959,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1100
            },
            {
                "id": 1960,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 10900
            },
            {
                "id": 1961,
                "tax_id": 1001,
                "sale": 15990,
                "purchase": 12081
            },
            {
                "id": 1962,
                "tax_id": 1001,
                "sale": 34990,
                "purchase": 27000
            },
            {
                "id": 1963,
                "tax_id": 1001,
                "sale": 1000,
                "purchase": 0
            },
            {
                "id": 1964,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 0
            },
            {
                "id": 1965,
                "tax_id": 1001,
                "sale": 6900,
                "purchase": 4760
            },
            {
                "id": 1966,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 1650
            },
            {
                "id": 1967,
                "tax_id": 1001,
                "sale": 9000,
                "purchase": 0
            },
            {
                "id": 1968,
                "tax_id": 1001,
                "sale": 3200,
                "purchase": 2437
            },
            {
                "id": 1969,
                "tax_id": 1001,
                "sale": 5000,
                "purchase": 0
            },
            {
                "id": 1970,
                "tax_id": 1001,
                "sale": 7000,
                "purchase": 0
            },
            {
                "id": 1971,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1972,
                "tax_id": 1001,
                "sale": 14000,
                "purchase": 0
            },
            {
                "id": 1973,
                "tax_id": 1001,
                "sale": 3900,
                "purchase": 0
            },
            {
                "id": 1974,
                "tax_id": 1001,
                "sale": 8500,
                "purchase": 5255
            },
            {
                "id": 1975,
                "tax_id": 1001,
                "sale": 4000,
                "purchase": 0
            },
            {
                "id": 1976,
                "tax_id": 1001,
                "sale": 14900,
                "purchase": 0
            },
            {
                "id": 1977,
                "tax_id": 1001,
                "sale": 10000,
                "purchase": 0
            },
            {
                "id": 1978,
                "tax_id": 1001,
                "sale": 13000,
                "purchase": 8925
            },
            {
                "id": 1979,
                "tax_id": 1001,
                "sale": 16900,
                "purchase": 0
            },
            {
                "id": 1980,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 3484
            },
            {
                "id": 1981,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 760
            },
            {
                "id": 1982,
                "tax_id": 1001,
                "sale": 4700,
                "purchase": 1700
            },
            {
                "id": 1983,
                "tax_id": 1001,
                "sale": 3700,
                "purchase": 1340
            },
            {
                "id": 1984,
                "tax_id": 1001,
                "sale": 2500,
                "purchase": 1349
            },
            {
                "id": 1985,
                "tax_id": 1001,
                "sale": 5900,
                "purchase": 0
            },
            {
                "id": 1986,
                "tax_id": 1001,
                "sale": 3500,
                "purchase": 1291
            },
            {
                "id": 1987,
                "tax_id": 1001,
                "sale": 4600,
                "purchase": 3580
            },
            {
                "id": 1988,
                "tax_id": 1001,
                "sale": 9500,
                "purchase": 0
            },
            {
                "id": 1989,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1990,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1991,
                "tax_id": 1001,
                "sale": 2900,
                "purchase": 0
            },
            {
                "id": 1992,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 880
            },
            {
                "id": 1993,
                "tax_id": 1001,
                "sale": 2000,
                "purchase": 0
            },
            {
                "id": 1994,
                "tax_id": 1001,
                "sale": 800,
                "purchase": 597
            },
            {
                "id": 1995,
                "tax_id": 1001,
                "sale": 7600,
                "purchase": 5791
            },
            {
                "id": 1996,
                "tax_id": 1001,
                "sale": 1800,
                "purchase": 0
            },
            {
                "id": 1997,
                "tax_id": 1001,
                "sale": 7500,
                "purchase": 5633
            },
            {
                "id": 1998,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 0
            },
            {
                "id": 1999,
                "tax_id": 1001,
                "sale": 16000,
                "purchase": 12045
            },
            {
                "id": 2000,
                "tax_id": 1001,
                "sale": 1900,
                "purchase": 1411
            }
        ]

            , {})

        await queryInterface.bulkInsert('products',
        [
            {
                "id": 1001,
                "name": "abrasadera de cobre de 1/2 media",
                "code": 867,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1001
            },
            {
                "id": 1002,
                "name": "abrasadera de cobre de 3/4",
                "code": 868,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1002
            },
            {
                "id": 1003,
                "name": "abrasadera de piola 1/4 pulg",
                "code": 1228,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1003
            },
            {
                "id": 1004,
                "name": "abrasadera de piola 3/8 pulg",
                "code": 1224,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1004
            },
            {
                "id": 1005,
                "name": "abrasadera metalica de 1 pulgada",
                "code": 668,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1005
            },
            {
                "id": 1006,
                "name": "abrasadera ppr de media 1/2",
                "code": 794,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1006
            },
            {
                "id": 1007,
                "name": "Abrazadera 104-112mm",
                "code": 1373,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1007
            },
            {
                "id": 1008,
                "name": "Abrazadera 20mm Pvc Hidraulico",
                "code": 889,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1008
            },
            {
                "id": 1009,
                "name": "abrazadera 3/4 ppr",
                "code": 887,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1009
            },
            {
                "id": 1010,
                "name": "Abrazadera 3/4 Pvc Hidraulico",
                "code": 877,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1010
            },
            {
                "id": 1011,
                "name": "abrazadera 40mm pvc saniratio",
                "code": 961,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1011
            },
            {
                "id": 1012,
                "name": "abrazadera 50mm pvc sanitario",
                "code": 960,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1012
            },
            {
                "id": 1013,
                "name": "Abrazadera 52-55mm",
                "code": 1377,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1013
            },
            {
                "id": 1014,
                "name": "Abrazadera 60-63mm",
                "code": 1376,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1014
            },
            {
                "id": 1015,
                "name": "Abrazadera 74-79mm",
                "code": 1375,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1015
            },
            {
                "id": 1016,
                "name": "Abrazadera 80-85mm",
                "code": 1374,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1016
            },
            {
                "id": 1017,
                "name": "abrazadera de 1 pvc hidraulico",
                "code": 888,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1017
            },
            {
                "id": 1018,
                "name": "Abrazadera Metalica 1/2 Pulg",
                "code": 291,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1018
            },
            {
                "id": 1019,
                "name": "Abrazadera Metalica De 16mm",
                "code": 1239,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1019
            },
            {
                "id": 1020,
                "name": "Abrazadera Pvc Sanitario 75mm ",
                "code": 959,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1020
            },
            {
                "id": 1021,
                "name": "aceite de linaza 1/4 galon",
                "code": 977,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1021
            },
            {
                "id": 1022,
                "name": "Aceite De mezcla de motocierra huckvarna 100 cc",
                "code": 399,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1022
            },
            {
                "id": 1023,
                "name": "aceite linasa galon",
                "code": 1141,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1023
            },
            {
                "id": 1024,
                "name": "aceite para impregnar madera 1 lt",
                "code": 952,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1024
            },
            {
                "id": 1025,
                "name": "acero liquido h-full",
                "code": 381,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1025
            },
            {
                "id": 1026,
                "name": "acido muriatico 1 lt",
                "code": 949,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1026
            },
            {
                "id": 1027,
                "name": "Acople para compresor de 5 pcs",
                "code": 232,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1007,
                "price_id": 1027
            },
            {
                "id": 1028,
                "name": "Adaptador americano universal",
                "code": 244,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1028
            },
            {
                "id": 1029,
                "name": "adaptador de llave media y 3/4",
                "code": 267,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1029
            },
            {
                "id": 1030,
                "name": "Adaptador Hexagonal 5/16 Punta ",
                "code": 347,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1030
            },
            {
                "id": 1031,
                "name": "adaptador schuko 10 amp",
                "code": 1064,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1031
            },
            {
                "id": 1032,
                "name": "adhesivo de acero liquido marca REX",
                "code": 350,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1032
            },
            {
                "id": 1033,
                "name": "adhesivo de contacto pren rex 120cc neoplen",
                "code": 473,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1033
            },
            {
                "id": 1034,
                "name": "adhesivo de contacto pren rex 236cc neoplen",
                "code": 472,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1034
            },
            {
                "id": 1035,
                "name": "adhesivo montaje 5 kg",
                "code": 574,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1035
            },
            {
                "id": 1036,
                "name": "adhesivo montaje tubo",
                "code": 934,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1036
            },
            {
                "id": 1037,
                "name": "adhesivo universal pegamac 750cc neoplen",
                "code": 471,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1037
            },
            {
                "id": 1038,
                "name": "aguarras 1 lt",
                "code": 951,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1038
            },
            {
                "id": 1039,
                "name": "aguarras 5lts",
                "code": 953,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1039
            },
            {
                "id": 1040,
                "name": "aguja de cocer saco",
                "code": 385,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1040
            },
            {
                "id": 1041,
                "name": "aislante de puerta doble esponja",
                "code": 281,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1011,
                "price_id": 1041
            },
            {
                "id": 1042,
                "name": "AISLAPOL",
                "code": 1183,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1011,
                "price_id": 1042
            },
            {
                "id": 1043,
                "name": "alambre de 1,5 electrico",
                "code": 1088,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1043
            },
            {
                "id": 1044,
                "name": "alambre de 2,5 electrico",
                "code": 1089,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1044
            },
            {
                "id": 1045,
                "name": "Alambre galvanizado de kilo del 18",
                "code": 66,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1045
            },
            {
                "id": 1046,
                "name": "Alambre negro de kilo del 14",
                "code": 67,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1046
            },
            {
                "id": 1047,
                "name": "Alambre negro de kilo del 18-105 mtrs aprox",
                "code": 62,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1047
            },
            {
                "id": 1048,
                "name": "alambre pua de 275x16",
                "code": 1148,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1048
            },
            {
                "id": 1049,
                "name": "alambre pua de 500  16",
                "code": 1147,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1049
            },
            {
                "id": 1050,
                "name": "Alargador de Zapatilla de 3 metros",
                "code": 129,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1050
            },
            {
                "id": 1051,
                "name": "alcohol gelificado 70%  1 lts",
                "code": 956,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1051
            },
            {
                "id": 1052,
                "name": "alcohol gelificado 70%  5lts",
                "code": 955,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1052
            },
            {
                "id": 1053,
                "name": "Alicate de 8 pulgadas marca Hotechi",
                "code": 42,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1053
            },
            {
                "id": 1054,
                "name": "alicate multiproposito sata",
                "code": 352,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1054
            },
            {
                "id": 1055,
                "name": "Alicates mini",
                "code": 248,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1055
            },
            {
                "id": 1056,
                "name": "alta temperatura sachet 70 ml",
                "code": 400,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1056
            },
            {
                "id": 1057,
                "name": "Amarra plástica 15 cm",
                "code": 76,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1057
            },
            {
                "id": 1058,
                "name": "Amarra Plastica 4.8 x 200mm",
                "code": 1169,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1058
            },
            {
                "id": 1059,
                "name": "Amarra Plastica 4.8 x 300mm",
                "code": 77,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1059
            },
            {
                "id": 1060,
                "name": "Amarra plástica 40 cm",
                "code": 75,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1060
            },
            {
                "id": 1061,
                "name": "Amarra plástica 50 cm",
                "code": 78,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1061
            },
            {
                "id": 1062,
                "name": "ampolleta choclo 16 watts",
                "code": 415,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1062
            },
            {
                "id": 1063,
                "name": "ampolleta led de 9 watts",
                "code": 416,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1063
            },
            {
                "id": 1064,
                "name": "ampolleta led de 9,5 watts",
                "code": 414,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1064
            },
            {
                "id": 1065,
                "name": "ampolleta refrigerador",
                "code": 285,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1065
            },
            {
                "id": 1066,
                "name": "Aldaba 3, 1/2",
                "code": 240,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1066
            },
            {
                "id": 1067,
                "name": "Aldaba de 1 pulgada",
                "code": 112,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1067
            },
            {
                "id": 1068,
                "name": "Aldaba de 1, 1/2 pulgadas",
                "code": 113,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1068
            },
            {
                "id": 1069,
                "name": "Aldaba de 2 pulgadas",
                "code": 114,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1069
            },
            {
                "id": 1070,
                "name": "Aldaba De 3.5",
                "code": 340,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1070
            },
            {
                "id": 1071,
                "name": "Aldaba de 6 pulgadas",
                "code": 115,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1071
            },
            {
                "id": 1072,
                "name": "Angulo Laminado 30x30x3",
                "code": 1108,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1072
            },
            {
                "id": 1073,
                "name": "Antena de tv aire",
                "code": 21,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1073
            },
            {
                "id": 1074,
                "name": "Antena indoor tv",
                "code": 74,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1074
            },
            {
                "id": 1075,
                "name": "anticorrosivo alquid gris 1/4 galon",
                "code": 972,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1075
            },
            {
                "id": 1076,
                "name": "anticorrosivo alquid negro 1/4 galon",
                "code": 973,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1076
            },
            {
                "id": 1077,
                "name": "anticorrosivo alquid rojo oxido 1/4 galon",
                "code": 971,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1077
            },
            {
                "id": 1078,
                "name": "Anticorrosivo Galon Gris",
                "code": 1277,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1078
            },
            {
                "id": 1079,
                "name": "Anticorrosivo Galon Negro",
                "code": 1278,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1079
            },
            {
                "id": 1080,
                "name": "Anticorrosivo Gris Verdoso 1/4 Galon",
                "code": 1452,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1080
            },
            {
                "id": 1081,
                "name": "Anticorrosivo Ocre 1/4 Galon",
                "code": 1449,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1081
            },
            {
                "id": 1082,
                "name": "Anticorrosivo Ocre Galon",
                "code": 1450,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1082
            },
            {
                "id": 1083,
                "name": "Antiparras amarillas",
                "code": 215,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1083
            },
            {
                "id": 1084,
                "name": "Antiparras negras",
                "code": 216,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1084
            },
            {
                "id": 1085,
                "name": "Antiparras transparentes",
                "code": 214,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1085
            },
            {
                "id": 1086,
                "name": "Arco de cierra para Manualidades",
                "code": 99,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1086
            },
            {
                "id": 1087,
                "name": "aspersores de plastico con estaca metalica",
                "code": 1193,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1087
            },
            {
                "id": 1088,
                "name": "Atornillador de chicharra doble café",
                "code": 130,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1088
            },
            {
                "id": 1089,
                "name": "automatico 10 amp de riel",
                "code": 1044,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1089
            },
            {
                "id": 1090,
                "name": "automatico 6 amp de riel",
                "code": 1043,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1090
            },
            {
                "id": 1091,
                "name": "automatico de 16 amp de riel",
                "code": 1045,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1091
            },
            {
                "id": 1092,
                "name": "automatico de 20 amp de riel",
                "code": 1046,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1092
            },
            {
                "id": 1093,
                "name": "automatico de 25 amp de riel",
                "code": 1047,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1093
            },
            {
                "id": 1094,
                "name": "automatico de 32 amp de riel",
                "code": 1048,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1094
            },
            {
                "id": 1095,
                "name": "Automatico saime negro 30 amp",
                "code": 1309,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1095
            },
            {
                "id": 1096,
                "name": "automatico saime negro de 20 amp",
                "code": 1049,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1096
            },
            {
                "id": 1097,
                "name": "automatico saime negro de 25 amp",
                "code": 1050,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1097
            },
            {
                "id": 1098,
                "name": "automatico trifasico de 16 amp",
                "code": 1051,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1098
            },
            {
                "id": 1099,
                "name": "automatico trifasico de 20 amp",
                "code": 1052,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1099
            },
            {
                "id": 1100,
                "name": "Azadon 2 Lb Sin Mango H-Full",
                "code": 1247,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1016,
                "price_id": 1100
            },
            {
                "id": 1101,
                "name": "balansa electronica hoteche",
                "code": 1227,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1101
            },
            {
                "id": 1102,
                "name": "balbula de inflar pelota",
                "code": 383,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1102
            },
            {
                "id": 1103,
                "name": "barniz alerce galon passol",
                "code": 1145,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1103
            },
            {
                "id": 1104,
                "name": "Barniz Caoba De Litro",
                "code": 1153,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1104
            },
            {
                "id": 1105,
                "name": "barniz caoba galon passol",
                "code": 1144,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1105
            },
            {
                "id": 1106,
                "name": "barniz marino alerce 1/4 galon",
                "code": 978,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1106
            },
            {
                "id": 1107,
                "name": "barniz marino incoloro 1/4 galon",
                "code": 982,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1107
            },
            {
                "id": 1108,
                "name": "barniz Marino incoloro galon passol",
                "code": 1146,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1108
            },
            {
                "id": 1109,
                "name": "barniz marino miel 1/4 galon",
                "code": 979,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1109
            },
            {
                "id": 1110,
                "name": "barniz marino natural 400 cc",
                "code": 667,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1110
            },
            {
                "id": 1111,
                "name": "barniz marino roble 1/4 galon",
                "code": 981,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1111
            },
            {
                "id": 1112,
                "name": "barniz miel galon passol",
                "code": 1142,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1112
            },
            {
                "id": 1113,
                "name": "Barniz Natural 1/8 Galon Ceresita",
                "code": 1378,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1113
            },
            {
                "id": 1114,
                "name": "barniz roble galon passol",
                "code": 1143,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1114
            },
            {
                "id": 1115,
                "name": "Barniz Vetrificante Galon",
                "code": 1281,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1115
            },
            {
                "id": 1116,
                "name": "barniz vitrificante brillante 1/4 galon",
                "code": 980,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1116
            },
            {
                "id": 1117,
                "name": "Barra Cortina Metal 12mm 3 mts",
                "code": 1182,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1017,
                "price_id": 1117
            },
            {
                "id": 1118,
                "name": "barra de cortina extendible de 110 a 2 mts",
                "code": 1232,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1017,
                "price_id": 1118
            },
            {
                "id": 1119,
                "name": "barra seguridad 45 cm",
                "code": 1170,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1017,
                "price_id": 1119
            },
            {
                "id": 1120,
                "name": "Barredor De Hojas ",
                "code": 968,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1016,
                "price_id": 1120
            },
            {
                "id": 1121,
                "name": "Barrote L de 1/2 ",
                "code": 1361,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1121
            },
            {
                "id": 1122,
                "name": "base de tubo fluorecente o led",
                "code": 511,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1122
            },
            {
                "id": 1123,
                "name": "bateria de 9 volt rayovac",
                "code": 490,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1123
            },
            {
                "id": 1124,
                "name": "Bateria Recargable Bauker 18V",
                "code": 1390,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1124
            },
            {
                "id": 1125,
                "name": "Bekron AC tineta de 25 kg",
                "code": 225,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1018,
                "price_id": 1125
            },
            {
                "id": 1126,
                "name": "Bekron AC tineta mediana de 15 kg",
                "code": 226,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1018,
                "price_id": 1126
            },
            {
                "id": 1127,
                "name": "Bekron de 25 kg",
                "code": 220,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1018,
                "price_id": 1127
            },
            {
                "id": 1128,
                "name": "Bekron tarro de 6 kg",
                "code": 227,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1018,
                "price_id": 1128
            },
            {
                "id": 1129,
                "name": "bencina blanca 1 lt",
                "code": 947,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1019,
                "price_id": 1129
            },
            {
                "id": 1130,
                "name": "bisagra 1 pulgada",
                "code": 916,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1130
            },
            {
                "id": 1131,
                "name": "bisagra 3 x 1 pulg",
                "code": 373,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1131
            },
            {
                "id": 1132,
                "name": "bisagra 3x3 bronce par jaque",
                "code": 1036,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1132
            },
            {
                "id": 1133,
                "name": "bisagra de 2",
                "code": 923,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1133
            },
            {
                "id": 1134,
                "name": "bisagra de 2 1/2 pilg",
                "code": 919,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1134
            },
            {
                "id": 1135,
                "name": "bisagra mueble recta",
                "code": 384,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1135
            },
            {
                "id": 1136,
                "name": "Bizagra 3x2 2un C/Tornillo H-Full",
                "code": 1440,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1014,
                "price_id": 1136
            },
            {
                "id": 1137,
                "name": "Bola Remolque 6000 Lbs",
                "code": 1345,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1137
            },
            {
                "id": 1138,
                "name": "Bombin De Mano ",
                "code": 71,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1138
            },
            {
                "id": 1139,
                "name": "bombin de pies",
                "code": 260,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1139
            },
            {
                "id": 1140,
                "name": "Bombin Jaque Aluminio De Pie",
                "code": 1424,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1140
            },
            {
                "id": 1141,
                "name": "Borní de batería",
                "code": 3,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1141
            },
            {
                "id": 1142,
                "name": "botella con rociador",
                "code": 957,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1142
            },
            {
                "id": 1143,
                "name": "Botella de agua",
                "code": 5,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1143
            },
            {
                "id": 1144,
                "name": "brasso",
                "code": 680,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1144
            },
            {
                "id": 1145,
                "name": "brazo ducha plastico al muro",
                "code": 1171,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1017,
                "price_id": 1145
            },
            {
                "id": 1146,
                "name": "Broca Cemento 10x400mm",
                "code": 1370,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1146
            },
            {
                "id": 1147,
                "name": "Broca Cemento 6x400mm",
                "code": 1368,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1147
            },
            {
                "id": 1148,
                "name": "Broca Cemento 8x400mm",
                "code": 1369,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1148
            },
            {
                "id": 1149,
                "name": "Broca Copa Diamante 32mm Ceramica Y Vidrio",
                "code": 1335,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1149
            },
            {
                "id": 1150,
                "name": "Broca de cemento 6 mm bosh",
                "code": 181,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1150
            },
            {
                "id": 1151,
                "name": "Broca de cemento de 10 mm Marca Bosh",
                "code": 184,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1151
            },
            {
                "id": 1152,
                "name": "Broca de cemento de 8 mm Marca  Wurth",
                "code": 182,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1152
            },
            {
                "id": 1153,
                "name": "broca de cemento ecef hiltin 10 x 160 mm",
                "code": 543,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1153
            },
            {
                "id": 1154,
                "name": "Broca de cemento económica Marca ZHWEI 6 mm",
                "code": 178,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1154
            },
            {
                "id": 1155,
                "name": "Broca De Fierro 13 Mm",
                "code": 1328,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1155
            },
            {
                "id": 1156,
                "name": "Broca De Fierro 7mm",
                "code": 387,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1156
            },
            {
                "id": 1157,
                "name": "broca de fierro 8 mm",
                "code": 388,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1157
            },
            {
                "id": 1158,
                "name": "Broca de fierro de 10 mm",
                "code": 172,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1158
            },
            {
                "id": 1159,
                "name": "Broca de fierro de 11 m.m.",
                "code": 173,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1159
            },
            {
                "id": 1160,
                "name": "Broca de fierro de 3 mm",
                "code": 175,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1160
            },
            {
                "id": 1161,
                "name": "broca de fierro de 6 mm makita",
                "code": 389,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1161
            },
            {
                "id": 1162,
                "name": "Broca de fierro de 7,5 m.m.",
                "code": 174,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1162
            },
            {
                "id": 1163,
                "name": "Broca de madera 10 mm",
                "code": 171,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1163
            },
            {
                "id": 1164,
                "name": "Broca de madera 4 mm",
                "code": 167,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1164
            },
            {
                "id": 1165,
                "name": "Broca de madera 5 m.m.",
                "code": 168,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1165
            },
            {
                "id": 1166,
                "name": "Broca de madera 6 mm",
                "code": 169,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1166
            },
            {
                "id": 1167,
                "name": "Broca de madera 8 mm",
                "code": 170,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1167
            },
            {
                "id": 1168,
                "name": "Broca de paleta 3/4",
                "code": 164,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1168
            },
            {
                "id": 1169,
                "name": "Broca de paleta 3/5 Marca Trupper",
                "code": 165,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1169
            },
            {
                "id": 1170,
                "name": "Broca de paleta de 1 pulgada",
                "code": 166,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1170
            },
            {
                "id": 1171,
                "name": "Broca de punta flecha de 6 mm para cortador de vidrio",
                "code": 193,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1171
            },
            {
                "id": 1172,
                "name": "broca hilten makita 12 mm 21 cm",
                "code": 500,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1172
            },
            {
                "id": 1173,
                "name": "broca hiltin 6 x 110 mm",
                "code": 519,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1173
            },
            {
                "id": 1174,
                "name": "broca hiltin 8 x110 mm",
                "code": 518,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1174
            },
            {
                "id": 1175,
                "name": "broca mader 35 mm para bisagra",
                "code": 1204,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1175
            },
            {
                "id": 1176,
                "name": "Broca paleta de 7/8",
                "code": 163,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1176
            },
            {
                "id": 1177,
                "name": "broca para madera para bisagra",
                "code": 268,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1177
            },
            {
                "id": 1178,
                "name": "broca para metal de 12 mm",
                "code": 1194,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1178
            },
            {
                "id": 1179,
                "name": "broca pino o escalonada 4 hasta 20 mm",
                "code": 498,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1179
            },
            {
                "id": 1180,
                "name": "broca sds plus 20 mm",
                "code": 1041,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1180
            },
            {
                "id": 1181,
                "name": "broca sds plus 25 mm",
                "code": 1042,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1021,
                "price_id": 1181
            },
            {
                "id": 1182,
                "name": "Brocha de 1,5 pulgadas",
                "code": 105,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1182
            },
            {
                "id": 1183,
                "name": "brocha de 1/2",
                "code": 258,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1183
            },
            {
                "id": 1184,
                "name": "Brocha de 2 pulgadas",
                "code": 104,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1184
            },
            {
                "id": 1185,
                "name": "Brocha de 2,5 pulgadas",
                "code": 103,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1185
            },
            {
                "id": 1186,
                "name": "Brocha de 3 pulgadas",
                "code": 102,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1186
            },
            {
                "id": 1187,
                "name": "brocha de 3/4",
                "code": 257,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1187
            },
            {
                "id": 1188,
                "name": "Brocha de 4 pulgadas",
                "code": 101,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1188
            },
            {
                "id": 1189,
                "name": "Broche malla rachel",
                "code": 9,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1189
            },
            {
                "id": 1190,
                "name": "brokero con llave de 10 mm",
                "code": 903,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1190
            },
            {
                "id": 1191,
                "name": "brokero con llave de 13 mm",
                "code": 902,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1191
            },
            {
                "id": 1192,
                "name": "buje hi - he 1 x 3/4 pvc hidrauico",
                "code": 852,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1192
            },
            {
                "id": 1193,
                "name": "buje hi - he 3/4 x 1/2 pvc hidrauico",
                "code": 851,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1193
            },
            {
                "id": 1194,
                "name": "buje reduccion he hi pvc 1 1/2 x 1",
                "code": 1310,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1194
            },
            {
                "id": 1195,
                "name": "Buje Reduccion Hi-He 1 x 1.1/4 Pvc Hidraulico",
                "code": 1311,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1195
            },
            {
                "id": 1196,
                "name": "buje reductor corto 40 x 32",
                "code": 858,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1196
            },
            {
                "id": 1197,
                "name": "buje reductor corto 50 X 40",
                "code": 1283,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1197
            },
            {
                "id": 1198,
                "name": "buje reductor hi he  1 x 1/2",
                "code": 861,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1198
            },
            {
                "id": 1199,
                "name": "buje redutor corto 25 x 20",
                "code": 856,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1199
            },
            {
                "id": 1200,
                "name": "buje redutor corto 32 x 25",
                "code": 857,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1200
            },
            {
                "id": 1201,
                "name": "bushing bronce hi 3/8 x he 1/2 Buje",
                "code": 726,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1201
            },
            {
                "id": 1202,
                "name": "Buzo de pintar",
                "code": 206,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1202
            },
            {
                "id": 1203,
                "name": "caballete 0,35x308mmx3nts",
                "code": 1027,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1203
            },
            {
                "id": 1204,
                "name": "caballete 2mts",
                "code": 1026,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1204
            },
            {
                "id": 1205,
                "name": "cable de alimetacion 1,5 mts",
                "code": 391,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1205
            },
            {
                "id": 1206,
                "name": "cable de audio auxiliar",
                "code": 491,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1206
            },
            {
                "id": 1207,
                "name": "Cable De Parlante Rojo y Negro 24h 2x20",
                "code": 1438,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1207
            },
            {
                "id": 1208,
                "name": "Cable De Poder Hembra Universal 3 Patas",
                "code": 1343,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1208
            },
            {
                "id": 1209,
                "name": "Cable de traspaso de corriente 1200 amp",
                "code": 1,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1209
            },
            {
                "id": 1210,
                "name": "Cable Eva 2,5 Blanco ",
                "code": 1259,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1210
            },
            {
                "id": 1211,
                "name": "cable eva 2,5 Rojo ",
                "code": 1090,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1211
            },
            {
                "id": 1212,
                "name": "cable eva 2,5 Verde ",
                "code": 1091,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1212
            },
            {
                "id": 1213,
                "name": "Cable Paralelo Blanco 2 x 1 mm",
                "code": 1429,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1213
            },
            {
                "id": 1214,
                "name": "Cable Paralelo Negro 2 x 1 mm",
                "code": 1210,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1214
            },
            {
                "id": 1215,
                "name": "cable rca audio",
                "code": 487,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1215
            },
            {
                "id": 1216,
                "name": "Cable Thhn 14 De 1,5",
                "code": 1269,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1216
            },
            {
                "id": 1217,
                "name": "cadena 15x20x9,2x4,5mts",
                "code": 1030,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1217
            },
            {
                "id": 1218,
                "name": "cadena 3mm",
                "code": 1037,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1024,
                "price_id": 1218
            },
            {
                "id": 1219,
                "name": "Cadena 5 mm ",
                "code": 1307,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1024,
                "price_id": 1219
            },
            {
                "id": 1220,
                "name": "Cadena de bici seguridad",
                "code": 73,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1024,
                "price_id": 1220
            },
            {
                "id": 1221,
                "name": "Cadena de bicicleta",
                "code": 4,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1024,
                "price_id": 1221
            },
            {
                "id": 1222,
                "name": "Cadena de Perro",
                "code": 14,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1024,
                "price_id": 1222
            },
            {
                "id": 1223,
                "name": "Cadena de puerta",
                "code": 234,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1024,
                "price_id": 1223
            },
            {
                "id": 1224,
                "name": "cadena Echicha 15x20x9,2x 3 mts",
                "code": 1031,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1224
            },
            {
                "id": 1225,
                "name": "Cadena Electro Soldada 15X20x4.5 Mt 8 Mm",
                "code": 1159,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1225
            },
            {
                "id": 1226,
                "name": "Caiman de 10 pulgadas",
                "code": 25,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1226
            },
            {
                "id": 1227,
                "name": "Caiman de 7 pulgadas",
                "code": 26,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1227
            },
            {
                "id": 1228,
                "name": "caja 100 postones 4,5 gamo",
                "code": 911,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1228
            },
            {
                "id": 1229,
                "name": "caja 100 postones 5,5 gamo",
                "code": 910,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1229
            },
            {
                "id": 1230,
                "name": "caja chuki",
                "code": 426,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1230
            },
            {
                "id": 1231,
                "name": "caja de dado 40 piesas",
                "code": 1212,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1231
            },
            {
                "id": 1232,
                "name": "caja de distribucion naranja tigre",
                "code": 441,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1232
            },
            {
                "id": 1233,
                "name": "Caja De Herramienras 16 Lts Bauker",
                "code": 1386,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1233
            },
            {
                "id": 1234,
                "name": "Caja De Herramientas",
                "code": 1253,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1234
            },
            {
                "id": 1235,
                "name": "Caja Estanco 70x70x35 C/4 Con 3/8-5/8",
                "code": 1260,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1235
            },
            {
                "id": 1236,
                "name": "Caja Estanco Ext 100x100x60-70 C/Cono",
                "code": 1321,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1236
            },
            {
                "id": 1237,
                "name": "caja estanco embutida 5 automaticos",
                "code": 406,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1237
            },
            {
                "id": 1238,
                "name": "caja metalica lioli 30 mm",
                "code": 1165,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1238
            },
            {
                "id": 1239,
                "name": "cal viva saco 25 kg",
                "code": 1312,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1026,
                "price_id": 1239
            },
            {
                "id": 1240,
                "name": "calafatera profesional ploma",
                "code": 1320,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1240
            },
            {
                "id": 1241,
                "name": "calafatera toper pistola",
                "code": 393,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1241
            },
            {
                "id": 1242,
                "name": "calafatera truper pistola",
                "code": 392,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1242
            },
            {
                "id": 1243,
                "name": "caleco 3 x 2,5",
                "code": 774,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1243
            },
            {
                "id": 1244,
                "name": "calota de automatico riel blana",
                "code": 423,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1244
            },
            {
                "id": 1245,
                "name": "calota de automatico saime negra",
                "code": 422,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1245
            },
            {
                "id": 1246,
                "name": "Camara Bicicleta Aro 26",
                "code": 1347,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1246
            },
            {
                "id": 1247,
                "name": "camara de carretilla",
                "code": 1065,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1247
            },
            {
                "id": 1248,
                "name": "canal de 150x50x2",
                "code": 1116,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1248
            },
            {
                "id": 1249,
                "name": "canala pvc café",
                "code": 1024,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1249
            },
            {
                "id": 1250,
                "name": "canaleta 20 x 10 mm blanca",
                "code": 317,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1250
            },
            {
                "id": 1251,
                "name": "Canaleta 20 x10 con auto adhesivo",
                "code": 1308,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1251
            },
            {
                "id": 1252,
                "name": "candado acero 50 mm h-full",
                "code": 625,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1252
            },
            {
                "id": 1253,
                "name": "candado acero rectangular 70 mm",
                "code": 907,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1253
            },
            {
                "id": 1254,
                "name": "candado con clave economico",
                "code": 348,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1254
            },
            {
                "id": 1255,
                "name": "candado economico 20 mm",
                "code": 914,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1255
            },
            {
                "id": 1256,
                "name": "candado economico 38 mm",
                "code": 913,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1256
            },
            {
                "id": 1257,
                "name": "candado economico 63 mm",
                "code": 912,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1257
            },
            {
                "id": 1258,
                "name": "Candado economico de 32 mm",
                "code": 236,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1258
            },
            {
                "id": 1259,
                "name": "candado oister xtra 60 mm",
                "code": 906,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1259
            },
            {
                "id": 1260,
                "name": "cañamo plastico 200 grs",
                "code": 1161,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1260
            },
            {
                "id": 1261,
                "name": "capacho 10 bolsillo h full",
                "code": 614,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1261
            },
            {
                "id": 1262,
                "name": "Capacho marca trupper",
                "code": 90,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1262
            },
            {
                "id": 1263,
                "name": "carcamo abierto de 9 pulg",
                "code": 314,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1263
            },
            {
                "id": 1264,
                "name": "Carro Aereo ",
                "code": 1348,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1264
            },
            {
                "id": 1265,
                "name": "cartonera industrial",
                "code": 497,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1265
            },
            {
                "id": 1266,
                "name": "cartonera industrial con repuesto",
                "code": 503,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1266
            },
            {
                "id": 1267,
                "name": "cartucho gas desechable 330 gr providus",
                "code": 279,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1267
            },
            {
                "id": 1268,
                "name": "Cautin lapiz 30W",
                "code": 233,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1268
            },
            {
                "id": 1269,
                "name": "Cautín plano",
                "code": 44,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1269
            },
            {
                "id": 1270,
                "name": "celosia acero blanca 2525 cm",
                "code": 624,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1270
            },
            {
                "id": 1271,
                "name": "cemento blanco",
                "code": 477,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1271
            },
            {
                "id": 1272,
                "name": "Cemento Polpaico",
                "code": 218,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1272
            },
            {
                "id": 1273,
                "name": "cera crema kit lata 200 gr",
                "code": 674,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1273
            },
            {
                "id": 1274,
                "name": "ceraestain protector de madera ceresita galon natural",
                "code": 1139,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1274
            },
            {
                "id": 1275,
                "name": "ceraestain protector de madera verde ceresita galon",
                "code": 1140,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1275
            },
            {
                "id": 1276,
                "name": "cerestain natural 1/4 galon",
                "code": 976,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1276
            },
            {
                "id": 1277,
                "name": "cerradura cajon toro negro",
                "code": 1180,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1277
            },
            {
                "id": 1278,
                "name": "Cerradura Cilindrica De Acceso Poli Color Alumnio",
                "code": 1414,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1278
            },
            {
                "id": 1279,
                "name": "Cerradura Cilindrica De Acceso Poli Color Dorada",
                "code": 1416,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1279
            },
            {
                "id": 1280,
                "name": "Cerradura Cilindrica De Oficina/Dormitorio Poli Color Aluminio",
                "code": 1415,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1280
            },
            {
                "id": 1281,
                "name": "Cerradura Cilindrica De Oficina/Dormitorio Poli Color Dorada",
                "code": 1417,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1281
            },
            {
                "id": 1282,
                "name": "Cerradura Jaque Esferica C/Llave Color Aluminio",
                "code": 1362,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1282
            },
            {
                "id": 1283,
                "name": "Cerradura Jaque Tubular C/Llave Color Dorado",
                "code": 1363,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1283
            },
            {
                "id": 1284,
                "name": "cerradura mueble odis guantera 2101",
                "code": 1181,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1284
            },
            {
                "id": 1285,
                "name": "Cerradura sobre puesto de acceso puerta principal y bodega 2004 Marca Scaravini",
                "code": 560,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1285
            },
            {
                "id": 1286,
                "name": "Cerrojo portón de 10 pulgadas",
                "code": 116,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1286
            },
            {
                "id": 1287,
                "name": "Chaleco reflectante",
                "code": 50,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1287
            },
            {
                "id": 1288,
                "name": "Chapa de portón reja Marca Bash",
                "code": 189,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1288
            },
            {
                "id": 1289,
                "name": "Chapa de reja con caja metálica",
                "code": 188,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1289
            },
            {
                "id": 1290,
                "name": "Chapa Odis tubular con llave para dormitorio/oficina",
                "code": 191,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1290
            },
            {
                "id": 1291,
                "name": "Chapa Sobrepuesta De Puerta Oister 30 A 50mm ",
                "code": 187,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1291
            },
            {
                "id": 1292,
                "name": "Chapa tubular sin llave para baño",
                "code": 190,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1028,
                "price_id": 1292
            },
            {
                "id": 1293,
                "name": "chascon copa trensado",
                "code": 1202,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1293
            },
            {
                "id": 1294,
                "name": "Chascón de copa para galletero",
                "code": 159,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1294
            },
            {
                "id": 1295,
                "name": "chascon para tubo de estufa 4,5 pulg",
                "code": 322,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1295
            },
            {
                "id": 1296,
                "name": "chascon para tubo de estufa 5 pulg",
                "code": 323,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1296
            },
            {
                "id": 1297,
                "name": "chascon para tubo de estufa 6 pulg",
                "code": 324,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1297
            },
            {
                "id": 1298,
                "name": "Chicharra De 1/2",
                "code": 1358,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1298
            },
            {
                "id": 1299,
                "name": "Chuzo",
                "code": 1258,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1299
            },
            {
                "id": 1300,
                "name": "cierra doble fierro y madera shrplit",
                "code": 967,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1300
            },
            {
                "id": 1301,
                "name": "Cincel",
                "code": 213,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1301
            },
            {
                "id": 1302,
                "name": "Cincel  5/8 x  8 pulgadas",
                "code": 45,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1302
            },
            {
                "id": 1303,
                "name": "Cincel 18x350 mm",
                "code": 61,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1303
            },
            {
                "id": 1304,
                "name": "cinta americana 45 mts",
                "code": 673,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1304
            },
            {
                "id": 1305,
                "name": "cinta doble contacto",
                "code": 280,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1305
            },
            {
                "id": 1306,
                "name": "cinta enmascarar 24 mm  30 mtrs",
                "code": 1201,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1306
            },
            {
                "id": 1307,
                "name": "cinta enmascarar 48 mm",
                "code": 1200,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1307
            },
            {
                "id": 1308,
                "name": "cinta enmascarar pegote 48x30mts",
                "code": 475,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1308
            },
            {
                "id": 1309,
                "name": "Cinta Multiuso Para Ductos 48mm x 27mts ",
                "code": 1407,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1309
            },
            {
                "id": 1310,
                "name": "Cinta Reflectante 45mts Bicolor",
                "code": 1397,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1310
            },
            {
                "id": 1311,
                "name": "clavo concreto estriado de 2,740 mm 10 uni x $500",
                "code": 626,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1311
            },
            {
                "id": 1312,
                "name": "clavo concreto liso de 2,540 mm $1000 bolsa",
                "code": 627,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1312
            },
            {
                "id": 1313,
                "name": "clavo de herrar ASV-4  CABEZA CHICA",
                "code": 1220,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1313
            },
            {
                "id": 1314,
                "name": "clavo de herrar T-3  CABEZA GRANDE",
                "code": 1221,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1314
            },
            {
                "id": 1315,
                "name": "cobre 1/2 agua tipo L 3 mts",
                "code": 1019,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1315
            },
            {
                "id": 1316,
                "name": "cobre 1/2 gas tipo L 6 mts",
                "code": 1023,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1316
            },
            {
                "id": 1317,
                "name": "cobre 3/4 agua tipo m 5 mts",
                "code": 1020,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1317
            },
            {
                "id": 1318,
                "name": "cobre 3/8 agua tipo m 6mts",
                "code": 1021,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1318
            },
            {
                "id": 1319,
                "name": "codo 1/2 bronce",
                "code": 647,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1319
            },
            {
                "id": 1320,
                "name": "codo 1/2 planza negra",
                "code": 721,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1320
            },
            {
                "id": 1321,
                "name": "codo 110 pvc sanitario",
                "code": 816,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1321
            },
            {
                "id": 1322,
                "name": "codo 20 mm Pvc hidraulico",
                "code": 610,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1322
            },
            {
                "id": 1323,
                "name": "codo 20 ppr",
                "code": 786,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1323
            },
            {
                "id": 1324,
                "name": "codo 25 ppr",
                "code": 785,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1324
            },
            {
                "id": 1325,
                "name": "codo 25 pvc hidraulico",
                "code": 884,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1325
            },
            {
                "id": 1326,
                "name": "codo 25x20 ppr",
                "code": 787,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1326
            },
            {
                "id": 1327,
                "name": "codo 3/8 bronce",
                "code": 640,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1327
            },
            {
                "id": 1328,
                "name": "codo 32 ppr",
                "code": 784,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1328
            },
            {
                "id": 1329,
                "name": "codo 40 ppr",
                "code": 783,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1329
            },
            {
                "id": 1330,
                "name": "codo 40 pvc hidraulico",
                "code": 885,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1330
            },
            {
                "id": 1331,
                "name": "codo 50 pvc hidraulico",
                "code": 886,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1331
            },
            {
                "id": 1332,
                "name": "codo 50 pvc sanitario",
                "code": 824,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1332
            },
            {
                "id": 1333,
                "name": "codo cachimba 1/2",
                "code": 941,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1333
            },
            {
                "id": 1334,
                "name": "codo canaleta marron 80x67,5",
                "code": 598,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1334
            },
            {
                "id": 1335,
                "name": "codo con reduccion 1/2 a 3/8 bronce",
                "code": 646,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1335
            },
            {
                "id": 1336,
                "name": "codo con reduccion 3/4 a 1/2 bronce",
                "code": 644,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1336
            },
            {
                "id": 1337,
                "name": "Codo Corrugado 4 Pulg Galvanizado",
                "code": 1379,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1337
            },
            {
                "id": 1338,
                "name": "codo de 40 pvc sanitario",
                "code": 826,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1338
            },
            {
                "id": 1339,
                "name": "codo de 75 pvc sanitrio",
                "code": 822,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1339
            },
            {
                "id": 1340,
                "name": "codo doble so he 1/2 x 20 ppr",
                "code": 748,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1340
            },
            {
                "id": 1341,
                "name": "codo he 1/2 bronce",
                "code": 642,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1341
            },
            {
                "id": 1342,
                "name": "codo he 3/4 bronce",
                "code": 643,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1342
            },
            {
                "id": 1343,
                "name": "codo hi - hi de 1 pulg pvc hidraulico",
                "code": 843,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1343
            },
            {
                "id": 1344,
                "name": "codo hi - hi de 3/4 pvc hidraulico",
                "code": 841,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1344
            },
            {
                "id": 1345,
                "name": "codo hi - so 32 x 3/4",
                "code": 853,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1345
            },
            {
                "id": 1346,
                "name": "codo hi 1/2 bronce",
                "code": 641,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1346
            },
            {
                "id": 1347,
                "name": "codo hi 25 x 3/4 pvc hidraulico",
                "code": 881,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1347
            },
            {
                "id": 1348,
                "name": "codo hi 3/4 bronce",
                "code": 645,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1348
            },
            {
                "id": 1349,
                "name": "codo hi 32 ppr",
                "code": 782,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1349
            },
            {
                "id": 1350,
                "name": "codo hi 32 x 1 pvc hidraulico",
                "code": 883,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1350
            },
            {
                "id": 1351,
                "name": "codo hi hi de 1/2 pvc hidraulico",
                "code": 842,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1351
            },
            {
                "id": 1352,
                "name": "Codo Pvc Hidraulico 32mm Cementar",
                "code": 612,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1352
            },
            {
                "id": 1353,
                "name": "Codo Hi 20 mm x 1/2 pvc Hidraulico Hi-Cementar",
                "code": 882,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1353
            },
            {
                "id": 1354,
                "name": "codo so-hi 25x1/2 ppr",
                "code": 771,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1354
            },
            {
                "id": 1355,
                "name": "codo soldar soldar 3/4 bronce",
                "code": 617,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1355
            },
            {
                "id": 1356,
                "name": "cola fria botella 1 kilo rex",
                "code": 1040,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1029,
                "price_id": 1356
            },
            {
                "id": 1357,
                "name": "Collar de perro grande",
                "code": 10,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1030,
                "price_id": 1357
            },
            {
                "id": 1358,
                "name": "combinacion lavaplato Mixa",
                "code": 686,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1358
            },
            {
                "id": 1359,
                "name": "Combinacion Lavaplato Recta Antonella",
                "code": 1410,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1359
            },
            {
                "id": 1360,
                "name": "Combinacion Monomando Recta Lavaplatos Taumm",
                "code": 1341,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1360
            },
            {
                "id": 1361,
                "name": "combinacion tina ducha elegant h-full",
                "code": 690,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1361
            },
            {
                "id": 1362,
                "name": "Combo de 2 kg Marca Hoteche",
                "code": 207,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1362
            },
            {
                "id": 1363,
                "name": "coneccion lavaplatos doble entrada",
                "code": 958,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1363
            },
            {
                "id": 1364,
                "name": "conector coaxial t.v azul",
                "code": 1226,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1364
            },
            {
                "id": 1365,
                "name": "conector de llave mangera 1/2 pulg",
                "code": 265,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1365
            },
            {
                "id": 1366,
                "name": "Conector Rapido Jardin 1  Y 3/4 Pulg",
                "code": 859,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1366
            },
            {
                "id": 1367,
                "name": "Conector Rapido Macho Hi 1/2 Y 3/4",
                "code": 1426,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1367
            },
            {
                "id": 1368,
                "name": "conector tv balum interior",
                "code": 1034,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1368
            },
            {
                "id": 1369,
                "name": "copa para exagonal power",
                "code": 351,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1369
            },
            {
                "id": 1370,
                "name": "copla 1 pulg",
                "code": 632,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1370
            },
            {
                "id": 1371,
                "name": "copla 1/2 bronce",
                "code": 635,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1371
            },
            {
                "id": 1372,
                "name": "copla 20 ppr",
                "code": 757,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1372
            },
            {
                "id": 1373,
                "name": "copla 25 ppr",
                "code": 756,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1373
            },
            {
                "id": 1374,
                "name": "copla 3/4 bronce",
                "code": 631,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1374
            },
            {
                "id": 1375,
                "name": "copla 32 ppr",
                "code": 755,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1375
            },
            {
                "id": 1376,
                "name": "copla 40 ppr",
                "code": 751,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1376
            },
            {
                "id": 1377,
                "name": "copla bajada pvc p25 marron",
                "code": 600,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1377
            },
            {
                "id": 1378,
                "name": "copla blanca 110 mm anillo incluido",
                "code": 548,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1378
            },
            {
                "id": 1379,
                "name": "copla blanca 50 mm anillo incluido",
                "code": 546,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1379
            },
            {
                "id": 1380,
                "name": "copla blanca 75 mm anillo incluido",
                "code": 547,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1380
            },
            {
                "id": 1381,
                "name": "copla de 1/2 pvc hidraulico",
                "code": 872,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1381
            },
            {
                "id": 1382,
                "name": "copla 110 pvc sanitario",
                "code": 7809802093554,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1382
            },
            {
                "id": 1383,
                "name": "copla  25 mm pvc hidraulico ",
                "code": 860,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1383
            },
            {
                "id": 1384,
                "name": "copla 32 mm pvc hidraulico",
                "code": 849,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1384
            },
            {
                "id": 1385,
                "name": "copla 40 mm pvc hidraulico",
                "code": 837,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1385
            },
            {
                "id": 1386,
                "name": "copla  40 mm pvc sanitario",
                "code": 7809802093523,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1386
            },
            {
                "id": 1387,
                "name": "copla 50 mm pvc hidraulico",
                "code": 850,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1387
            },
            {
                "id": 1388,
                "name": "copla 50 mm pvc sanitario",
                "code": 7809802093530,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1388
            },
            {
                "id": 1389,
                "name": "copla de 75 pvc sanitario",
                "code": 7809802093547,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1389
            },
            {
                "id": 1390,
                "name": "copla hi - hi 3/4",
                "code": 319,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1390
            },
            {
                "id": 1391,
                "name": "copla hi hi 1/2",
                "code": 854,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1391
            },
            {
                "id": 1392,
                "name": "copla hi- hi de 1 pulg",
                "code": 855,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1392
            },
            {
                "id": 1393,
                "name": "copla so-so 3/8",
                "code": 307,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1393
            },
            {
                "id": 1394,
                "name": "COPLA ZINC 20 MM ",
                "code": 1280,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1394
            },
            {
                "id": 1395,
                "name": "Corchete Makawa 8mm",
                "code": 1205,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1395
            },
            {
                "id": 1396,
                "name": "cordel nylon de 10 mm",
                "code": 1067,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1396
            },
            {
                "id": 1397,
                "name": "Cordel Perlon 10 Mm X Metro",
                "code": 1329,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1397
            },
            {
                "id": 1398,
                "name": "CORDEL PERLON DE 4 MM",
                "code": 1313,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1398
            },
            {
                "id": 1399,
                "name": "Cordel Polipropileno Trenzado 8mm x Metro",
                "code": 1406,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1399
            },
            {
                "id": 1400,
                "name": "Corona grande",
                "code": 8,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1400
            },
            {
                "id": 1401,
                "name": "Corona mediana",
                "code": 7,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1401
            },
            {
                "id": 1402,
                "name": "Corona pequeña",
                "code": 6,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1402
            },
            {
                "id": 1403,
                "name": "corrugado de 1/2",
                "code": 1087,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1031,
                "price_id": 1403
            },
            {
                "id": 1404,
                "name": "Cortador Ceramica 60cms Emtop",
                "code": 1435,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1404
            },
            {
                "id": 1405,
                "name": "cortador de cañeria y tubo",
                "code": 335,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1405
            },
            {
                "id": 1406,
                "name": "Cortador de vidrio Marca Toolmax",
                "code": 243,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1406
            },
            {
                "id": 1407,
                "name": "Cortador ppr Marca Sata",
                "code": 91,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1407
            },
            {
                "id": 1408,
                "name": "cortador tubo pvc y ppr",
                "code": 1177,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1408
            },
            {
                "id": 1409,
                "name": "Cortante de 6 pulgadas",
                "code": 41,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1409
            },
            {
                "id": 1410,
                "name": "cuarto rodon",
                "code": 1002,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1033,
                "price_id": 1410
            },
            {
                "id": 1411,
                "name": "curva 16mm conduit",
                "code": 436,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1411
            },
            {
                "id": 1412,
                "name": "curva 20 ppr",
                "code": 790,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1412
            },
            {
                "id": 1413,
                "name": "curva 25 ppr",
                "code": 789,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1413
            },
            {
                "id": 1414,
                "name": "curva 32 ppr",
                "code": 788,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1414
            },
            {
                "id": 1415,
                "name": "curva 50 pvc sanitario",
                "code": 823,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1415
            },
            {
                "id": 1416,
                "name": "curva 75 pvc sanitario semi curva",
                "code": 821,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1416
            },
            {
                "id": 1417,
                "name": "curva de 40 sanitario pvc",
                "code": 825,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1417
            },
            {
                "id": 1418,
                "name": "Curva Estufa 4. 1/2",
                "code": 202,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1418
            },
            {
                "id": 1419,
                "name": "Curva Estufa 5",
                "code": 201,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1419
            },
            {
                "id": 1420,
                "name": "Curva Estufa 6",
                "code": 43,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1420
            },
            {
                "id": 1421,
                "name": "Curva Pvc Sanitario 110mm (semicodo)",
                "code": 817,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1421
            },
            {
                "id": 1422,
                "name": "curva sobrepaso 20 ppr",
                "code": 750,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1422
            },
            {
                "id": 1423,
                "name": "curva sobrepaso 25 ppr",
                "code": 749,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1423
            },
            {
                "id": 1424,
                "name": "cyperkill veneno",
                "code": 284,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1424
            },
            {
                "id": 1425,
                "name": "desague 1 1/2 lavaplato con rejilla y tapon",
                "code": 725,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1425
            },
            {
                "id": 1426,
                "name": "Desague Lavamanos Pvc 1. 1/4 Pulg",
                "code": 713,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1426
            },
            {
                "id": 1427,
                "name": "desague lavaplato cromado 1 1/2",
                "code": 687,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1427
            },
            {
                "id": 1428,
                "name": "Desague Lavaplato Pvc 1. 1/2 Pulg",
                "code": 712,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1428
            },
            {
                "id": 1429,
                "name": "desague lavatorio 1 1/4 sin cola",
                "code": 939,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1429
            },
            {
                "id": 1430,
                "name": "Desague Lavatorio 1.1/4 Metalico C/Rebalse",
                "code": 1418,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1430
            },
            {
                "id": 1431,
                "name": "Desague Tina 1.1/2 Metalico",
                "code": 1419,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1431
            },
            {
                "id": 1432,
                "name": "Desodorante ambiental de auto",
                "code": 678,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1432
            },
            {
                "id": 1433,
                "name": "Destorcedor (bandola) 4.1/4 Para 75kg",
                "code": 1257,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1034,
                "price_id": 1433
            },
            {
                "id": 1434,
                "name": "destorcedor de 3 76,2mm",
                "code": 345,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1034,
                "price_id": 1434
            },
            {
                "id": 1435,
                "name": "destorcedor de 4101mm",
                "code": 344,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1034,
                "price_id": 1435
            },
            {
                "id": 1436,
                "name": "Destornillador 2 en 1",
                "code": 109,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1436
            },
            {
                "id": 1437,
                "name": "Destronillador JC 4+",
                "code": 1372,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1437
            },
            {
                "id": 1438,
                "name": "Diablo de 24 pulgadas",
                "code": 132,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1438
            },
            {
                "id": 1439,
                "name": "diferencial de 2x25 amp ",
                "code": 390,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1439
            },
            {
                "id": 1440,
                "name": "diluyente duco 5 lts",
                "code": 954,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1440
            },
            {
                "id": 1441,
                "name": "diluyente duco plus 1 lt",
                "code": 950,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1441
            },
            {
                "id": 1442,
                "name": "diluyente poliuretano 1 lt",
                "code": 948,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1442
            },
            {
                "id": 1443,
                "name": "Diluyente Sintetico 1 Litro",
                "code": 1448,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1443
            },
            {
                "id": 1444,
                "name": "Diluyente Sintetico 5 Litros Bidon",
                "code": 1447,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1006,
                "price_id": 1444
            },
            {
                "id": 1445,
                "name": "Disco Corte De Metal 7pulg Corte Fino (1.6mm)",
                "code": 148,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1445
            },
            {
                "id": 1446,
                "name": "Disco de concreto marca Total de 4, 1/2",
                "code": 145,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1446
            },
            {
                "id": 1447,
                "name": "Disco de corte de 4, 1/2 de acero inoxidable",
                "code": 151,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1447
            },
            {
                "id": 1448,
                "name": "Disco de desbaste de 4 pulgadas",
                "code": 150,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1448
            },
            {
                "id": 1449,
                "name": "Disco de desbaste de muro de cemento",
                "code": 155,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1449
            },
            {
                "id": 1450,
                "name": "Disco de fierro de 14 pulga de trozadora",
                "code": 146,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1450
            },
            {
                "id": 1451,
                "name": "Disco de fierro de 7 pulgadas de corte grueso",
                "code": 149,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1451
            },
            {
                "id": 1452,
                "name": "Disco de fierro de 9 pulgadas",
                "code": 147,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1452
            },
            {
                "id": 1453,
                "name": "Disco de lija de fiero grano 100 de 4 pulgadas",
                "code": 154,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1453
            },
            {
                "id": 1454,
                "name": "Disco de lija de fierro grano 60 de 4 pulgadas",
                "code": 153,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1454
            },
            {
                "id": 1455,
                "name": "Disco de lija de madera  Grano 120  de 4 pulgadas",
                "code": 245,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1455
            },
            {
                "id": 1456,
                "name": "Disco de lija de madera Grano 60 de 4 pulgadas",
                "code": 247,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1456
            },
            {
                "id": 1457,
                "name": "Disco de lija de madera Grano 80 de 4 pulgadas",
                "code": 246,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1457
            },
            {
                "id": 1458,
                "name": "Disco de lija Grano 100 de madera de 4 pulgadas",
                "code": 152,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1458
            },
            {
                "id": 1459,
                "name": "Disco de sierra madera 4, 1/2 de 24 dientes",
                "code": 141,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1459
            },
            {
                "id": 1460,
                "name": "Disco de sierra madera 4, 1/2 de 40 dientes",
                "code": 140,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1460
            },
            {
                "id": 1461,
                "name": "Disco de sierra madera 7, 1/4 de 24 dientes",
                "code": 139,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1461
            },
            {
                "id": 1462,
                "name": "Disco De Sopapo Con Lijas De 4.5 ",
                "code": 156,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1462
            },
            {
                "id": 1463,
                "name": "disco diamantado 4 1/2 porcelanato",
                "code": 1032,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1463
            },
            {
                "id": 1464,
                "name": "Disco diamantado de 7 pulgadas",
                "code": 142,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1464
            },
            {
                "id": 1465,
                "name": "Disco diamantado de cerámica de 4, 1/2 marca Inko",
                "code": 144,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1465
            },
            {
                "id": 1466,
                "name": "Disco diamantado de concreto de 4, 1/2",
                "code": 143,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1466
            },
            {
                "id": 1467,
                "name": "Disco para sierra madera 7, 1/4 de 40 dientes",
                "code": 138,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1467
            },
            {
                "id": 1468,
                "name": "Disco Sierra Madera 9 Pulg x 60 Dientes",
                "code": 1349,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1035,
                "price_id": 1468
            },
            {
                "id": 1469,
                "name": "dispersador automatico para galon de agua",
                "code": 545,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1469
            },
            {
                "id": 1470,
                "name": "ducha telefono sin manguera",
                "code": 1203,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1017,
                "price_id": 1470
            },
            {
                "id": 1471,
                "name": "Echona",
                "code": 52,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1471
            },
            {
                "id": 1472,
                "name": "toma corriente triple ( enchufe)  10- 16 amp blanco embutido mec",
                "code": 435,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1472
            },
            {
                "id": 1473,
                "name": "toma corriente doble ( enchufe) 10 amp blanco embutido mec",
                "code": 445,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1473
            },
            {
                "id": 1474,
                "name": "Enchufe Doble Sobrepuesto 10-16 Amp",
                "code": 1252,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1474
            },
            {
                "id": 1475,
                "name": "toma corriente doble ( enchufe) 10 amp blanco sobrepuesto mec",
                "code": 444,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1475
            },
            {
                "id": 1476,
                "name": "enchufe macho volante blanco",
                "code": 1188,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1476
            },
            {
                "id": 1477,
                "name": "enchufe macho volante negro",
                "code": 1189,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1477
            },
            {
                "id": 1478,
                "name": "toma corriente simple( enchufe) 10 amp blanco embutido lexo",
                "code": 438,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1478
            },
            {
                "id": 1479,
                "name": "toma corriente simple ( enchufe) 10 amp blanco embutido mec",
                "code": 437,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1479
            },
            {
                "id": 1480,
                "name": "toma corriente simple ( enchufe) 10 amp blanco embutido panelli ",
                "code": 439,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1480
            },
            {
                "id": 1481,
                "name": "toma corriente simple( enchufe)  10- 16 amp blanco embutido mec",
                "code": 449,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1481
            },
            {
                "id": 1482,
                "name": "toma corriente simple (enchufe) 10 amp blanco sobrepuesto mec",
                "code": 431,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1482
            },
            {
                "id": 1483,
                "name": "toma corriente triple ( enchufe) 10 amp blanco embutido mec",
                "code": 425,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1483
            },
            {
                "id": 1484,
                "name": "toma corriente triple (enchufe) 10 amp blanco sobrepuesto mec",
                "code": 424,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1484
            },
            {
                "id": 1485,
                "name": "enchufe triple sobrepuesto protegido",
                "code": 429,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1485
            },
            {
                "id": 1486,
                "name": "endurecedor de masilla magica",
                "code": 670,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1486
            },
            {
                "id": 1487,
                "name": "Engrapadora metalica",
                "code": 24,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1487
            },
            {
                "id": 1488,
                "name": "Escobilla de acero",
                "code": 135,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1488
            },
            {
                "id": 1489,
                "name": "escofina para herrar con mango",
                "code": 1206,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1489
            },
            {
                "id": 1490,
                "name": "Escofina para madera Por Unidad",
                "code": 56,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1490
            },
            {
                "id": 1491,
                "name": "escuadra  10 x 12 cm",
                "code": 255,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1491
            },
            {
                "id": 1492,
                "name": "escuadra 15 x 13 cm",
                "code": 254,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1492
            },
            {
                "id": 1493,
                "name": "escuadra 20x25 cm",
                "code": 623,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1493
            },
            {
                "id": 1494,
                "name": "escuadra 35 x 30",
                "code": 256,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1494
            },
            {
                "id": 1495,
                "name": "escuadra 8 x 10 pulgada",
                "code": 710,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1495
            },
            {
                "id": 1496,
                "name": "Escuadra aluminio Hoteche 10 Pulg",
                "code": 81,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1496
            },
            {
                "id": 1497,
                "name": "Escuadra Aluminio Hoteche 8 Pulg",
                "code": 1437,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1497
            },
            {
                "id": 1498,
                "name": "Escuadra De Silla 25x25mm",
                "code": 1350,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1498
            },
            {
                "id": 1499,
                "name": "escuadra esquina 1 1/2 x 1 1/2",
                "code": 922,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1499
            },
            {
                "id": 1500,
                "name": "escuadra esquina 2 x 2",
                "code": 921,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1500
            },
            {
                "id": 1501,
                "name": "escuadra esquina 3 x 3",
                "code": 915,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1501
            },
            {
                "id": 1502,
                "name": "escuadra esquina plana 40 x 40 x 20 mm",
                "code": 917,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1502
            },
            {
                "id": 1503,
                "name": "escuadra esquina plana 50 x 50 x 20 mm",
                "code": 918,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1503
            },
            {
                "id": 1504,
                "name": "escuadra iman 4",
                "code": 1178,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1504
            },
            {
                "id": 1505,
                "name": "Escuadra Triangular De Angulos",
                "code": 82,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1505
            },
            {
                "id": 1506,
                "name": "escudra 20 x 15 cm",
                "code": 253,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1506
            },
            {
                "id": 1507,
                "name": "escudra esquina 2 1/2 x 2 1/2",
                "code": 920,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1507
            },
            {
                "id": 1508,
                "name": "esmalte al agua blanco galon",
                "code": 1130,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1508
            },
            {
                "id": 1509,
                "name": "esmalte al agua galon azul piedra",
                "code": 1128,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1509
            },
            {
                "id": 1510,
                "name": "esmalte al agua galon damasco",
                "code": 1129,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1510
            },
            {
                "id": 1511,
                "name": "esmalte al agua galon verde musgo passol",
                "code": 1073,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1511
            },
            {
                "id": 1512,
                "name": "esmalte epoxipol para piso galon",
                "code": 1138,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1512
            },
            {
                "id": 1513,
                "name": "esmalte premiun tineta blanco",
                "code": 570,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1513
            },
            {
                "id": 1514,
                "name": "esmalte sintetico 200cc amarillo rey",
                "code": 663,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1514
            },
            {
                "id": 1515,
                "name": "esmalte sintetico 200cc azul pacifico",
                "code": 665,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1515
            },
            {
                "id": 1516,
                "name": "esmalte sintetico 200cc bermellon",
                "code": 662,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1516
            },
            {
                "id": 1517,
                "name": "esmalte sintetico 200cc café moro",
                "code": 659,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1517
            },
            {
                "id": 1518,
                "name": "esmalte sintetico 200cc negro",
                "code": 661,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1518
            },
            {
                "id": 1519,
                "name": "esmalte sintetico 200cc verde reja",
                "code": 660,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1519
            },
            {
                "id": 1520,
                "name": "Esmalte Sintetico Amarillo 1/4 Galon",
                "code": 1398,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1520
            },
            {
                "id": 1521,
                "name": "Esmalte Sintetico Amarillo Galon",
                "code": 1451,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1521
            },
            {
                "id": 1522,
                "name": "Esmalte Sintetico Azul 1/4 Galon",
                "code": 1400,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1522
            },
            {
                "id": 1523,
                "name": "esmalte sintetico azul galon",
                "code": 1134,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1523
            },
            {
                "id": 1524,
                "name": "esmalte sintetico blanco 1/4 galon",
                "code": 970,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1524
            },
            {
                "id": 1525,
                "name": "Esmalte Sintetico Blanco 230cc Iris",
                "code": 664,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1525
            },
            {
                "id": 1526,
                "name": "Esmalte Sintetico Blanco Galon",
                "code": 1133,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1526
            },
            {
                "id": 1527,
                "name": "Esmalte Sintetico Café Galon",
                "code": 1275,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1527
            },
            {
                "id": 1528,
                "name": "esmalte sintetico café moro",
                "code": 1135,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1528
            },
            {
                "id": 1529,
                "name": "Esmalte Sintetico Gris 1/4 Galon",
                "code": 1401,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1529
            },
            {
                "id": 1530,
                "name": "esmalte sintetico negro 1/4 galon",
                "code": 969,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1530
            },
            {
                "id": 1531,
                "name": "esmalte sintetico negro galon",
                "code": 1136,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1531
            },
            {
                "id": 1532,
                "name": "esmalte sintetico ocre galon",
                "code": 1131,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1532
            },
            {
                "id": 1533,
                "name": "Esmalte Sintetico Rojo 1/4 Galon",
                "code": 1399,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1533
            },
            {
                "id": 1534,
                "name": "Esmalte Sintetico Rojo Galon",
                "code": 1276,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1534
            },
            {
                "id": 1535,
                "name": "Esmeril Angular 4,5 Bauker",
                "code": 273,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1535
            },
            {
                "id": 1536,
                "name": "Esmeril Angular Bauker 2100W 7P",
                "code": 1396,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1536
            },
            {
                "id": 1537,
                "name": "Espátula metálica 3 pulgadas",
                "code": 18,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1537
            },
            {
                "id": 1538,
                "name": "Espátula metálica 5 pulgadas",
                "code": 17,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1538
            },
            {
                "id": 1539,
                "name": "Espatula metalica de 4 pulgadas",
                "code": 16,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1539
            },
            {
                "id": 1540,
                "name": "Espatula plastica",
                "code": 15,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1540
            },
            {
                "id": 1541,
                "name": "espersor para planza",
                "code": 264,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1541
            },
            {
                "id": 1542,
                "name": "Eplitter de 4 vias",
                "code": 355,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1542
            },
            {
                "id": 1543,
                "name": "esponja topex",
                "code": 252,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1543
            },
            {
                "id": 1544,
                "name": "espuma expansiva 500 ml",
                "code": 544,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1544
            },
            {
                "id": 1545,
                "name": "esquinero vulcanita",
                "code": 1234,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1545
            },
            {
                "id": 1546,
                "name": "Extencion Para Dado 1/2 (12.5mm)",
                "code": 1357,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1546
            },
            {
                "id": 1547,
                "name": "Extencion Para Dado 1/4 (6.35mm)",
                "code": 1355,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1547
            },
            {
                "id": 1548,
                "name": "Extencion Para Dado 3/8 (9.52mm)",
                "code": 1356,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1548
            },
            {
                "id": 1549,
                "name": "extractor 120 watts",
                "code": 408,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1549
            },
            {
                "id": 1550,
                "name": "extractor 150 watts",
                "code": 407,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1550
            },
            {
                "id": 1551,
                "name": "Extractor de 100W",
                "code": 448,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1551
            },
            {
                "id": 1552,
                "name": "Faja lumbar",
                "code": 30,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1552
            },
            {
                "id": 1553,
                "name": "fieltro crepado de 40 mtrs",
                "code": 1008,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1011,
                "price_id": 1553
            },
            {
                "id": 1554,
                "name": "fieltro liso de 16 mts",
                "code": 1007,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1011,
                "price_id": 1554
            },
            {
                "id": 1555,
                "name": "fieltro liso de 40 mts",
                "code": 1006,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1011,
                "price_id": 1555
            },
            {
                "id": 1556,
                "name": "fierro estriado 10",
                "code": 1115,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1556
            },
            {
                "id": 1557,
                "name": "fierro estriado 8",
                "code": 1114,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1557
            },
            {
                "id": 1558,
                "name": "fierro liso 6",
                "code": 1113,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1558
            },
            {
                "id": 1559,
                "name": "filtro aireador para lavaplato",
                "code": 1172,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1559
            },
            {
                "id": 1560,
                "name": "fitting completo wc doble descarga",
                "code": 691,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1560
            },
            {
                "id": 1561,
                "name": "fitting universal manilla plastica cromada",
                "code": 871,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1561
            },
            {
                "id": 1562,
                "name": "flamax pastilla de encendido",
                "code": 262,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1562
            },
            {
                "id": 1563,
                "name": "flappers para estanque wc",
                "code": 681,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1563
            },
            {
                "id": 1564,
                "name": "flexible de lavadora",
                "code": 555,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1564
            },
            {
                "id": 1565,
                "name": "flexible ducha 2 mtrs",
                "code": 550,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1565
            },
            {
                "id": 1566,
                "name": "flexible he-hi de 35 cm",
                "code": 302,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1566
            },
            {
                "id": 1567,
                "name": "flexible hi - he M10 X 1/2 de 35 cm",
                "code": 699,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1567
            },
            {
                "id": 1568,
                "name": "flexible hi - hi califon de media 25 cm",
                "code": 702,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1568
            },
            {
                "id": 1569,
                "name": "flexible hi - hi de 1/2 x 3/8 de 30 cm",
                "code": 698,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1569
            },
            {
                "id": 1570,
                "name": "flexible hi - hi de 50 cm",
                "code": 1069,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1570
            },
            {
                "id": 1571,
                "name": "flexible hi hi 1/2 35 cm",
                "code": 700,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1571
            },
            {
                "id": 1572,
                "name": "flexible hi hi 1/2 x 15/16  35 cm",
                "code": 701,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1572
            },
            {
                "id": 1573,
                "name": "flexible hi hi 1/2x 15/16x35cm con llave angular",
                "code": 946,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1573
            },
            {
                "id": 1574,
                "name": "Flexible Hi-He 1/2 x 50cms",
                "code": 1068,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1574
            },
            {
                "id": 1575,
                "name": "Flexible Hi-Hi 1/2 25cms",
                "code": 1330,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1575
            },
            {
                "id": 1576,
                "name": "Flexible Hi-Hi De 1/2 x 40cms",
                "code": 697,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1576
            },
            {
                "id": 1577,
                "name": "flexible para gas hi-hi 1/2 x 1/2 100 cm",
                "code": 333,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1577
            },
            {
                "id": 1578,
                "name": "flexible para gas hi-hi 1/2 x 1/2 60 cm",
                "code": 330,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1578
            },
            {
                "id": 1579,
                "name": "flexible para gas hi-hi 1/2 x 3/8  60 cm",
                "code": 331,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1579
            },
            {
                "id": 1580,
                "name": "flexible para gas hi-hi 3/8 x 1/2 100 cm",
                "code": 334,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1580
            },
            {
                "id": 1581,
                "name": "foco embutido redondo 12 watts plafon",
                "code": 404,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1581
            },
            {
                "id": 1582,
                "name": "foco embutido redondo 18 watts plafon",
                "code": 403,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1582
            },
            {
                "id": 1583,
                "name": "foco embutito redondo 9 watts plafon",
                "code": 405,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1583
            },
            {
                "id": 1584,
                "name": "Foco led con sensor",
                "code": 1274,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1584
            },
            {
                "id": 1585,
                "name": "foco sobre puesto plafon 12 watts redondo",
                "code": 401,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1585
            },
            {
                "id": 1586,
                "name": "foco sobre puesto plafon 18 watts redondo",
                "code": 402,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1586
            },
            {
                "id": 1587,
                "name": "Formón 3/8",
                "code": 124,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1587
            },
            {
                "id": 1588,
                "name": "Formón 7/8 cabeza metálica",
                "code": 117,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1588
            },
            {
                "id": 1589,
                "name": "Formón con mango plástico por Unidad",
                "code": 100,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1589
            },
            {
                "id": 1590,
                "name": "Forro Bicicleta Mountain Bike Aro 26",
                "code": 1352,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1590
            },
            {
                "id": 1591,
                "name": "Forro Bicicleta Pistera Aro 26",
                "code": 1351,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1591
            },
            {
                "id": 1592,
                "name": "Forro de rueda de carretilla",
                "code": 211,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1592
            },
            {
                "id": 1593,
                "name": "Fraguador de goma de 24 cm",
                "code": 58,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1593
            },
            {
                "id": 1594,
                "name": "frague almond",
                "code": 481,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1594
            },
            {
                "id": 1595,
                "name": "frague alpaca",
                "code": 486,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1595
            },
            {
                "id": 1596,
                "name": "frague beige ceniza",
                "code": 483,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1596
            },
            {
                "id": 1597,
                "name": "frague bio bio",
                "code": 485,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1597
            },
            {
                "id": 1598,
                "name": "frague blanco",
                "code": 480,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1598
            },
            {
                "id": 1599,
                "name": "frague café claro",
                "code": 478,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1599
            },
            {
                "id": 1600,
                "name": "frague café oscuro",
                "code": 482,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1600
            },
            {
                "id": 1601,
                "name": "frague gris",
                "code": 479,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1601
            },
            {
                "id": 1602,
                "name": "frague negro",
                "code": 484,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1039,
                "price_id": 1602
            },
            {
                "id": 1603,
                "name": "fulminantes para pistola de clavo amarillo",
                "code": 251,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1603
            },
            {
                "id": 1604,
                "name": "fulminantes para pistola de clavo rojo",
                "code": 250,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1604
            },
            {
                "id": 1605,
                "name": "fumigador 2 ltrs",
                "code": 1208,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1605
            },
            {
                "id": 1606,
                "name": "fumigador 5 ltrs",
                "code": 1209,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1606
            },
            {
                "id": 1607,
                "name": "Fundente Para Soldar Plata 50 Gr Indep",
                "code": 176,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1607
            },
            {
                "id": 1608,
                "name": "gancho canala metalica pintada",
                "code": 259,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1608
            },
            {
                "id": 1609,
                "name": "gancho canaleta café",
                "code": 594,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1609
            },
            {
                "id": 1610,
                "name": "gas butano bombona",
                "code": 6910310376648,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1610
            },
            {
                "id": 1611,
                "name": "gas butano tubo",
                "code": 396,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1611
            },
            {
                "id": 1612,
                "name": "Generador Electrico Gasolina 6000 W Bauker",
                "code": 1382,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1612
            },
            {
                "id": 1613,
                "name": "goma con pernos acople estanque y taza h-full",
                "code": 944,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1613
            },
            {
                "id": 1614,
                "name": "Gorro Campana Estufa 4. 1/2",
                "code": 270,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1614
            },
            {
                "id": 1615,
                "name": "Gorro Campana Estufa 5",
                "code": 1256,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1615
            },
            {
                "id": 1616,
                "name": "Gorro Campana Estufa 6",
                "code": 269,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1616
            },
            {
                "id": 1617,
                "name": "gorro galvanizado 5 pulgada",
                "code": 564,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1617
            },
            {
                "id": 1618,
                "name": "gotita economica",
                "code": 329,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1618
            },
            {
                "id": 1619,
                "name": "Grapa 5/16x8mm Stanley 1000 Un",
                "code": 1251,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1619
            },
            {
                "id": 1620,
                "name": "Grapa de 10 mm para engrapadora rojo-azul",
                "code": 23,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1620
            },
            {
                "id": 1621,
                "name": "Grapa Para Cable 9mm",
                "code": 1353,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1621
            },
            {
                "id": 1622,
                "name": "grasa consistente  400grm",
                "code": 666,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1622
            },
            {
                "id": 1623,
                "name": "guante de hilo negro",
                "code": "300c",
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1623
            },
            {
                "id": 1624,
                "name": "guante escarne par",
                "code": 1060,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1624
            },
            {
                "id": 1625,
                "name": "guante nitrilo azul construccion",
                "code": 1035,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1625
            },
            {
                "id": 1626,
                "name": "guantes amarillo latex talla S",
                "code": "300S",
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1626
            },
            {
                "id": 1627,
                "name": "guantes amarillo latex talla M",
                "code": "300m",
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1627
            },
            {
                "id": 1628,
                "name": "guantes rojo nitrilo",
                "code": 299,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1628
            },
            {
                "id": 1629,
                "name": "guardapolvo de 2 pulg",
                "code": 1003,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1629
            },
            {
                "id": 1630,
                "name": "guardapolvo de 3 pulg",
                "code": 1004,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1630
            },
            {
                "id": 1631,
                "name": "guia de riel doble pibote 20 mm",
                "code": 1230,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1631
            },
            {
                "id": 1632,
                "name": "guia de riel pibote 20 mm",
                "code": 1229,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1632
            },
            {
                "id": 1633,
                "name": "Hacha chica mango madera",
                "code": 212,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1633
            },
            {
                "id": 1634,
                "name": "Hacha sin mango",
                "code": 205,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1634
            },
            {
                "id": 1635,
                "name": "hembra de 10 amp volante",
                "code": 505,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1635
            },
            {
                "id": 1636,
                "name": "hembra de 10 amp volante mec",
                "code": 506,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1636
            },
            {
                "id": 1637,
                "name": "hembra de 16-10 amp volante",
                "code": 507,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1637
            },
            {
                "id": 1638,
                "name": "Herradura de media pista c1",
                "code": 197,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1638
            },
            {
                "id": 1639,
                "name": "Herradura de media pista c2",
                "code": 200,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1639
            },
            {
                "id": 1640,
                "name": "Herradura de media pista c3",
                "code": 199,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1640
            },
            {
                "id": 1641,
                "name": "Herradura de media pista c4",
                "code": 198,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1641
            },
            {
                "id": 1642,
                "name": "Herradura de media pista h1",
                "code": 194,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1642
            },
            {
                "id": 1643,
                "name": "Herradura de media pista h2",
                "code": 195,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1643
            },
            {
                "id": 1644,
                "name": "Herradura de media pista h3",
                "code": 196,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1644
            },
            {
                "id": 1645,
                "name": "Hilo de orilladora 2,4 x 15 mm",
                "code": 131,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1645
            },
            {
                "id": 1646,
                "name": "hilo metro 1/4",
                "code": 1126,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1646
            },
            {
                "id": 1647,
                "name": "hilo metro 5/16",
                "code": 1127,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1002,
                "price_id": 1647
            },
            {
                "id": 1648,
                "name": "Hoja de cartonero larga",
                "code": 241,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1648
            },
            {
                "id": 1649,
                "name": "Hoja De Sierra Bahco",
                "code": 965,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1649
            },
            {
                "id": 1650,
                "name": "Hoja De Sierra Sandflex ",
                "code": 966,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1650
            },
            {
                "id": 1651,
                "name": "Hormigon preparado h20 de 25 kg",
                "code": 219,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1651
            },
            {
                "id": 1652,
                "name": "huincha aisladora 10 mtrs mediana 3M",
                "code": 521,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1652
            },
            {
                "id": 1653,
                "name": "huincha aisladora 20 mtrs grande 3M",
                "code": 522,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1653
            },
            {
                "id": 1654,
                "name": "huincha aisladora 5 mtrs chica 3M",
                "code": 520,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1654
            },
            {
                "id": 1655,
                "name": "huincha aisladora azul 20 mts lexo",
                "code": 524,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1655
            },
            {
                "id": 1656,
                "name": "huincha aisladora blanca 10 mts lexo",
                "code": 526,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1656
            },
            {
                "id": 1657,
                "name": "huincha aisladora blanca 20 mts lexo",
                "code": 525,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1657
            },
            {
                "id": 1658,
                "name": "huincha aisladora roja 20 mts lexo",
                "code": 523,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1658
            },
            {
                "id": 1659,
                "name": "Huincha de 30 metros",
                "code": 80,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1659
            },
            {
                "id": 1660,
                "name": "Huincha de medir 5 metros Toolcraft",
                "code": 86,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1660
            },
            {
                "id": 1661,
                "name": "huincha de medir 8 mts toolcraf",
                "code": 629,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1661
            },
            {
                "id": 1662,
                "name": "Huincha de Medir 8mts x 25mm Toolcraft",
                "code": 85,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1662
            },
            {
                "id": 1663,
                "name": "Huincha de medir de 3 mts Nicholson",
                "code": 87,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1663
            },
            {
                "id": 1664,
                "name": "infla y sella 450 ml valkalor",
                "code": 377,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1664
            },
            {
                "id": 1665,
                "name": "Ingletadora con serrucho",
                "code": 68,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1665
            },
            {
                "id": 1666,
                "name": "Internit 8",
                "code": 111,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1666
            },
            {
                "id": 1667,
                "name": "internit de 4",
                "code": 358,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1667
            },
            {
                "id": 1668,
                "name": "internit de 5",
                "code": 359,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1668
            },
            {
                "id": 1669,
                "name": "internit de 6",
                "code": 360,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1669
            },
            {
                "id": 1670,
                "name": "interruptor doble 9/15 sobrepuesto blanco mec",
                "code": 432,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1670
            },
            {
                "id": 1671,
                "name": "interruptor + enchufe 16 amp sobrepuesto",
                "code": 434,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1671
            },
            {
                "id": 1672,
                "name": "Interruptor 9/12 Volante Blanco Mec Pera",
                "code": 513,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1672
            },
            {
                "id": 1673,
                "name": "Interruptor 9/12 Volante Negro Mec Pera",
                "code": 512,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1673
            },
            {
                "id": 1674,
                "name": "interruptor doble 9/15 embutido blanco mec",
                "code": 433,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1674
            },
            {
                "id": 1675,
                "name": "interruptor mas enchufe 10 embutido mec",
                "code": 509,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1675
            },
            {
                "id": 1676,
                "name": "interruptor simple 9/12 sobrepuesto blanco mec",
                "code": 446,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1676
            },
            {
                "id": 1677,
                "name": "interruptor simple embutido",
                "code": 427,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1677
            },
            {
                "id": 1678,
                "name": "interruptor simple (escalera,pasillo) 9/24 embutido blanco mec",
                "code": 428,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1678
            },
            {
                "id": 1679,
                "name": "interruptor triple 9/32 sobrepuesto blanco mec",
                "code": 430,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1679
            },
            {
                "id": 1680,
                "name": "interruptor triple 9/32 embutido blanco mec",
                "code": 443,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1680
            },
            {
                "id": 1681,
                "name": "interruptor triple embutido panelli",
                "code": 510,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1681
            },
            {
                "id": 1682,
                "name": "interruptor volante panelli",
                "code": 514,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1682
            },
            {
                "id": 1683,
                "name": "Juego Atornillador Electricista 6pcs Neva",
                "code": 1423,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1683
            },
            {
                "id": 1684,
                "name": "juego de dados con pinza ",
                "code": 31,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1684
            },
            {
                "id": 1685,
                "name": "set de destornillador de 2 pcs",
                "code": 29,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1685
            },
            {
                "id": 1686,
                "name": "Juego de escobilla acero de 4 pcs",
                "code": 79,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1686
            },
            {
                "id": 1687,
                "name": "Juego de herramientas Redline 7pcs",
                "code": 136,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1687
            },
            {
                "id": 1688,
                "name": "Juego de llave allen de 13 pcs",
                "code": 35,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1688
            },
            {
                "id": 1689,
                "name": "Juego de llave allen de 9 pcs",
                "code": 34,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1689
            },
            {
                "id": 1690,
                "name": "Juego de llave estrella de 8 pcs",
                "code": 36,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1690
            },
            {
                "id": 1691,
                "name": "Juego de sierra de chapa",
                "code": 161,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1691
            },
            {
                "id": 1692,
                "name": "Kit De Estanque De WC (fiting) Economico",
                "code": 1342,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1692
            },
            {
                "id": 1693,
                "name": "kit de estaño",
                "code": 374,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1693
            },
            {
                "id": 1694,
                "name": "Kit de rodillos y bandeja",
                "code": 134,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1022,
                "price_id": 1694
            },
            {
                "id": 1695,
                "name": "kit instalacion wc descarga al piso",
                "code": 685,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1695
            },
            {
                "id": 1696,
                "name": "Kit Wc  Estanque H-Full",
                "code": 870,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1696
            },
            {
                "id": 1697,
                "name": "klerat veneno para ratas",
                "code": 682,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1697
            },
            {
                "id": 1698,
                "name": "la gotita gel",
                "code": 378,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1698
            },
            {
                "id": 1699,
                "name": "la gotita tradicional",
                "code": 379,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1699
            },
            {
                "id": 1700,
                "name": "laca madera 1/4 galon",
                "code": 974,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1003,
                "price_id": 1700
            },
            {
                "id": 1701,
                "name": "Ladrillo Refractario Liso 236.5 2.5cm Unidad",
                "code": 1445,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1701
            },
            {
                "id": 1702,
                "name": "ladron de corriente  10 amp",
                "code": 421,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1702
            },
            {
                "id": 1703,
                "name": "ladron de corriente 16 con 10 amp",
                "code": 420,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1703
            },
            {
                "id": 1704,
                "name": "lampara portatil 5mts",
                "code": 1033,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1704
            },
            {
                "id": 1705,
                "name": "lampara solar exterior",
                "code": 413,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1705
            },
            {
                "id": 1706,
                "name": "Lapiz Carpintero BAHCO ",
                "code": 1405,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1706
            },
            {
                "id": 1707,
                "name": "lapiz carpintero bicolor",
                "code": 492,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1707
            },
            {
                "id": 1708,
                "name": "Lapiz Carpintero Negro Hoteche",
                "code": 493,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1708
            },
            {
                "id": 1709,
                "name": "latex aplauso galon blanco",
                "code": 568,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1709
            },
            {
                "id": 1710,
                "name": "latex aplauso tineta blanco",
                "code": 569,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1710
            },
            {
                "id": 1711,
                "name": "latex constructor 1gl lila soquina",
                "code": 1057,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1711
            },
            {
                "id": 1712,
                "name": "latex constructor 1gl rojo celeste agua soquina",
                "code": 1058,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1712
            },
            {
                "id": 1713,
                "name": "latex constructor 1gl rojo colonial soquina",
                "code": 1054,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1713
            },
            {
                "id": 1714,
                "name": "latex constructor 1gl sandia soquina",
                "code": 1055,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1714
            },
            {
                "id": 1715,
                "name": "latex constructor 1gl verde limon soquina",
                "code": 1056,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1715
            },
            {
                "id": 1716,
                "name": "laucha para destapar 5 mtrs x 5 mm",
                "code": 1240,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1716
            },
            {
                "id": 1717,
                "name": "led cascada azul navida",
                "code": 288,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1717
            },
            {
                "id": 1718,
                "name": "led navida arbol 300 led  azul",
                "code": 289,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1718
            },
            {
                "id": 1719,
                "name": "led navida arbol 300 led  rosado",
                "code": 290,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1719
            },
            {
                "id": 1720,
                "name": "Lengüeta de 7 pulgadas Marca Total",
                "code": 235,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1720
            },
            {
                "id": 1721,
                "name": "liensa 65 metros",
                "code": 382,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1721
            },
            {
                "id": 1722,
                "name": "Lija al Agua 121",
                "code": 1265,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1722
            },
            {
                "id": 1723,
                "name": "Lija al Agua 600",
                "code": 1264,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1723
            },
            {
                "id": 1724,
                "name": "Lija Fierro 120",
                "code": 1267,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1724
            },
            {
                "id": 1725,
                "name": "Lija Fierro 180",
                "code": 1266,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1725
            },
            {
                "id": 1726,
                "name": "Lija Fierro 80",
                "code": 1268,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1726
            },
            {
                "id": 1727,
                "name": "Lija Madera 120",
                "code": 1271,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1727
            },
            {
                "id": 1728,
                "name": "Lija Madera 150",
                "code": 1272,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1728
            },
            {
                "id": 1729,
                "name": "Lija Madera 60",
                "code": 1270,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1729
            },
            {
                "id": 1730,
                "name": "lija madera grano 180",
                "code": 1190,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1730
            },
            {
                "id": 1731,
                "name": "Lijadora Bauker 200W ",
                "code": 1389,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1731
            },
            {
                "id": 1732,
                "name": "lijadora orvital 1/4 hoja black decker",
                "code": 277,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1732
            },
            {
                "id": 1733,
                "name": "Lima Para Motosierra 4,8mm ",
                "code": 1336,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1733
            },
            {
                "id": 1734,
                "name": "Lima Para Motosierra 4,8mm Con Mango",
                "code": 1337,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1734
            },
            {
                "id": 1735,
                "name": "Lima plana de 8 pulgadas",
                "code": 97,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1735
            },
            {
                "id": 1736,
                "name": "Lima triangular de 8 pulgadas",
                "code": 98,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1736
            },
            {
                "id": 1737,
                "name": "linga economica",
                "code": 501,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1737
            },
            {
                "id": 1738,
                "name": "linterna cabeza",
                "code": 282,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1738
            },
            {
                "id": 1739,
                "name": "Linterna Hoteche 3Watt",
                "code": 1344,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1739
            },
            {
                "id": 1740,
                "name": "linterna llavero",
                "code": 274,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1740
            },
            {
                "id": 1741,
                "name": "linterna magnetica",
                "code": 283,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1741
            },
            {
                "id": 1742,
                "name": "linterna magnetica roja",
                "code": 336,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1742
            },
            {
                "id": 1743,
                "name": "Llana dentada Marca Moller",
                "code": 204,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1743
            },
            {
                "id": 1744,
                "name": "Llana Fraguadora Makawa",
                "code": 1425,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1744
            },
            {
                "id": 1745,
                "name": "Llana lisa Marca Toolmalk",
                "code": 203,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1010,
                "price_id": 1745
            },
            {
                "id": 1746,
                "name": "llave angular HE-HE 1/2 HANS",
                "code": 705,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1746
            },
            {
                "id": 1747,
                "name": "llave bola de 1/2 de jardin",
                "code": 447,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1041,
                "price_id": 1747
            },
            {
                "id": 1748,
                "name": "llave campana soldar cromada de paso de 3/4",
                "code": 558,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1041,
                "price_id": 1748
            },
            {
                "id": 1749,
                "name": "llave campana soldar cromada de paso de media",
                "code": 554,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1041,
                "price_id": 1749
            },
            {
                "id": 1750,
                "name": "llave de bujia 16 mm",
                "code": 528,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1750
            },
            {
                "id": 1751,
                "name": "llave de bujia 21 mm",
                "code": 529,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1751
            },
            {
                "id": 1752,
                "name": "llave de cruz de rueda de vehiculo",
                "code": 1066,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1752
            },
            {
                "id": 1753,
                "name": "llave de jardin de  bola 3/4",
                "code": 559,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1041,
                "price_id": 1753
            },
            {
                "id": 1754,
                "name": "llave de mandril drill chuck 10mm",
                "code": 496,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1754
            },
            {
                "id": 1755,
                "name": "llave de mandril drill chuck 13mm",
                "code": 495,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1755
            },
            {
                "id": 1756,
                "name": "Llave De Mandril Universal 6-16mm",
                "code": 1279,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1756
            },
            {
                "id": 1757,
                "name": "Llave de paso (ducha) Pvc Hid De 20mm ",
                "code": 899,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1757
            },
            {
                "id": 1758,
                "name": "llave de paso de gas HI-HE media",
                "code": 618,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1758
            },
            {
                "id": 1759,
                "name": "llave de paso hi-hi de bola 1/2",
                "code": 551,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1759
            },
            {
                "id": 1760,
                "name": "llave de paso hi-hi de bola de 1 pulg",
                "code": 553,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1760
            },
            {
                "id": 1761,
                "name": "llave de paso hi-hi de bola de 3/4pulg",
                "code": 552,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1761
            },
            {
                "id": 1762,
                "name": "llave de paso soldar 3/4",
                "code": 557,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1762
            },
            {
                "id": 1763,
                "name": "llave de paso soldar media",
                "code": 556,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1763
            },
            {
                "id": 1764,
                "name": "llave electrica eco",
                "code": 1173,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1764
            },
            {
                "id": 1765,
                "name": "Llave francesa 10 pulgadas",
                "code": 39,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1765
            },
            {
                "id": 1766,
                "name": "Llave francesa 6 pulgadas",
                "code": 37,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1766
            },
            {
                "id": 1767,
                "name": "Llave francesa 8 pulgadas",
                "code": 38,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1767
            },
            {
                "id": 1768,
                "name": "llave jardin media he-he",
                "code": 303,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1768
            },
            {
                "id": 1769,
                "name": "llave labaplato economica cuello signe",
                "code": 711,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1769
            },
            {
                "id": 1770,
                "name": "Llave Lavadora Labadero Doble",
                "code": 933,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1770
            },
            {
                "id": 1771,
                "name": "Llave Lavamano Eco H-Full",
                "code": 694,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1771
            },
            {
                "id": 1772,
                "name": "llave lavaplato un agua",
                "code": 693,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1772
            },
            {
                "id": 1773,
                "name": "llave lavatorio individual",
                "code": 695,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1773
            },
            {
                "id": 1774,
                "name": "Llave marca Stilson de 14 pulgadas",
                "code": 32,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1774
            },
            {
                "id": 1775,
                "name": "llave paso 20 ppr",
                "code": 744,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1775
            },
            {
                "id": 1776,
                "name": "llave paso 25 ppr",
                "code": 745,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1776
            },
            {
                "id": 1777,
                "name": "llave paso 32 ppr",
                "code": 743,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1777
            },
            {
                "id": 1778,
                "name": "llave paso campana cromada 20 ppr",
                "code": 746,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1778
            },
            {
                "id": 1779,
                "name": "llave paso campana cromada 25 ppr",
                "code": 747,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1779
            },
            {
                "id": 1780,
                "name": "llave paso  25 mm pvc hidraulico",
                "code": 898,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1780
            },
            {
                "id": 1781,
                "name": "llave punta coroa    24 mm",
                "code": 541,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1781
            },
            {
                "id": 1782,
                "name": "llave punta corona  12 mm",
                "code": 532,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1782
            },
            {
                "id": 1783,
                "name": "llave punta corona  13 mm",
                "code": 533,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1783
            },
            {
                "id": 1784,
                "name": "llave punta corona  14 mm",
                "code": 534,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1784
            },
            {
                "id": 1785,
                "name": "llave punta corona  15 mm",
                "code": 535,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1785
            },
            {
                "id": 1786,
                "name": "llave punta corona  17 mm",
                "code": 536,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1786
            },
            {
                "id": 1787,
                "name": "llave punta corona  19 mm",
                "code": 537,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1787
            },
            {
                "id": 1788,
                "name": "llave punta corona  21mm",
                "code": 538,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1788
            },
            {
                "id": 1789,
                "name": "llave punta corona  23 mm",
                "code": 540,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1789
            },
            {
                "id": 1790,
                "name": "llave punta corona 10 mm",
                "code": 530,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1790
            },
            {
                "id": 1791,
                "name": "llave punta corona 11 mm",
                "code": 531,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1791
            },
            {
                "id": 1792,
                "name": "llave punta corona 22 mm",
                "code": 539,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1792
            },
            {
                "id": 1793,
                "name": "llave punta corona 27 mm",
                "code": 542,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1793
            },
            {
                "id": 1794,
                "name": "Llave saca filtro",
                "code": 70,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1794
            },
            {
                "id": 1795,
                "name": "lPVC HIDRAULICO 50 MM",
                "code": 1244,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1795
            },
            {
                "id": 1796,
                "name": "Luz Trasera Bicicleta Recargable",
                "code": 1367,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1796
            },
            {
                "id": 1797,
                "name": "macho de 10 amp fanton",
                "code": 440,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1797
            },
            {
                "id": 1798,
                "name": "macho de 16 amp volante",
                "code": 504,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1798
            },
            {
                "id": 1799,
                "name": "maguera jardin 3/4",
                "code": 1080,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1041,
                "price_id": 1799
            },
            {
                "id": 1800,
                "name": "Malla Bizcocho 1.5x25mts",
                "code": 1028,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1800
            },
            {
                "id": 1801,
                "name": "malla acma cierre galbanizada 1,8 X 3 mtrs",
                "code": 1149,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1801
            },
            {
                "id": 1802,
                "name": "Malla Acma Cierre Galbanizada 1.8x 2 Mtrs",
                "code": 1151,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1802
            },
            {
                "id": 1803,
                "name": "Malla Acma Cierre Galvanizada 1.8 X 5 Mtrs",
                "code": 1150,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1803
            },
            {
                "id": 1804,
                "name": "malla asadera 50x60 cm",
                "code": 1039,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1804
            },
            {
                "id": 1805,
                "name": "malla asadera 60x 90cm",
                "code": 1038,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1805
            },
            {
                "id": 1806,
                "name": "malla cierre 7 hebras (ovejera )",
                "code": 1124,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1806
            },
            {
                "id": 1807,
                "name": "malla harnero por metro",
                "code": 1123,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1807
            },
            {
                "id": 1808,
                "name": "malla mosquetera por metro",
                "code": 1122,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1808
            },
            {
                "id": 1809,
                "name": "malla pollo  gallinero de 1,2 de alto   precio por metro",
                "code": 1076,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1809
            },
            {
                "id": 1810,
                "name": "malla pollo  gallinero de metro de alto   precio por metro",
                "code": 1075,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1810
            },
            {
                "id": 1811,
                "name": "malla rachel por metro",
                "code": 1121,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1811
            },
            {
                "id": 1812,
                "name": "malla soldada 0,90 mtrs de alto precio por metro",
                "code": 1074,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1812
            },
            {
                "id": 1813,
                "name": "Mango Madera Para Azadon ",
                "code": 1249,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1042,
                "price_id": 1813
            },
            {
                "id": 1814,
                "name": "Manguera 3/4",
                "code": 1263,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1814
            },
            {
                "id": 1815,
                "name": "Manguera De Gas 1/2",
                "code": 1250,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1815
            },
            {
                "id": 1816,
                "name": "manguera de nivel 5/16",
                "code": 1207,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1816
            },
            {
                "id": 1817,
                "name": "manguera de presion",
                "code": 1084,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1817
            },
            {
                "id": 1818,
                "name": "manguera jardin 1/2",
                "code": 1079,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1818
            },
            {
                "id": 1819,
                "name": "manguera para gas  1/2",
                "code": 1081,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1819
            },
            {
                "id": 1820,
                "name": "manguera planza 3/4",
                "code": 1086,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1820
            },
            {
                "id": 1821,
                "name": "manguera planza de media",
                "code": 1085,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1821
            },
            {
                "id": 1822,
                "name": "manguera tranparente de 6 mm",
                "code": 1082,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1822
            },
            {
                "id": 1823,
                "name": "manguera transparente de 9 mm",
                "code": 1083,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1823
            },
            {
                "id": 1824,
                "name": "Manguito Flexible Wc Excentrico",
                "code": 549,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1824
            },
            {
                "id": 1825,
                "name": "manilla cromada estanque metalica",
                "code": 942,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1825
            },
            {
                "id": 1826,
                "name": "Manilla Fierro Forjado colonial",
                "code": 1354,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1826
            },
            {
                "id": 1827,
                "name": "MANILLA PLASTICA ESTANQUE WC ",
                "code": 1381,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1827
            },
            {
                "id": 1828,
                "name": "Manilla Puerta 5 Pulgadas Lata",
                "code": 1248,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1828
            },
            {
                "id": 1829,
                "name": "manta de agua",
                "code": 936,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1829
            },
            {
                "id": 1830,
                "name": "maquina fumigadora de 15 lts",
                "code": 1009,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1830
            },
            {
                "id": 1831,
                "name": "maquina termofusion 800-1500w total",
                "code": 1179,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1831
            },
            {
                "id": 1832,
                "name": "Marco de cierra con hoja",
                "code": 107,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1832
            },
            {
                "id": 1833,
                "name": "marco de puerta de 7 cm",
                "code": 1000,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1833
            },
            {
                "id": 1834,
                "name": "marco de puerta de 9 cm",
                "code": 1001,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1834
            },
            {
                "id": 1835,
                "name": "Marmolina Blanca EF5 Tineta Tajamar",
                "code": 573,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1835
            },
            {
                "id": 1836,
                "name": "marmolina tajamar R1 blanca galon",
                "code": 578,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1836
            },
            {
                "id": 1837,
                "name": "marmolina tajamar R1 tineta blanca",
                "code": 572,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1837
            },
            {
                "id": 1838,
                "name": "Martillo Carpintero RedLine 24 Oz ",
                "code": 1384,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1838
            },
            {
                "id": 1839,
                "name": "Martillo Carpintero Uberman 20 OZ",
                "code": 1383,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1839
            },
            {
                "id": 1840,
                "name": "Martillo de peña chico",
                "code": 53,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1840
            },
            {
                "id": 1841,
                "name": "Martillo de peña grande",
                "code": 54,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1841
            },
            {
                "id": 1842,
                "name": "martillo fibra de vidrio de uña curva 16oz t",
                "code": 606,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1842
            },
            {
                "id": 1843,
                "name": "Martillo Goma 8 Onza",
                "code": 1273,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1843
            },
            {
                "id": 1844,
                "name": "Martillo mango den fibre marca Trupper",
                "code": 51,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1844
            },
            {
                "id": 1845,
                "name": "mascara de soldar delta",
                "code": 297,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1845
            },
            {
                "id": 1846,
                "name": "Mascara De Soldar Economica ",
                "code": 1359,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1846
            },
            {
                "id": 1847,
                "name": "mascara de soldar kraster",
                "code": 296,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1847
            },
            {
                "id": 1848,
                "name": "mascara de soldar normal 2x4.1/2 toolcraft",
                "code": 298,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1848
            },
            {
                "id": 1849,
                "name": "masilla magica 575 grms",
                "code": 669,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1849
            },
            {
                "id": 1850,
                "name": "mastil bandera 2,4 mts blanco",
                "code": 1059,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1001,
                "price_id": 1850
            },
            {
                "id": 1851,
                "name": "Mazo de goma grande para cerámica",
                "code": 55,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1851
            },
            {
                "id": 1852,
                "name": "mecha de estufa a parafina",
                "code": 328,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1852
            },
            {
                "id": 1853,
                "name": "media caña",
                "code": 1005,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1853
            },
            {
                "id": 1854,
                "name": "Monoblock Lavatorio Master H-Full",
                "code": 1411,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1854
            },
            {
                "id": 1855,
                "name": "monomando ducha eco",
                "code": 692,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1855
            },
            {
                "id": 1856,
                "name": "monomando ducha hahn",
                "code": 688,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1856
            },
            {
                "id": 1857,
                "name": "monomando ducha mallorca mixa",
                "code": 689,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1857
            },
            {
                "id": 1858,
                "name": "Monomando Lavamanos Mixa",
                "code": 696,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1858
            },
            {
                "id": 1859,
                "name": "Monomando Lavamanos Taumm",
                "code": 1340,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1859
            },
            {
                "id": 1860,
                "name": "monomando lavaplatos vertical eco hant",
                "code": 622,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1860
            },
            {
                "id": 1861,
                "name": "Monomando Lavaplatos Vertical Eco H-Full",
                "code": 621,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1861
            },
            {
                "id": 1862,
                "name": "Monomando Lavatorio Eco H-Full",
                "code": 1413,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1862
            },
            {
                "id": 1863,
                "name": "mosqueton de acero 5716 8MM",
                "code": 343,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1863
            },
            {
                "id": 1864,
                "name": "multimetro digital fp007",
                "code": 604,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1864
            },
            {
                "id": 1865,
                "name": "Muñequera Manubrio Bicicleta",
                "code": 11,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1865
            },
            {
                "id": 1866,
                "name": "naylon negro por metro",
                "code": 1078,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1866
            },
            {
                "id": 1867,
                "name": "Naylon Transparente Manga 2 Mtros A 4 Metros",
                "code": 1077,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1867
            },
            {
                "id": 1868,
                "name": "Niple Bronce He/He 1/2",
                "code": 727,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1868
            },
            {
                "id": 1869,
                "name": "niple he - he de 1 pulg",
                "code": 862,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1869
            },
            {
                "id": 1870,
                "name": "niple he - he de 1/2 pulg",
                "code": 864,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1870
            },
            {
                "id": 1871,
                "name": "niple he - he de 3/4 pulg",
                "code": 863,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1871
            },
            {
                "id": 1872,
                "name": "Niple he he 3/8 bronce",
                "code": 728,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1872
            },
            {
                "id": 1873,
                "name": "Nivel De 24 Pulgada Hoteche",
                "code": 704,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1873
            },
            {
                "id": 1874,
                "name": "Nivel de aluminio de 18 pulgadas",
                "code": 19,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1874
            },
            {
                "id": 1875,
                "name": "Nivel de metro",
                "code": 13,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1875
            },
            {
                "id": 1876,
                "name": "Nivel torpedo pequeño",
                "code": 108,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1032,
                "price_id": 1876
            },
            {
                "id": 1877,
                "name": "oleo opaco damasco tricolor  1/4 galon",
                "code": 983,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1877
            },
            {
                "id": 1878,
                "name": "orilladora",
                "code": 370,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1878
            },
            {
                "id": 1879,
                "name": "osb 11,5  mm",
                "code": 367,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1879
            },
            {
                "id": 1880,
                "name": "osb 9,5 mm",
                "code": 364,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1880
            },
            {
                "id": 1881,
                "name": "pala cuadrada mango largo",
                "code": 607,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1881
            },
            {
                "id": 1882,
                "name": "Pala Punta Huevo Sin Mango H-Full",
                "code": 325,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1882
            },
            {
                "id": 1883,
                "name": "pala punta huevo tramontina",
                "code": 984,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1883
            },
            {
                "id": 1884,
                "name": "parche bicicleta grande",
                "code": 904,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1884
            },
            {
                "id": 1885,
                "name": "parche de piscina",
                "code": 332,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1885
            },
            {
                "id": 1886,
                "name": "PASTA MURO 1KG INTERIOR F-6 TAJAMAR",
                "code": 1316,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1886
            },
            {
                "id": 1887,
                "name": "pasta muro exterior tajamar galon",
                "code": 575,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1887
            },
            {
                "id": 1888,
                "name": "pasta muro exterior tajamar tineta",
                "code": 571,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1888
            },
            {
                "id": 1889,
                "name": "pasta muro interior Pm-15 soquina galon",
                "code": 577,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1889
            },
            {
                "id": 1890,
                "name": "Pasta muro Interior Soquina Tineta",
                "code": 229,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1890
            },
            {
                "id": 1891,
                "name": "Pasta Muro Interior Tajamar F-15 (tineta)",
                "code": 1261,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1891
            },
            {
                "id": 1892,
                "name": "pasta muro interior tajamar galon",
                "code": 576,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1892
            },
            {
                "id": 1893,
                "name": "Pasta muro tricolor en tineta",
                "code": 228,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1893
            },
            {
                "id": 1894,
                "name": "pasta para juntas placa yeso carton",
                "code": 672,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1894
            },
            {
                "id": 1895,
                "name": "pasta para soldar 1mt con estaño",
                "code": 671,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1895
            },
            {
                "id": 1896,
                "name": "pasta para soldar estaño 100 grs",
                "code": 1163,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1896
            },
            {
                "id": 1897,
                "name": "PASTA PULIR 30 GR MOTOR LIFE",
                "code": 1315,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1897
            },
            {
                "id": 1898,
                "name": "pega mosca fly catcher",
                "code": 261,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1013,
                "price_id": 1898
            },
            {
                "id": 1899,
                "name": "Pegamento Ecole",
                "code": 1430,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1899
            },
            {
                "id": 1900,
                "name": "Pegamento porcelanoto Marca Weber",
                "code": 224,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1900
            },
            {
                "id": 1901,
                "name": "perfil angulo 20x20x2",
                "code": 1106,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1901
            },
            {
                "id": 1902,
                "name": "perfil angulo 25x25x2",
                "code": 1107,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1902
            },
            {
                "id": 1903,
                "name": "perfil angulo 30x30x2",
                "code": 1105,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1903
            },
            {
                "id": 1904,
                "name": "PERFIL COSTANERA 80X40X15X2MM",
                "code": 1317,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1904
            },
            {
                "id": 1905,
                "name": "perfil cuadrado 100x100x2",
                "code": 1104,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1905
            },
            {
                "id": 1906,
                "name": "perfil cuadrado 15x15x1,5",
                "code": 1098,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1906
            },
            {
                "id": 1907,
                "name": "perfil cuadrado 15x15x2",
                "code": 1099,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1907
            },
            {
                "id": 1908,
                "name": "perfil cuadrado 20x20x2",
                "code": 1100,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1908
            },
            {
                "id": 1909,
                "name": "PERFIL CUADRADO 30X30X2MM X 6MTS",
                "code": 1318,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1909
            },
            {
                "id": 1910,
                "name": "perfil cuadrado 40x40x2",
                "code": 1101,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1910
            },
            {
                "id": 1911,
                "name": "perfil cuadrado 50x50x2MM X 3MTS",
                "code": 1102,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1911
            },
            {
                "id": 1912,
                "name": "perfil cuadrado 75x75x2",
                "code": 1103,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1912
            },
            {
                "id": 1913,
                "name": "Perfil Rectangular 20x30x1.5mm",
                "code": 1092,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1913
            },
            {
                "id": 1914,
                "name": "perfil rectangular 30x20x2",
                "code": 1093,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1914
            },
            {
                "id": 1915,
                "name": "perfil rectangular 40x20x1,5",
                "code": 1094,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1915
            },
            {
                "id": 1916,
                "name": "perfil rectangular 40x20x2",
                "code": 1095,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1916
            },
            {
                "id": 1917,
                "name": "Perfil Rectangular 40x30x2mm",
                "code": 1403,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1917
            },
            {
                "id": 1918,
                "name": "Perfil Rectangular 50x30x2mm x 6mts",
                "code": 1096,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1918
            },
            {
                "id": 1919,
                "name": "perfil rectangular 80402",
                "code": 1097,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1919
            },
            {
                "id": 1920,
                "name": "perfil u 30302",
                "code": 1119,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1920
            },
            {
                "id": 1921,
                "name": "Perillon De Puerta",
                "code": 1364,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1921
            },
            {
                "id": 1922,
                "name": "perillon manilla puerta acceso",
                "code": 508,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1922
            },
            {
                "id": 1923,
                "name": "Perno Anclaje 3/8 x 5 ",
                "code": 1439,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1923
            },
            {
                "id": 1924,
                "name": "perno hexagonal punta broca 12 x 1 1/2 pulgadas",
                "code": 1300,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1924
            },
            {
                "id": 1925,
                "name": "Picaporte 4 pulgadas",
                "code": 118,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1925
            },
            {
                "id": 1926,
                "name": "picaporte de 3  pulgadas",
                "code": 183,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1926
            },
            {
                "id": 1927,
                "name": "Picaporte de 4 pulgadas",
                "code": 119,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1927
            },
            {
                "id": 1928,
                "name": "Picaporte dorado de 5 pulgadas",
                "code": 120,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1928
            },
            {
                "id": 1929,
                "name": "Picaporte lioli 2 pulgadas",
                "code": 122,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1929
            },
            {
                "id": 1930,
                "name": "Picaporte plano de 4 pulgadas",
                "code": 121,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1930
            },
            {
                "id": 1931,
                "name": "Pico loro de 12 pulgadas",
                "code": 127,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1931
            },
            {
                "id": 1932,
                "name": "piedra alumbre 1 kg",
                "code": 706,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1043,
                "price_id": 1932
            },
            {
                "id": 1933,
                "name": "PIEDRA PARA AFILAR CUCHILLOS",
                "code": 1222,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1933
            },
            {
                "id": 1934,
                "name": "pila alkalina 23 amp 12 volt",
                "code": 327,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1008,
                "price_id": 1934
            },
            {
                "id": 1935,
                "name": "Pilar Electro Soldado 15x15x3 Mts 8 Mm",
                "code": 1029,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1044,
                "price_id": 1935
            },
            {
                "id": 1936,
                "name": "pileta universal 100x50x40",
                "code": 562,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1936
            },
            {
                "id": 1937,
                "name": "pileta universal 110x75x50x40",
                "code": 561,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1937
            },
            {
                "id": 1938,
                "name": "Pinta cal",
                "code": 223,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1938
            },
            {
                "id": 1939,
                "name": "pintura en bolsa  BLANCO",
                "code": 587,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1939
            },
            {
                "id": 1940,
                "name": "pintura en bolsa  blanco invierno",
                "code": 589,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1940
            },
            {
                "id": 1941,
                "name": "pintura en bolsa  CELESTE",
                "code": 585,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1941
            },
            {
                "id": 1942,
                "name": "pintura en bolsa  damasco",
                "code": 590,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1942
            },
            {
                "id": 1943,
                "name": "pintura en bolsa  NEGRA",
                "code": 584,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1943
            },
            {
                "id": 1944,
                "name": "pintura en bolsa  plomo GRIS",
                "code": 592,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1944
            },
            {
                "id": 1945,
                "name": "pintura en bolsa  rosado palido",
                "code": 580,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1945
            },
            {
                "id": 1946,
                "name": "pintura en bolsa  verde esmeralda",
                "code": 588,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1946
            },
            {
                "id": 1947,
                "name": "pintura en bolsa  VERDE NILO",
                "code": 586,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1947
            },
            {
                "id": 1948,
                "name": "pintura en bolsa Cafe Chocolate",
                "code": 583,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1948
            },
            {
                "id": 1949,
                "name": "pintura en bolsa lila",
                "code": 579,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1949
            },
            {
                "id": 1950,
                "name": "pintura en bolsa naranja",
                "code": 581,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1950
            },
            {
                "id": 1951,
                "name": "Pintura En Bolsa Rojo Colonial",
                "code": 1314,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1951
            },
            {
                "id": 1952,
                "name": "pintura en bolsa SANDIA",
                "code": 582,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1952
            },
            {
                "id": 1953,
                "name": "pintura en bolsa verde Manzana",
                "code": 591,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1036,
                "price_id": 1953
            },
            {
                "id": 1954,
                "name": "Pinza marca Fujimo de 8 pulgadas",
                "code": 40,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1954
            },
            {
                "id": 1955,
                "name": "Pinza para anillo de 5 pulgadas",
                "code": 27,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1955
            },
            {
                "id": 1956,
                "name": "Pinza para anillo de 7 pulgadas",
                "code": 28,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1012,
                "price_id": 1956
            },
            {
                "id": 1957,
                "name": "piola de  freno delantero",
                "code": 275,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1027,
                "price_id": 1957
            },
            {
                "id": 1958,
                "name": "Pistola De Calor Bauker 2000W",
                "code": 1392,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1958
            },
            {
                "id": 1959,
                "name": "pistola de riego economica",
                "code": 1168,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1959
            },
            {
                "id": 1960,
                "name": "Pistola Infladora Emtop",
                "code": 1433,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1960
            },
            {
                "id": 1961,
                "name": "Pistola Para Pintar De Aluminio Baja Presion",
                "code": 1408,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1961
            },
            {
                "id": 1962,
                "name": "Pistola Pintar 450W 800cc Emtop",
                "code": 1432,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1037,
                "price_id": 1962
            },
            {
                "id": 1963,
                "name": "piton de mangera",
                "code": 263,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1009,
                "price_id": 1963
            },
            {
                "id": 1964,
                "name": "Piton Lavamanos Con Cadena 25 Cm",
                "code": 1380,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1964
            },
            {
                "id": 1965,
                "name": "plafon foco led de 12 watts cuadrado",
                "code": 1053,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1965
            },
            {
                "id": 1966,
                "name": "plana 7",
                "code": 1176,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1038,
                "price_id": 1966
            },
            {
                "id": 1967,
                "name": "Platacho de hela",
                "code": 208,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1045,
                "price_id": 1967
            },
            {
                "id": 1968,
                "name": "PLETINA 12 X 3 MM",
                "code": 1442,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1968
            },
            {
                "id": 1969,
                "name": "pletina 16x3",
                "code": 1109,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1969
            },
            {
                "id": 1970,
                "name": "pletina 20x3",
                "code": 1110,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1970
            },
            {
                "id": 1971,
                "name": "pletina 38x3",
                "code": 1111,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1971
            },
            {
                "id": 1972,
                "name": "pletina 50x3",
                "code": 1112,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1015,
                "price_id": 1972
            },
            {
                "id": 1973,
                "name": "Plomo Cono 500 gr",
                "code": 186,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1045,
                "price_id": 1973
            },
            {
                "id": 1974,
                "name": "plomo dos en uno 340 gr",
                "code": 321,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1042,
                "price_id": 1974
            },
            {
                "id": 1975,
                "name": "Plumilla de auto",
                "code": 72,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1020,
                "price_id": 1975
            },
            {
                "id": 1976,
                "name": "POLICARBONATO ACANALADO  3 METROS",
                "code": 1237,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1976
            },
            {
                "id": 1977,
                "name": "POLICARBONATO ACANALADO 2 METROS",
                "code": 1235,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1977
            },
            {
                "id": 1978,
                "name": "POLICARBONATO ACANALADO 2.5 MT X 0.5 MM",
                "code": 1236,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1978
            },
            {
                "id": 1979,
                "name": "POLICARBONATO ACANALADO 3.66 METROS",
                "code": 1238,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1025,
                "price_id": 1979
            },
            {
                "id": 1980,
                "name": "pomel con golilla 1 pulg",
                "code": 313,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1980
            },
            {
                "id": 1981,
                "name": "Pomel Con Golilla 1/2",
                "code": 1331,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1981
            },
            {
                "id": 1982,
                "name": "Pomel Con Golilla 3/4",
                "code": 1333,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1982
            },
            {
                "id": 1983,
                "name": "Pomel Con Golilla 5/8",
                "code": 1332,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1983
            },
            {
                "id": 1984,
                "name": "porta candado simple negro",
                "code": 1197,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1040,
                "price_id": 1984
            },
            {
                "id": 1985,
                "name": "porta electrodo 600 amp",
                "code": 901,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1985
            },
            {
                "id": 1986,
                "name": "porta martillo  giratorio H FULL",
                "code": 615,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1004,
                "price_id": 1986
            },
            {
                "id": 1987,
                "name": "poxipol transparente",
                "code": 380,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1005,
                "price_id": 1987
            },
            {
                "id": 1988,
                "name": "ppr 25mm 6mts",
                "code": 1015,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1988
            },
            {
                "id": 1989,
                "name": "codo he 20 x1/2 ppr ",
                "code": 780,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1989
            },
            {
                "id": 1990,
                "name": "codo he 25 x 1/2 ppr",
                "code": 779,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1990
            },
            {
                "id": 1991,
                "name": "codo he 25 x 3/4 ppr",
                "code": 781,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1991
            },
            {
                "id": 1992,
                "name": " codo hi 20 x media ppr ",
                "code": 777,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1992
            },
            {
                "id": 1993,
                "name": "codo hi 25 x 3/4 ppr",
                "code": 778,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1993
            },
            {
                "id": 1994,
                "name": "PPR TEE F-F-F 40 MM",
                "code": 1326,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1994
            },
            {
                "id": 1995,
                "name": "TERMINAL  HI 40 MM X 1. 1/4 ppr ",
                "code": 1324,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1995
            },
            {
                "id": 1996,
                "name": "terminal he 20 x 1/2 ppr",
                "code": 776,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1996
            },
            {
                "id": 1997,
                "name": " TERMINAL HE 40 MM X 1. 1/4 ppr ",
                "code": 1323,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1997
            },
            {
                "id": 1998,
                "name": "terminal hi 20 x 1/2 ppr",
                "code": 793,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1998
            },
            {
                "id": 1999,
                "name": "PPR TUBO PN-20 32MM 6 MTS",
                "code": 1322,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 1999
            },
            {
                "id": 2000,
                "name": " UNION AMERICANA  40 MM ppr",
                "code": 1325,
                "favorite": 0,
                "stock_control": 1,
                "category_id": 1023,
                "price_id": 2000
            }
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

        await queryInterface.bulkInsert('stocks',
        [
            {
                "id": 1001,
                "storage_id": 1001,
                "product_id": 1001,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1002,
                "storage_id": 1001,
                "product_id": 1002,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1003,
                "storage_id": 1001,
                "product_id": 1003,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1004,
                "storage_id": 1001,
                "product_id": 1004,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1005,
                "storage_id": 1001,
                "product_id": 1005,
                "stock": 98,
                "critical_stock": 0
            },
            {
                "id": 1006,
                "storage_id": 1001,
                "product_id": 1006,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1007,
                "storage_id": 1001,
                "product_id": 1007,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1008,
                "storage_id": 1001,
                "product_id": 1008,
                "stock": 50,
                "critical_stock": 0
            },
            {
                "id": 1009,
                "storage_id": 1001,
                "product_id": 1009,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1010,
                "storage_id": 1001,
                "product_id": 1010,
                "stock": 40,
                "critical_stock": 0
            },
            {
                "id": 1011,
                "storage_id": 1001,
                "product_id": 1011,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1012,
                "storage_id": 1001,
                "product_id": 1012,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1013,
                "storage_id": 1001,
                "product_id": 1013,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1014,
                "storage_id": 1001,
                "product_id": 1014,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1015,
                "storage_id": 1001,
                "product_id": 1015,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1016,
                "storage_id": 1001,
                "product_id": 1016,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1017,
                "storage_id": 1001,
                "product_id": 1017,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1018,
                "storage_id": 1001,
                "product_id": 1018,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1019,
                "storage_id": 1001,
                "product_id": 1019,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1020,
                "storage_id": 1001,
                "product_id": 1020,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1021,
                "storage_id": 1001,
                "product_id": 1021,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1022,
                "storage_id": 1001,
                "product_id": 1022,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1023,
                "storage_id": 1001,
                "product_id": 1023,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1024,
                "storage_id": 1001,
                "product_id": 1024,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1025,
                "storage_id": 1001,
                "product_id": 1025,
                "stock": 11,
                "critical_stock": 0
            },
            {
                "id": 1026,
                "storage_id": 1001,
                "product_id": 1026,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1027,
                "storage_id": 1001,
                "product_id": 1027,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1028,
                "storage_id": 1001,
                "product_id": 1028,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1029,
                "storage_id": 1001,
                "product_id": 1029,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1030,
                "storage_id": 1001,
                "product_id": 1030,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1031,
                "storage_id": 1001,
                "product_id": 1031,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1032,
                "storage_id": 1001,
                "product_id": 1032,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1033,
                "storage_id": 1001,
                "product_id": 1033,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1034,
                "storage_id": 1001,
                "product_id": 1034,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1035,
                "storage_id": 1001,
                "product_id": 1035,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1036,
                "storage_id": 1001,
                "product_id": 1036,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1037,
                "storage_id": 1001,
                "product_id": 1037,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1038,
                "storage_id": 1001,
                "product_id": 1038,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1039,
                "storage_id": 1001,
                "product_id": 1039,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1040,
                "storage_id": 1001,
                "product_id": 1040,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1041,
                "storage_id": 1001,
                "product_id": 1041,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1042,
                "storage_id": 1001,
                "product_id": 1042,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1043,
                "storage_id": 1001,
                "product_id": 1043,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1044,
                "storage_id": 1001,
                "product_id": 1044,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1045,
                "storage_id": 1001,
                "product_id": 1045,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1046,
                "storage_id": 1001,
                "product_id": 1046,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1047,
                "storage_id": 1001,
                "product_id": 1047,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1048,
                "storage_id": 1001,
                "product_id": 1048,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1049,
                "storage_id": 1001,
                "product_id": 1049,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1050,
                "storage_id": 1001,
                "product_id": 1050,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1051,
                "storage_id": 1001,
                "product_id": 1051,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1052,
                "storage_id": 1001,
                "product_id": 1052,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1053,
                "storage_id": 1001,
                "product_id": 1053,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1054,
                "storage_id": 1001,
                "product_id": 1054,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1055,
                "storage_id": 1001,
                "product_id": 1055,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1056,
                "storage_id": 1001,
                "product_id": 1056,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1057,
                "storage_id": 1001,
                "product_id": 1057,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1058,
                "storage_id": 1001,
                "product_id": 1058,
                "stock": 300,
                "critical_stock": 0
            },
            {
                "id": 1059,
                "storage_id": 1001,
                "product_id": 1059,
                "stock": 300,
                "critical_stock": 0
            },
            {
                "id": 1060,
                "storage_id": 1001,
                "product_id": 1060,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1061,
                "storage_id": 1001,
                "product_id": 1061,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1062,
                "storage_id": 1001,
                "product_id": 1062,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1063,
                "storage_id": 1001,
                "product_id": 1063,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1064,
                "storage_id": 1001,
                "product_id": 1064,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1065,
                "storage_id": 1001,
                "product_id": 1065,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1066,
                "storage_id": 1001,
                "product_id": 1066,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1067,
                "storage_id": 1001,
                "product_id": 1067,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1068,
                "storage_id": 1001,
                "product_id": 1068,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1069,
                "storage_id": 1001,
                "product_id": 1069,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1070,
                "storage_id": 1001,
                "product_id": 1070,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1071,
                "storage_id": 1001,
                "product_id": 1071,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1072,
                "storage_id": 1001,
                "product_id": 1072,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1073,
                "storage_id": 1001,
                "product_id": 1073,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1074,
                "storage_id": 1001,
                "product_id": 1074,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1075,
                "storage_id": 1001,
                "product_id": 1075,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1076,
                "storage_id": 1001,
                "product_id": 1076,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1077,
                "storage_id": 1001,
                "product_id": 1077,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1078,
                "storage_id": 1001,
                "product_id": 1078,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1079,
                "storage_id": 1001,
                "product_id": 1079,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1080,
                "storage_id": 1001,
                "product_id": 1080,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1081,
                "storage_id": 1001,
                "product_id": 1081,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1082,
                "storage_id": 1001,
                "product_id": 1082,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1083,
                "storage_id": 1001,
                "product_id": 1083,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1084,
                "storage_id": 1001,
                "product_id": 1084,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1085,
                "storage_id": 1001,
                "product_id": 1085,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1086,
                "storage_id": 1001,
                "product_id": 1086,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1087,
                "storage_id": 1001,
                "product_id": 1087,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1088,
                "storage_id": 1001,
                "product_id": 1088,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1089,
                "storage_id": 1001,
                "product_id": 1089,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1090,
                "storage_id": 1001,
                "product_id": 1090,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1091,
                "storage_id": 1001,
                "product_id": 1091,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1092,
                "storage_id": 1001,
                "product_id": 1092,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1093,
                "storage_id": 1001,
                "product_id": 1093,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1094,
                "storage_id": 1001,
                "product_id": 1094,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1095,
                "storage_id": 1001,
                "product_id": 1095,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1096,
                "storage_id": 1001,
                "product_id": 1096,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1097,
                "storage_id": 1001,
                "product_id": 1097,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1098,
                "storage_id": 1001,
                "product_id": 1098,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1099,
                "storage_id": 1001,
                "product_id": 1099,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1100,
                "storage_id": 1001,
                "product_id": 1100,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1101,
                "storage_id": 1001,
                "product_id": 1101,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1102,
                "storage_id": 1001,
                "product_id": 1102,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1103,
                "storage_id": 1001,
                "product_id": 1103,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1104,
                "storage_id": 1001,
                "product_id": 1104,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1105,
                "storage_id": 1001,
                "product_id": 1105,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1106,
                "storage_id": 1001,
                "product_id": 1106,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1107,
                "storage_id": 1001,
                "product_id": 1107,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1108,
                "storage_id": 1001,
                "product_id": 1108,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1109,
                "storage_id": 1001,
                "product_id": 1109,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1110,
                "storage_id": 1001,
                "product_id": 1110,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1111,
                "storage_id": 1001,
                "product_id": 1111,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1112,
                "storage_id": 1001,
                "product_id": 1112,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1113,
                "storage_id": 1001,
                "product_id": 1113,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1114,
                "storage_id": 1001,
                "product_id": 1114,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1115,
                "storage_id": 1001,
                "product_id": 1115,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1116,
                "storage_id": 1001,
                "product_id": 1116,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1117,
                "storage_id": 1001,
                "product_id": 1117,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1118,
                "storage_id": 1001,
                "product_id": 1118,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1119,
                "storage_id": 1001,
                "product_id": 1119,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1120,
                "storage_id": 1001,
                "product_id": 1120,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1121,
                "storage_id": 1001,
                "product_id": 1121,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1122,
                "storage_id": 1001,
                "product_id": 1122,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1123,
                "storage_id": 1001,
                "product_id": 1123,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1124,
                "storage_id": 1001,
                "product_id": 1124,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1125,
                "storage_id": 1001,
                "product_id": 1125,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1126,
                "storage_id": 1001,
                "product_id": 1126,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1127,
                "storage_id": 1001,
                "product_id": 1127,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1128,
                "storage_id": 1001,
                "product_id": 1128,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1129,
                "storage_id": 1001,
                "product_id": 1129,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1130,
                "storage_id": 1001,
                "product_id": 1130,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1131,
                "storage_id": 1001,
                "product_id": 1131,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1132,
                "storage_id": 1001,
                "product_id": 1132,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1133,
                "storage_id": 1001,
                "product_id": 1133,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1134,
                "storage_id": 1001,
                "product_id": 1134,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1135,
                "storage_id": 1001,
                "product_id": 1135,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1136,
                "storage_id": 1001,
                "product_id": 1136,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1137,
                "storage_id": 1001,
                "product_id": 1137,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1138,
                "storage_id": 1001,
                "product_id": 1138,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1139,
                "storage_id": 1001,
                "product_id": 1139,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1140,
                "storage_id": 1001,
                "product_id": 1140,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1141,
                "storage_id": 1001,
                "product_id": 1141,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1142,
                "storage_id": 1001,
                "product_id": 1142,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1143,
                "storage_id": 1001,
                "product_id": 1143,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1144,
                "storage_id": 1001,
                "product_id": 1144,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1145,
                "storage_id": 1001,
                "product_id": 1145,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1146,
                "storage_id": 1001,
                "product_id": 1146,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1147,
                "storage_id": 1001,
                "product_id": 1147,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1148,
                "storage_id": 1001,
                "product_id": 1148,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1149,
                "storage_id": 1001,
                "product_id": 1149,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1150,
                "storage_id": 1001,
                "product_id": 1150,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1151,
                "storage_id": 1001,
                "product_id": 1151,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1152,
                "storage_id": 1001,
                "product_id": 1152,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1153,
                "storage_id": 1001,
                "product_id": 1153,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1154,
                "storage_id": 1001,
                "product_id": 1154,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1155,
                "storage_id": 1001,
                "product_id": 1155,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1156,
                "storage_id": 1001,
                "product_id": 1156,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1157,
                "storage_id": 1001,
                "product_id": 1157,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1158,
                "storage_id": 1001,
                "product_id": 1158,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1159,
                "storage_id": 1001,
                "product_id": 1159,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1160,
                "storage_id": 1001,
                "product_id": 1160,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1161,
                "storage_id": 1001,
                "product_id": 1161,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1162,
                "storage_id": 1001,
                "product_id": 1162,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1163,
                "storage_id": 1001,
                "product_id": 1163,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1164,
                "storage_id": 1001,
                "product_id": 1164,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1165,
                "storage_id": 1001,
                "product_id": 1165,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1166,
                "storage_id": 1001,
                "product_id": 1166,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1167,
                "storage_id": 1001,
                "product_id": 1167,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1168,
                "storage_id": 1001,
                "product_id": 1168,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1169,
                "storage_id": 1001,
                "product_id": 1169,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1170,
                "storage_id": 1001,
                "product_id": 1170,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1171,
                "storage_id": 1001,
                "product_id": 1171,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1172,
                "storage_id": 1001,
                "product_id": 1172,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1173,
                "storage_id": 1001,
                "product_id": 1173,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1174,
                "storage_id": 1001,
                "product_id": 1174,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1175,
                "storage_id": 1001,
                "product_id": 1175,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1176,
                "storage_id": 1001,
                "product_id": 1176,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1177,
                "storage_id": 1001,
                "product_id": 1177,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1178,
                "storage_id": 1001,
                "product_id": 1178,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1179,
                "storage_id": 1001,
                "product_id": 1179,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1180,
                "storage_id": 1001,
                "product_id": 1180,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1181,
                "storage_id": 1001,
                "product_id": 1181,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1182,
                "storage_id": 1001,
                "product_id": 1182,
                "stock": 48,
                "critical_stock": 0
            },
            {
                "id": 1183,
                "storage_id": 1001,
                "product_id": 1183,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1184,
                "storage_id": 1001,
                "product_id": 1184,
                "stock": 48,
                "critical_stock": 0
            },
            {
                "id": 1185,
                "storage_id": 1001,
                "product_id": 1185,
                "stock": 48,
                "critical_stock": 0
            },
            {
                "id": 1186,
                "storage_id": 1001,
                "product_id": 1186,
                "stock": 48,
                "critical_stock": 0
            },
            {
                "id": 1187,
                "storage_id": 1001,
                "product_id": 1187,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1188,
                "storage_id": 1001,
                "product_id": 1188,
                "stock": 24,
                "critical_stock": 0
            },
            {
                "id": 1189,
                "storage_id": 1001,
                "product_id": 1189,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1190,
                "storage_id": 1001,
                "product_id": 1190,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1191,
                "storage_id": 1001,
                "product_id": 1191,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1192,
                "storage_id": 1001,
                "product_id": 1192,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1193,
                "storage_id": 1001,
                "product_id": 1193,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1194,
                "storage_id": 1001,
                "product_id": 1194,
                "stock": 1,
                "critical_stock": 0
            },
            {
                "id": 1195,
                "storage_id": 1001,
                "product_id": 1195,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1196,
                "storage_id": 1001,
                "product_id": 1196,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1197,
                "storage_id": 1001,
                "product_id": 1197,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1198,
                "storage_id": 1001,
                "product_id": 1198,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1199,
                "storage_id": 1001,
                "product_id": 1199,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1200,
                "storage_id": 1001,
                "product_id": 1200,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1201,
                "storage_id": 1001,
                "product_id": 1201,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1202,
                "storage_id": 1001,
                "product_id": 1202,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1203,
                "storage_id": 1001,
                "product_id": 1203,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1204,
                "storage_id": 1001,
                "product_id": 1204,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1205,
                "storage_id": 1001,
                "product_id": 1205,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1206,
                "storage_id": 1001,
                "product_id": 1206,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1207,
                "storage_id": 1001,
                "product_id": 1207,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1208,
                "storage_id": 1001,
                "product_id": 1208,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1209,
                "storage_id": 1001,
                "product_id": 1209,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1210,
                "storage_id": 1001,
                "product_id": 1210,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1211,
                "storage_id": 1001,
                "product_id": 1211,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1212,
                "storage_id": 1001,
                "product_id": 1212,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1213,
                "storage_id": 1001,
                "product_id": 1213,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1214,
                "storage_id": 1001,
                "product_id": 1214,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1215,
                "storage_id": 1001,
                "product_id": 1215,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1216,
                "storage_id": 1001,
                "product_id": 1216,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1217,
                "storage_id": 1001,
                "product_id": 1217,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1218,
                "storage_id": 1001,
                "product_id": 1218,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1219,
                "storage_id": 1001,
                "product_id": 1219,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1220,
                "storage_id": 1001,
                "product_id": 1220,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1221,
                "storage_id": 1001,
                "product_id": 1221,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1222,
                "storage_id": 1001,
                "product_id": 1222,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1223,
                "storage_id": 1001,
                "product_id": 1223,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1224,
                "storage_id": 1001,
                "product_id": 1224,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1225,
                "storage_id": 1001,
                "product_id": 1225,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1226,
                "storage_id": 1001,
                "product_id": 1226,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1227,
                "storage_id": 1001,
                "product_id": 1227,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1228,
                "storage_id": 1001,
                "product_id": 1228,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1229,
                "storage_id": 1001,
                "product_id": 1229,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1230,
                "storage_id": 1001,
                "product_id": 1230,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1231,
                "storage_id": 1001,
                "product_id": 1231,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1232,
                "storage_id": 1001,
                "product_id": 1232,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1233,
                "storage_id": 1001,
                "product_id": 1233,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1234,
                "storage_id": 1001,
                "product_id": 1234,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1235,
                "storage_id": 1001,
                "product_id": 1235,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1236,
                "storage_id": 1001,
                "product_id": 1236,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1237,
                "storage_id": 1001,
                "product_id": 1237,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1238,
                "storage_id": 1001,
                "product_id": 1238,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1239,
                "storage_id": 1001,
                "product_id": 1239,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1240,
                "storage_id": 1001,
                "product_id": 1240,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1241,
                "storage_id": 1001,
                "product_id": 1241,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1242,
                "storage_id": 1001,
                "product_id": 1242,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1243,
                "storage_id": 1001,
                "product_id": 1243,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1244,
                "storage_id": 1001,
                "product_id": 1244,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1245,
                "storage_id": 1001,
                "product_id": 1245,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1246,
                "storage_id": 1001,
                "product_id": 1246,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1247,
                "storage_id": 1001,
                "product_id": 1247,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1248,
                "storage_id": 1001,
                "product_id": 1248,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1249,
                "storage_id": 1001,
                "product_id": 1249,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1250,
                "storage_id": 1001,
                "product_id": 1250,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1251,
                "storage_id": 1001,
                "product_id": 1251,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1252,
                "storage_id": 1001,
                "product_id": 1252,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1253,
                "storage_id": 1001,
                "product_id": 1253,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1254,
                "storage_id": 1001,
                "product_id": 1254,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1255,
                "storage_id": 1001,
                "product_id": 1255,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1256,
                "storage_id": 1001,
                "product_id": 1256,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1257,
                "storage_id": 1001,
                "product_id": 1257,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1258,
                "storage_id": 1001,
                "product_id": 1258,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1259,
                "storage_id": 1001,
                "product_id": 1259,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1260,
                "storage_id": 1001,
                "product_id": 1260,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1261,
                "storage_id": 1001,
                "product_id": 1261,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1262,
                "storage_id": 1001,
                "product_id": 1262,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1263,
                "storage_id": 1001,
                "product_id": 1263,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1264,
                "storage_id": 1001,
                "product_id": 1264,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1265,
                "storage_id": 1001,
                "product_id": 1265,
                "stock": 7,
                "critical_stock": 0
            },
            {
                "id": 1266,
                "storage_id": 1001,
                "product_id": 1266,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1267,
                "storage_id": 1001,
                "product_id": 1267,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1268,
                "storage_id": 1001,
                "product_id": 1268,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1269,
                "storage_id": 1001,
                "product_id": 1269,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1270,
                "storage_id": 1001,
                "product_id": 1270,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1271,
                "storage_id": 1001,
                "product_id": 1271,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1272,
                "storage_id": 1001,
                "product_id": 1272,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1273,
                "storage_id": 1001,
                "product_id": 1273,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1274,
                "storage_id": 1001,
                "product_id": 1274,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1275,
                "storage_id": 1001,
                "product_id": 1275,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1276,
                "storage_id": 1001,
                "product_id": 1276,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1277,
                "storage_id": 1001,
                "product_id": 1277,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1278,
                "storage_id": 1001,
                "product_id": 1278,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1279,
                "storage_id": 1001,
                "product_id": 1279,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1280,
                "storage_id": 1001,
                "product_id": 1280,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1281,
                "storage_id": 1001,
                "product_id": 1281,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1282,
                "storage_id": 1001,
                "product_id": 1282,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1283,
                "storage_id": 1001,
                "product_id": 1283,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1284,
                "storage_id": 1001,
                "product_id": 1284,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1285,
                "storage_id": 1001,
                "product_id": 1285,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1286,
                "storage_id": 1001,
                "product_id": 1286,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1287,
                "storage_id": 1001,
                "product_id": 1287,
                "stock": 25,
                "critical_stock": 0
            },
            {
                "id": 1288,
                "storage_id": 1001,
                "product_id": 1288,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1289,
                "storage_id": 1001,
                "product_id": 1289,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1290,
                "storage_id": 1001,
                "product_id": 1290,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1291,
                "storage_id": 1001,
                "product_id": 1291,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1292,
                "storage_id": 1001,
                "product_id": 1292,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1293,
                "storage_id": 1001,
                "product_id": 1293,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1294,
                "storage_id": 1001,
                "product_id": 1294,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1295,
                "storage_id": 1001,
                "product_id": 1295,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1296,
                "storage_id": 1001,
                "product_id": 1296,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1297,
                "storage_id": 1001,
                "product_id": 1297,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1298,
                "storage_id": 1001,
                "product_id": 1298,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1299,
                "storage_id": 1001,
                "product_id": 1299,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1300,
                "storage_id": 1001,
                "product_id": 1300,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1301,
                "storage_id": 1001,
                "product_id": 1301,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1302,
                "storage_id": 1001,
                "product_id": 1302,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1303,
                "storage_id": 1001,
                "product_id": 1303,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1304,
                "storage_id": 1001,
                "product_id": 1304,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1305,
                "storage_id": 1001,
                "product_id": 1305,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1306,
                "storage_id": 1001,
                "product_id": 1306,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1307,
                "storage_id": 1001,
                "product_id": 1307,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1308,
                "storage_id": 1001,
                "product_id": 1308,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1309,
                "storage_id": 1001,
                "product_id": 1309,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1310,
                "storage_id": 1001,
                "product_id": 1310,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1311,
                "storage_id": 1001,
                "product_id": 1311,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1312,
                "storage_id": 1001,
                "product_id": 1312,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1313,
                "storage_id": 1001,
                "product_id": 1313,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1314,
                "storage_id": 1001,
                "product_id": 1314,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1315,
                "storage_id": 1001,
                "product_id": 1315,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1316,
                "storage_id": 1001,
                "product_id": 1316,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1317,
                "storage_id": 1001,
                "product_id": 1317,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1318,
                "storage_id": 1001,
                "product_id": 1318,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1319,
                "storage_id": 1001,
                "product_id": 1319,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1320,
                "storage_id": 1001,
                "product_id": 1320,
                "stock": 25,
                "critical_stock": 0
            },
            {
                "id": 1321,
                "storage_id": 1001,
                "product_id": 1321,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1322,
                "storage_id": 1001,
                "product_id": 1322,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1323,
                "storage_id": 1001,
                "product_id": 1323,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1324,
                "storage_id": 1001,
                "product_id": 1324,
                "stock": 25,
                "critical_stock": 0
            },
            {
                "id": 1325,
                "storage_id": 1001,
                "product_id": 1325,
                "stock": 40,
                "critical_stock": 0
            },
            {
                "id": 1326,
                "storage_id": 1001,
                "product_id": 1326,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1327,
                "storage_id": 1001,
                "product_id": 1327,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1328,
                "storage_id": 1001,
                "product_id": 1328,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1329,
                "storage_id": 1001,
                "product_id": 1329,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1330,
                "storage_id": 1001,
                "product_id": 1330,
                "stock": 16,
                "critical_stock": 0
            },
            {
                "id": 1331,
                "storage_id": 1001,
                "product_id": 1331,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1332,
                "storage_id": 1001,
                "product_id": 1332,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1333,
                "storage_id": 1001,
                "product_id": 1333,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1334,
                "storage_id": 1001,
                "product_id": 1334,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1335,
                "storage_id": 1001,
                "product_id": 1335,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1336,
                "storage_id": 1001,
                "product_id": 1336,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1337,
                "storage_id": 1001,
                "product_id": 1337,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1338,
                "storage_id": 1001,
                "product_id": 1338,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1339,
                "storage_id": 1001,
                "product_id": 1339,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1340,
                "storage_id": 1001,
                "product_id": 1340,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1341,
                "storage_id": 1001,
                "product_id": 1341,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1342,
                "storage_id": 1001,
                "product_id": 1342,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1343,
                "storage_id": 1001,
                "product_id": 1343,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1344,
                "storage_id": 1001,
                "product_id": 1344,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1345,
                "storage_id": 1001,
                "product_id": 1345,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1346,
                "storage_id": 1001,
                "product_id": 1346,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1347,
                "storage_id": 1001,
                "product_id": 1347,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1348,
                "storage_id": 1001,
                "product_id": 1348,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1349,
                "storage_id": 1001,
                "product_id": 1349,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1350,
                "storage_id": 1001,
                "product_id": 1350,
                "stock": 19,
                "critical_stock": 0
            },
            {
                "id": 1351,
                "storage_id": 1001,
                "product_id": 1351,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1352,
                "storage_id": 1001,
                "product_id": 1352,
                "stock": 25,
                "critical_stock": 0
            },
            {
                "id": 1353,
                "storage_id": 1001,
                "product_id": 1353,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1354,
                "storage_id": 1001,
                "product_id": 1354,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1355,
                "storage_id": 1001,
                "product_id": 1355,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1356,
                "storage_id": 1001,
                "product_id": 1356,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1357,
                "storage_id": 1001,
                "product_id": 1357,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1358,
                "storage_id": 1001,
                "product_id": 1358,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1359,
                "storage_id": 1001,
                "product_id": 1359,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1360,
                "storage_id": 1001,
                "product_id": 1360,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1361,
                "storage_id": 1001,
                "product_id": 1361,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1362,
                "storage_id": 1001,
                "product_id": 1362,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1363,
                "storage_id": 1001,
                "product_id": 1363,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1364,
                "storage_id": 1001,
                "product_id": 1364,
                "stock": 200,
                "critical_stock": 0
            },
            {
                "id": 1365,
                "storage_id": 1001,
                "product_id": 1365,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1366,
                "storage_id": 1001,
                "product_id": 1366,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1367,
                "storage_id": 1001,
                "product_id": 1367,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1368,
                "storage_id": 1001,
                "product_id": 1368,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1369,
                "storage_id": 1001,
                "product_id": 1369,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1370,
                "storage_id": 1001,
                "product_id": 1370,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1371,
                "storage_id": 1001,
                "product_id": 1371,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1372,
                "storage_id": 1001,
                "product_id": 1372,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1373,
                "storage_id": 1001,
                "product_id": 1373,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1374,
                "storage_id": 1001,
                "product_id": 1374,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1375,
                "storage_id": 1001,
                "product_id": 1375,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1376,
                "storage_id": 1001,
                "product_id": 1376,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1377,
                "storage_id": 1001,
                "product_id": 1377,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1378,
                "storage_id": 1001,
                "product_id": 1378,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1379,
                "storage_id": 1001,
                "product_id": 1379,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1380,
                "storage_id": 1001,
                "product_id": 1380,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1381,
                "storage_id": 1001,
                "product_id": 1381,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1382,
                "storage_id": 1001,
                "product_id": 1382,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1383,
                "storage_id": 1001,
                "product_id": 1383,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1384,
                "storage_id": 1001,
                "product_id": 1384,
                "stock": 25,
                "critical_stock": 0
            },
            {
                "id": 1385,
                "storage_id": 1001,
                "product_id": 1385,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1386,
                "storage_id": 1001,
                "product_id": 1386,
                "stock": 25,
                "critical_stock": 0
            },
            {
                "id": 1387,
                "storage_id": 1001,
                "product_id": 1387,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1388,
                "storage_id": 1001,
                "product_id": 1388,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1389,
                "storage_id": 1001,
                "product_id": 1389,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1390,
                "storage_id": 1001,
                "product_id": 1390,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1391,
                "storage_id": 1001,
                "product_id": 1391,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1392,
                "storage_id": 1001,
                "product_id": 1392,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1393,
                "storage_id": 1001,
                "product_id": 1393,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1394,
                "storage_id": 1001,
                "product_id": 1394,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1395,
                "storage_id": 1001,
                "product_id": 1395,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1396,
                "storage_id": 1001,
                "product_id": 1396,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1397,
                "storage_id": 1001,
                "product_id": 1397,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1398,
                "storage_id": 1001,
                "product_id": 1398,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1399,
                "storage_id": 1001,
                "product_id": 1399,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1400,
                "storage_id": 1001,
                "product_id": 1400,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1401,
                "storage_id": 1001,
                "product_id": 1401,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1402,
                "storage_id": 1001,
                "product_id": 1402,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1403,
                "storage_id": 1001,
                "product_id": 1403,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1404,
                "storage_id": 1001,
                "product_id": 1404,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1405,
                "storage_id": 1001,
                "product_id": 1405,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1406,
                "storage_id": 1001,
                "product_id": 1406,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1407,
                "storage_id": 1001,
                "product_id": 1407,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1408,
                "storage_id": 1001,
                "product_id": 1408,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1409,
                "storage_id": 1001,
                "product_id": 1409,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1410,
                "storage_id": 1001,
                "product_id": 1410,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1411,
                "storage_id": 1001,
                "product_id": 1411,
                "stock": 150,
                "critical_stock": 0
            },
            {
                "id": 1412,
                "storage_id": 1001,
                "product_id": 1412,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1413,
                "storage_id": 1001,
                "product_id": 1413,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1414,
                "storage_id": 1001,
                "product_id": 1414,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1415,
                "storage_id": 1001,
                "product_id": 1415,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1416,
                "storage_id": 1001,
                "product_id": 1416,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1417,
                "storage_id": 1001,
                "product_id": 1417,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1418,
                "storage_id": 1001,
                "product_id": 1418,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1419,
                "storage_id": 1001,
                "product_id": 1419,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1420,
                "storage_id": 1001,
                "product_id": 1420,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1421,
                "storage_id": 1001,
                "product_id": 1421,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1422,
                "storage_id": 1001,
                "product_id": 1422,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1423,
                "storage_id": 1001,
                "product_id": 1423,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1424,
                "storage_id": 1001,
                "product_id": 1424,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1425,
                "storage_id": 1001,
                "product_id": 1425,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1426,
                "storage_id": 1001,
                "product_id": 1426,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1427,
                "storage_id": 1001,
                "product_id": 1427,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1428,
                "storage_id": 1001,
                "product_id": 1428,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1429,
                "storage_id": 1001,
                "product_id": 1429,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1430,
                "storage_id": 1001,
                "product_id": 1430,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1431,
                "storage_id": 1001,
                "product_id": 1431,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1432,
                "storage_id": 1001,
                "product_id": 1432,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1433,
                "storage_id": 1001,
                "product_id": 1433,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1434,
                "storage_id": 1001,
                "product_id": 1434,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1435,
                "storage_id": 1001,
                "product_id": 1435,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1436,
                "storage_id": 1001,
                "product_id": 1436,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1437,
                "storage_id": 1001,
                "product_id": 1437,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1438,
                "storage_id": 1001,
                "product_id": 1438,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1439,
                "storage_id": 1001,
                "product_id": 1439,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1440,
                "storage_id": 1001,
                "product_id": 1440,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1441,
                "storage_id": 1001,
                "product_id": 1441,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1442,
                "storage_id": 1001,
                "product_id": 1442,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1443,
                "storage_id": 1001,
                "product_id": 1443,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1444,
                "storage_id": 1001,
                "product_id": 1444,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1445,
                "storage_id": 1001,
                "product_id": 1445,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1446,
                "storage_id": 1001,
                "product_id": 1446,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1447,
                "storage_id": 1001,
                "product_id": 1447,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1448,
                "storage_id": 1001,
                "product_id": 1448,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1449,
                "storage_id": 1001,
                "product_id": 1449,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1450,
                "storage_id": 1001,
                "product_id": 1450,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1451,
                "storage_id": 1001,
                "product_id": 1451,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1452,
                "storage_id": 1001,
                "product_id": 1452,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1453,
                "storage_id": 1001,
                "product_id": 1453,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1454,
                "storage_id": 1001,
                "product_id": 1454,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1455,
                "storage_id": 1001,
                "product_id": 1455,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1456,
                "storage_id": 1001,
                "product_id": 1456,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1457,
                "storage_id": 1001,
                "product_id": 1457,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1458,
                "storage_id": 1001,
                "product_id": 1458,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1459,
                "storage_id": 1001,
                "product_id": 1459,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1460,
                "storage_id": 1001,
                "product_id": 1460,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1461,
                "storage_id": 1001,
                "product_id": 1461,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1462,
                "storage_id": 1001,
                "product_id": 1462,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1463,
                "storage_id": 1001,
                "product_id": 1463,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1464,
                "storage_id": 1001,
                "product_id": 1464,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1465,
                "storage_id": 1001,
                "product_id": 1465,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1466,
                "storage_id": 1001,
                "product_id": 1466,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1467,
                "storage_id": 1001,
                "product_id": 1467,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1468,
                "storage_id": 1001,
                "product_id": 1468,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1469,
                "storage_id": 1001,
                "product_id": 1469,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1470,
                "storage_id": 1001,
                "product_id": 1470,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1471,
                "storage_id": 1001,
                "product_id": 1471,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1472,
                "storage_id": 1001,
                "product_id": 1472,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1473,
                "storage_id": 1001,
                "product_id": 1473,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1474,
                "storage_id": 1001,
                "product_id": 1474,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1475,
                "storage_id": 1001,
                "product_id": 1475,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1476,
                "storage_id": 1001,
                "product_id": 1476,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1477,
                "storage_id": 1001,
                "product_id": 1477,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1478,
                "storage_id": 1001,
                "product_id": 1478,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1479,
                "storage_id": 1001,
                "product_id": 1479,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1480,
                "storage_id": 1001,
                "product_id": 1480,
                "stock": 7,
                "critical_stock": 0
            },
            {
                "id": 1481,
                "storage_id": 1001,
                "product_id": 1481,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1482,
                "storage_id": 1001,
                "product_id": 1482,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1483,
                "storage_id": 1001,
                "product_id": 1483,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1484,
                "storage_id": 1001,
                "product_id": 1484,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1485,
                "storage_id": 1001,
                "product_id": 1485,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1486,
                "storage_id": 1001,
                "product_id": 1486,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1487,
                "storage_id": 1001,
                "product_id": 1487,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1488,
                "storage_id": 1001,
                "product_id": 1488,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1489,
                "storage_id": 1001,
                "product_id": 1489,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1490,
                "storage_id": 1001,
                "product_id": 1490,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1491,
                "storage_id": 1001,
                "product_id": 1491,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1492,
                "storage_id": 1001,
                "product_id": 1492,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1493,
                "storage_id": 1001,
                "product_id": 1493,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1494,
                "storage_id": 1001,
                "product_id": 1494,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1495,
                "storage_id": 1001,
                "product_id": 1495,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1496,
                "storage_id": 1001,
                "product_id": 1496,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1497,
                "storage_id": 1001,
                "product_id": 1497,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1498,
                "storage_id": 1001,
                "product_id": 1498,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1499,
                "storage_id": 1001,
                "product_id": 1499,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1500,
                "storage_id": 1001,
                "product_id": 1500,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1501,
                "storage_id": 1001,
                "product_id": 1501,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1502,
                "storage_id": 1001,
                "product_id": 1502,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1503,
                "storage_id": 1001,
                "product_id": 1503,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1504,
                "storage_id": 1001,
                "product_id": 1504,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1505,
                "storage_id": 1001,
                "product_id": 1505,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1506,
                "storage_id": 1001,
                "product_id": 1506,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1507,
                "storage_id": 1001,
                "product_id": 1507,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1508,
                "storage_id": 1001,
                "product_id": 1508,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1509,
                "storage_id": 1001,
                "product_id": 1509,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1510,
                "storage_id": 1001,
                "product_id": 1510,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1511,
                "storage_id": 1001,
                "product_id": 1511,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1512,
                "storage_id": 1001,
                "product_id": 1512,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1513,
                "storage_id": 1001,
                "product_id": 1513,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1514,
                "storage_id": 1001,
                "product_id": 1514,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1515,
                "storage_id": 1001,
                "product_id": 1515,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1516,
                "storage_id": 1001,
                "product_id": 1516,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1517,
                "storage_id": 1001,
                "product_id": 1517,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1518,
                "storage_id": 1001,
                "product_id": 1518,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1519,
                "storage_id": 1001,
                "product_id": 1519,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1520,
                "storage_id": 1001,
                "product_id": 1520,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1521,
                "storage_id": 1001,
                "product_id": 1521,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1522,
                "storage_id": 1001,
                "product_id": 1522,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1523,
                "storage_id": 1001,
                "product_id": 1523,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1524,
                "storage_id": 1001,
                "product_id": 1524,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1525,
                "storage_id": 1001,
                "product_id": 1525,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1526,
                "storage_id": 1001,
                "product_id": 1526,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1527,
                "storage_id": 1001,
                "product_id": 1527,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1528,
                "storage_id": 1001,
                "product_id": 1528,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1529,
                "storage_id": 1001,
                "product_id": 1529,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1530,
                "storage_id": 1001,
                "product_id": 1530,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1531,
                "storage_id": 1001,
                "product_id": 1531,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1532,
                "storage_id": 1001,
                "product_id": 1532,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1533,
                "storage_id": 1001,
                "product_id": 1533,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1534,
                "storage_id": 1001,
                "product_id": 1534,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1535,
                "storage_id": 1001,
                "product_id": 1535,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1536,
                "storage_id": 1001,
                "product_id": 1536,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1537,
                "storage_id": 1001,
                "product_id": 1537,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1538,
                "storage_id": 1001,
                "product_id": 1538,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1539,
                "storage_id": 1001,
                "product_id": 1539,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1540,
                "storage_id": 1001,
                "product_id": 1540,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1541,
                "storage_id": 1001,
                "product_id": 1541,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1542,
                "storage_id": 1001,
                "product_id": 1542,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1543,
                "storage_id": 1001,
                "product_id": 1543,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1544,
                "storage_id": 1001,
                "product_id": 1544,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1545,
                "storage_id": 1001,
                "product_id": 1545,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1546,
                "storage_id": 1001,
                "product_id": 1546,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1547,
                "storage_id": 1001,
                "product_id": 1547,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1548,
                "storage_id": 1001,
                "product_id": 1548,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1549,
                "storage_id": 1001,
                "product_id": 1549,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1550,
                "storage_id": 1001,
                "product_id": 1550,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1551,
                "storage_id": 1001,
                "product_id": 1551,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1552,
                "storage_id": 1001,
                "product_id": 1552,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1553,
                "storage_id": 1001,
                "product_id": 1553,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1554,
                "storage_id": 1001,
                "product_id": 1554,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1555,
                "storage_id": 1001,
                "product_id": 1555,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1556,
                "storage_id": 1001,
                "product_id": 1556,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1557,
                "storage_id": 1001,
                "product_id": 1557,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1558,
                "storage_id": 1001,
                "product_id": 1558,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1559,
                "storage_id": 1001,
                "product_id": 1559,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1560,
                "storage_id": 1001,
                "product_id": 1560,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1561,
                "storage_id": 1001,
                "product_id": 1561,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1562,
                "storage_id": 1001,
                "product_id": 1562,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1563,
                "storage_id": 1001,
                "product_id": 1563,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1564,
                "storage_id": 1001,
                "product_id": 1564,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1565,
                "storage_id": 1001,
                "product_id": 1565,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1566,
                "storage_id": 1001,
                "product_id": 1566,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1567,
                "storage_id": 1001,
                "product_id": 1567,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1568,
                "storage_id": 1001,
                "product_id": 1568,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1569,
                "storage_id": 1001,
                "product_id": 1569,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1570,
                "storage_id": 1001,
                "product_id": 1570,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1571,
                "storage_id": 1001,
                "product_id": 1571,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1572,
                "storage_id": 1001,
                "product_id": 1572,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1573,
                "storage_id": 1001,
                "product_id": 1573,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1574,
                "storage_id": 1001,
                "product_id": 1574,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1575,
                "storage_id": 1001,
                "product_id": 1575,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1576,
                "storage_id": 1001,
                "product_id": 1576,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1577,
                "storage_id": 1001,
                "product_id": 1577,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1578,
                "storage_id": 1001,
                "product_id": 1578,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1579,
                "storage_id": 1001,
                "product_id": 1579,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1580,
                "storage_id": 1001,
                "product_id": 1580,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1581,
                "storage_id": 1001,
                "product_id": 1581,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1582,
                "storage_id": 1001,
                "product_id": 1582,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1583,
                "storage_id": 1001,
                "product_id": 1583,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1584,
                "storage_id": 1001,
                "product_id": 1584,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1585,
                "storage_id": 1001,
                "product_id": 1585,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1586,
                "storage_id": 1001,
                "product_id": 1586,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1587,
                "storage_id": 1001,
                "product_id": 1587,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1588,
                "storage_id": 1001,
                "product_id": 1588,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1589,
                "storage_id": 1001,
                "product_id": 1589,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1590,
                "storage_id": 1001,
                "product_id": 1590,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1591,
                "storage_id": 1001,
                "product_id": 1591,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1592,
                "storage_id": 1001,
                "product_id": 1592,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1593,
                "storage_id": 1001,
                "product_id": 1593,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1594,
                "storage_id": 1001,
                "product_id": 1594,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1595,
                "storage_id": 1001,
                "product_id": 1595,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1596,
                "storage_id": 1001,
                "product_id": 1596,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1597,
                "storage_id": 1001,
                "product_id": 1597,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1598,
                "storage_id": 1001,
                "product_id": 1598,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1599,
                "storage_id": 1001,
                "product_id": 1599,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1600,
                "storage_id": 1001,
                "product_id": 1600,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1601,
                "storage_id": 1001,
                "product_id": 1601,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1602,
                "storage_id": 1001,
                "product_id": 1602,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1603,
                "storage_id": 1001,
                "product_id": 1603,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1604,
                "storage_id": 1001,
                "product_id": 1604,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1605,
                "storage_id": 1001,
                "product_id": 1605,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1606,
                "storage_id": 1001,
                "product_id": 1606,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1607,
                "storage_id": 1001,
                "product_id": 1607,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1608,
                "storage_id": 1001,
                "product_id": 1608,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1609,
                "storage_id": 1001,
                "product_id": 1609,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1610,
                "storage_id": 1001,
                "product_id": 1610,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1611,
                "storage_id": 1001,
                "product_id": 1611,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1612,
                "storage_id": 1001,
                "product_id": 1612,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1613,
                "storage_id": 1001,
                "product_id": 1613,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1614,
                "storage_id": 1001,
                "product_id": 1614,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1615,
                "storage_id": 1001,
                "product_id": 1615,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1616,
                "storage_id": 1001,
                "product_id": 1616,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1617,
                "storage_id": 1001,
                "product_id": 1617,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1618,
                "storage_id": 1001,
                "product_id": 1618,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1619,
                "storage_id": 1001,
                "product_id": 1619,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1620,
                "storage_id": 1001,
                "product_id": 1620,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1621,
                "storage_id": 1001,
                "product_id": 1621,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1622,
                "storage_id": 1001,
                "product_id": 1622,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1623,
                "storage_id": 1001,
                "product_id": 1623,
                "stock": 24,
                "critical_stock": 0
            },
            {
                "id": 1624,
                "storage_id": 1001,
                "product_id": 1624,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1625,
                "storage_id": 1001,
                "product_id": 1625,
                "stock": 7,
                "critical_stock": 0
            },
            {
                "id": 1626,
                "storage_id": 1001,
                "product_id": 1626,
                "stock": 100,
                "critical_stock": 0
            },
            {
                "id": 1627,
                "storage_id": 1001,
                "product_id": 1627,
                "stock": 100,
                "critical_stock": 0
            },
            {
                "id": 1628,
                "storage_id": 1001,
                "product_id": 1628,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1629,
                "storage_id": 1001,
                "product_id": 1629,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1630,
                "storage_id": 1001,
                "product_id": 1630,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1631,
                "storage_id": 1001,
                "product_id": 1631,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1632,
                "storage_id": 1001,
                "product_id": 1632,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1633,
                "storage_id": 1001,
                "product_id": 1633,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1634,
                "storage_id": 1001,
                "product_id": 1634,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1635,
                "storage_id": 1001,
                "product_id": 1635,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1636,
                "storage_id": 1001,
                "product_id": 1636,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1637,
                "storage_id": 1001,
                "product_id": 1637,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1638,
                "storage_id": 1001,
                "product_id": 1638,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1639,
                "storage_id": 1001,
                "product_id": 1639,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1640,
                "storage_id": 1001,
                "product_id": 1640,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1641,
                "storage_id": 1001,
                "product_id": 1641,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1642,
                "storage_id": 1001,
                "product_id": 1642,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1643,
                "storage_id": 1001,
                "product_id": 1643,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1644,
                "storage_id": 1001,
                "product_id": 1644,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1645,
                "storage_id": 1001,
                "product_id": 1645,
                "stock": 7,
                "critical_stock": 0
            },
            {
                "id": 1646,
                "storage_id": 1001,
                "product_id": 1646,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1647,
                "storage_id": 1001,
                "product_id": 1647,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1648,
                "storage_id": 1001,
                "product_id": 1648,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1649,
                "storage_id": 1001,
                "product_id": 1649,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1650,
                "storage_id": 1001,
                "product_id": 1650,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1651,
                "storage_id": 1001,
                "product_id": 1651,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1652,
                "storage_id": 1001,
                "product_id": 1652,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1653,
                "storage_id": 1001,
                "product_id": 1653,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1654,
                "storage_id": 1001,
                "product_id": 1654,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1655,
                "storage_id": 1001,
                "product_id": 1655,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1656,
                "storage_id": 1001,
                "product_id": 1656,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1657,
                "storage_id": 1001,
                "product_id": 1657,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1658,
                "storage_id": 1001,
                "product_id": 1658,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1659,
                "storage_id": 1001,
                "product_id": 1659,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1660,
                "storage_id": 1001,
                "product_id": 1660,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1661,
                "storage_id": 1001,
                "product_id": 1661,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1662,
                "storage_id": 1001,
                "product_id": 1662,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1663,
                "storage_id": 1001,
                "product_id": 1663,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1664,
                "storage_id": 1001,
                "product_id": 1664,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1665,
                "storage_id": 1001,
                "product_id": 1665,
                "stock": 1,
                "critical_stock": 0
            },
            {
                "id": 1666,
                "storage_id": 1001,
                "product_id": 1666,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1667,
                "storage_id": 1001,
                "product_id": 1667,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1668,
                "storage_id": 1001,
                "product_id": 1668,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1669,
                "storage_id": 1001,
                "product_id": 1669,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1670,
                "storage_id": 1001,
                "product_id": 1670,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1671,
                "storage_id": 1001,
                "product_id": 1671,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1672,
                "storage_id": 1001,
                "product_id": 1672,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1673,
                "storage_id": 1001,
                "product_id": 1673,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1674,
                "storage_id": 1001,
                "product_id": 1674,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1675,
                "storage_id": 1001,
                "product_id": 1675,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1676,
                "storage_id": 1001,
                "product_id": 1676,
                "stock": 20,
                "critical_stock": 0
            },
            {
                "id": 1677,
                "storage_id": 1001,
                "product_id": 1677,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1678,
                "storage_id": 1001,
                "product_id": 1678,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1679,
                "storage_id": 1001,
                "product_id": 1679,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1680,
                "storage_id": 1001,
                "product_id": 1680,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1681,
                "storage_id": 1001,
                "product_id": 1681,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1682,
                "storage_id": 1001,
                "product_id": 1682,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1683,
                "storage_id": 1001,
                "product_id": 1683,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1684,
                "storage_id": 1001,
                "product_id": 1684,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1685,
                "storage_id": 1001,
                "product_id": 1685,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1686,
                "storage_id": 1001,
                "product_id": 1686,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1687,
                "storage_id": 1001,
                "product_id": 1687,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1688,
                "storage_id": 1001,
                "product_id": 1688,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1689,
                "storage_id": 1001,
                "product_id": 1689,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1690,
                "storage_id": 1001,
                "product_id": 1690,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1691,
                "storage_id": 1001,
                "product_id": 1691,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1692,
                "storage_id": 1001,
                "product_id": 1692,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1693,
                "storage_id": 1001,
                "product_id": 1693,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1694,
                "storage_id": 1001,
                "product_id": 1694,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1695,
                "storage_id": 1001,
                "product_id": 1695,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1696,
                "storage_id": 1001,
                "product_id": 1696,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1697,
                "storage_id": 1001,
                "product_id": 1697,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1698,
                "storage_id": 1001,
                "product_id": 1698,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1699,
                "storage_id": 1001,
                "product_id": 1699,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1700,
                "storage_id": 1001,
                "product_id": 1700,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1701,
                "storage_id": 1001,
                "product_id": 1701,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1702,
                "storage_id": 1001,
                "product_id": 1702,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1703,
                "storage_id": 1001,
                "product_id": 1703,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1704,
                "storage_id": 1001,
                "product_id": 1704,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1705,
                "storage_id": 1001,
                "product_id": 1705,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1706,
                "storage_id": 1001,
                "product_id": 1706,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1707,
                "storage_id": 1001,
                "product_id": 1707,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1708,
                "storage_id": 1001,
                "product_id": 1708,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1709,
                "storage_id": 1001,
                "product_id": 1709,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1710,
                "storage_id": 1001,
                "product_id": 1710,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1711,
                "storage_id": 1001,
                "product_id": 1711,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1712,
                "storage_id": 1001,
                "product_id": 1712,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1713,
                "storage_id": 1001,
                "product_id": 1713,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1714,
                "storage_id": 1001,
                "product_id": 1714,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1715,
                "storage_id": 1001,
                "product_id": 1715,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1716,
                "storage_id": 1001,
                "product_id": 1716,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1717,
                "storage_id": 1001,
                "product_id": 1717,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1718,
                "storage_id": 1001,
                "product_id": 1718,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1719,
                "storage_id": 1001,
                "product_id": 1719,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1720,
                "storage_id": 1001,
                "product_id": 1720,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1721,
                "storage_id": 1001,
                "product_id": 1721,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1722,
                "storage_id": 1001,
                "product_id": 1722,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1723,
                "storage_id": 1001,
                "product_id": 1723,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1724,
                "storage_id": 1001,
                "product_id": 1724,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1725,
                "storage_id": 1001,
                "product_id": 1725,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1726,
                "storage_id": 1001,
                "product_id": 1726,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1727,
                "storage_id": 1001,
                "product_id": 1727,
                "stock": 50,
                "critical_stock": 0
            },
            {
                "id": 1728,
                "storage_id": 1001,
                "product_id": 1728,
                "stock": 50,
                "critical_stock": 0
            },
            {
                "id": 1729,
                "storage_id": 1001,
                "product_id": 1729,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1730,
                "storage_id": 1001,
                "product_id": 1730,
                "stock": 50,
                "critical_stock": 0
            },
            {
                "id": 1731,
                "storage_id": 1001,
                "product_id": 1731,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1732,
                "storage_id": 1001,
                "product_id": 1732,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1733,
                "storage_id": 1001,
                "product_id": 1733,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1734,
                "storage_id": 1001,
                "product_id": 1734,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1735,
                "storage_id": 1001,
                "product_id": 1735,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1736,
                "storage_id": 1001,
                "product_id": 1736,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1737,
                "storage_id": 1001,
                "product_id": 1737,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1738,
                "storage_id": 1001,
                "product_id": 1738,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1739,
                "storage_id": 1001,
                "product_id": 1739,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1740,
                "storage_id": 1001,
                "product_id": 1740,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1741,
                "storage_id": 1001,
                "product_id": 1741,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1742,
                "storage_id": 1001,
                "product_id": 1742,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1743,
                "storage_id": 1001,
                "product_id": 1743,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1744,
                "storage_id": 1001,
                "product_id": 1744,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1745,
                "storage_id": 1001,
                "product_id": 1745,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1746,
                "storage_id": 1001,
                "product_id": 1746,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1747,
                "storage_id": 1001,
                "product_id": 1747,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1748,
                "storage_id": 1001,
                "product_id": 1748,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1749,
                "storage_id": 1001,
                "product_id": 1749,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1750,
                "storage_id": 1001,
                "product_id": 1750,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1751,
                "storage_id": 1001,
                "product_id": 1751,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1752,
                "storage_id": 1001,
                "product_id": 1752,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1753,
                "storage_id": 1001,
                "product_id": 1753,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1754,
                "storage_id": 1001,
                "product_id": 1754,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1755,
                "storage_id": 1001,
                "product_id": 1755,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1756,
                "storage_id": 1001,
                "product_id": 1756,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1757,
                "storage_id": 1001,
                "product_id": 1757,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1758,
                "storage_id": 1001,
                "product_id": 1758,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1759,
                "storage_id": 1001,
                "product_id": 1759,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1760,
                "storage_id": 1001,
                "product_id": 1760,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1761,
                "storage_id": 1001,
                "product_id": 1761,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1762,
                "storage_id": 1001,
                "product_id": 1762,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1763,
                "storage_id": 1001,
                "product_id": 1763,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1764,
                "storage_id": 1001,
                "product_id": 1764,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1765,
                "storage_id": 1001,
                "product_id": 1765,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1766,
                "storage_id": 1001,
                "product_id": 1766,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1767,
                "storage_id": 1001,
                "product_id": 1767,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1768,
                "storage_id": 1001,
                "product_id": 1768,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1769,
                "storage_id": 1001,
                "product_id": 1769,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1770,
                "storage_id": 1001,
                "product_id": 1770,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1771,
                "storage_id": 1001,
                "product_id": 1771,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1772,
                "storage_id": 1001,
                "product_id": 1772,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1773,
                "storage_id": 1001,
                "product_id": 1773,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1774,
                "storage_id": 1001,
                "product_id": 1774,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1775,
                "storage_id": 1001,
                "product_id": 1775,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1776,
                "storage_id": 1001,
                "product_id": 1776,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1777,
                "storage_id": 1001,
                "product_id": 1777,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1778,
                "storage_id": 1001,
                "product_id": 1778,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1779,
                "storage_id": 1001,
                "product_id": 1779,
                "stock": 29,
                "critical_stock": 0
            },
            {
                "id": 1780,
                "storage_id": 1001,
                "product_id": 1780,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1781,
                "storage_id": 1001,
                "product_id": 1781,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1782,
                "storage_id": 1001,
                "product_id": 1782,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1783,
                "storage_id": 1001,
                "product_id": 1783,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1784,
                "storage_id": 1001,
                "product_id": 1784,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1785,
                "storage_id": 1001,
                "product_id": 1785,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1786,
                "storage_id": 1001,
                "product_id": 1786,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1787,
                "storage_id": 1001,
                "product_id": 1787,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1788,
                "storage_id": 1001,
                "product_id": 1788,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1789,
                "storage_id": 1001,
                "product_id": 1789,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1790,
                "storage_id": 1001,
                "product_id": 1790,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1791,
                "storage_id": 1001,
                "product_id": 1791,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1792,
                "storage_id": 1001,
                "product_id": 1792,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1793,
                "storage_id": 1001,
                "product_id": 1793,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1794,
                "storage_id": 1001,
                "product_id": 1794,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1795,
                "storage_id": 1001,
                "product_id": 1795,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1796,
                "storage_id": 1001,
                "product_id": 1796,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1797,
                "storage_id": 1001,
                "product_id": 1797,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1798,
                "storage_id": 1001,
                "product_id": 1798,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1799,
                "storage_id": 1001,
                "product_id": 1799,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1800,
                "storage_id": 1001,
                "product_id": 1800,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1801,
                "storage_id": 1001,
                "product_id": 1801,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1802,
                "storage_id": 1001,
                "product_id": 1802,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1803,
                "storage_id": 1001,
                "product_id": 1803,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1804,
                "storage_id": 1001,
                "product_id": 1804,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1805,
                "storage_id": 1001,
                "product_id": 1805,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1806,
                "storage_id": 1001,
                "product_id": 1806,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1807,
                "storage_id": 1001,
                "product_id": 1807,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1808,
                "storage_id": 1001,
                "product_id": 1808,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1809,
                "storage_id": 1001,
                "product_id": 1809,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1810,
                "storage_id": 1001,
                "product_id": 1810,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1811,
                "storage_id": 1001,
                "product_id": 1811,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1812,
                "storage_id": 1001,
                "product_id": 1812,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1813,
                "storage_id": 1001,
                "product_id": 1813,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1814,
                "storage_id": 1001,
                "product_id": 1814,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1815,
                "storage_id": 1001,
                "product_id": 1815,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1816,
                "storage_id": 1001,
                "product_id": 1816,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1817,
                "storage_id": 1001,
                "product_id": 1817,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1818,
                "storage_id": 1001,
                "product_id": 1818,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1819,
                "storage_id": 1001,
                "product_id": 1819,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1820,
                "storage_id": 1001,
                "product_id": 1820,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1821,
                "storage_id": 1001,
                "product_id": 1821,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1822,
                "storage_id": 1001,
                "product_id": 1822,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1823,
                "storage_id": 1001,
                "product_id": 1823,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1824,
                "storage_id": 1001,
                "product_id": 1824,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1825,
                "storage_id": 1001,
                "product_id": 1825,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1826,
                "storage_id": 1001,
                "product_id": 1826,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1827,
                "storage_id": 1001,
                "product_id": 1827,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1828,
                "storage_id": 1001,
                "product_id": 1828,
                "stock": 23,
                "critical_stock": 0
            },
            {
                "id": 1829,
                "storage_id": 1001,
                "product_id": 1829,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1830,
                "storage_id": 1001,
                "product_id": 1830,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1831,
                "storage_id": 1001,
                "product_id": 1831,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1832,
                "storage_id": 1001,
                "product_id": 1832,
                "stock": 2,
                "critical_stock": 0
            },
            {
                "id": 1833,
                "storage_id": 1001,
                "product_id": 1833,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1834,
                "storage_id": 1001,
                "product_id": 1834,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1835,
                "storage_id": 1001,
                "product_id": 1835,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1836,
                "storage_id": 1001,
                "product_id": 1836,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1837,
                "storage_id": 1001,
                "product_id": 1837,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1838,
                "storage_id": 1001,
                "product_id": 1838,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1839,
                "storage_id": 1001,
                "product_id": 1839,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1840,
                "storage_id": 1001,
                "product_id": 1840,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1841,
                "storage_id": 1001,
                "product_id": 1841,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1842,
                "storage_id": 1001,
                "product_id": 1842,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1843,
                "storage_id": 1001,
                "product_id": 1843,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1844,
                "storage_id": 1001,
                "product_id": 1844,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1845,
                "storage_id": 1001,
                "product_id": 1845,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1846,
                "storage_id": 1001,
                "product_id": 1846,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1847,
                "storage_id": 1001,
                "product_id": 1847,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1848,
                "storage_id": 1001,
                "product_id": 1848,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1849,
                "storage_id": 1001,
                "product_id": 1849,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1850,
                "storage_id": 1001,
                "product_id": 1850,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1851,
                "storage_id": 1001,
                "product_id": 1851,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1852,
                "storage_id": 1001,
                "product_id": 1852,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1853,
                "storage_id": 1001,
                "product_id": 1853,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1854,
                "storage_id": 1001,
                "product_id": 1854,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1855,
                "storage_id": 1001,
                "product_id": 1855,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1856,
                "storage_id": 1001,
                "product_id": 1856,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1857,
                "storage_id": 1001,
                "product_id": 1857,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1858,
                "storage_id": 1001,
                "product_id": 1858,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1859,
                "storage_id": 1001,
                "product_id": 1859,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1860,
                "storage_id": 1001,
                "product_id": 1860,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1861,
                "storage_id": 1001,
                "product_id": 1861,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1862,
                "storage_id": 1001,
                "product_id": 1862,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1863,
                "storage_id": 1001,
                "product_id": 1863,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1864,
                "storage_id": 1001,
                "product_id": 1864,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1865,
                "storage_id": 1001,
                "product_id": 1865,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1866,
                "storage_id": 1001,
                "product_id": 1866,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1867,
                "storage_id": 1001,
                "product_id": 1867,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1868,
                "storage_id": 1001,
                "product_id": 1868,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1869,
                "storage_id": 1001,
                "product_id": 1869,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1870,
                "storage_id": 1001,
                "product_id": 1870,
                "stock": 30,
                "critical_stock": 0
            },
            {
                "id": 1871,
                "storage_id": 1001,
                "product_id": 1871,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1872,
                "storage_id": 1001,
                "product_id": 1872,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1873,
                "storage_id": 1001,
                "product_id": 1873,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1874,
                "storage_id": 1001,
                "product_id": 1874,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1875,
                "storage_id": 1001,
                "product_id": 1875,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1876,
                "storage_id": 1001,
                "product_id": 1876,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1877,
                "storage_id": 1001,
                "product_id": 1877,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1878,
                "storage_id": 1001,
                "product_id": 1878,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1879,
                "storage_id": 1001,
                "product_id": 1879,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1880,
                "storage_id": 1001,
                "product_id": 1880,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1881,
                "storage_id": 1001,
                "product_id": 1881,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1882,
                "storage_id": 1001,
                "product_id": 1882,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1883,
                "storage_id": 1001,
                "product_id": 1883,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1884,
                "storage_id": 1001,
                "product_id": 1884,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1885,
                "storage_id": 1001,
                "product_id": 1885,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1886,
                "storage_id": 1001,
                "product_id": 1886,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1887,
                "storage_id": 1001,
                "product_id": 1887,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1888,
                "storage_id": 1001,
                "product_id": 1888,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1889,
                "storage_id": 1001,
                "product_id": 1889,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1890,
                "storage_id": 1001,
                "product_id": 1890,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1891,
                "storage_id": 1001,
                "product_id": 1891,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1892,
                "storage_id": 1001,
                "product_id": 1892,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1893,
                "storage_id": 1001,
                "product_id": 1893,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1894,
                "storage_id": 1001,
                "product_id": 1894,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1895,
                "storage_id": 1001,
                "product_id": 1895,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1896,
                "storage_id": 1001,
                "product_id": 1896,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1897,
                "storage_id": 1001,
                "product_id": 1897,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1898,
                "storage_id": 1001,
                "product_id": 1898,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1899,
                "storage_id": 1001,
                "product_id": 1899,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1900,
                "storage_id": 1001,
                "product_id": 1900,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1901,
                "storage_id": 1001,
                "product_id": 1901,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1902,
                "storage_id": 1001,
                "product_id": 1902,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1903,
                "storage_id": 1001,
                "product_id": 1903,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1904,
                "storage_id": 1001,
                "product_id": 1904,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1905,
                "storage_id": 1001,
                "product_id": 1905,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1906,
                "storage_id": 1001,
                "product_id": 1906,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1907,
                "storage_id": 1001,
                "product_id": 1907,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1908,
                "storage_id": 1001,
                "product_id": 1908,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1909,
                "storage_id": 1001,
                "product_id": 1909,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1910,
                "storage_id": 1001,
                "product_id": 1910,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1911,
                "storage_id": 1001,
                "product_id": 1911,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1912,
                "storage_id": 1001,
                "product_id": 1912,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1913,
                "storage_id": 1001,
                "product_id": 1913,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1914,
                "storage_id": 1001,
                "product_id": 1914,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1915,
                "storage_id": 1001,
                "product_id": 1915,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1916,
                "storage_id": 1001,
                "product_id": 1916,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1917,
                "storage_id": 1001,
                "product_id": 1917,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1918,
                "storage_id": 1001,
                "product_id": 1918,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1919,
                "storage_id": 1001,
                "product_id": 1919,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1920,
                "storage_id": 1001,
                "product_id": 1920,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1921,
                "storage_id": 1001,
                "product_id": 1921,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1922,
                "storage_id": 1001,
                "product_id": 1922,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1923,
                "storage_id": 1001,
                "product_id": 1923,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1924,
                "storage_id": 1001,
                "product_id": 1924,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1925,
                "storage_id": 1001,
                "product_id": 1925,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1926,
                "storage_id": 1001,
                "product_id": 1926,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1927,
                "storage_id": 1001,
                "product_id": 1927,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1928,
                "storage_id": 1001,
                "product_id": 1928,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1929,
                "storage_id": 1001,
                "product_id": 1929,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1930,
                "storage_id": 1001,
                "product_id": 1930,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1931,
                "storage_id": 1001,
                "product_id": 1931,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1932,
                "storage_id": 1001,
                "product_id": 1932,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1933,
                "storage_id": 1001,
                "product_id": 1933,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1934,
                "storage_id": 1001,
                "product_id": 1934,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1935,
                "storage_id": 1001,
                "product_id": 1935,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1936,
                "storage_id": 1001,
                "product_id": 1936,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1937,
                "storage_id": 1001,
                "product_id": 1937,
                "stock": 4,
                "critical_stock": 0
            },
            {
                "id": 1938,
                "storage_id": 1001,
                "product_id": 1938,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1939,
                "storage_id": 1001,
                "product_id": 1939,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1940,
                "storage_id": 1001,
                "product_id": 1940,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1941,
                "storage_id": 1001,
                "product_id": 1941,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1942,
                "storage_id": 1001,
                "product_id": 1942,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1943,
                "storage_id": 1001,
                "product_id": 1943,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1944,
                "storage_id": 1001,
                "product_id": 1944,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1945,
                "storage_id": 1001,
                "product_id": 1945,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1946,
                "storage_id": 1001,
                "product_id": 1946,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1947,
                "storage_id": 1001,
                "product_id": 1947,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1948,
                "storage_id": 1001,
                "product_id": 1948,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1949,
                "storage_id": 1001,
                "product_id": 1949,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1950,
                "storage_id": 1001,
                "product_id": 1950,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1951,
                "storage_id": 1001,
                "product_id": 1951,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1952,
                "storage_id": 1001,
                "product_id": 1952,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1953,
                "storage_id": 1001,
                "product_id": 1953,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1954,
                "storage_id": 1001,
                "product_id": 1954,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1955,
                "storage_id": 1001,
                "product_id": 1955,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1956,
                "storage_id": 1001,
                "product_id": 1956,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1957,
                "storage_id": 1001,
                "product_id": 1957,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1958,
                "storage_id": 1001,
                "product_id": 1958,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1959,
                "storage_id": 1001,
                "product_id": 1959,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1960,
                "storage_id": 1001,
                "product_id": 1960,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1961,
                "storage_id": 1001,
                "product_id": 1961,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1962,
                "storage_id": 1001,
                "product_id": 1962,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1963,
                "storage_id": 1001,
                "product_id": 1963,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1964,
                "storage_id": 1001,
                "product_id": 1964,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1965,
                "storage_id": 1001,
                "product_id": 1965,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1966,
                "storage_id": 1001,
                "product_id": 1966,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1967,
                "storage_id": 1001,
                "product_id": 1967,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1968,
                "storage_id": 1001,
                "product_id": 1968,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1969,
                "storage_id": 1001,
                "product_id": 1969,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1970,
                "storage_id": 1001,
                "product_id": 1970,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1971,
                "storage_id": 1001,
                "product_id": 1971,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1972,
                "storage_id": 1001,
                "product_id": 1972,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1973,
                "storage_id": 1001,
                "product_id": 1973,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1974,
                "storage_id": 1001,
                "product_id": 1974,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1975,
                "storage_id": 1001,
                "product_id": 1975,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1976,
                "storage_id": 1001,
                "product_id": 1976,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1977,
                "storage_id": 1001,
                "product_id": 1977,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1978,
                "storage_id": 1001,
                "product_id": 1978,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1979,
                "storage_id": 1001,
                "product_id": 1979,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1980,
                "storage_id": 1001,
                "product_id": 1980,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1981,
                "storage_id": 1001,
                "product_id": 1981,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1982,
                "storage_id": 1001,
                "product_id": 1982,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1983,
                "storage_id": 1001,
                "product_id": 1983,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1984,
                "storage_id": 1001,
                "product_id": 1984,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1985,
                "storage_id": 1001,
                "product_id": 1985,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1986,
                "storage_id": 1001,
                "product_id": 1986,
                "stock": 8,
                "critical_stock": 0
            },
            {
                "id": 1987,
                "storage_id": 1001,
                "product_id": 1987,
                "stock": 6,
                "critical_stock": 0
            },
            {
                "id": 1988,
                "storage_id": 1001,
                "product_id": 1988,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1989,
                "storage_id": 1001,
                "product_id": 1989,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1990,
                "storage_id": 1001,
                "product_id": 1990,
                "stock": 10,
                "critical_stock": 0
            },
            {
                "id": 1991,
                "storage_id": 1001,
                "product_id": 1991,
                "stock": 5,
                "critical_stock": 0
            },
            {
                "id": 1992,
                "storage_id": 1001,
                "product_id": 1992,
                "stock": 12,
                "critical_stock": 0
            },
            {
                "id": 1993,
                "storage_id": 1001,
                "product_id": 1993,
                "stock": 1,
                "critical_stock": 0
            },
            {
                "id": 1994,
                "storage_id": 1001,
                "product_id": 1994,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 1995,
                "storage_id": 1001,
                "product_id": 1995,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1996,
                "storage_id": 1001,
                "product_id": 1996,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1997,
                "storage_id": 1001,
                "product_id": 1997,
                "stock": 3,
                "critical_stock": 0
            },
            {
                "id": 1998,
                "storage_id": 1001,
                "product_id": 1998,
                "stock": 15,
                "critical_stock": 0
            },
            {
                "id": 1999,
                "storage_id": 1001,
                "product_id": 1999,
                "stock": 0,
                "critical_stock": 0
            },
            {
                "id": 2000,
                "storage_id": 1001,
                "product_id": 2000,
                "stock": 3,
                "critical_stock": 0
            }
        ]
            , {})

    },
};
