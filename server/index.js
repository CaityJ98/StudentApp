const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/User')
const jwt = require('jsonwebtoken');
const { PORT } = require('./config/config');
const http = require('http').createServer(app);
const auth = require('./middlewares/auth')
const routes = require('./routes');
require("dotenv").config();
require('./config/express')(app);
require('./config/mongoose');
app.use(auth())
app.use(express.json())




mongoose.connect('mongodb://localhost:27017/student-services')
const io = require("socket.io")(http, {
    cors: {
        origin: ["http://localhost:3000/"],
        credentials: true
    }
});

// app.post('/api/register', async (req, res) => {
//     console.log(req.body)
//     try{
//         await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//         })
//         res.json({status: 'ok' })
//     } catch (err) {
//         console.log(err)
//         res.json({status: 'error', error: 'Duplicate email'})
//     }
    
// })

// app.post('/api/login', async (req, res) => {
  
   
//     const user = await User.findOne({
//             email: req.body.email,
//             password: req.body.password,
//         })

//         if (User) {

//             const token = jwt.sign(
//                 {
//                     name: req.body.name,
//                     email: req.body.email,

//             }, 'secret123')
//             return res.json({ status: 'ok', user: token })
//         } else {
//             return res.json({ status: 'error', user: false })
//         }
        
//     } 
    
// )

// app.get('/api/marketplace', async (req, res) => {
// 	const token = req.headers['x-access-token']

// 	try {
// 		const decoded = jwt.verify(token, 'secret123')
// 		const email = decoded.email
// 		const user = await User.findOne({ email: email })

// 		return res.json({ status: 'ok', quote: user.quote })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: 'invalid token' })
// 	}
// })


// app.post ('/api/marketplace', async (req, res ) => {
//     const token = req.headers[ 'x-access-token']

//     try {
//         const decoded = jwt.verify( token, 'secret123')
//         const email = decoded.email
//         await User.updateOne(
//             {email: email},
//             {$set: {marketplace: req.body.marketplace}}
//         )
//         return res.json({status: 'ok'})

//     } catch (error) {
//         console.log(error)
//         res.json({ status: 'error', error: "Invalid Token"})
//     }
// })




app.listen(1337, () => {
    console.log( 'Server started on 1337')
})
app.use(routes);
http.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
