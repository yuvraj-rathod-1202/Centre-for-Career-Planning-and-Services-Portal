import Student from "../models/student.model.js";

// Function to fetch student details by StudentID
const getStudentDetails = async (studentID) => {
    try {
        const student = await Student.findOne({ StudentID: studentID });

        if (!student) {
            return { error: 'Student not found' };
        }

        return student;
    } catch (error) {
        console.error(error);
        return { error: 'An error occurred while fetching student details' };
    }
};

export const ViewRes = async (req, res) => {
  console.log(req.params)
  const {studentID} = req.params;
  const student = await getStudentDetails(studentID);

  if (student.error) {
    return res.json({"found":0});
  }
  return res.json(student);

}