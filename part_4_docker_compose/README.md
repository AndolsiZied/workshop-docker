## Part 4: Docker Compose
## Exercise 1 : 
* Create docker-compose file
* Add Jenkins service that build from dockerfile in jenkins folder.
* Map port 18080 to 8080
* Add Sonar service that build from dockerfile in sonar folder.
* Map port 19000 to 9000
* Add Postgres service that build postgres image.
* Map port 5432 to 5432
* Add environement var POSTGRES_USER=sonar & POSTGRES_PASSWORD=sonar
* Make jenkins service depends on sonar service.
* Make sonar service depends on postgres service.
* Build services.
* Check url http://<docker_machine_ip>:18080/

## [Solution](solution)