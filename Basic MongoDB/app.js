const express = require('express');   
const userModel = require('./userModel.js');

app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/create', async (req, res) => {

    const createdUser =  await userModel.create({
        name: 'Ujjwal Kumar',
        username: 'ujjwal',
        email: 'hello@gmail.com'
    })

    res.send(createdUser);  
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});