const { Router } = require('express');

const UsersController = require('../controllers/user-controller');

const routes = Router();

const userController = new UsersController();

routes.post('/cadastrar', userController.cadastrar);

routes.post('/login', userController.login);

routes.get('/banco', userController.showDb);

module.exports = routes;