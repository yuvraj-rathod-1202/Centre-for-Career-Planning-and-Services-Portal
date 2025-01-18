import express from 'express';
import alumniController from '../controllers/alumni.controller.js';

const { getAlumni, addAlumni, deleteAlumni, getSingleAlumni, updateAlumni } = alumniController;
const router = express.Router();

router.get('/getAlumni', getAlumni);

router.post('/addAlumni', addAlumni);

router.delete('/deleteAlumni/:email', deleteAlumni);

router.get('/getSingleAlumni/:email', getSingleAlumni);

router.put('/updateAlumni/:email', updateAlumni);

export default router;