const express = require('express')
const app = express()
const { PORT } = require('./config/config');
const http = require('http').createServer(app);
const connectDB = require('./config/mongoose');
const path = require('path');
const auth = require('./middlewares/auth')
const stripeRouter = require('./stripe.js')
const routes = require('./routes');
require("dotenv").config();
require('./config/express')(app);
require('./config/mongoose');


app.use(express.json())
app.use(auth())
connectDB();



app.use(routes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
http.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));


// const io = require("socket.io")(http, {
//     cors: {
//         origin: ["http://localhost:3000/"],
//         credentials: false,
       
//     }
// });

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




// app.listen(1337, () => {
//     console.log( 'Server started on 1337')
// })

// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
