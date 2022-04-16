import person from '../models/person.js'

class PersonsControllers {
  static index = (req, res) => {
    person.find((err, person) =>{
      res.status(200).json(person);
    })
  }

  static show = (req, res) => {
    person.findById(req.params.id, (err, person) => {
      if(!err){
        res.status(200).send(person);
      }else{
        res.status(400).send({message: err.message});
      }
    })
  }

  static create = (req, res) => {
    let newPerson = new person(req.body);
    newPerson.save((err) => {
      if(!err){
        res.status(201).send(newPerson.toJSON());
      }else{
        res.status(500).send({message: err.message});
      }
    })
  }

  static update = (req, res) => {
    person.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, person) => {
      if(!err){
        res.status(200).send(person)
      }else{
        res.status(500).send({message: err.message});
      }
    })
  }

  static delete = (req, res) => {
    person.findByIdAndDelete(req.params.id, (err) => {
      if(!err){
        res.status(200).send('Deleted with Success');
      }else{
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default PersonsControllers;
