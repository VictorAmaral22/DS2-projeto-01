const { Router } = require('express');

const { GamesController } = require('../controllers/games-controller');

const routes = Router();
const gamesController = new GamesController();


const middlewareAdmin = (req, res, next) => {
    const user = req.session.user.tipo = 1;
    console.log(user)
    if(user){
        next();
    }else res.send('Você não tem permissão para entrar nessa página')
};


routes.get('/', gamesController.listaGeral);

routes.post('/add', gamesController.add);

routes.get('/:id', gamesController.detalhar);
routes.get('/:id/deletar', middlewareAdmin, gamesController.deletar);
routes.get('/:id/alterar', middlewareAdmin, gamesController.alterar);
routes.get('/:id/add-lista', middlewareAdmin, gamesController.addLista);


module.exports = routes;