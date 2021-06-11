const router = require('express').Router();
let Contact = require('../models/model.contact');
const bodyParser = require('body-parser');





router.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " " + req.ip);
    next();
})

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())

router.get("/body-parsed-info")

router.route('/').get((req, res) => {
  Contact.find()
    .then(contact => res.json(Contact))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
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


router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
      .then(contact => res.json(contact))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then(() => res.json('Contact deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Contact.findById(req.params.id)
      .then(contact => {
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.phoneNumber = req.body.phoneNumber;
        contact.message = req.body.message;
        contact.date = Date.parse(req.body.date);
  
        contact.save()
          .then(() => res.json('Contact updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

  router.get("/contacts"), (req, res) => {
    Contact.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
  }
module.exports = router;