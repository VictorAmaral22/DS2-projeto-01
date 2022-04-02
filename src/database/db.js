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
        },
        {
            id: 3,
            nome: 'Wholesome Arthur',
            tipo: 2,
            email: 'arthur@gmail.com',
            senha: 'asdasd',
            imagem: 'https://i.kym-cdn.com/photos/images/newsfeed/002/184/477/c96.jpg',
            dataRegistro: '2002-04-22',
            favoritos: []
        },
    ],
    games: [{
            id: 1,
            nome: 'The Last of Us Parte 2',
            dev: 'Naughty Dog',
            datalanc: '2020-06-18',
            sinopse: 'Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações.',
            genero: 0,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png',
            wallpaper: 'https://observatoriodegames.uol.com.br/wp-content/uploads/2020/07/ellie-the-last-of-us-part-2-uhdpaper.com-4K-7.1129-1-scaled.jpg'
        },
        {
            id: 2,
            nome: 'God of War',
            dev: 'Santa Monica Studios',
            datalanc: '2020-06-18',
            sinopse: 'God of War é uma série de jogos eletrônicos de ação-aventura criada por David Jaffe da Santa Monica Studio, da Sony. Iniciada em 2005 no console PlayStation 2, tornou-se carro-chefe para a marca PlayStation, consistindo em oito jogos em várias plataformas, com um nono atualmente em desenvolvimento.',
            genero: 0,
            capa: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
            wallpaper: 'https://images3.alphacoders.com/843/843016.jpg'
        },
        {
            id: 3,
            nome: 'Hades',
            dev: 'Supergiant Games',
            datalanc: '2020-06-18',
            sinopse: 'Na pele do imortal Príncipe do Submundo, você usará os poderes e as armas míticas do Olimpo para se libertar das garras do deus dos mortos, enquanto se fortalece e descobre mais sobre a história a cada tentativa única de fuga.',
            genero: 1,
            capa: 'https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Hades.png',
            wallpaper: 'https://secinfinity.net/wp-content/uploads/2021/11/1636300822_313_Hades-Zagreus-Flucht-kommt-morgen-zum-Xbox-Game-Pass.png'
        },
        {
            id: 4,
            nome: 'Elden Ring',
            dev: 'From Software',
            datalanc: '2020-06-18',
            sinopse: 'Em Elden Ring, o jogador incorpora um Maculado, guerreiro guiado pela força da Graça para portar o poder do Anel Prístino e torna-se um Lorde Prístino. A trama tem como cenário as Terras Intermédias, um local governado pela Rainha Marika.',
            genero: 4,
            capa: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png',
            wallpaper: 'https://asset.vg247.com/elden-ring-pvp.jpeg/BROK/thumbnail/1600x900/quality/100/elden-ring-pvp.jpeg'
        },
        {
            id: 5,
            nome: 'Resident Evil Village',
            dev: 'Capcom',
            datalanc: '2020-06-18',
            sinopse: 'Ambientado anos após os eventos terríveis do aclamado Resident Evil 7: Biohazard, a nova história começa com Ethan Winters e sua esposa, Mia, vivendo tranquilamente em um novo lugar, livres dos pesadelos do passado. Mas quando estavam começando a construir uma nova vida, ocorre novamente uma tragédia.',
            genero: 2,
            capa: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
            wallpaper: 'https://criticalhits.com.br/wp-content/uploads/2021/05/RE_Village_Ethan_Chris_Key_Art-edit.jpg'
        },
    ],
    generos: [
        'Ação', 'Aventura', 'Terror', 'Puzzle', 'RPG', 'Corrida', 'Esporte'
    ]
};

module.exports = db;