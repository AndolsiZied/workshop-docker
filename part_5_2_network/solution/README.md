## Part 5_2: Network
## Exercise 1 : 
* Create a network bridge
```sh
$ docker network create training-net --driver bridge
```

## Exercise 2 : 
* Create in detached mode a basic container named server_training_1 attached to the created network and with option --network-alias=server_training
```sh
$ docker container run -d --rm --name server_training_1 --network-alias server_training --network training-net alpine tail -f /dev/null
```

## Exercise 3 : 
* Create in detached mode a basic container named server_training_2 attached to the created network and with option --alias=server_training
```sh
$ docker container run -d --rm --name server_training_2 --network-alias server_training --network training-net alpine tail -f /dev/null
```

## Exercise 4 : 
* Create in interactive mode a basic container named client_training attached to the created network.
```sh
$ docker container run --rm --name client_training -it --network training-net alpine /bin/sh
```

## Exercise 5 : 
* Ping server_training
```sh
/ # ping server_training
```

## Exercise 6 : 
* Stop & remove server_training_1 container.
```sh
$ docker stop client_training
```

## Exercise 7 : 
* Ping server_training.
```sh
/ # ping server_training
```