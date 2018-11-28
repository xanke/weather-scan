FROM node:8.9.4

COPY . /app/
WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 7001
CMD ["npm", "run", "dev"]