"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('radius', 'admindatawifi', 'TW3FhnfPV8G3F5V4', {
    host: "restaurada-05octubre.cvxa7jznn96c.us-east-1.rds.amazonaws.com",
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map