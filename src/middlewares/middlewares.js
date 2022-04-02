const middlewareAdmin = (req, res, next) => {
    const user = req.session.user;
    console.log(user)
    if(user && user.tipo == 1){
        next();
    } else {
       return res.send('Você não tem permissão para acessar essa rota!');
    }
};

const middlewareUser = (req, res, next) => {
    const user = req.session.user;
    console.log(user)
    if(user){
        next();
    }else res.redirect('/home.html')
};

module.exports = { middlewareAdmin, middlewareUser }