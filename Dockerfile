#Use the official Node.js image as the base image
From node:18

#Set the working directory in the container
WORKDIR /app

#Copy the application files into the working directory
COPY . /app

#Install the application dependencies
RUN npm install

<<<<<<< HEAD
EXPOSE 8000
=======
EXPOSE 8080
>>>>>>> 4595c2a9aa97fed13bd58b5a8c14ce6456069c64
#Define the entry point for container
CMD ["npm", "start"]
