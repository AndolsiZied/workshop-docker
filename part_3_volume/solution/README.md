## Part 3: Volumes
## Exercise 1 : 
* Create in interactive mode a container_1 with option -v /home/shared_folder:/data_1
```sh
$ docker container run --rm -it -v /home/shared_volume:/data_1 --name alpine_1 alpine /bin/sh
```

## Exercise 2 : 
* Create a file in /data_1 folder.
```sh
/ # echo "hello sfeir school" > /data_1/test.txt
```

## Exercise 3 : 
* Create in interactive mode a container_2 with option -v /home/shared_folder:/data_2
```sh
$ docker container run --rm -it -v /home/shared_volume:/data_2 --name alpine_2 alpine /bin/sh
```

## Exercise 4 : 
* Check /data_2 folder content.
```sh
/ # cat /data_2/test.txt
```