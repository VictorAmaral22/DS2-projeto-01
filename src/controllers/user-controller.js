const db = require('../database/db');

class UsersController {
    async showDb(req, res){
        return res.send({ db: db });
    }

    async cadastrar(req, res) {
        const user = req.body;
        db.users.push(user);
        
        console.log("Push no users...");
        console.log("Users: ", users);
        
        req.session.user = user;
        res.redirect("/");
    }

    async login(req, res) {
        const user = req.body;

        const foundUser = users.find(item => item.email == user.email);
        if (!foundUser) return res.send("Usuario não encontrado");

        if (foundUser.senha == user.senha) {
            req.session.user = foundUser;
            return res.send('Login');
        } else {
            return res.send('Usuário ou senha incorretos');
        }
    }
}

module.exports = UsersController;