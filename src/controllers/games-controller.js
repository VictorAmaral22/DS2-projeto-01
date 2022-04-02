const {games, users, generos} = require('../database/db');
const { nanoid } = require('nanoid');

class GamesController {
    async listaGeral (req, res) {
        const user = req.session.user;
        return res.render('listagem/listagem', { games: games, user: user });
    }

    async add (req, res) {
        const { id, nome, dev, datalanc, sinopse, genero, capa, wallpaper } = req.body;
        const game = { id: id, nome: nome, dev: dev, datalanc: datalanc, sinopse: sinopse, genero: genero, capa: capa, wallpaper: wallpaper };
        games.push(game);
        return res.redirect('listagem/listagem');
    }

    async detalhar (req, res) {
        const user = req.session.user;
        const { id } = req.params;
        const game = games.filter(item => item.id == id);
        return res.render('detalhar/detalhar', { game: game[0], generos: generos, user: user });
    }

    async addLista (req, res) {
        const user = req.session.user;
        const { id } = req.params;
        const userList = users.filter(item => item.id == user.id)[0].favoritos;
        userList.push(id);
        user.favoritos = userList;
        req.session.user = user;
        console.log(req.session.user);

        const game = games.filter(item => item.id == id);

        return res.render('detalhar/detalhar', { game: game[0], generos: generos, user: user });
    }

    async renderAlterar (req, res) {
        const user = req.session.user;
        const { id } = req.params;
        const game = games.filter(item => item.id == id)[0];
        console.log(game);
        return res.render('alterar/alterar', { game: game, generos: generos, user: user  });
    }

    async alterar (req, res) {
        const { id } = req.params;
        const { nome, dev, datalanc, sinopse, genero, capa, wallpaper } = req.body;
        const game = { id: id, nome: nome, dev: dev, datalanc: datalanc, sinopse: sinopse, genero: genero, capa: capa, wallpaper: wallpaper };
        console.log('Alterando');

        let index = games.findIndex(item => item.id == id);
        games[index] = game;

        console.log('games',games)

        return res.redirect('/games');
    }

    async renderDeletar (req, res) {
        const user = req.session.user;
        const { id } = req.params;
        const game = games.filter(item => item.id == id)[0];
        console.log(game);
        return res.render('deletar/deletar', { game: game, generos: generos, user: user });
    }

    async deletar (req, res) {
        const { id } = req.params;
        const foundGame = games.find(item => item.id == id);
        games
            .splice(foundGame, 1);
        return res.redirect('/games');
    }
}

module.exports = { GamesController }