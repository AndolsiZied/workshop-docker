## Part 7_4: Docker Compose
## Exercise 1 : 
* Adapt created file docker-compose.yml to docker compose v3.

## Exercise 2 : 
* Deploy a stack from the docker-compose file.
```sh
$ docker build -t zandolsi/web:v1 .
$ docker stack deploy --compose-file=docker-compose.yml stack-training
```

## Exercise 3 : 
* Run docker-swarm-gui container.
```sh
$ docker run -it --rm -p 8282:8080 -v /var/run/docker.sock:/var/run/docker.sock
```
