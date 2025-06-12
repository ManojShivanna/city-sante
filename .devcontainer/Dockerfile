FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y redis postgresql postgresql-contrib mongodb \
    && apt-get clean

EXPOSE 3000 5432 6379 27017
