const mongoose = require('mongoose');

// Definimos la estructura de "Empresa" (que está adentro de tu JSON)
const empresaSchema = new mongoose.Schema({
    RazonSoc: { type: String, required: true },
    Direccion: { type: String },
    Distrito: { type: String }
}, { _id: false }); // Ponemos false para que MongoDB no le cree un ID extra a esta sub-sección

// Definimos la estructura de "Requisitos"
const requisitosSchema = new mongoose.Schema({
    Formacion: { type: String },
    Conocimientos: [{ type: String }] // Arreglo de textos simples (Ej: ["Python", "Java"])
}, { _id: false });

// El Molde Principal de la Oferta
const ofertaSchema = new mongoose.Schema({
    NroId: { type: Number, required: true },
    Empresa: empresaSchema,
    Requisitos: requisitosSchema,
    Experiencia: { type: Number, required: true },
    PagoMensual: { type: Number, required: true },
    Puesto: { type: String, required: true },
    FechaFinal: { type: String } // Opcional, ya que vimos que solo algunas ofertas lo tienen
}, {
    collection: 'Ofertas', // ¡Súper importante! Esto fuerza a que se conecte a tu colección exacta llamada "Ofertas"
    versionKey: false
});

module.exports = mongoose.model('Oferta', ofertaSchema);