const { Router } = require('express');

const { GamesController } = require('../controllers/games-controller');
const { middlewareUser, middlewareAdmin } = require('../middlewares/middlewares');

const routes = Router();

const gamesController = new GamesController();

routes.get('/', gamesController.listaGeral);

routes.get('/add', middlewareAdmin, gamesController.renderAdd);
routes.post('/add', middlewareAdmin, gamesController.add);

routes.get('/:id', gamesController.detalhar);
routes.get('/:id/add-lista', middlewareUser, gamesController.addLista);

routes.get('/:id/deletar', middlewareAdmin, gamesController.renderDeletar);
routes.post('/:id/deletar', middlewareAdmin, gamesController.deletar);
routes.get('/:id/alterar', middlewareAdmin, gamesController.renderAlterar);
routes.post('/:id/alterar', middlewareAdmin, gamesController.alterar);


module.exports = routes;