let db = {
    users: [{
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
    games: [{
            id: 1,
            nome: 'The Last of Us Parte 2',
            dev: 'Naughty Dog',
            datalanc: '2020-06-18',
            sinopse: 'Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações.',
            genero: 0,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png',
            wallpaper: 'https://www.gamerpoint.com.br/wp-content/uploads/2020/06/The-Last-of-Us-Part-II-vai-receber-um-path-de-atualiza%C3%A7%C3%A3o-que-adiciona-o-modo-foto-no-dia-do-seu-lan%C3%A7amento-1200x675.jpeg'
        },
        {
            id: 2,
            nome: 'God of War',
            dev: 'Santa Monica Studios',
            datalanc: '2020-06-18',
            sinopse: 'God of War é uma série de jogos eletrônicos de ação-aventura criada por David Jaffe da Santa Monica Studio, da Sony. Iniciada em 2005 no console PlayStation 2, tornou-se carro-chefe para a marca PlayStation, consistindo em oito jogos em várias plataformas, com um nono atualmente em desenvolvimento.',
            genero: 0,
            capa: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
            wallpaper: 'https://s2.glbimg.com/L-yD01fH8cYsAZ5NLG7pLZkw7Sc=/0x0:695x390/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/Q/Z/5KUs3KTbqAALVOJMmRhg/god-of-war-pc-playstation-4-ps4-nvidia-dlss-4k.jpg'
        },
        {
            id: 3,
            nome: 'Hades',
            dev: 'Supergiant Games',
            datalanc: '2020-06-18',
            sinopse: 'Na pele do imortal Príncipe do Submundo, você usará os poderes e as armas míticas do Olimpo para se libertar das garras do deus dos mortos, enquanto se fortalece e descobre mais sobre a história a cada tentativa única de fuga.',
            genero: 0,
            capa: 'https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Hades.png',
            wallpaper: 'https://secinfinity.net/wp-content/uploads/2021/11/1636300822_313_Hades-Zagreus-Flucht-kommt-morgen-zum-Xbox-Game-Pass.png'
        },
    ],
    generos: [
        'Ação', 'Aventura', 'Terror', 'Puzzle', 'RPG', 'Corrida', 'Esporte'
    ]
};

module.exports = db;