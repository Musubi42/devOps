# Use the official Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy your application code into the container
COPY . .

# Expose the port your app runs on
EXPOSE 5555

# Define the command to start your app
CMD ["node", "index.js"]
