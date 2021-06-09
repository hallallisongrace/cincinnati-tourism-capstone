const router = require('express').Router();
let Contact = require('../models/model.contact');


router.route('/').get((req, res) => {
  Contact.find()
    .then(contact => res.json(Contact))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addcontact').post((req, res) => {
    const fullname = req.body.fullname;
    const emailaddress = req.body.emailaddress;
    const message = req.body.message;
    const phone = req.body.phone;

    const newContact = new Contact({
        fullname,
        emailaddress,
        message, 
        phone, 

    });
    newContact.save()
    .then(() => {
        res.json('Contact Added')
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    })
})

module.exports = router;