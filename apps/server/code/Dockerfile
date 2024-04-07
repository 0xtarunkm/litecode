# Use a lightweight Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining code and tests
COPY . .

# Set a default command to run tests when the container starts
CMD ["npx", "jest", "./testcase.test.js"]
