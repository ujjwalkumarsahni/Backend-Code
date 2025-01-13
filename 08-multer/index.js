const express = require('express');
const upload = require('./config/multerConfig.js')
const path = require('path')
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: '' // Will be updated with the filename after upload
};

// Home route that shows the upload form
app.get('/', (req, res) => {
    res.render('index');  // Render the EJS form
});

app.get('/profile', (req, res) => {
    res.render('profile', { user: user });
});

// POST route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        user.profilePicture = req.file.filename; // Update the user data with the new profile picture filename
        res.redirect('/profile');
    } else {
        res.send('Please upload a file');
    }
});
app.post('/upload-2', upload.single('file'), (req, res) => {
    if (req.file) {
        user.profilePicture = req.file.filename; // Update the user data with the new profile picture filename
        res.redirect('/profile');
    } else {
        res.send('Please upload a file');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
