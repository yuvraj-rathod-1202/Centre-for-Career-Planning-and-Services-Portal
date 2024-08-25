

# Models Directory - Backend

The `models` directory in the `backend` folder defines the database schemas and models used throughout the Job Portal Application. These models represent the structure of the data stored in the database, including users, jobs, applications, and other key entities. Each model is responsible for interacting with the database and performing CRUD (Create, Read, Update, Delete) operations.

## Models Overview

### User Model

- **File**: `userModel.js`

- **Purpose**: Defines the schema for user data, including students, CCPS (Campus Career Placement Services), and admins. This model handles user authentication and authorization.

- **Fields**:
  - `userId`: Unique identifier for the user (primary key).
  - `name`: Full name of the user.
  - `email`: Email address of the user (unique).
  - `passwordHash`: Hashed password for secure authentication.
  - `role`: Role of the user (student, CCPS, admin).
  - `profile`: Additional profile information.
  - `createdAt`: Timestamp when the user was created.
  - `updatedAt`: Timestamp when the user details were last updated.

- **Relationships**:
  - One-to-many relationship with `Job` (students can apply to multiple jobs).
  - One-to-many relationship with `Application` (students can have multiple applications).

### Job Model

- **File**: `jobModel.js`

- **Purpose**: Defines the schema for job postings, including details about the job and associated metadata.

- **Fields**:
  - `jobId`: Unique identifier for the job (primary key).
  - `title`: Job title.
  - `description`: Detailed job description.
  - `company`: Name of the company offering the job.
  - `location`: Job location.
  - `skillsRequired`: List of required skills for the job.
  - `eligibility`: Eligibility criteria for applying.
  - `postedBy`: Reference to the user who posted the job.
  - `createdAt`: Timestamp when the job was posted.
  - `updatedAt`: Timestamp when the job details were last updated.
  - `expiryDate`: Date when the job posting expires.

- **Relationships**:
  - Many-to-one relationship with `User` (jobs are posted by users, typically CCPS or admins).
  - One-to-many relationship with `Application` (jobs can have multiple applications).

### Application Model

- **File**: `applicationModel.js`

- **Purpose**: Defines the schema for job applications, tracking the status and details of each application.

- **Fields**:
  - `applicationId`: Unique identifier for the application (primary key).
  - `jobId`: Reference to the job being applied for.
  - `studentId`: Reference to the student applying for the job.
  - `status`: Current status of the application (e.g., applied, accepted, rejected).
  - `resumeUrl`: URL to the student’s resume.
  - `coverLetter`: Cover letter submitted with the application.
  - `submittedAt`: Timestamp when the application was submitted.

- **Relationships**:
  - Many-to-one relationship with `Job` (each application is associated with a specific job).
  - Many-to-one relationship with `User` (applications are submitted by students).

### Referral Model

- **File**: `referralModel.js`

- **Purpose**: Defines the schema for community referrals, including details about the referral and associated job postings.

- **Fields**:
  - `referralId`: Unique identifier for the referral (primary key).
  - `referrerId`: Reference to the user who made the referral.
  - `jobId`: Reference to the job being referred.
  - `details`: Details about the referral.
  - `createdAt`: Timestamp when the referral was created.
  - `updatedAt`: Timestamp when the referral details were last updated.

- **Relationships**:
  - Many-to-one relationship with `User` (referrals are made by users).
  - Many-to-one relationship with `Job` (referrals are associated with specific job postings).

### Alumni Model

- **File**: `alumniModel.js`

- **Purpose**: Defines the schema for storing alumni details, including their profiles and connections to job postings.

- **Fields**:
  - `alumniId`: Unique identifier for the alumni (primary key).
  - `name`: Full name of the alumni.
  - `email`: Email address of the alumni.
  - `graduationYear`: Year of graduation.
  - `currentPosition`: Current job position of the alumni.
  - `company`: Company where the alumni is currently employed.
  - `profileLink`: Link to the alumni’s profile.
  - `createdAt`: Timestamp when the alumni record was created.
  - `updatedAt`: Timestamp when the alumni record was last updated.

- **Relationships**:
  - Many-to-many relationship with `Job` (alumni can be linked to multiple job postings).



