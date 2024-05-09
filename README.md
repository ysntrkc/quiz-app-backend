# Quiz APP Backend

## Description

This is a Node.js-based RESTful API for Quiz APP. It uses the Express framework and PostgreSQL for data storage.

## Database Schema

You can find the database schema from [here](https://drawsql.app/teams/yasin-6/diagrams/quiz-api).

## Installation

1. Clone the repository:

```
git clone https://github.com/ysntrkc/quiz-app-backend.git
```

2. Install dependencies:

```
npm install
```

3. Create database:

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Create .env file in the root directory and add the following:

```
PORT=5000
NODE_ENV=development

SESSION_SECRET={{your-session-secret}}
SESSION_LIFETIME={{session-lifetime-in-milliseconds}}

DATABASE_NAME=quiz-app
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_HOST=127.0.0.1
DATABASE_DIALECT=postgres
```

5. Run the server:

```
npm start
```

## Usage

You can see endpoints by running the server and going to `http://localhost:5000/api-docs/`.