## Part 1: Run a container
## Exercise 1 : 
* Write 'Hello sfeir school!' with a container.
```sh
$ docker container run alpine /bin/echo 'hello sfeir school!'
Hello sfeir school!
```

## Exercise 2 : 
* Write 'Hello sfeir school!' with a container in interactive mode.
```sh
$ docker container run -it alpine /bin/sh
root@a0b7e641636e:/# echo 'hello sfeir school!'
Hello sfeir school!
```

## Exercise 3 : 
* Write 'Hello sfeir school!' with a container in daemon mode.
```sh
$ docker run -d alpine /bin/sh -c "while true; do echo Hello sfeir school; sleep 1; done"
47abd3caa681b408529cea2cd134353a6bdd3ca6c73a1c0e3da4585b92da4f7e
```

## Exercise 4 : 
* Fetch the logs of the last created container.
```sh
$ docker container logs 47a
Hello sfeir school
Hello sfeir school
Hello sfeir school
Hello sfeir school
```

## Exercise 5 : 
* List locally running containers on the system
```sh
$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
45560296ab44        alpine              "/bin/sh -c 'while..."   7 minutes ago       Up 7 minutes                            cranky_wright
```

## Exercise 6 : 
* List all of the locally containers
```sh
$ docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES
45560296ab44        alpine              "/bin/sh -c 'while..."   8 minutes ago       Up 8 minutes                                    cranky_wright
86bd9fe99a07        alpine              "/bin/sh"                10 minutes ago      Exited (0) 8 minutes ago                        ecstatic_fermi
1961106587e9        alpine              "/bin/echo 'hello ..."   11 minutes ago      Exited (0) 11 minutes ago                       mystifying_darwin
9f189df65770        alpine              "/bin/echo 'hello ..."   11 minutes ago      Exited (0) 11 minutes ago                       stupefied_minsky
1f208cb57eae        alpine              "/bin/echo 'hello ..."   13 minutes ago      Exited (0) 13 minutes ago                       dazzling_hugle
8fca4ce4ccca        alpine              "/bin/echo hello"        13 minutes ago      Exited (0) 13 minutes ago                       nostalgic_poincare
```


## Exercise 7 : 
* Stop, start, restart a container
```sh
$ docker container stop 47abd3caa681
47abd3caa681
$ docker container start 47abd3caa681
47abd3caa681
$ docker container restart 47abd3caa681
47abd3caa681
```

## Exercise 8 : 
* Delete a container
```sh
$ docker container rm 47abd3caa681
You cannot remove a running container 47abd3caa681b408529cea2cd134353a6bdd3ca6c73a1c0e3da4585b92da4f7e. Stop the container before attempting removal or use -f
```
```sh
$ docker container rm -f 47abd3caa681
47abd3caa681
```
