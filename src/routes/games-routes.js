const { Router } = require('express');

const { GamesController } = require('../controllers/games-controller');

const routes = Router();
const gamesController = new GamesController();

routes.get('/', gamesController.listaGeral);

routes.post('/add', gamesController.add);

routes.get('/:id', gamesController.detalhar);
routes.get('/:id/deletar', gamesController.deletar);
routes.get('/:id/alterar', gamesController.alterar);
routes.get('/:id/add-lista', gamesController.addLista);


module.exports = routes;