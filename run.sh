#/bin/bash
docker run -d -p 192.168.1.10:9080:80 --network=web --name context-front context-front
