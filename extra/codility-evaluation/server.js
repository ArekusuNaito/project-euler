'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post('/candidates', function(req, res) {
  // ...

  res.send('POST request to the homepage')
});

app.get('/candidates/search', function(req, res) {
  // ...
    console.log('Endpoint: /candidates/search')
    const skillsData = req.query.skills;
    if(skillsData)
    {
        const skills = skillsData.split(',');
        console.log(skills)

        res.sendStatus(200)
    }
    else res.sendStatus(500)
});


app.listen(3000,()=>console.log('Server Ok'));
