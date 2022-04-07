
const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', './src/view');

// SESSION
app.use(session({
    secret: 'BOMBAPATCH',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

// PARSER DOS FORMULÁRIOS
app.use(express.urlencoded({
    extended: true
}));

// PARSER DAS REQUISIÇOES COM JSON
app.use(express.json());
app.use(express.static('public'));

app.use('*', (req, res, next) => {
    console.log(`Request recebido para ${req.baseUrl} as ${new Date()}`);
    next();
})

app.get('/', (req, res) => {
    res.redirect('/home.html');
});

const gamesRoutes = require('./routes/games-routes');
const userRoutes = require('./routes/user-routes');

app.use('/games', gamesRoutes);
app.use('/users', userRoutes);


app.use('*', (req, res) => {
    return res.status(404).send(`
        <h1>Sorry, not found!!!</h1>
        <a href="/home.html">VOLTAR</a>
    `);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server iniciado em ${PORT}`));