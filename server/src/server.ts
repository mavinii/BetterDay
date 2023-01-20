import express from 'express';

const app = express();

// Create route for user once sign in

// Create route for add new modal bootstrap

// HTTP methods / API RESTful
// GET: Get entity from server
// POST: Creating and send entity to server
// PUT: Update entities in server
// PATH: Update a specific entity in server
// DELETE: Delete entity in server
    // HPPT Status Code:
    // .status(200) OK - Generic response for success
    // .status(201) CREATED
    // .status(400) 
    // .status(404) 
    // .status(500)
    // know more about: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


/**
*   Query Params: ... /users?search=Diego  
*   Route Params: ... /users/how-to-code-with-react (Identify a resource)
*   Request Body: ... /users/1 (used to send lot of information, like a form)
*/

// Login route
app.get('/login', function(req, res){
    return res.status(200).json({
        alert: 'This will be displayed when the user clicks on the login button, or the card to add a new card'
    })
})

// This will the the method to create a new card
app.post('/cards', function(req, res){
    return res.json({
        alert: 'This screen the user will be able to create a new card'
    })
})

// This will be displaying the card the user just created
app.get('/cards', function(req, res){
    return res.json({
        alert: 'This screen the user will be able to see all the cards he created'
    })
})

// This will be the card suggested by the AI, based on what the user typed, and will be displayed in the home screen
app.get('/suggested/:id/cards', function(req, res){

    // This is and example of how to get the id from the route params
    const { id } = req.params;

    return res.send({
        alert: `This screen the user will be able to see all the suggested cards based on the id: >>>> ${id} <<<<`
    })


    return res.json({
        alert: 'SUGGESTED CARDS - SCREEN'
    })
})

// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");