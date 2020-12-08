import express from 'express'


const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        message: 'we are here'
    });
})

router.get('/:id', (req, res) => {
    res.json({
        message: 'we are here'
    });
})

router.put('/', (req, res) => {
    res.json({
        message: 'we are here'
    });
})

router.delete('/', (req, res) => {
    res.json({
        message: 'we are here'
    });
})

export default router
