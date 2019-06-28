### Express Application with Database

#### Prerequisites

1. Docker - https://docs.docker.com/get-started

#### Getting Started

1. To run database (mysql) and server (express): `docker-compose up --build`

#### Next Steps

1. Fix race condition in the spinning up of mysql taking longer than the express app. The above will work the second time you run it.
2. Need to make the app resilient to this issue and retry the connection if it fails.
