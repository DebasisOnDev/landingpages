# Use the official MongoDB image as base
FROM mongo:latest

# Environment variables for root username and password
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password123
ENV MONGO_INITDB_DATABASE=mydatabase

# Expose the default MongoDB port
EXPOSE 27017

# Copy the initialization script
COPY init-replica.sh /docker-entrypoint-initdb.d/

# Make the script executable
RUN chmod +x /docker-entrypoint-initdb.d/init-replica.sh

# Start MongoDB with replica set
CMD ["mongod", "--replSet", "rs0", "--bind_ip_all"]