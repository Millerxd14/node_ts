import {Sequelize} from "sequelize";
import dotenv from 'dotenv';


const db = new Sequelize('radius','admindatawifi', 'TW3FhnfPV8G3F5V4',{
    host:"restaurada-05octubre.cvxa7jznn96c.us-east-1.rds.amazonaws.com",
    dialect:'mysql',
    //logging: false
});


export default db;