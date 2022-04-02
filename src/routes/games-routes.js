const { Router } = require('express');

const { GamesController } = require('../controllers/games-controller');

const routes = Router();

const gamesController = new GamesController();

const middlewareAdmin = (req, res, next) => {
    const user = req.session.user;
    console.log(user)
    if(user && user.tipo == 1){
        next();
    } else {
       return res.redirect('/games');
    }
};

routes.get('/', gamesController.listaGeral);

routes.post('/add', gamesController.add);

routes.get('/:id', gamesController.detalhar);
routes.get('/:id/add-lista', gamesController.addLista);

routes.get('/:id/deletar', middlewareAdmin, gamesController.renderDeletar);
routes.post('/:id/deletar', middlewareAdmin, gamesController.deletar);
routes.get('/:id/alterar', middlewareAdmin, gamesController.renderAlterar);
routes.post('/:id/alterar', middlewareAdmin, gamesController.alterar);


module.exports = routes;