## Part 3: Dockerfile
## Exercise 1 : 
* Create a dockerfile based on ubuntu:14.04 and ping "google.com" when container started.
[Solution](Dockerfile)

## Exercise 2 : 
* Build the image with tag $USER/alpine_node:v1
```sh
$ docker build -t zandolsi/alpine_with_node:v1 .
```

## Exercise 3 : 
* Run container & Check url : http://<docker_machine_ip »:5000
```sh
$ docker run -d -p 5000:5000 --name alpine_with_node zandolsi/alpine_with_node:v1
```