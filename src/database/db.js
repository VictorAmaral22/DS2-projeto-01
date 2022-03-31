let db = {
    users: [
        {
            id: 1,
            nome: 'Vitão',
            tipo: 1,
            email: 'victor@gmail.com',
            senha: 'asdasd',
            imagem: 'https://www.tonica.la/__export/1587064435851/sites/debate/img/2020/04/16/john-shelby-joe-cole-peaky-blinders-siempre-fue-show-cillian-murphy-bbc.jpg_423682103.jpg',
            dataRegistro: '2002-04-22',
            favoritos: []
        }, 
        {
            id: 2,
            nome: 'Silvo',
            tipo: 1,
            email: 'silvio@gmail.com',
            senha: 'asdasd',
            imagem: 'https://onlineseries.com.br/wp-content/uploads/2020/01/Peaky-Blinders-6%C2%AA-temporada.jpg',
            dataRegistro: '2002-04-26',
            favoritos: []
        }
    ],
    games: [
        {
            id: 1,
            nome: 'The Last of Us Parte 2',
            dev: 'Naughty Dog',
            datalanc: '2020-06-18',
            sinopse: 'Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações.',
            genero: 0,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png',
            wallpaper: 'https://www.gamerpoint.com.br/wp-content/uploads/2020/06/The-Last-of-Us-Part-II-vai-receber-um-path-de-atualiza%C3%A7%C3%A3o-que-adiciona-o-modo-foto-no-dia-do-seu-lan%C3%A7amento-1200x675.jpeg'
        }
    ],
    generos: [
        'Ação', 'Aventura', 'Terror', 'Puzzle', 'RPG', 'Corrida', 'Esporte'
    ]
};

module.exports = db;