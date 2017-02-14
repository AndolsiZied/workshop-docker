## Part 7_2: Docker Compose
## Exercise 1 : 
* Adapt created file docker-compose.yml to docker compose v2
* Create a volume
* Mount the volume in the two services. 
* In the server container write date every 5 seconds in a file.
        ('while true; do sleep 5; date +"%H:%M:%S" >> /data/training.txt; done')
* In the client container display file content. (tail -f)


## [Solution](solution)