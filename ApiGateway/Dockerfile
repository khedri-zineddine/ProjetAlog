FROM node:14-alpine

WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
EXPOSE 7000

ENV NODE_ENV=development
CMD ["npm", "start"]