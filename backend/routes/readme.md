# Routes

The `routes` directory defines the API endpoints for the Career Portal Website. Each route maps to a specific controller function, enabling the handling of requests and responses for various resources within the application.

## How to Document Your API Endpoints

When adding a new route or updating an existing one, document your API endpoints using the format below. This documentation ensures clarity and consistency across the project.

### API Documentation Format

For each API endpoint, please include the following details:

#### 1. *Endpoint Overview (ex. Login Api)*

   - *URL*: /api/<resource>/<action>
   - *Method*: GET | POST | PUT | DELETE
   - *Description*: A brief description of the endpoint’s purpose.
   - *Path Parameters*: Describe any parameters included in the URL path.
   - *Query Parameters*: Describe any optional or required query parameters.
   - *Request Body*: Explain the structure of the request body, if applicable. Provide an example if possible.
   - *Response Body*: Describe the structure of the response body. Provide an example if possible.
   - *Service Used*: Specify the service(s) utilized by this controller (e.g., UserService, JobService). Briefly describe the service’s role in this endpoint.
   - *Controller Function*: Mention the function in the controller handling this endpoint (e.g., createUser, getUserById). 
    
---

## Example 

#### 1. *Login API*

   - *URL*: /api/auth/login
   - *Method*: POST
   - *Description*: Authenticates a user and returns a JWT token if the credentials are valid.
   - *Path Parameters*: None
   - *Query Parameters*: None
   - *Request Body*: 
     ```json
     {
       "username": "string",
       "password": "string"
     }
     ```
   - *Response Body*: 
     ```json
     {
       "token": "string",
       "expiresIn": "number"
     }
     ```
   - *Service Used*: 
     - **AuthService**: Handles the authentication logic, including verifying user credentials and generating JWT tokens.
   - *Controller Function*: 
     - **loginUser**: Processes the login request, calls the AuthService to authenticate the user, and returns the JWT token.

    
---

## Contributing

When contributing to the routes, please ensure your documentation follows the above format. This approach helps maintain a consistent and understandable codebase

---

## Write your API's Documentation Below