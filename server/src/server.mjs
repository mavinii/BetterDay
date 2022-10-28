import express, { application } from 'express';

const app = express();


// First Route
app.get('/example1', function(req, res){

    // Example of response with json
    return res.json([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Mark'
        }
    ])
})


// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");