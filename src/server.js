const express = require('express');
const app = express(); 

const PORT = provess.env.port || 3000;

// Middleware
app.use(express.static('public'));

app.get('/public/contactform.html', (req, res)=>{
    res.sendFile(_direname + '/public/contactform.html')
})

app.listen(PORT, ()=>{
console.log(`Server is running on port: ${port}`);

})
