# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
