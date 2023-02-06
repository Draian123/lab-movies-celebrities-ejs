const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

router.get('/create', async (req, res) => {
    const allCelebrities = await Celebrity.find()
    res.render('movies/new-movie', {allCelebrities})
  })

  router.post('/create', async (req, res) => {
    let body = req.body
    // console.log(body)
    const createdMovie = await Movie.create(body)

    if(!createdMovie){
        res.render('new-movie')
    }
    
      res.redirect('/')
    })  


module.exports = router