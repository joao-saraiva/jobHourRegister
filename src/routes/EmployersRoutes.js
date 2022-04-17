import express from "express";
import EmployersControllers from "../controllers/EmployersController.js";

const router = express.Router();

router.get('/employers', EmployersControllers.index);
router.get('/employers/:id', EmployersControllers.show);
router.post('/employers',EmployersControllers.create);
router.put('/employers/:id',EmployersControllers.update);
router.delete('/employers/:id',EmployersControllers.delete);

export default router;