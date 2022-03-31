const db = require('../database/db');
const {
    users
} = require('../database/db');
class UsersController {
    async showDb(req, res) {
        return res.send({
            db: db
        });
    }
    async getUser(req, res) {
        const user = req.session.user
        console.log(user);
        return res.render("profile/profile", {
            user: user
        })
    }
    async cadastrar(req, res) {
        let addUser = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            tipo: 2,
            dataRegistro: new Date(),
            favoritos: [],
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.auctus.com.br%2Fplanejamentoestrategico%2Fsem-imagem-avatar%2F&psig=AOvVaw2_KNbo3JNlXdIdL_js_8VU&ust=1648836835804000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDejYH68PYCFQAAAAAdAAAAABAJ'
        }
        users.push(addUser);

        console.log("Push no users...");
        console.log("Users: ", users);

        req.session.user = addUser;
        res.render('profile/profile', {
            user: addUser
        });
    }

    async login(req, res) {
        const user = req.body;
        console.log(req.body)
        const foundUser = users.find(item => item.email == user.email);
        if (!foundUser) return res.send("Usuario não encontrado");

        if (foundUser.senha == user.senha) {
            req.session.user = foundUser;
            return res.redirect('/users/getUser');
        } else {
            return res.send('Usuário ou senha incorretos');
        }
    }
    async editUser(req, res) {
        const user = req.body;
        console.log(req.body)
        const foundUser = users.find(item => item.email == user.email);

        if (foundUser.senha == user.senha) {
            req.session.user = foundUser;
            return res.render('profile/profile', {
                user: foundUser
            });
        } else {
            return res.send('Usuário ou senha incorretos');
        }
    }
    async delUser(req, res) {
        const email = req.session.user.email
        const foundUser = users.find(item => item.email == email);
        db.users.splice(foundUser, 1);
        console.log(db)
        return res.redirect('/home/home.html');
    }
}

module.exports = UsersController;