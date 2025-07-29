FROM maven:3.9.0

WORKDIR /usr/src/api-tests

COPY . .

RUN mvn clean install -DskipTests