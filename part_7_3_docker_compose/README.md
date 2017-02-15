## Part 7_3: Docker Compose
## Exercise 1 : 
* Create a docker-compose.yml file with version '2'
* Create a service web from a Dockerfile
* The Dockerfile defines an image :
 - Create a Dockerfile based on alpine 3.3
 - Define an environment variable workdir that points to  /opt/mywebapp
 - Use this varibale as working directory.
 - Add the nodejs package (apk add --update nodejs).
 - Add gulp (npm install -g gulp)
 - Copy the webapp folder content in /opt/mywebapp.
 - Execute npm install (npm install)
 - Expose the port 9000
 - Define npm start as command when starting container
* Map the host's port 19000 to container's port 9000
* Add dependency to service mongo-prod
* Create a service mongo-prod from an image mongo 3.2.10
* Map the host's port 27017 to container's port 27017
* Mount /data/db to data volume.
* Define data volume.


## [Solution](solution)