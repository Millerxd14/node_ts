"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const PlantillaPlataforma = connection_1.default.define('texto_ayuda_estadistica', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcio_plantilla: {
        type: sequelize_1.DataTypes.TEXT
    },
    descripcion_plantilla_ingles: {
        type: sequelize_1.DataTypes.TEXT
    },
    codigo_auxiliar: {
        type: sequelize_1.DataTypes.TEXT
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT
    },
});
exports.default = PlantillaPlataforma;
//# sourceMappingURL=plantillaPlataforma.js.map