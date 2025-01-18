# Alumni Management API

This document outlines how to add or update alumni data in the database using a CSV file and the `alumniAPI` function.

## Prerequisites

1. You need a CSV file containing alumni data.
2. Ensure your backend is running and connected to the database.
3. Use the correct backend URL for API requests.
4. Email should be unique for each row of CSV file
5. After add email to database you can't change it
6. import alumniAPI from alumniAPI.js file in frontend file

## Setup

1. **CSV File Format:**
   Your CSV file should include the following columns:
   - `id` (for updating existing records)
   - Other fields (e.g., name, email, etc.)

## APIs

1. GET ALL ALUMNI :::  "http://localhost:3000/api/alumni/getAlumni"
2. POST ALUMNI ::: aluminAPI("csv_file", "add")
3. UPDATE ALUMNI ::: alumniAPI("csv_file", "update")
4. DELETE ALUMIN ::: "http://localhost:3000/api/alumni/deleteAlumni/:email"
5. GET SINGLE ALUMNI ::: "http://localhost:3000/api/alumni/getSingleAlumni/:email"
