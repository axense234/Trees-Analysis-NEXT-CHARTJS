FROM node:latest
WORKDIR /usr/src/trees-analysis
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm","run", "dev"]