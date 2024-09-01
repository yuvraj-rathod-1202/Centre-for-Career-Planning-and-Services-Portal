//importing all the necessary dependencies 
import express from "express";
import {jobCreate,jobUpdate,jobDelete,jobList,jobRelevanceScoreUpvote,jobRelevanceScoreDownvote} from "../controllers/jobs.controllers.js"

//using the router
const router = express.Router();

//making the routes
router.route("").get();
router.post("/jobs",jobCreate)
router.put("/jobs/:id",jobUpdate)
router.delete("/jobs/:id",jobDelete)
router.get('/jobs', jobList);
router.get('/jobs/upvote/:id',jobRelevanceScoreUpvote)
router.get('/jobs/downvote/:id',jobRelevanceScoreDownvote)



//exporting the router
export default router;
