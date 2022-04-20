import checkin from '../models/checkin.js';

class CheckinController{
    static listCheckInPerDay = (req, res) => {
        checkin.find({'date': req.query.date} ,(err, checkins) => {
            if(!err){
                res.status(200).send(checkins);
            }else{
                res.status(500).send('Something went wrong');
            }
        })
    }

    static listCheckInStartDayPerDay = (req, res) => {
        checkin.find({'date': req.query.date, type: 'startDay'} ,(err, checkins) => {
            if(!err){
                res.status(200).send(checkins);
            }else{
                res.status(500).send('Something went wrong');
            }
        })
    }

    static listCheckInEndDayPerDay = (req, res) => {
        checkin.find({'date': req.query.date, type: 'endDay'} ,(err, checkins) => {
            if(!err){
                res.status(200).send(checkins);
            }else{
                res.status(500).send('Something went wrong');
            }
        })
    }

    static startDayCheckIn = (req, res) => {
        req.body.type = 'startDay';
        let newCheckin = new checkin(req.body);
        newCheckin.save((err) => {
            if(!err){
                res.status(200).send('Start Day Checkin Created With Success');
            }else{
                res.status(500).send('Something went wrong');
            }
        })
    }

    static endDayCheckin = (req, res) => {
        req.body.type = 'endDay';
        let newCheckin = new checkin(req.body);
        newCheckin.save((err) => {
            if(!err){
                res.status(200).send('End Day Checkin Created With Success');
            }else{
                res.status(500).send('Something went wrong');
            }
        })
    }
}

export default CheckinController;