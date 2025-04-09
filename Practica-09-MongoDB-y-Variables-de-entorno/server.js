const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Conectando a MongoDB"))
.catch(()=>console.error("Error al conectar MongoDB"));


app.get("/",(req,res)=>{
    res.send('Api funcionando')

})


const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})