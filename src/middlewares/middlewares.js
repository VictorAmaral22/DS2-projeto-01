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
const middlewareCache = (req,res,next)=>{
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
}
module.exports = { middlewareAdmin, middlewareUser, middlewareCache }