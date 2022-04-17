import employer from '../models/employer.js';

class EmployersControllers{
  static index = (req, res) => {
    employer.find((err, employers) => {
      if(!err){
        res.status(200).send(employers);
      }else{
        res.status(500).send({message: err.message});
      }
    })
  }

  static show = (req, res) => {
    employer.findById( (err, employer) => {
      if(!err){
        res.status(200).send(employer);
      }else{
        res.status(500).send({message: err.message});
      }
    })
  }

  static create = (req, res) => {
    let newEmployer = new employer(req.body);
    newEmployer.save((err) => {
      if(!err){
        res.status(200).send(newEmployer.toJSON());
      }else {
        res.status(500).send({message: err.message});
      }
    })
  }

  static update = (req, res) => {
    employer.findByIdAndUpdate(req.param.id, {$set: req.body}, (err, employer) => {
      if(!err){
        res.status(200).send('Employer Update Successfully');
      }else{
        res.status(500).send('Cant update employer');
      }
    })
  }

  static delete = (req, res) => {
    employer.findByIdAndDelete(req.param.id, (err) => {
      if(!err){
        res.status(200).send('Employer Delete Successfully');
      }else{
        res.status(500).send('Cant delete');
      }
    })
  }

}

export default EmployersControllers;