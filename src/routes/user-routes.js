const {
    Router
} = require('express');

const UsersController = require('../controllers/user-controller');

const { middlewareUser, middlewareCache } = require('../middlewares/middlewares');

const routes = Router();

const userController = new UsersController();

routes.post('/cadastrar', middlewareCache, userController.cadastrar);
routes.post('/login', middlewareCache, userController.login);
routes.get('/logout',middlewareCache, userController.logout);
routes.get('/getUser', middlewareCache, middlewareUser, userController.getUser);
routes.post('/editUser', middlewareUser, userController.editUser);
routes.post('/delUser', middlewareCache, middlewareUser, userController.delUser);
routes.get('/delUserFav/:id', middlewareCache, middlewareUser, userController.delUserFav);
module.exports = routes;


module.exports = routes;