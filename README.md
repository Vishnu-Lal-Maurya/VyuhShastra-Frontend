# VyuhShastra 


After Cloning both VyuhShastra-Backend and VyuhShastra-Frontend the file structure will look like this

VyuhShastra/
├── VyuhShastra-Backend/ # Backend repository 
├── VyuhShastra-Frontend/ # Frontend repository └── docker-compose.yml # Docker Compose file to run both


To run your backend project alone (assuming you're using Docker and Flask based on the structure you've shared), follow these steps:

when buinlding for the first time
* make sure you are in the  VyuhShastra/VyuhShastra-Frontend diretory

# bash-cmd: docker-compose up --build

for further subsequent run without rebuilding
# bash-cmd: docker-compose up

Note: Rebuild after adding any new appllication dependency or updating the requirements.txt


Ports:
http://localhost:80 --> for the flask application
http://localhost:3000 --> for the react application


