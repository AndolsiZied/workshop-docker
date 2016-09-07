## Part 2: Docker Hub
## Exercise 1 : 
* Search for docker ubuntu image
```sh
$ docker search ubuntu
NAME                       DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
ubuntu                     Ubuntu is a Debian-based Linux operating s...   4595      [OK]
```

## Exercise 2 : 
* Download ubuntu image with version 14.04
```sh
$ docker pull ubuntu:14.04
14.04: Pulling from library/ubuntu

862a3e9af0ae: Pull complete
6498e51874bf: Pull complete
159ebdd1959b: Pull complete
0fdbedd3771a: Pull complete
7a1f7116d1e3: Pull complete
Digest: sha256:5b5d48912298181c3c80086e7d3982029b288678fccabf2265899199c24d7f89
Status: Downloaded newer image for ubuntu:14.04
```

## Exercise 3 : 
* Run in interactive mode a container with ubuntu:14.04 iamge
```sh
$ docker run -it ubuntu:14.04
root@4940162c5a90:/#
```

## Exercise 4 : 
* Install java 8 in the container
```sh
root@4940162c5a90:/#apt-get install software-properties-common
root@4940162c5a90:/#add-apt-repository ppa:webupd8team/java -y
root@4940162c5a90:/#apt-get update
root@4940162c5a90:/#sudo apt-get install oracle-java8-installer
```

## Exercise 5 : 
* Commit a copy of this container to an image using the docker commit command.
```sh
$ docker commit -m "add java 8" -a "zandolsi" 4940162c5a90 zandolsi/ubuntu:v1
sha256:b5cb2d256a1087194ab3afc46be702c4ef67719ea2bad329db57d6a30edcff39
```

## Exercise 6 : 
* Check the list of the locally downloaded images
```sh
$ docker images
REPOSITORY             TAG                 IMAGE ID            CREATED             SIZE
zandolsi/ubuntu        v1                  b5cb2d256a10        12 seconds ago      188 MB
```

## Exercise 7 : 
* Push the created image to git hub
```sh
zandolsi@SCZC42800DD MINGW64 ~
$ docker login --username=zandolsi
Password:
Login Succeeded

zandolsi@SCZC42800DD MINGW64 ~
$ docker push zandolsi/ubuntu
The push refers to a repository [docker.io/zandolsi/ubuntu]
fe01266ca124: Pushed
ffb6ddc7582a: Mounted from library/ubuntu
344f56a35ff9: Mounted from library/ubuntu
530d731d21e1: Mounted from library/ubuntu
24fe29584c04: Mounted from library/ubuntu
102fca64f924: Mounted from library/ubuntu
v1: digest: sha256:f50a80e997e11895c9b6e546699145e695dad22cf8880426112db980683bb227 size: 1566
```

## Exercise 8 : 
* Check your Git Hub repository