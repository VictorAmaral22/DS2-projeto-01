const { Router } = require('express');

const UsersController = require('../controllers/user-controller');

const routes = Router();

const userController = new UsersController();

routes.post('/cadastrar', userController.cadastrar);
routes.post('/login', userController.login);


routes.get('/getUser',(req,res,next)=>{
    if(req.session.user) next();
    else res.redirect('/login.html');
}, userController.getUser);
routes.post('/editUser', userController.editUser);
routes.post('/delUser', userController.delUser);

module.exports = routes;