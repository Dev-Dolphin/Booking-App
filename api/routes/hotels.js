import express from 'express';
import Hotel from '../models/Hotel.js';
 
const router = express.Router();

// create
router.post('/', async (req, res)=> {

    const newHotel = new Hotel(req.body)

    try {
        const saveHotels = await newHotel.save()
        res.status(200).json(saveHotels)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// update
router.put('/:id', async (req, res)=> {

    try {
        const updateHotels = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        {new : true})

        res.status(200).json(updateHotels)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete
router.delete('/:id', async (req, res)=> {

    try {
         await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json('Hotel is delete success')
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// get
router.get('/:id', async (req, res)=> {

    try {

        const hotel =  await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
        
    } catch (error) {
        res.status(500).json(error)
    }
})
// getAll
router.get('/', async (req, res)=> {

    try {

        const hotels =  await Hotel.find()
        res.status(200).json(hotels)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router