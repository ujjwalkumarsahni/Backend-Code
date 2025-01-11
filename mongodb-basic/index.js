const express = require('express');   
const userModel = require('./userModel.js');

app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/create', async (req, res) => {

    const createdUser =  await userModel.create({
        name: 'xyz kumar',
        username: 'xyz',
        email: 'xyz@gmail.com'
    })

    res.send(createdUser);  
});

app.get('/read', async (req, res) => {
    const users = await userModel.find();
    res.send(users);
});

app.get('/update', async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate({username: 'bhola'},{name: 'Ujjwal Kumar sahni'},{new: true});

    res.send(updatedUser);
})

app.get('/delete', async (req, res) => {
    const deletedUser = await userModel.findOneAndDelete({username: 'bhola'});
    res.send(deletedUser);  
});
app.listen(3500, () => {
    console.log('Server is running on port 3000');
});