// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model.js')
// all your routes here

router.get('/',   async (req, res) => {
    let allCelebrities
    try{
        allCelebrities = await Celebrity.find()
        // console.log(allCelebrities)
    }catch (err){
        console.log("Something went wrong: ", err)
    }
    res.render('celebrities/celebrities.ejs', {allcelebs: allCelebrities})
})
router.get('/create', async (req, res) => {
    res.render('celebrities/new-celebrity')
  })

  router.post('/create', async (req, res) => {
    let body = req.body
    console.log(body)
    const createdCeleb = await Celebrity.create(body)

    if(!createdCeleb){
        res.render('new-celebrity')
    }
    
      res.redirect('/')
    })  

module.exports = router