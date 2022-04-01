const {games, users, generos} = require('../database/db');
const { nanoid } = require('nanoid');

class GamesController {
    async listaGeral (req, res) {
        const user = req.session.user;
        return res.render('listagem', { games: games, user: user });
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
    }
    async alterar (req, res) {}
    async deletar (req, res) {}    
    async add (req, res) {}
}

module.exports = { GamesController }