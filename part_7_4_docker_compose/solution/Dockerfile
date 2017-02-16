FROM alpine:3.3

ENV workdir /opt/mywebapp
WORKDIR ${workdir}

RUN apk add --update nodejs
RUN npm install -g gulp
COPY webapp/ ${workdir}
RUN npm isntall

EXPOSE 9000

CMD ["npm", "start"]