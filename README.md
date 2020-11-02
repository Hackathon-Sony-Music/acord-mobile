# Acord

Acord é uma plataforma de facilitação, promovendo a convergência entre um potencial artista, um profissional do ramo de produção musical e uma grande gravadora interessada no recrutamento de novos talentos.

## Desenvolvedores

* Norton Ricardo
* Wilian Antunes
* Omar
* Victor Junior 
* Victor Araujo 

## Ferramentas utilizada no desenvolvimento

Toda aplicaçao mobile foi construínda com ionic.
* Ionic     -> version = '4'

## Instalação de Dependências
O projeto é iniciado com os comandos ionic regulares.

1. Run `npm install` para instalar todas as dependências.
2. Run `ionic serve` para iniciar o ambiente de desenvolvimento.
3. Para construir o projeto, execute `ionic build android` ou `ionic build ios`. Para criar um aplicativo iOS, você precisa executá-lo no MacOS.


## Estrutura de Projeto

```
.
 ├── resources                    # Build files on the specific platforms (iOS, Android) and app icon + splash
 ├── src                          # This is where the app lives - *the main folder*
 ├── .editorconfig                # A helper file to define and maintain coding styles across environments
 ├── .gitignore                   # Specifies intentionally untracked files to ignore when using Git
 ├── .io-config.json              # Ionic ID
 ├── config.xml                   # Ionic config file
 ├── .ionic.config.json           # Global configuration for your Ionic app
 ├── package.json                 # Dependencies and build scripts
 ├── readme.md                    # Project description
 ├── tsconfig.json                # TypeScript configurations
 └── tslint.json                  # TypeScript linting options
```

### Estrutura de Diretorio
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # This folder contains global modules and styling
   │   ├── assets                 # This folder contains images and the *data.json*
   |   ├── pages                  # Contains all the individual pages (home, tabs, category, list, single-item)
   |   ├── services               # Contains the item-api service that retrieves data from the JSON file
   |   ├── theme                  # The global SCSS variables to use throughout the app
   |   ├── declarations.d.ts      # A config file to make TypeScript objects available in intellisense
   |   ├── index.html             # The root index app file - This launches the app
   |   ├── manifest.json          # Metadata for the app
   │   └── service-worker.js      # Cache configurations
   └── ...
```


## Rodando o Projeto
- Abra o projeto via terminar
- Execute o seguinte comando:   
  - npm install
- Execure o comando:
  - ionic serve

