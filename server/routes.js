const router = require('express').Router();
const authController = require('./controllers/authController');
const listingsController = require('./controllers/listingsController');
const userController = require('./controllers/userController');
const isAuth = require('./middlewares/isAuth');

router.get('/', (req, res) => {
    res.send('Server is running')
})

router.use('/auth', authController);
router.use('/listings', listingsController);
router.use('/user', userController);

router.post('/auth/login', (req, res) => {
    res.send('Login successful')
})
router.post('/auth/register', (req, res) => {
    res.send('Sign up successful')
})
router.get('/listing/create', (req, res) => {
    res.send('Listing created')
})

module.exports = router;