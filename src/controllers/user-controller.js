const db = require('../database/db');
const {users} = require('../database/db');
class UsersController {
    async showDb(req, res){
        return res.send({ db: db });
    }
    async getUser(req,res){
        const user = req.session.user
        return res.render("profile", {user:user})
    }
    async cadastrar(req, res) {
        const user = req.body;
        users.push(user);
        
        console.log("Push no users...");
        console.log("Users: ", users);
        
        req.session.user = user;
        res.render('profile/profile', {user:user});
    }

    async login(req, res) {
        const user = req.body;
        console.log(req.body)
        const foundUser = users.find(item => item.email == user.email);
        if (!foundUser) return res.send("Usuario não encontrado");

        if (foundUser.senha == user.senha) {
            req.session.user = foundUser;
            return res.render('profile/profile', {user:foundUser});
        } else {
            return res.send('Usuário ou senha incorretos');
        }
    }
}

module.exports = UsersController;