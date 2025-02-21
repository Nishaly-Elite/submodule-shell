# Use the official Node.js image as a base image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@16

# Copy package.json and package-lock.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the Angular project (auth only)
RUN ng build

# Use Nginx to serve the application
FROM nginx:alpine
COPY --from=build /app/dist/ang-sub-module-demo /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose the port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
