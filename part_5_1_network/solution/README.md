## Part 5_1: Network
## Exercise 1 : 
* Create in detached mode a basic container named server_training
```sh
$ docker container run --name server_training -d alpine tail -f /dev/null
```

## Exercise 2 : 
* Create in interactive mode a basic container named client_training with link to server_training.
```sh
$ docker container run --rm --name client_training -it --link server_training alpine /bin/sh
```

## Exercise 3 : 
* Ping server_training.
```sh
$ ping server_training
```

## Exercise 4 : 
* Look server_training in environment variable.
```sh
/ # env | grep server_training
```

## Exercise 5 : 
* Look server_training in /etc/hosts.
```sh
/ # grep server_training /etc/hosts
172.17.0.3      server_training 9a1551a05a81exit
```

## Exercise 6 : 
* Stop & remove client_training container.
```sh
$ docker container stop client_training
```

## Exercise 7 : 
* Start client_training container without link.
```sh
$ docker container run --rm --name client_training -it alpine /bin/sh
```

## Exercise 8 : 
* Ping server_training.
```sh
$ ping server_training
```
 
## [Solution](solution)