<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
    
## Description

Blog API repository.

## Project setup

```bash
$ npm install
```

## Configuration

Create the .env file and configure the database setup

example of an .env file

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=admin
DB_PASSWORD=123456
DATABASE_NAME=blog-db
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Open Swagger

go to {baseURL}/api to open swagger

example for

```
http://localhost:3000/api
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
