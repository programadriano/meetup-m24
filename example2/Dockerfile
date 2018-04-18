FROM node:alpine

ENV HOME=/home/app

COPY dist/ ${HOME}/videos/

COPY package.json ${HOME}/videos/

COPY node_modules/ ${HOME}/videos/node_modules/

#RUN npm install  --silent --progress=false

WORKDIR ${HOME}/videos

CMD [ "npm","start" ]