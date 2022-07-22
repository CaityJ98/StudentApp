const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/student-services')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status: 'ok' })
    } catch (err) {
        console.log(err)
        res.json({status: 'error', error: 'Duplicate email'})
    }
    
})

app.post('/api/login', async (req, res) => {
  
   
    const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        if (User) {

            const token = jwt.sign(
                {
                    name: req.body.name,
                    email: req.body.email,

            }, 'secret123')
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
        
    } 
    
)

app.get('/api/marketplace', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.post ('/api/marketplace', async (req, res ) => {
    const token = req.headers[ 'x-access-token']

    try {
        const decoded = jwt.verify( token, 'secret123')
        const email = decoded.email
        await User.updateOne(
            {email: email},
            {$set: {marketplace: req.body.marketplace}}
        )
        return res.json({status: 'ok'})

    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: "Invalid Token"})
    }
})




app.listen(1337, () => {
    console.log( 'Server started on 1337')
})