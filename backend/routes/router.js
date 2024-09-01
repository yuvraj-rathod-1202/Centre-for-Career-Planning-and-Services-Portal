//importing all the necessary dependencies 
import express from "express";
import {jobCreate,jobUpdate} from "../controllers/jobs.controllers.js"

//using the router
const router = express.Router();

//making the routes
router.route("").get();
router.post("/jobs",jobCreate)
router.put("/jobs/:id",jobUpdate)


//exporting the router
export default router;
