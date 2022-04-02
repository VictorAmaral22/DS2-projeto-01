const {
    Router
} = require('express');

const UsersController = require('../controllers/user-controller');

const { middlewareUser } = require('../middlewares/middlewares');

const routes = Router();

const userController = new UsersController();

routes.post('/cadastrar', userController.cadastrar);
routes.post('/login', userController.login);
routes.get('/logout', userController.logout);
routes.get('/getUser', middlewareUser, userController.getUser);
// routes.post('/editUser', middlewareUser, userController.editUser);
routes.post('/delUser', middlewareUser, userController.delUser);

module.exports = routes;


module.exports = routes;