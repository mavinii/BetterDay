import express from 'express';

const app = express();

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
    const { id } = req.params;

    return res.send({
        alert: `This screen the user will be able to see all the suggested cards based on the id: >>>> ${id} <<<<`
    })
})

// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");