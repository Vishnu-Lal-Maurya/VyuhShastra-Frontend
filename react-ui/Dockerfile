# Frontend Dockerfile
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Run the React app in development mode with host exposed
CMD [ "npm", "run", "dev-exposed" ]
