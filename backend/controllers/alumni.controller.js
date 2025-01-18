import Alumni from '../models/Alumni.model.js';

const getAlumni = async (req, res) => {
    try {
        const AlumniData = await Alumni.find().sort({ createdAt: -1 });
        res.status(200).json({
            message: 'Alumni data retrieved successfully',
            alumni: AlumniData
        });

    } catch (error) {
        console.error(error);
    }
}

const addAlumni = async (req, res) => {
    try {
        const newAlumni = await Alumni({ ...req.body });
        await newAlumni.save();
        res.send(201).json({
            message: 'Alumni added successfully',
            alumni: newAlumni
        });
    } catch (error) {
        console.error(error);
    }
}

const deleteAlumni = async (req, res) => {
    try {
        const { email } = req.params;
        const deletedAlumni = await Alumni.findOneAndDelete({email: email});
        if (!deletedAlumni) {
            return res.status(404).json({
                message: 'Alumni not found'
            });
        }else{
            res.status(200).json({
                message: 'Alumni deleted successfully',
                alumni: deletedAlumni
            });
        }
    } catch (error) {
        console.error(error);
        
    }
}

const getSingleAlumni = async (req, res) => {
    try {
        const { email } = req.params;
        const alumni = await Alumni.findOne({email: email});
        if (!alumni) {
            return res.status(404).json({
                message: 'Alumni not found'
            });
        }else{
            res.status(200).json({
                message: 'Alumni retrieved successfully',
                alumni: alumni
            });
        }
    } catch (error) {
        console.error(error);
        
    }
}

const updateAlumni = async (req, res) => {
    try {
        const { email } = req.params;

        // Validate if the email parameter is provided
        if (!email) {
            return res.status(400).json({
                message: 'Email is required to update an alumni record',
            });
        }

        const updateAlumni = await Alumni.findOneAndUpdate(
            { email: email },
            req.body,
            { new: true }
        );

        if (!updateAlumni) {
            return res.status(404).json({
                message: 'Alumni not found',
            });
        } else {
            res.status(200).json({
                message: 'Alumni updated successfully',
                alumni: updateAlumni,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while updating the alumni',
        });
    }
};


export default  {
    getAlumni,
    addAlumni,
    deleteAlumni,
    getSingleAlumni,
    updateAlumni
}