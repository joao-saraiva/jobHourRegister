import express from "express";
import PersonRoutes from "./PersonsRoutes.js";
import EmployersRoutes from "./EmployersRoutes.js";
import CompaniesRoutes from './CompaniesRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Welcome to the api');
  })

  app.use(
    express.json(),
    PersonRoutes,
    EmployersRoutes,
    CompaniesRoutes
  )
}

export default routes;