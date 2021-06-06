const json = require('../discos.json');

exports.discografiaHome = (req, res) =>{
    res.send('Index');
}

exports.busquedaDiscos = (req, res) =>{
    const titulo = req.query.titulo;
    const artista = req.query.artista;
    const lanzamiento = parseInt(req.query.lanzamiento);
    let resultado = json.discos;
    

    if (titulo) {
        resultado = resultado.filter(elemento => elemento.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }

    if (artista) {
        resultado = resultado.filter(elemento => elemento.artista.toLowerCase().includes(artista.toLowerCase()));
    }

    if (lanzamiento) {
        resultado = resultado.filter(elemento => elemento.lanzamiento === lanzamiento);
    }
    
    res.json({ discos: resultado });
    

}