# Frontend Overview

This directory contains the source code for the frontend of the job posting website.

## Directory Structure

- **/public**: asset files that are large, static, and rarely changed.
- **/src**: Contains all the main source code of the React application.
  - **/api**: API service files that manage HTTP requests.
  - **/assets**: asset files that are small, dynamic, and frequently changed.
  - **/components**: Reusable UI components.
  - **/context**: Context API or Redux setup for global state management.
  - **/pages**: Page components representing different routes.
  - **/services**: API service functions.
  - **/styles**: Global styles, variables, and theming settings.
  - **/utils**: Utility functions and constants.
- **App.jsx**: The root component of the React application.
- **main.jsx**: The entry point for the React application.


## Setup

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run dev`.
5. Access the application at `http://localhost:5173`.
