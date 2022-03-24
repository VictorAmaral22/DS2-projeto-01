const db = require('../database/db');
const { nanoid } = require('nanoid');

class GamesController {
    async listaGeral (req, res) {
        return res.render('listagem/listagem', { games: db.games });
    }
    async detalhar (req, res) {}
    async addLista (req, res) {}
    async detalhar (req, res) {}
    async alterar (req, res) {}
    async deletar (req, res) {}    
    async add (req, res) {}
}

module.exports = { GamesController }