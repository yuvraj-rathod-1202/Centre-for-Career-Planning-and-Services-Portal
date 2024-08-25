

# Pages - Frontend

The `pages` directory in the `frontend` folder contains the main entry points for different routes in the Job Portal Application. Each file in this directory corresponds to a specific page or view in the application, handling user interactions and displaying content fetched from the backend. Below is an overview of each page and its functionality.

## Pages Overview

### `index.js`

  - Serves as the landing page of the application.
  - Displays an overview of the job portal, including key features and user navigation options.
  - May include introductory content, user testimonials, and calls-to-action.

  - **HomePage API**: Fetches general information and statistics for the landing page.
  - **JobFeed API**: Optionally fetches a preview of job listings or featured jobs.

### `login.js`

  - Provides the login interface for users to access their accounts.
  - Includes fields for entering email and password.
  - Handles user authentication by calling the **Login API**.

  - **Login API**: Processes login requests and manages user sessions.

### `signup.js`

  - Allows new users to create an account by filling out a registration form.
  - Collects user details such as email, password, and other necessary information.
  - Submits registration information to the **Signup API**.

  - **Signup API**: Handles user registration and profile creation.

### `forgot-password.js`

  - Provides a form for users to request a password reset link.
  - Collects the user's email and sends a password reset request to the backend.

  - **Forgot Password API**: Sends password reset instructions to the provided email address.

### `dashboard.js`

  - Serves as the main dashboard page for authenticated users.
  - Displays an overview of the user’s job applications, saved jobs, and relevant notifications.

  - **User Dashboard API**: Retrieves user-specific data such as job applications and saved jobs.

### `profile.js`

  - Allows users to view and edit their personal profile information.
  - Displays user details such as name, email, and job preferences.

  - **User Profile API**: Fetches and updates user profile information.

### `job-list.js`

  - Displays a list of job postings with options to filter and search.
  - Shows job details in a structured format, allowing users to view and apply for jobs.

  - **Job Listings Fetch API**: Retrieves a list of job postings with filtering options.

### `job-details.js`

  - Provides detailed information about a specific job posting.
  - Includes job description, requirements, and application link.

  - **Job Details API**: Fetches detailed information for a specific job posting.

### `apply.js`

  - Contains the application form for users to apply for a job.
  - Allows users to submit their application, upload resumes, and provide additional details.

  - **Job Apply API**: Handles the submission of job applications.

### `community.js`

  - Displays community posts, discussions, and updates.
  - Allows users to interact with community content and view profiles.

  - **Community Feed API**: Fetches community posts and user interactions.

### `referrals.js`

  - Shows a list of job referrals and allows users to submit new referrals.
  - Displays referral details and status.

  - **Referrals API**: Manages job referral submissions and data.

### `analytics.js`

  - Provides analytics and insights related to job postings and application trends.
  - Displays visualizations and performance metrics.

  - **Job Analytics API**: Retrieves analytics data for job performance and application trends.




