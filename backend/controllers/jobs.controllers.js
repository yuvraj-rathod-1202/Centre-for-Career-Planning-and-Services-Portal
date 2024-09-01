import JobPosting from '../models/jobPosting.model.js';

export const jobCreate = async (req, res) => {
    try {
        const {
            jobTitle,
            jobDescription,
            Company,
            requiredSkills,
            Type,
            batch,
            Deadline,
            ApplicationLink,
            Expiry,
            author,
            relevanceScore
        } = req.body;
         console.log("entered")
        // Create a new job posting instance
        const newJobPosting = new JobPosting({
            jobTitle,
            jobDescription,
            Company,
            requiredSkills,
            Type,
            batch,
            Deadline,
            ApplicationLink,
            Expiry,
            author,
            relevanceScore
        });

        // Save the job posting to the database
        await newJobPosting.save();

        // Send a success response
        res.status(201).json({
            message: 'Job posting created successfully',
            job: newJobPosting
        });
    } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
            message: 'Error creating job posting',
            error: error.message
        });
    }
};
