import express from "express";
import PersonsControllers from "../controllers/PersonsControllers.js";

const router = express.Router();

router.get('/persons', PersonsControllers.index)
router.get('/persons/:id', PersonsControllers.show)
router.post('/persons', PersonsControllers.create)
router.put('/persons/:id', PersonsControllers.update)
router.delete('/persons/:id', PersonsControllers.delete)

export default router;