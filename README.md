# Projeto Blog

Feito por Rafael Santos Carvalho qualquer problema entre em contato rafasc866@gmail.com

## Sobre

Aqui temos um projeto para desenvolver um site de blog onde pode fazer suas postagens e os usuários
possam interagir com você a ideia é começar a criar uma comunidade, mas também evoluir como vou fazer um deploy apenas em heroku esta inicialmente servindo para desenvolvimento pessoal.

## Docker vs localmente

### Docker

Estamos utilizando docker então se você não quiser instalr nada e tiver o docker instaldo siga estes caminhos inicialmente utilize o comando `docker-compose up -d` vai upar todos os containers que você precisará para rodar o projeto após instalr os containers utilize o comando `docker exec -it Blog-Node bash` que vai fazer você utilizar o terminal do node com o docker após isto utilize o comando `npm install` que vai instalar todas as dependências necessárias e por ultimo `npm run dev` que vai rodar localmente este projeto.

### Localmente

Localmente se já tiver todas as dependências instaladas no seu projeto basta no seu terminal utilizar o comando `npm install` para instalar as dependências do node e `npm run dev` para rodar localmente este projeto.

### Antes de testar a aplicação

Você verá que tem uma pasta com o nome de `.env.example` lá vai ter o exemplo do .env que você deve seguir sugiro que você só mantenha como esta o .env que ele já esta configurado mas caso queira alterar suas configurações no .env você deverá alterar no docker-compose.yml também

```
MYSQL_HOST = "localhost"
MYSQL_PASSWORD = "1234"
MYSQL_USER = "root"
MYSQL_DATABASE = "blog_db"
```

## Teste

O script para testar as funções pela API é `npm run test` ao utilizar este script vai mostrar todas as funções testadas.

## Aplicação

Esta aplicação é para desenvolver uma aplicação de um blog como o twitter que tem integração com o back e o front este repositório é para o back-end onde este repositório se concentra no usuário isto é nos atributos dos usuário e admin no login e no registro dos usuários.

## Arquitetura
```
.
├── src
│   ├──controller --> Camada para a requisição e resposta para o usuário camada mais externa
│   │   ├──UserController
│   │   │   ├──CreateUserController.ts
│   ├──database --> Criação das tabelas
│   │   ├──CreateTable
│   │   │   ├──User.ts
│   │   ├──userCreateTable.ts
│   ├──entities --> Camada de como deve ser as entidades do banco
│   │   ├──User.ts
│   ├──gateway
│   │   ├──connection.ts --> configuração do banco com o host
│   ├──repositories --> Área do banco
│   │   ├──implementation
│   │   │   ├── UserRepository.ts --> implementação do banco de dados de usuário com suas funções
│   │   ├──IUserRepository.ts --> interface de como deve ser a implementação do banco
│   ├──routes --> Rotas para a URL da API
│   │   ├──MainRouter.ts
│   │   ├──UserRouter.ts
│   ├──UserCases --> Casos para o usuário
│   │   ├──CreateUser
│   │   │   ├──interfaces
│   │   │   │   ├──ICreateUserDTO.ts --> interface para criação do usuário.
│   │   │   ├──CreateUserCase.ts --> Camada que conecta com o repositorio a camada que conecta com o banco.
│   │   │   ├──index.ts --> factory a área para montar todas as camads.
│   │   │   ├──validationUserBody.ts --> Camada de validação para a criação do usuário
│   │   ├──DeleteUser
│   │   ├──ReadUser
│   │   ├──Tests
│   │   ├──UpdateUser
│   ├──app.ts --> Arquivo onde tem a construção da aplicação e suas configurações
│   ├──server.ts --> Arquivo onde começa a aplicação para starta em que porta estará
├──.env.example
├──.eslintignore
├──.eslintrc.json
├──docker-compose.yml
├──package-lock.json
├──package.json
├──README.MD
└──tsconfig.json
```
## Criação do usuários

### Arquivos onde estarão para a crição do usuário

- `./src/UserCases/CreateUser/CreateUserCase.ts` -> Camada de conexão com o banco.
- `./src/UserCases/CreateUser/ValidationUserBody.ts` -> Camada de validação.
- `./src/controller/UserController/CreateUserController.ts` -> Camada de requisição e resposta do usuário.

A primeira parte temos o registro dos usuários onde iremos precisar do email,senha,nome,apelido para a criação do usuário isto é o corpo da sua requisição pede para ter esses atributos exemplo:

```
"email": "emailQualquer@emailQualquer.com",
"password": "UmaSenha",
"nickName": "QualquerApelido",
"name": "SeuNome"
```
Resposta se usuário for criado com sucesso:

```
status: 201,
message: "Usuário criado com sucesso"
```

## Tecnologias utilizadas

- NodeJS (Express)
- Docker
- Unit Test(Mocha, Chai, Sinon)
- Lint (EsLint)
- Banco de Dados (MySQL)

## Linguagem de programação utilizada

- TypeScript

## Linguagem do banco

- SQL
