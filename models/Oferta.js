const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    RazonSoc: { type: String, required: true },
    Direccion: { type: String },
    Distrito: { type: String }
}, { _id: false }); 

const requisitosSchema = new mongoose.Schema({
    Formacion: { type: String },
    Conocimientos: [{ type: String }] 
}, { _id: false });

const ofertaSchema = new mongoose.Schema({
    NroId: { type: Number, required: true },
    Empresa: empresaSchema,
    Requisitos: requisitosSchema,
    Experiencia: { type: Number, required: true },
    PagoMensual: { type: Number, required: true },
    Puesto: { type: String, required: true },
    FechaFinal: { type: String } 
}, {
    collection: 'Ofertas',
    versionKey: false
});

module.exports = mongoose.model('Oferta', ofertaSchema);