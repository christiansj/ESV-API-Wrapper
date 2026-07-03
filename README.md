<a id="readme-top"></a>

# ESV API Wrapper
Containerized API wrapper that fetches Bible verses from [https://esv.org](https://www.esv.org/). 


## Built With
- [![Docker][Docker-Badge]][DockerCompose-Url]
- [![Express][Express.js-Badge]][Express-Url]
- [![TypeScript][Typescript-Badge]][TypeScript-Url]
- [![MySQL][MySQL-Badge]][MySQL-Url]
- [![Java][Java-Badge]][Java-Url]
- [![Swaggger][Swagger-Badge]][Swagger-Url]
- [![RestAssured][RestAssured-Badge]][RestAssured-Url]
- [![RobotFramework][RobotFramework-Badge]][RobotFramework-Url]

## Getting Started

### Prerequisites 
[Docker Compose][DockerCompose-Url] is used to manage the application's services. Container configuration can be found in the `docker-compose.yaml` file.

Docker can be downloaded [here](https://www.docker.com/products/docker-desktop/).

Verify Docker is installed
```bash 
docker --version
```

### Project Setup

Follow the steps below to set up the project locally. 

1. Generate a free API key at [https://api.esv.org/docs/](https://api.esv.org/docs/)
2. Clone the repo
```bash
git clone https://github.com/christiansj/ESV-API-Wrapper.git
```
3. Paste your API key in `.env`
```
ESV_API_KEY='Paste API Key here'
```
4. Start the Docker Compose containers
```bash
docker compose up -d --build
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
### API
The Express server is run from the `esv-api` container. It can be reached at `http://localhost:8080/`. 

#### Documentation
[Swagger][Swagger-Url] is used to document all API endpoints and schemas. It can be accessed at `http://localhost:8080/api-docs`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Testing
Ensure the `api-tests` and `database-tests`  containers are running prior to executing tests by running `docker-compose ps`.

#### API Testing
[REST Assured][RestAssured-Url] is used for API testing.

1. Run the `api-tests` container
```bash
docker exec -it api-tests bash
```
2. Run the API tests using Maven
```bash
mvn test
```

(Log files are generated in `main/resources/logs` directory)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Database Testing
[Robot Framework][RobotFramework-Url] is used for database testing.

1. Run the `database-tests` container
```bash
docker exec -it database-tests bash
```
2. Run the database tests
```bash
robot -d ouput tests
```

(Log files are generated in `output` directory)
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[Docker-Badge]: https://img.shields.io/badge/Docker%20Compose-2496ED?logo=docker&logoColor=fff
[Express.js-Badge]: https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB
[Swagger-Badge]: https://img.shields.io/badge/Swagger-lightgreen
[MySQL-Badge]: https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff
[Typescript-Badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[Java-Badge]: https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white
[RestAssured-Badge]: https://img.shields.io/badge/REST%20Assured-green
[RobotFramework-Badge]: https://img.shields.io/badge/Robot%20Framework-darkgray

[Express-Url]: https://expressjs.com/en/
[TypeScript-Url]: https://www.typescriptlang.org/
[Swagger-Url]: https://swagger.io/
[DockerCompose-Url]: https://docs.docker.com/compose/
[MySQL-Url]: https://www.mysql.com/
[Java-Url]: https://www.java.com/en/
[RestAssured-Url]: https://rest-assured.io/
[RobotFramework-Url]: https://robotframework.org/