import User from '../models/user.model.js';

const signup = async (req, res) => {
    try {
        const newStudent = await User({ ...req.body });
        newStudent.save();
        res.send(201).json({
            message: 'Student added successfully',
            student: newStudent
        });
    } catch (error) {
        console.error(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const studentData = User.findOne({ email: email });
        if(!studentData){
            return res.status(404).json({
                message: 'Student not found'
            });
        }
        if(studentData.password !== password){
            return res.status(401).json({
                message: 'Invalid password'
            });
        }
        res.status(200).json({
            message: 'Login successful',
            student: studentData
        });

    } catch (error) {
        console.error(error);
    }
}

const updateProfile = async (req, res) => {
    try {
        const data = req.body;
        const { email } = data;
        const updateStudent = await User.findOneAndUpdate({ email: email }, { ...data });
        res.status(200).json({
            message: 'Profile updated successfully',
            student: updateStudent
        });
    } catch (error) {
        console.error(error);
    }
}

const deleteProfile = async (req, res) => {
    try {
        const { email } = req.body;
        const deletedStudent = await User.findOneAndDelete({ email: email });
        res.send(200).json({
            message: 'Student deleted successfully',
            student: deletedStudent
        });
    } catch (error) {
        console.error(error);
    }
}

export default { 
    signup,
    login,
    updateProfile,
    deleteProfile
}