import {Sequelize} from "sequelize";
import dotenv from 'dotenv';


const db = new Sequelize('','', '',{
    host:"",
    dialect:'mysql',
    //logging: false
});


export default db;