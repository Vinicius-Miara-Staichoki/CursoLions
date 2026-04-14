import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./User.js";


dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado com o MONGODB");

    } catch (error) {
        console.log("Erro: ", error);

    }

}
connectDB();

app.post("/users",async(req,res)=>{
    try{ 
        const novoUsuario = await User.create(req.body);
        res.json(novoUsuario);


        

    }catch(error){
        res.json({error: error.message })

    }


})

app.post("/users", async (req, res) => {
    try {
        const novoUsuario = await User.create(req.body);
        res.json(novoUsuario);
    } catch (error) {
        res.json({ error: error.message });
    }
})

app.get("/users", async (req,res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios)
    } catch (error){
        res.json({ error: error.message})
    }
})

app.put("/users/:id", async (req, res) => {
    try {
        const usuarioAtualizado = await User.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.json(usuarioAtualizado);
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.delete("/users/:id", async (req, res) => {
    try {
        const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
        res.json(usuarioDeletado)
    } catch (error) {
        res.json({ error: error.message });
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const usuarioById = await User.findById(req.params.id);
        res.json(usuarioById)
    } catch (error){
        res.json({ error: error.message})
    }
})





app.listen(PORT, () =>
    console.log("O servidor está rodando na porta: ", PORT)
);









