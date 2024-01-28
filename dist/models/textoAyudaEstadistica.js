"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const TextoAyudaEstadistica = connection_1.default.define('texto_ayuda_estadistica', {
    plantilla: {
        type: sequelize_1.DataTypes.STRING
    },
    seccion_plantilla: {
        type: sequelize_1.DataTypes.STRING
    },
    posicion: {
        type: sequelize_1.DataTypes.STRING
    },
    texto: {
        type: sequelize_1.DataTypes.TEXT
    },
    texto_ingles: {
        type: sequelize_1.DataTypes.TEXT
    },
    proyecto: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = TextoAyudaEstadistica;
//# sourceMappingURL=textoAyudaEstadistica.js.map