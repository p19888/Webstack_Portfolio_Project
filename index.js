const express = require('express')
const axios = require('axios') 
const ejs = require('ejs')

const app = express();
const key_api="e61fad70a6da486695a273510b4c16aa"

app.set('view engine', 'ejs')
app.use(express.static('public')) 
app.use(express.urlencoded ({extended: false}))

app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/search', async(req, res) => {
    const {ingredients} = req.body;
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&number=20&apiKey=${key_api}`)
    if (response.data && response.data.results) {
        const recipes = response.data.results;
        res.render('results', {recipes});
    } else {
        res.send('No recipes found');
    }
})

app.get('/recipe/:id', async(req, res) => { 
    const {id} = req.params; 
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key_api}`) 
    const recipe = response.data; 
    res.render("recipe", {recipe}) 
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running')
})