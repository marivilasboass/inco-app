# Inco App

Código em react native para o aplicativo da Inco

## Instalando
- Clone o repo
- `npm install`
- `cd ios && pod install`
- `npx react-native link`
- Talvez tenha que instalar o [watchman](https://facebook.github.io/watchman/docs/install.html) para funcionar

## Estrutura de diretórios
```bash
rocketseat-basic
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       └── Fonts.tff
|   |   └── icon/
|   │       └── index.js
│   |   └──images/
│   │      └──logo.png
│   │ 
│   ├── components/
│   │   └── Button/
│   │       └── index.js
|   |       └── style.js
|   |   └── SocialButton/
|   │       └── index.js
|   |       └── style.js
|   |   └── StatusBar/
|   │       └── index.js
|   |       └── style.js
|   |   └── index.js
│   │
│   ├── screens/
│   │   └── Home/
│   │       └── index.js
|   |       └── style.js
|   |   └── SingIn/
|   │       └── index.js
|   |       └── style.js
│   │   └── index.js  
│   │
│   ├── services/
│   │   └── api.js
│   │
|   ├── theme/
│   │   └── globalStyle.js
│   │
│   └── routes.js
├── .eslintrc.js
├── .gitignore
├── App.js
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── package-lock.json
├── react-native.config.js
└── README.md
```

## Edição

- **src** - diretório quem contém todos os arquivos da aplicação;
    - **assets**
        - **fontes** - diretório de armazenamento fontes customizadas utilizadas na aplicação;
        
        - **icon** - diretório de armazenamento icones em formato `SVG` utilizadOs na aplicação;
        
        - **images** - diretório de armazenamento imagens em geral utilizadas na aplicação;
        
    - **components** - diretório quem contém todos os componentes reaproveitáveis da aplicação;

    - **screens** - diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **services** - diretório onde são criados os arquivos relacionados a serviços utilizados na aplicação;
        - **api.js** - arquivo com a configuração e url para requisições HTTP;

  - **routes.js** - arquivo com as configurações de navegação da aplicação;

- **.eslintrc.js** - arquivo de configuração do ESLint;

- **babel.config.js** - arquivo de configuração do Babel;

- **App.js** - arquivo responsável por centralizar o código do diretório `src`;

- **index.js** - arquivo raiz da aplicação;

- **jsconfig.json** - arquivo de configuração do JavaScript no Editor;

- **package.json** - arquivo que contém todas as configurações necessárias para a publicação e execução do projeto;

- **react-native.config.js** - arquivo de configuração de fontes customizáveis;



