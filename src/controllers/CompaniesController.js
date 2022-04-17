import company from '../models/company.js';

class CompaniesController{
  static index = (req, res) => {
    company.find((err, companies) => {
      if(!err){
        res.status(200).send(companies);
      }else {
        res.status(500).send({message: err.message});
      }
    })
  }

  static show = (req, res) => {
    company.findById((err, company) => {
      if(!err){
        res.status(200).send(company);
      }else {
        res.status(500).send({message: err.message});
      }
    })
  }

  static create = (req, res) => {
    let newCompany = new company(req.body);
    newCompany.save((err) => {
      if(!err){
        res.status(201).send(newCompany.toJSON());
      }else {
        res.status(500).send({message: err.message});
      }
    })
  }

  static update = (req, res) => {
    company.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, company) => {
      if(!err){
        res.status(200).send('Update successfully');
      }else{
        res.status(500).send({message: err.message});
      }
    })
  }

  static delete = (req, res) => {
    company.findByIdAndDelete(req.params.id, (err, company) => {
      if(!err){
        res.status(200).send('Delete successfully');
      }else{
        res.status(500).send({message: err.message});
      }
    })
  }
}

export default CompaniesController;