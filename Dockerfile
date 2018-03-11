#FROM node:carbon
FROM mhart/alpine-node:8
# Create app directory
WORKDIR /home/nodeApp/dockerimage

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./

#RUN npm install
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY server3.js .

EXPOSE 3002
CMD [ "node", "server3.js" ]
