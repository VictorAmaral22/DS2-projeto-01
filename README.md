PRIMEIRO TRABALHO DS II

TEMA LIVRE

PADRÃO MVC QUASE COMPLETO (SEM MODEL)
    SERVER (INDEX.JS)
    ROTAS
    CONTROLLERS
    VIEWS

PARTE ESTÁTICA E VIEWS TEM QUE TER CSS
    (PUBLIC) E ARQUIVOS ESTÁTICOS

DADOS => EM MEMÓRIA
    DESAFIO: UTILIZAR UM ARQUIVO JSON E SALVAR

AUTENTICAÇÃO

2 TIPOS DE DADOS/ENTIDADES:
    USER
        TEM TIPO ASSOCIADO (ADMIN/CLIENTE)
    "SEGUNDA IDENTIDADE/CLASSE/OBJ/TABELA"
        TEM QUE ESTAR RELACIONADA AO TIPO DO USUÁRIO
            EXEMPLO: APENAS ADMIN CADASTRA
        TEM QUE POSSUIR 5+ ATT.
            UM DE DATA
        
VISUALIZAÇÃO DAS INFORMAÇÕES DE USUARIO
VISUALIZAÇÃO DAS INFORMAÇÕES DO TEMA
    PERMITIR FILTRO POR PELO MENOS 2 ATRIBUTOS
        * OBRIGATÓRIAMENTE DE DATA E MAIS 1


----------------------------------------------------------

BIBLIOTECA DE GAMES

ENTIDADES:
    - user
        tipo: normal ou admin
        nome
        email
        senha
        datanasc
        icone por url
    - game
        nome
        dev
        datalanc
        genero
        imagem
        sinopse

TELAS: 
    - cadastro/login
    - home
    - jogo
    - user