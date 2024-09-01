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


export const jobUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedJobPosting = await JobPosting.findByIdAndUpdate(id, updatedData, {
            new: true, // Return the updated document
            runValidators: true // Ensure the updated data adheres to the schema
        });
        if (!updatedJobPosting) {
            return res.status(404).json({
                message: 'Job posting not found'
            });
        }
        res.status(200).json({
            message: 'Job posting updated successfully',
            job: updatedJobPosting
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating job posting',
            error: error.message
        });
    }
};



export const jobDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedJobPosting = await JobPosting.findByIdAndDelete(id);
        if (!deletedJobPosting) {
            return res.status(404).json({
                message: 'Job posting not found'
            });
        }
        res.status(200).json({
            message: 'Job posting deleted successfully',
            job: deletedJobPosting
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting job posting',
            error: error.message
        });
    }
};

export const jobList = async (req, res) => {
    try {
        const jobPostings = await JobPosting.find();
        res.status(200).json({
            message: 'Job postings retrieved successfully',
            jobs: jobPostings
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving job postings',
            error: error.message
        });
    }
};
