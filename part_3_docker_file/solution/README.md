## Part 3: Dockerfile
## Exercise 1 : 
* Create a dockerfile based on ubuntu:14.04 and ping "google.com" when container started.
[Solution](Dockerfile)

## Exercise 2 : 
* Build the Dockerfile and name it <User>/ping:v1
```sh
docker build -t zandolsi/ping:v1 .
```

## Exercise 3 : 
* Run the image <User>/ping:v1 in interactive mode with option remove container when stopped.
```sh
$ docker run --rm -it zandolsi/ping:v1
```

## Exercise 4 : 
* Create a dockerfile based on tomcat, copy "sample.war" in tomcat_home/webapps and start tomcat when container started.
[Solution](tomcat/Dockerfile)

## Exercise 5 : 
* Build the Dockerfile and name it <User>/tomcat:v1
```sh
$ docker build -t zandolsi/tomcat:v1 .
```

## Exercise 6 : 
* Run the image <User>/tomcat:v1 in interactive mode with option remove container when stopped.
```sh
$ docker run --rm -it -p 8080:8080 zandolsi/tomcat:v1
```

## Exercise 7 : 
* Check url : http://<docker_machine_ip »:8080/sample
