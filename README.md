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
