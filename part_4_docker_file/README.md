## Part 3: Dockerfile
## Exercise 1 : 
* Create a Dockerfile based on alpine 3.3
* Define an environment variable workdir that points to  /home/workspace
* Use this varibale as working directory.
* Add the nodejs package (apk add --update nodejs).
* Add gulp (npm install -g gulp)
* Copy the src folder content in /home/wrokspace.
* Execute npm install (npm install)
* Expose the port 5000
* Define npm start as command when starting container

## Exercise 2 : 
* Build the image with tag $USER/alpine_node:v1

## Exercise 3 : 
* Run container 

## [Solution](solution)