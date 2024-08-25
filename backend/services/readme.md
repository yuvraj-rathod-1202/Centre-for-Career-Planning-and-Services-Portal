
# Services Directory - Backend

The `services` directory in the `backend` folder is responsible for implementing the core business logic of the Job Portal Application. Each service interacts with the database and handles specific functionalities related to authentication, job management, applications, community referrals, and analytics. This directory organizes the code into distinct modules to ensure maintainability and scalability.

## Services Overview

### `/services/auth`

Handles all authentication-related functionalities, including user registration, login, password management, and role management.

- **`/services/auth/registerService.js`**:
  - **Functionality**: Manages user registration, including validation of input data, secure password storage, and email confirmation.
  - **APIs**:
    - **User Registration API**: 
      - **Endpoint**: `/api/auth/register`
      - **Method**: `POST`
      - **Description**: Registers a new user. Requires user details (e.g., email, password).
      - **Request Body**: `{ "email": "user@example.com", "password": "securepassword" }`
      - **Response**: `{ "success": true, "message": "Registration successful" }`
      - **Error Response**: `{ "success": false, "message": "Registration failed" }`

- **`/services/auth/loginService.js`**:
  - **Functionality**: Handles user login, including authentication of credentials and session management.
  - **APIs**:
    - **Login API**:
      - **Endpoint**: `/api/auth/login`
      - **Method**: `POST`
      - **Description**: Authenticates a user and creates a session. Requires email and password.
      - **Request Body**: `{ "email": "user@example.com", "password": "securepassword" }`
      - **Response**: `{ "success": true, "token": "jwt_token" }`
      - **Error Response**: `{ "success": false, "message": "Invalid credentials" }`

- **`/services/auth/passwordResetService.js`**:
  - **Functionality**: Manages password reset requests, including token generation, email sending, and password updates.
  - **APIs**:
    - **Forgot Password API**:
      - **Endpoint**: `/api/auth/forgot-password`
      - **Method**: `POST`
      - **Description**: Sends a password reset link to the user's email.
      - **Request Body**: `{ "email": "user@example.com" }`
      - **Response**: `{ "success": true, "message": "Password reset link sent" }`
      - **Error Response**: `{ "success": false, "message": "Failed to send reset link" }`

- **`/services/auth/roleService.js`**:
  - **Functionality**: Handles user role management, including assigning and updating user roles and permissions.
  - **APIs**:
    - **Role Management API**:
      - **Endpoint**: `/api/auth/roles`
      - **Method**: `POST`
      - **Description**: Assigns roles to users based on their type (student, CCPS, admin).
      - **Request Body**: `{ "userId": "user_id", "role": "student" }`
      - **Response**: `{ "success": true, "message": "Role assigned" }`
      - **Error Response**: `{ "success": false, "message": "Failed to assign role" }`

### `/services/jobs`

Handles job-related functionalities, including job creation, editing, deletion, and fetching job listings.

- **`/services/jobs/createJobService.js`**:
  - **Functionality**: Manages the creation of new job postings, including validation and data storage.
  - **APIs**:
    - **Create Job Posting API**:
      - **Endpoint**: `/api/jobs/create`
      - **Method**: `POST`
      - **Description**: Creates a new job posting with details such as title, description, and requirements.
      - **Request Body**: `{ "title": "Job Title", "description": "Job Description", "requirements": "Job Requirements" }`
      - **Response**: `{ "success": true, "message": "Job posted successfully" }`
      - **Error Response**: `{ "success": false, "message": "Failed to post job" }`

- **`/services/jobs/editJobService.js`**:
  - **Functionality**: Manages the editing of existing job postings, including updating job details.
  - **APIs**:
    - **Edit Job Posting API**:
      - **Endpoint**: `/api/jobs/edit`
      - **Method**: `PUT`
      - **Description**: Updates an existing job posting.
      - **Request Body**: `{ "jobId": "job_id", "title": "Updated Title", "description": "Updated Description" }`
      - **Response**: `{ "success": true, "message": "Job updated successfully" }`
      - **Error Response**: `{ "success": false, "message": "Failed to update job" }`

