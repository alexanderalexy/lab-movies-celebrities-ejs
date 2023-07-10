// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

module.exports = router


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
router.post("/clebrities/create", async (req, res) => {
    const data = reg.body

    try{
        const newCelebrity = await Celebrity.create(data)
        console.log(newCelebrity)

    } catch(err){
        console.log(err);
    }
})

module.exports = router