FROM node:16-alpine

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .

CMD ["npx", "http-server", "-p", "8080"]
