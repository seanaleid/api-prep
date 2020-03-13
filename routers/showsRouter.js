const express = require('express')
const router = express.Router()


const showsDB = require('../data/helpers/showsModel');

 //allows you to connect to react app on diff. server
//routes

//GET shows
router.get('/', (req,res)=> {
 showsDB
 .get()
 .then(shows => {
     res.status(200).json(shows);
 })
 .catch(err=> {
     res.status(500).json({
         errorMessage:`Error time ${err}`
     });
 });
});
//GET /:id
router.get('/:id', (req,res) =>{
    const { id } = req.params
    showsDB
    .get(id) 
    .then(show => {
        res.status(200).json(show)
    })
    .catch(err => {
        message:`Error: ${err}`;
    })
})

//GET shows characters  ?/:id?
router.get('/:id/characters', (req,res)=> {
    const { id } =req.params
    showsDB
    .getShowsCharacters(id)
    .then(characters => {
        res.status(200).json(characters);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `error ${err}`
        })
    })
})

//POST
router.post('/', (req,res)=>{
    showsDB
    .insert(req.body)
    .then(() =>{
        res.status(201).json(req.body);
    }).catch(err =>{
        res.status(500).json({errorMessage: `error ${err}`})
    })
})

//DELETE /:id
router.delete('/:id', (req,res)=>{
    const { id } = req.params //deconstructing
    showsDB
    .remove(id)
    .then(deleteShow => {
        res.status(200).json(deleteShow)
    })
    .catch(err =>{
        res.status(500).json({ errorMessage: `You have an error ${err}` })
    });
});

//PUT/PATCH /:id
router.put('/:id', (req,res)=> {
    const { id } = req.params
    const updateShow = req.body
    showsDB
    .update(id, updateShow)
    .then(updateShow =>{
        res.status(200).json(updateShow);
    })
    .catch(err =>{
        res.status(500).json({ message:`Error ${err}`})
    });
});



module.exports = router;