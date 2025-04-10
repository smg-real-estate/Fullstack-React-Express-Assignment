# Use Node.js 20 LTS as the base image
FROM node:20-alpine

# Install SQLite and valkey
RUN apk add --no-cache sqlite valkey

# Set working directory
WORKDIR /app

# Copy package files and configuration
COPY package*.json ./
COPY nodemon.json ./
COPY tsconfig.json ./

# Install dependencies
RUN yarn install

# Create directories for data and valkey
RUN mkdir -p /app/data /app/config/valkey && \
    chown -R node:node /app/data /app/config

# Switch to non-root user for security
USER node

# Expose port 3000
EXPOSE 3000

# Set environment variables for TypeScript
ENV NODE_OPTIONS="--loader ts-node/esm"

# Start the application with nodemon in development mode
CMD ["yarn", "start:backend"] 