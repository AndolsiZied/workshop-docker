## Part 1: Run a container
## Exercise 1 : 
* Run an 'Hello world!'
```sh
$ docker run ubuntu /bin/echo "Hello world!"
Hello world!
```

## Exercise 2 : 
* Run in interactive mode an 'Hello world!'
```sh
$ docker run -it ubuntu /bin/bash
root@a0b7e641636e:/# echo "Hello world!"
Hello world!
```

## Exercise 3 : 
* Run in daemon mode an 'Hello world!'
```sh
$ docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"
47abd3caa681b408529cea2cd134353a6bdd3ca6c73a1c0e3da4585b92da4f7e
```

## Exercise 4 : 
* List locally running containers on the system
```sh
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
47abd3caa681        ubuntu              "/bin/sh -c 'while tr"   8 seconds ago       Up 6 seconds                            compassionate_brattain
```

## Exercise 5 : 
* List all of the locally containers
```sh
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                      PORTS               NAMES
47abd3caa681        ubuntu              "/bin/sh -c 'while tr"   About a minute ago   Up About a minute                               compassionate_brattain
863eaf1e0b03        ubuntu              "/bin/sh -c 'while tr"   2 minutes ago        Exited (2) 2 minutes ago                        backstabbing_cori
a0b7e641636e        ubuntu              "/bin/bash"              5 minutes ago        Exited (0) 3 minutes ago                        sharp_goldberg
ab84bf962872        ubuntu              "/bin/bash"              5 minutes ago        Exited (0) 5 minutes ago                        cranky_knuth
5f9914d06c85        ubuntu              "/bin/echo 'Hello wor"   7 minutes ago        Exited (0) 7 minutes ago                        pedantic_tesla
```

## Exercise 6 : 
* List all of the locally downloaded images
```sh
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              latest              bd3d4369aebc        3 days ago          126.6 MB
```