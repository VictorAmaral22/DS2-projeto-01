const db = require('../database/db');
const {users, games} = require('../database/db');
class UsersController {

    async getUser(req, res) {
        const user = req.session.user
        return res.render("profile/profile", { user: user })
    }

    async cadastrar(req, res) {
        let addUser = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            tipo: 2,
            dataRegistro: new Date()
                .toISOString()
                .split("T")[0]
                .split('-')
                .reverse()
                .join('/'),
            favoritos: [],
            imagem: req.body.imagem != ''
                ? req.body.imagem
                : 'https://static.wixstatic.com/media/a5c2a6_a70e379178e64903b74c1c6f367107da~mv2.p' +
                        'ng/v1/fill/w_544,h_544,al_c,lg_1,enc_auto/sem-imagem-avatar.png'
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
        if (!foundUser) 
            return res.send("Usuario não encontrado");
        
        if (foundUser.senha == user.senha) {
            req.session.user = foundUser;
            return res.redirect('/games');
        } else {
            return res.send('Usuário ou senha incorretos');
        }
    }

    async logout(req, res) {
        req
            .session
            .destroy();
        return res.redirect('/home.html');
    }

    async delUser(req, res) {
        const user = req.session.user
        const foundUser = users.findIndex(item => item.id == user.id);
        users.splice(foundUser, 1);
        console.log('users ',users);

        return res.redirect('/home.html');
    }

    async delUserFav(req, res) {
        const user = req.session.user
        const {id} = req.params
        const userIndex = users.findIndex(item => item.id == user.id);
        const foundGame = user.favoritos.findIndex(item => item.id == id);
        users[userIndex].favoritos.splice(foundGame, 1);

        req.session.user = users[userIndex];

        return res.redirect('/users/getUser');
    }

    async editUser (req, res) {
        const { nome, email, senha, imagem } = req.body;
        console.log('Alterando');
        let user = users.find(item => item.id == req.session.user.id);

        if(nome){
            user.nome = nome;
        }
        if(email){
            user.email = email;
        }
        if(senha){
            user.senha = senha;
        }
        if(imagem){
            user.imagem = imagem;
        }

        let index = users.findIndex(item => item.id == req.session.user.id);

        users[index] = user;

        console.log('users',users)

        req.session.user = user

        return res.redirect('/games');
    }
}


module.exports = UsersController;