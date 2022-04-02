const {games, users, generos} = require('../database/db');
const { nanoid } = require('nanoid');

class GamesController {
    async listaGeral (req, res) {
        const user = req.session.user;
        return res.render('listagem', { games: games, user: user });
    }
    async add (req, res) {
        const { id, nome, dev, datalanc, sinopse, genero, capa, wallpaper } = req.body;
        const game = { id: id, nome: nome, dev: dev, datalanc: datalanc, sinopse: sinopse, genero: genero, capa: capa, wallpaper: wallpaper };
        games.push(game);
        return res.redirect('listagem');
    }
    async detalhar (req, res) {
        const user = req.session.user;
        const { id } = req.params;
        const game = games.filter(item => item.id == id);
        return res.render('detalhar', { game: game[0], generos: generos, user: user });
    }
    async addLista (req, res) {
        const user = req.session.user;
        const { id } = req.params;
        const userList = users.filter(item => item.id == user.id)[0].favoritos;
        userList.push(id);
    }
    async alterar (req, res) {}
    async deletar (req, res) {}    
}

module.exports = { GamesController }