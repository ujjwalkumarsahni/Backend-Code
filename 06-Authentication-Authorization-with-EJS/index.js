const express = require('express');
const app = express();

const userModel = require('./models/user.model.js');

const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
    console.log(userModel);
});

app.post('/create', (req, res) => {
    let { username, password, email, age } = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            // console.log(hash); // hash password
             
            let createdUser = await userModel.create({
                username,
                password: hash,
                email,
                age
            })

            let token = jwt.sign({email},'secretkey');
            res.cookie('token',token);

            res.json(createdUser);
        })
    })

    // let createdUser = await userModel.create({
    //     username,
    //     password,
    //     email,
    //     age
    // });

    // res.json(createdUser);
})

app.get('/login',(req,res) =>{
    res.render('login')
})
app.post('/login',async (req,res) =>{
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email }, 'secretkey');
    res.cookie('token', token);

    res.json({ message: 'Login successful' });
})


app.get('/logout', (req, res) => {
    res.cookie('token', '');

    res.redirect('/');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});