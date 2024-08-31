# Models Directory

The models directory contains the database schemas and models that define the structure and relationships of the data used in the Career Portal Website for IIT Bhilai's students and the Centre for Career Planning (CCPS).

## Models Overview

### User

The User model represents the users of the platform, which can be students or CCPS staff. This model includes:

- *Name*: The name of the user.
- *Email*: The user's email address, used for authentication.
- *Password*: A hashed password for securing the user's account.
- *Role*: Defines the user's role, either as a student or CCPS staff.

### Student

The Student model represents students registered on the platform. It includes the following fields:

- *Discipline*: The student's academic discipline.
- *Job Status*: Indicates whether the student is seeking jobs off-campus.
- *Job Reference ID*: A reference to the Job Posting model for applied jobs.
- *Status*: Current status of the student (e.g., active, graduated).
- *Student ID*: A unique identifier for each student.
- *Batch*: The student's batch year (e.g., 2026).
- *Saved Jobs*: A list of job postings saved by the student for future reference.
- *Reference Object*: A reference to the User model.

### Job Posting

The Job Posting model represents job opportunities available through the portal. This model includes:

- *Job Title*: The title of the job position.
- *Job Description*: A detailed description of the job.
- *Company*: The name of the company offering the job.
- *Required Skills*: A list of skills required for the job.
- *Type*: Indicates whether the job is on-campus or off-campus.
- *Batch*: The target batch for the job posting (e.g., 2026).
- *Deadline*: The application deadline for the job.
- *Application Link*: A link to apply for the job if it’s off-campus.
- *Expiry*: The expiration date for the job posting, with a maximum duration of 2 months.
- *Author*: Reference to the user who posted the job (likely a CCPS staff member).
- *Relevance Score*: A score indicating the relevance of the job to the student's profile.

### Job Application

The Job Application model represents the application process for jobs posted on the portal. This model includes:

- *Job Reference ID*: A reference to the Job Posting model to which the application is linked.
- *Applications*: An array of objects, each containing a reference to a Student model and the application status (e.g., pending, accepted, rejected).

### Alumni

The Alumni model represents former students who are now part of the alumni network. This model includes:

- *Name*: The name of the alumnus.
- *Company*: The company where the alumnus is currently employed.
- *LinkedIn*: The LinkedIn profile link of the alumnus.
- *Institute ID*: A unique identifier for the alumnus.
- *Mobile Number*: The contact number of the alumnus, shared if they have agreed.
- *Email*: The email address of the alumnus.

---

Each model is essential to the functionality of the Career Portal, ensuring that data is well-structured and accessible for both students and CCPS staff.
