// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const { getMaxListeners }  = require('./models/contact');
// require("dotenv").config();
// const mongoose = require('mongoose');




// const app = express();
// const port = process.env.PORT || 3000;

// const transporter = nodemailer.createTransport({
//     host: "smtp.example.com", //replace with your email provider
//     port: 300,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//     }
//   });
//   // verify connection configuration
// transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   app.post('/send', (req, res, next) => {
//     var name = req.body.name
//     var email = req.body.email
//     var subject = req.body.subject
//     var message = req.body.message
  
//     var mail = {
//       from: name,
//       to: 'dshelbyv@gmail.com',// receiver email,
//       subject: subject,
//       text: message
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: 'fail'
//         })
//       } else {
//         res.json({
//          status: 'success'
//         })
//       }
//     })
//   })

// app.use(express.json());

// // const dbURI = 'mongodb+srv://dshelby24:password24@cluster0.6yrbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
// //   .then((result) => app.listen(3000))
// //   .catch((err) => console.log(err));


// // const uri = process.env.ATLAS_URI;
        
// // mongoose.connect(process.env.ATLAS_URI|| 
// //   { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
// // );
// // // const connection = mongoose.connection;


// // connection.once('open', () => {
// //   console.log("MongoDB database connection established successfully");
// // })

// if(process.env.NODE_ENV === 'production'){

// }


// app.listen(port, () => {
    
//     console.log(`Server is running on port: ${port}`);
// });

