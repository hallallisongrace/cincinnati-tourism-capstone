const router = require('express').Router();
let Attraction = require('../models/model.viewattractions');


router.route('/').get((req, res) => {
    Attraction.find()
      .then(attraction => res.json(attraction))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const address = req.body.address;
    const zipcode = Number(req.body.zipcode);
    const website = req.body.website;
    const imageUrl = req.body.imageUrl;

    const newAttraction = new Attraction({
        name,
        description,
        address,
        zipcode,
        website,
        imageUrl
    });
  
    newAttraction.save()
    .then(() => res.json('Attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  

router.route('/:id').get((req, res) => {
  Attraction.findById(req.params.id)
  .then(attraction => res.json(attraction))
  .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
  Attraction.findByIdAndDelete(req.params.id)
  .then(() => res.json('Attraction deleted.'))
  .catch(err => res.status(400).json('Error" ' +err));
})

router.route('/update/:id').post((req, res) => {
  Attraction.findById(req.params.id)
  .then(attraction => {
      attraction.name = req.body.name;
      attraction.description = req.body.description;
      attraction.address = req.body.address;
      attraction.zipcode = Number(req.body.zipcode);
      attraction.website = req.body.website;
      attraction.imageUrl = req.body.imageUrl;

      attraction.save()
      .then(() => res.json('Attraction updated!'))
      .catch(err => res.status(400).json('Error: ' +err));
  })
  .catch(err => res.status(400).json('Error: ' +err))
})
  
  module.exports = router;