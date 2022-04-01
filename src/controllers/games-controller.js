const {games, users} = require('../database/db');
const { nanoid } = require('nanoid');

class GamesController {
    async listaGeral (req, res) {
        const user = req.session.user;
        return res.render('listagem/listagem', { games: games, user: user });
    }
    async detalhar (req, res) {}
    async addLista (req, res) {}
    async detalhar (req, res) {}
    async alterar (req, res) {}
    async deletar (req, res) {}    
    async add (req, res) {}
}

module.exports = { GamesController }