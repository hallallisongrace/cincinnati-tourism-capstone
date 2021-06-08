const router = require('express').Router();
let Contact = require('../models/model.contact');


router.route('/').get((req, res) => {
  Contact.find()
    .then(users => res.json(Contact))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const emailaddress = req.body.emailaddress;
    const message = req.body.message

    const newContact = new Contact({
        firstname,
        lastname,
        emailaddress,
        message

    });
  newContact.save()
    .then(() => res.json('Message Sent!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;