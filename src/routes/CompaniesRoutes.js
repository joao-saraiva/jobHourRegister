import express from "express";
import CompaniesController from "../controllers/CompaniesController.js";

const router = express.Router();

router.get('/companies', CompaniesController.index);
router.get('/companies/:id',CompaniesController.show);
router.post('/companies', CompaniesController.create);
router.put('/companies/:id',CompaniesController.update);
router.delete('/companies/:id',CompaniesController.delete);

export default router;