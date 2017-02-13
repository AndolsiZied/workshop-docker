FROM alpine:3.3

ENV workdir /home/workspace
WORKDIR ${workdir}

RUN apk add --update nodejs
RUN npm install -g gulp
COPY src/ ${workdir}
RUN npm isntall

EXPOSE 5000

CMD ["npm", "start"]