## Part 2: Docker Hub
## Exercise 1 : 
* Search for docker alpine image
```sh
$ docker search alpine
NAME                                           DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
alpine                                         A minimal Docker image based on Alpine Lin...   1892      [OK]       
```

## Exercise 2 : 
* Download alpine image with version 3.3
```sh
$ docker image pull alpine 3.3
3.3: Pulling from library/alpine
5a026b6c4964: Pull complete 
Digest: sha256:925991fda395a81dd67f22f7d740c117fbff1bcca8ce3d4b40697263b5a11557
Status: Downloaded newer image for alpine:3.3
```

## Exercise 3 : 
* Run in interactive mode a container with alpine:3.3 image and named alpine-node
```sh
$ docker run -it --name alpine-node alpine:3.3 /bin/sh
root@4940162c5a90:/#
```

## Exercise 4 : 
* Install node in the container
```sh
/ # apk add --update nodejs
fetch http://dl-cdn.alpinelinux.org/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
(1/4) Installing libgcc (5.3.0-r0)
(2/4) Installing libstdc++ (5.3.0-r0)
(3/4) Installing libuv (1.7.5-r0)
(4/4) Installing nodejs (4.3.0-r0)
Executing busybox-1.24.2-r0.trigger
OK: 29 MiB in 15 packages
```

## Exercise 5 : 
* Commit a copy of this container to an image using the docker commit command.
```sh
$ docker container commit -m "add node" -a "zandolsi" alpine-node zandolsi/alpine-node:v1
sha256:b5cb2d256a1087194ab3afc46be702c4ef67719ea2bad329db57d6a30edcff39
```

## Exercise 6 : 
* Check the list of the locally downloaded images
```sh
$ docker image ls
REPOSITORY             TAG                 IMAGE ID            CREATED             SIZE
zandolsi/alpine-node   v1                  b16eb272eb46        13 seconds ago      24.6 MB
```

## Exercise 7 : 
* Push the created image to git hub
```sh
zandolsi@SCZC42800DD MINGW64 ~
$ docker login --username=zandolsi
Password:
Login Succeeded

zandolsi@SCZC42800DD MINGW64 ~
$ docker image push zandolsi/alpine
The push refers to a repository [docker.io/zandolsi/alpine-node]
ccdf41fb5479: Pushed 
fcad8ad5a40f: Mounted from library/alpine 
v1: digest: sha256:1f6a021e4b64d4d9eee87094ebb1ce9ca02e5bb017d2281ecdf3f456103e7c14 size: 739
```

## Exercise 8 : 
* Check your Docker Hub repository