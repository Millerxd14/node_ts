
import  express, {Application}  from "express";
import routerUsuarios from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";

class Server{

    private app: Application;
    private port:String ;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };
    constructor(){
        this.app = express();
        this.port= process.env.PORT || '8000';

        this.dbConnection();
        //
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('DB online');
        } catch (error: any) {
            throw new Error(error);
            
        }
    }
    middlewares(){
        //Cors
        this.app.use(cors());
        // Json
        this.app.use(express.json());
        // Public folder
        this.app.use(express.static('public'));

    }
    routes(){
        this.app.use(this.apiPaths.usuarios, routerUsuarios)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server running in port ', this.port)
        })
    }
}


export default Server;