FROM node:23.9.0-slim

WORKDIR /app

COPY ./ .

RUN rm -rf node_modules

RUN npm i

CMD ["npm", "run", "dev"]