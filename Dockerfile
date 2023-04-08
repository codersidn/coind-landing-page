FROM node:15-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
ADD package*.json /usr/src/app/
RUN npm install

# Copying source files
ADD . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]
