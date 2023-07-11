// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here


router.get('/', async (req, res) => {
    try {
        const allMovies = await Movies.find()
        res.render('movies/movies', {allMovies})
    }

    catch (error) {
        console.log(error);
    }

    
})



// Get create new movie page
router.get("/create", async (req, res) => {
    try{
        res.render("movies/new-movie")

    }
    catch(err) {
        console.log(err);
    }
})


// create new movies
router.post("/create", async (req, res) => {
    const data = req.body

    try{
        console.log(data)
        const newMovie = await Movie.create(data)
        
        console.log(newCelebrity)
        res.redirect("/movies/")

    } catch(err){
        console.log(err);
    }
})




module.exports = router