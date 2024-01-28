import Server from "./models/server";
import dotenv from "dotenv";

//Configurar env
dotenv.config();

const app = new Server();



app.listen();