- **`/services/jobs/deleteJobService.js`**:
  - **Functionality**: Manages the deletion of job postings, including data removal and confirmation.
  - **APIs**:
    - **Delete Job Posting API**:
      - **Endpoint**: `/api/jobs/delete`
      - **Method**: `DELETE`
      - **Description**: Deletes a job posting by its ID.
      - **Request Body**: `{ "jobId": "job_id" }`
      - **Response**: `{ "success": true, "message": "Job deleted successfully" }`
      - **Error Response**: `{ "success": false, "message": "Failed to delete job" }`

- **`/services/jobs/jobListService.js`**:
  - **Functionality**: Fetches job listings with options for filtering and sorting.
  - **APIs**:
    - **Job Listings Fetch API**:
      - **Endpoint**: `/api/jobs/list`
      - **Method**: `GET`
      - **Description**: Retrieves a list of job postings with optional filters.
      - **Query Parameters**: `?location=city&title=job_title`
      - **Response**: `{ "jobs": [ { "id": "job_id", "title": "Job Title", "description": "Job Description" } ] }`
      - **Error Response**: `{ "success": false, "message": "Failed to fetch job listings" }`

### `/services/applications`

Handles job application processes, including submitting applications, tracking status, and updating application details.

- **`/services/applications/applyJobService.js`**:
  - **Functionality**: Manages the submission of job applications.
  - **APIs**:
    - **Job Apply API**:
      - **Endpoint**: `/api/applications/apply`
      - **Method**: `POST`
      - **Description**: Submits a job application with user details and resume.
      - **Request Body**: `{ "jobId": "job_id", "resume": "base64_encoded_resume" }`
      - **Response**: `{ "success": true, "message": "Application submitted successfully" }`
      - **Error Response**: `{ "success": false, "message": "Failed to submit application" }`

- **`/services/applications/applicationStatusService.js`**:
  - **Functionality**: Provides updates on the status of job applications.
  - **APIs**:
    - **Application Status API**:
      - **Endpoint**: `/api/applications/status`
      - **Method**: `GET`
      - **Description**: Retrieves the status of applications for both students and CCPS.
      - **Query Parameters**: `?userId=user_id`
      - **Response**: `{ "applications": [ { "jobId": "job_id", "status": "accepted" } ] }`
      - **Error Response**: `{ "success": false, "message": "Failed to retrieve application status" }`

### `/services/community`

Handles functionalities related to community interactions, including posts and user referrals.

- **`/services/community/communityFeedService.js`**:
  - **Functionality**: Manages community posts and interactions.
  - **APIs**:
    - **Community Feed API**:
      - **Endpoint**: `/api/community/feed`
      - **Method**: `GET`
      - **Description**: Fetches community posts and updates.
      - **Response**: `{ "posts": [ { "id": "post_id", "content": "Post Content", "author": "author_id" } ] }`
      - **Error Response**: `{ "success": false, "message": "Failed to fetch community feed" }`

- **`/services/community/referralService.js`**:
  - **Functionality**: Manages job referrals, including submitting new referrals and updating existing ones.
  - **APIs**:
    - **Referrals API**:
      - **Endpoint**: `/api/community/referrals`
      - **Method**: `POST`
      - **Description**: Submits a new job referral.
      - **Request Body**: `{ "jobId": "job_id", "referralDetails": "details" }`
      - **Response**: `{ "success": true, "message": "Referral submitted successfully" }`
      - **Error Response**:

 `{ "success": false, "message": "Failed to submit referral" }`

### `/services/analytics`

Handles analytics-related functionalities, including retrieving job performance data and application trends.

- **`/services/analytics/jobAnalyticsService.js`**:
  - **Functionality**: Provides job-related analytics, such as job performance and application statistics.
  - **APIs**:
    - **Job Analytics API**:
      - **Endpoint**: `/api/analytics/jobs`
      - **Method**: `GET`
      - **Description**: Retrieves analytics data related to job postings and applications.
      - **Query Parameters**: `?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
      - **Response**: `{ "analytics": { "totalJobs": 100, "applications": 500 } }`
      - **Error Response**: `{ "success": false, "message": "Failed to fetch analytics data" }`




