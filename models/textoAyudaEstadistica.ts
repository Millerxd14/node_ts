import { DataTypes } from "sequelize";
import db from "../db/connection";

const TextoAyudaEstadistica = db.define('texto_ayuda_estadistica',{
    plantilla:{
        type:DataTypes.STRING
    },
    seccion_plantilla:{
        type:DataTypes.STRING
    },
    posicion:{
        type:DataTypes.STRING
    },
    texto:{
        type:DataTypes.TEXT
    },
    texto_ingles:{
        type:DataTypes.TEXT
    },
    proyecto:{
        type:DataTypes.STRING
    },
});


export default TextoAyudaEstadistica;