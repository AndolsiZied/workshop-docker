## Part 7_1: Docker Compose
## Exercise 1 : 
* Create docker-compose file
* Add container that build from alpine named dc_server and prints time every 5 seconds when starting ('while true; do sleep 5; date +"%H:%M:%S"; done')
* Add container that build from alpine named dc_client, with link to dc_server and executes command ‘ping dc_server’ when starting.
* Create and start containers.
* Check result.

## [Solution](solution)