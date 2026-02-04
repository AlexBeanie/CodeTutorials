# Base image
FROM node:22-alpine

# Working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN yarn install --production

# Run command to start the application
CMD [ "node", ".src/index.js" ]
