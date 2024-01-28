import { Request, Response } from "express";
import TextoAyudaEstadistica from "../models/textoAyudaEstadistica";


export const getUsuarios = async (req: Request , res: Response)=>{
    const textos = await TextoAyudaEstadistica.findAll();
    res.json({
        textos
    });
}



export const getUsuario = async (req: Request , res: Response)=>{
    const { id } = req.params;
    const texto = await TextoAyudaEstadistica.findByPk(id);


    if(texto){
        res.json(texto);
    }else{
        res.status(404).json({ message: "Not found"});
    }
}


export const postUsuario = async (req: Request , res: Response)=>{
    const body  = req.body;
    try {
        const texto = new TextoAyudaEstadistica(body);
        await texto.save();
        res.json(texto);
    } catch (error) {
        res.status(500).json({
            message: "Internal error"
        })
    }
}



export const putUsuario = async (req: Request , res: Response)=>{
    const { id } = req.params;
    const { body } = req;
    try {
        const existe_texto = await TextoAyudaEstadistica.findByPk(id);
        if(!existe_texto){
            return res.status(404).json({
                message:"Not fount Texto"
            });
        }

        await existe_texto.update(body);
        return res.json(existe_texto);

    } catch (error) {
        res.status(500).json({
            message: "Internal error"
        })
    }
}



export const deleteUsuario = async (req: Request , res: Response)=>{
    const { id } = req.params;
    const existe_texto = await TextoAyudaEstadistica.findByPk(id);
    if(!existe_texto){
        return res.status(404).json({
            message:"Not fount Texto"
        });
    }

    try {
        await existe_texto.destroy();
        return res.json({
            message:"Texto eliminado"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal error"
        })
    }


}