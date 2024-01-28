"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const textoAyudaEstadistica_1 = __importDefault(require("../models/textoAyudaEstadistica"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const textos = yield textoAyudaEstadistica_1.default.findAll();
    res.json({
        textos
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const texto = yield textoAyudaEstadistica_1.default.findByPk(id);
    if (texto) {
        res.json(texto);
    }
    else {
        res.status(404).json({ message: "Not found" });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const texto = new textoAyudaEstadistica_1.default(body);
        yield texto.save();
        res.json(texto);
    }
    catch (error) {
        res.status(500).json({
            message: "Internal error"
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const existe_texto = yield textoAyudaEstadistica_1.default.findByPk(id);
        if (!existe_texto) {
            return res.status(404).json({
                message: "Not fount Texto"
            });
        }
        yield existe_texto.update(body);
        return res.json(existe_texto);
    }
    catch (error) {
        res.status(500).json({
            message: "Internal error"
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const existe_texto = yield textoAyudaEstadistica_1.default.findByPk(id);
    if (!existe_texto) {
        return res.status(404).json({
            message: "Not fount Texto"
        });
    }
    try {
        yield existe_texto.destroy();
        return res.json({
            message: "Texto eliminado"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal error"
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map