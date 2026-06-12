FROM node:latest

WORKDIR /usr/src/app

RUN apt-get -y update

RUN { \
  echo '#!/bin/bash'; \
  echo 'npm install'; \
  echo 'npm run build'; \
  echo 'npm run dev'; \
  } > /usr/local/bin/docker-npm-init.sh \
  && chmod 755 /usr/local/bin/docker-npm-init.sh

USER node

EXPOSE 3000

CMD [ "/usr/local/bin/docker-npm-init.sh" ]