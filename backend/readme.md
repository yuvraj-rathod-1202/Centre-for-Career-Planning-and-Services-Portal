# Career Portal Website for Students and Centre for Career Planning (CCPS) - IIT Bhilai

## Introduction

This project is a _Career Portal Website_ designed to assist students and the Centre for Career Planning (CCPS) at IIT Bhilai. The portal facilitates career-related services, providing a platform for students to explore opportunities and for the CCPS to manage and support student career development.

## Project Structure

The backend of the project is organized into the following key directories:

- _config/_: Contains configuration files, such as database configurations and environment variables.
- _controllers/_:
  - **Purpose**: Handle incoming HTTP requests and send responses back to the client.
  - **Responsibilities**:
    - Receive and process user input from HTTP requests.
    - Call appropriate service methods to perform business logic.
    - Return the appropriate HTTP response (e.g., JSON data, status codes).
  - **Example**: A controller might handle a request to fetch user data by calling a service method to retrieve the data and then sending it back as a JSON response.

- _middlewares/_: Contains middleware functions that process requests before they reach the controllers. Middleware can be used for tasks such as authentication, logging, error handling, and request validation.
- _models/_: Defines the database schemas and data models used within the application. Each model corresponds to a specific entity in the database (e.g., students, job listings).
- _routes/_: Contains the definitions of the various routes/endpoints for the application. These routes map to corresponding controllers to handle different HTTP requests.
- _Services/_:
  - **Purpose**: Encapsulate the business logic of the application.
  - **Responsibilities**:
    - Perform operations related to the application's core functionality.
    - Interact with data models to fetch, update, or delete data.
    - Contain reusable methods that can be called by multiple controllers.
  - **Example**: A service might contain a method to calculate the user's profile completeness based on various criteria and return the result to the controller.

- _utils/_: Contains utility functions and modules that provide common functionality used throughout the application.

- _server.js/_: The `server.js` file is the entry point of the backend application. It is responsible for starting the server and handling incoming requests.
