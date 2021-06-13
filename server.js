const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');




require('dotenv').config();


const app = express();
const port = process.env.PORT || 8080;



app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))


const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("You're connected boss");
})

const contactRouter = require('./routes/route.contact');  
const attractionRouter = require('./routes/routeattraction');  
const { request } = require('express');

    
    app.use('/contact', contactRouter);  
    app.use('/attraction', attractionRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});