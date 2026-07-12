const express = require('express');
const connectDB = require('./config/database');
const ofertaRoutes = require('./routes/ofertaRoutes'); // 👈 Importamos tus rutas

const app = express();
require('dotenv').config();

// 1. Ejecutar la conexión a la base de datos
connectDB();

// 2. Configurar el servidor para entender formularios y usar EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3. Habilitar las rutas en la aplicación 👈
app.use('/', ofertaRoutes);

// 4. Encender el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor encendido en http://localhost:${PORT}`);
});