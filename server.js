const express = require('express');
const connectDB = require('./config/database');
const ofertaRoutes = require('./routes/ofertaRoutes'); 

const app = express();
require('dotenv').config();

connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', ofertaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor encendido en http://localhost:${PORT}`);
});