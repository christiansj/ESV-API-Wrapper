<a id="readme-top"></a>

# ESV API Wrapper
Backend API that fetches Bible verses from [https://esv.org](https://www.esv.org/). 


## Built With
- [![Docker][Docker-Badge]][DockerCompose-Url]
- [![Express][Express.js-Badge]][Express-Url]
- [![TypeScript][Typescript-Badge]][TypeScript-Url]
- [![MySQL][MySQL-Badge]][MySQL-Url]
- [![RestAssured][RestAssured-Badge]][RestAssured-Url]
- [![RobotFramework][RobotFramework-Badge]][RobotFramework-Url]

## Getting Started

### Prerequisites 
Docker Compose is used to manage the application's services. Configurations can be found in `docker-compose.yaml`

Docker Compose can be downloaded here [here](https://docs.docker.com/compose/install).

### Installation
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

### Testing
Ensure the `api-tests` and `database-tests` Docker containers are running prior to running tests.

#### API Testing
[REST Assured](https://rest-assured.io/) is used for API testing.

1. Run the `api-tests` container
```bash
docker exec -it api-tests bash
```
2. Run the API tests using Maven
```bash
mvn test
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Database Testing
[Robot Framework](https://robotframework.org/) is used for database testing.

1. Run the `database-tests` container
```bash
docker exec -it database-tests bash
```
2. Run the Database test
```bash
robot -d ouput tests
```

(Log files are generated in output directory)
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Docker-Badge]: https://img.shields.io/badge/Docker%20Compose-2496ED?logo=docker&logoColor=fff
[Express.js-Badge]: https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat
[MySQL-Badge]: https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff
[Typescript-Badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[RestAssured-Badge]: https://img.shields.io/badge/REST%20Assured-green
[RobotFramework-Badge]: https://img.shields.io/badge/Robot%20Framework-black

[Express-Url]: https://expressjs.com/en/
[TypeScript-Url]: https://www.typescriptlang.org/
[DockerCompose-Url]: https://docs.docker.com/compose/
[MySQL-Url]: https://www.mysql.com/
[RestAssured-Url]: https://rest-assured.io/
[RobotFramework-Url]: https://robotframework.org/