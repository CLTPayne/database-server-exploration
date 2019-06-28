### Express Application with Database

#### Prerequisites

1. Docker - https://docs.docker.com/get-started

#### Getting Started

1. Set up database (mysql): `docker run -it -e MYSQL_ROOT_PASSWORD=password --publish 3306:3306 mysql:5.7`
2. Install the dependencies: `npm install`
3. Set up the server (express): `docker build . --tag express-mysql-exploration`

#### Next Steps

1. Dockerize the express app.
