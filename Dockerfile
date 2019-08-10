FROM node:10.16.0-alpine

WORKDIR /usr/src/app

COPY package.* ./
COPY tsconfig.json ./
COPY src ./src

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3050
CMD [ "npm", "run", "start:prod" ]
