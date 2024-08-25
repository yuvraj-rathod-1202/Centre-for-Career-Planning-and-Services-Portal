

# Frontend Components Functionality

The `components` folder in the `frontend` directory contains React components organized by functionality. These components handle user interactions and display data fetched from the backend APIs. Below is a summary of the required functionalities for each category of components.

### `/auth`

1. **SignupForm.js**
   - Allows new users to register by providing email, password, and additional details. Interacts with the API to handle user registration.

2. **LoginForm.js**
   - Facilitates user login with email and password. Communicates with the API for authentication and manages JWT token storage.

3. **ForgotPassword.js**
   - Enables users to request a password reset link. Connects to the API to send reset instructions to the provided email.

### `/jobs`

1. **JobList.js**
   - Displays a list of job postings with options for filtering and sorting. Fetches job data from the API and updates the UI based on user input.

2. **JobCard.js**
   -Represents individual job postings in a card format. Fetches and displays job details from the API.

3. **JobDetails.js**
   - Provides detailed information about a specific job posting. Handles job detail retrieval and application submission.

4. **JobForm.js**
   - Provides forms for creating or editing job postings. Handles form submissions to the API for job creation, updating, or deletion.

### `/applications`

1. **ApplicationList.js**
   - Shows a list of job applications made by the user. Fetches application data from the API and displays application statuses.

2. **ApplicationDetails.js**
   -Displays detailed information about a specific job application. Retrieves application details from the API.

3. **ApplyForm.js**
   - Allows users to apply for jobs by submitting their information and uploading resumes. Sends application data to the API.

### `/community`

1. **CommunityFeed.js**
   - Displays posts and updates from the community. Fetches and displays community content from the API.

2. **PostCard.js**
   - Represents individual community posts. Fetches and shows post details.

3. **CommunityProfile.js**
   - Shows detailed profiles of community members. Retrieves and displays profile information from the API.

### `/referrals`

1. **ReferralList.js**
   - Displays a list of job referrals. Fetches referral data from the API and shows details.

2. **ReferralCard.js**
   - Represents individual referrals. Retrieves and displays referral information.

3. **ReferralForm.js**
   - Provides a form for submitting job referrals. Sends referral information to the API.

### `/analytics`

1. **AnalyticsDashboard.js**
   -Displays an overview of job performance metrics and application trends. Fetches analytics data and visualizes it.

2. **JobMetrics.js**
   - Shows detailed metrics for individual job postings. Retrieves job-specific metrics from the API.

3. **ApplicationTrends.js**
   - Displays trends and insights related to job applications. Fetches and visualizes application trends.




