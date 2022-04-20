import express from "express";
import CheckinController from "../controllers/CheckinsControllers.js"

const router = express.Router();

router.get('/checkins', CheckinController.listCheckInPerDay);
router.get('/checkins/startDay', CheckinController.listCheckInStartDayPerDay);
router.get('/checkins/endDay', CheckinController.listCheckInEndDayPerDay);
router.post('/checkins/startDay', CheckinController.startDayCheckIn);
router.post('/checkins/endDay', CheckinController.endDayCheckin);

export default router;