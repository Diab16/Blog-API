<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Blog API built using NestJs and TypeORM</p>
    <p align="center">
    
## Requirements

1. **User Authentication**:

   - Implement user registration and login using JWT authentication.
   - Store passwords securely using hashing (e.g., bcrypt).

2. **CRUD Operations for Blog Posts**:

   - Users should be able to:
     - Create a blog post (title, content).
     - View all posts.
     - View a single post by ID.
     - Update their own posts.
     - Delete their own posts.
   - Other users can view posts but cannot modify them.

3. **Database**:

   - Use PostgreSQL (or any SQL database) with TypeORM or Prisma ORM.

4. **Validation**:

   - Add validation for incoming requests using class-validator and class-transformer.

5. **Swagger Documentation**:
   - Document all the APIs using Swagger for API testing and visualization.

## future work

- Implement pagination for listing posts.
- Add filtering options to fetch posts based on title or author.

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

---
