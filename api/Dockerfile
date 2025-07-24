FROM node:18

WORKDIR /api

COPY package*.json /api/

# RUN npm i -G nodemon
RUN npm install

COPY . /api/

EXPOSE 8080

CMD ["npm", "run", "dev"]