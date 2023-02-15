import express from 'express';
 
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello i am tuanvu')
})

router.get('/register', (req, res) => {
    res.send('Hello screen register')
})

export default router