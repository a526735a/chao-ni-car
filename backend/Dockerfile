FROM node:10

# You need to add commands for the following sections!!!

# --> Add everything in the current directory to our image, in the 'app' folder.
ADD . /app

# --> Install dependencies
WORKDIR /app
RUN npm install

# --> Expose our server port.
EXPOSE 5000
# --> Run our app.
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "prod"]