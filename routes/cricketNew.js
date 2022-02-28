import express from "express";
import {latestNew,test,upcomingTest,upcomingOdi,upcomingT20,details,quize,allMatches,stadium_details,stadium_detail} from "../controllers/cricket.js";

const router=express.Router();

router.get("/latestnew",latestNew);
router.get("/test",test);
router.get("/upcoming_test",upcomingTest);
router.get("/upcoming_odi",upcomingOdi);
router.get("/upcoming_t20",upcomingT20);
router.get("/stadium_details",stadium_details);
router.get("/stadium_detail/:id",stadium_detail);
router.get("/quiz",quize);
router.get("/allmatches",allMatches);

export default router;
