const Oferta = require('../models/Oferta');

const mostrarPagina = async (req, res) => {
    try {
        const idBuscado = req.query.buscarId; 
        let ofertaEncontrada = null;

        if (idBuscado && idBuscado != 0) {
            ofertaEncontrada = await Oferta.findOne({ NroId: Number(idBuscado) });
        }

        res.render('index', { oferta: ofertaEncontrada });
    } catch (error) {
        console.error('Error al buscar la oferta:', error);
        res.status(500).send("Error en el servidor");
    }
};

const obtenerNuevoId = async (req, res) => {
    try {
        const ultimaOferta = await Oferta.findOne().sort({ NroId: -1 });
        let nuevoId = 1; 
        
        if (ultimaOferta) {
            nuevoId = ultimaOferta.NroId + 1; 
        }

        res.json({ nuevoId: nuevoId });
    } catch (error) {
        console.error('Error al generar nuevo ID:', error);
        res.status(500).json({ error: "Error al generar ID" });
    }
};

const crearOferta = async (req, res) => {
    try {
        const nuevaOferta = new Oferta(req.body);
        await nuevaOferta.save();
        res.json({ exito: true, mensaje: 'Oferta guardada correctamente' });
    } catch (error) {
        console.error('Error al guardar:', error);
        res.status(500).json({ exito: false, mensaje: 'Error al guardar la oferta' });
    }
};

const actualizarOferta = async (req, res) => {
    try {
        const idBuscado = req.params.id; 
        await Oferta.findOneAndUpdate({ NroId: idBuscado }, req.body);
        res.json({ exito: true, mensaje: 'Oferta actualizada correctamente' });
    } catch (error) {
        console.error('Error al actualizar:', error);
        res.status(500).json({ exito: false, mensaje: 'Error al actualizar la oferta' });
    }
};

const eliminarOferta = async (req, res) => {
    try {
        const idBuscado = req.params.id;
        await Oferta.findOneAndDelete({ NroId: idBuscado });
        res.json({ exito: true, mensaje: 'Oferta eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).json({ exito: false, mensaje: 'Error al eliminar la oferta' });
    }
};
const listarOfertas = async (req, res) => {
    try {
        const ofertas = await Oferta.find().sort({ NroId: 1 });
        res.render('lista', { ofertas: ofertas });
    } catch (error) {
        console.error('Error al listar las ofertas:', error);
        res.status(500).send("Error al cargar la lista");
    }
};

module.exports = {
    mostrarPagina,
    obtenerNuevoId,
    crearOferta,
    actualizarOferta,
    eliminarOferta,
    listarOfertas
};