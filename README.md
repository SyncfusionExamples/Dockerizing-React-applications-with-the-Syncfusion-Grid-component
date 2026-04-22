# Dockerizing React Applications with the Syncfusion Grid Component

## Repository Description

This repository contains a sample React application that demonstrates how to Dockerize a React project using the Syncfusion React Grid component and run it inside a Docker container using Docker Compose.

## Project Overview

This sample showcases how a standard React application that uses the Syncfusion React Grid can be containerized using Docker. The project includes a Dockerfile and a docker-compose configuration that allow the application to be built, packaged, and run consistently across environments without requiring local Node.js setup.

The React application renders a Syncfusion Grid with paging and sorting enabled and uses an environment variable to register the Syncfusion license key inside the Docker container. This approach is useful for teams that want to deploy React applications in containerized environments while ensuring consistent runtime behavior.

## Key Features

- Demonstrates Dockerizing a React application
- Uses Syncfusion React Grid with paging support
- Environment-based Syncfusion license registration
- Docker Compose setup for simplified execution

## Prerequisites

- Docker Desktop installed on the machine
- Basic knowledge of Docker and Docker Compose

## Install Docker Desktop

Follow the installation steps outlined in the official Docker documentation for installing Docker Desktop on Windows:
<https://docs.docker.com/desktop/install/windows-install/>

## Running the Application

Follow the steps below to build and run the React application using Docker.

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/SyncfusionExamples/Dockerizing-React-applications-with-the-Syncfusion-Grid-component.git
   cd Dockerizing-React-applications-with-the-Syncfusion-Grid-component
   ```

2. Build and run the application using Docker Compose:

   ```bash
   docker-compose up
   ```

   Docker will build the image using the provided Dockerfile, install dependencies, and start the React application inside a container.

3. Open the application in a browser:

   Navigate to the following URL once the container is running:

   ```bash
   http://localhost:3000
   ```

The Syncfusion React Grid will be displayed with sample data rendered from the application.

## Configuration Notes

The Syncfusion license key is passed to the container using an environment variable defined in the `docker-compose.yml` file. Update the `REACT_APP_SYNCFUSION_LICENSE_KEY` value with a valid license key before running the application.

## Additional Resources

- [Syncfusion React Grid Documentation](https://ej2.syncfusion.com/react/documentation/grid/getting-started)
- [Syncfusion React Grid Demos](https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/overview)
- [Docker Documentation](https://docs.docker.com)
