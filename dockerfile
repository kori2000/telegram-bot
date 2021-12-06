FROM node:lts-slim

# Create Application directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --loglevel=error

# Copy all files | Only if needed
COPY . .

# Application start script ignored
CMD [ "npm", "start" ]