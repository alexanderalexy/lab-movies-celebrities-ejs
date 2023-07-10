// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')

// all your routes here




router.get('/', async (req, res) => {
    try {
        const allCelebrities = await Celebrity.find()
        res.render('celebrities/celebrities', {allCelebrities})
    }

    catch (error) {
        console.log(error);
    }

    
})
// Get create new celebrity page
router.get("/create", async (req, res) => {
    try{
        res.render("celebrities/new-celebrity")

    }
    catch(err) {
        console.log(err);
    }
})

// create new celbrity
router.post("/create", async (req, res) => {
    const data = req.body

    try{
        console.log(data)
        const newCelebrity = await Celebrity.create(data)
        
        console.log(newCelebrity)
        res.redirect("/celebrities/")

    } catch(err){
        console.log(err);
    }
})

module.exports = router