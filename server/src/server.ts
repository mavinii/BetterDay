import express, { application } from 'express';

const app = express();

// Create route for user once sign in

// Create route for add new modal bootstrap

// Route example
app.get('/users', function(req, res){

    // Example of response with json
    return res.json([
        {
            id: 1, 
            name: 'John'
        },
        {
            id: 2,
            name: 'Marie'
        },
        {
            id: 3,
            name: 'Marcos'
        },
        {
            id: 4,
            name: 'Aline'
        }

    ])
})

// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");