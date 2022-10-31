import express from 'express';
const app = express();

// Create route for user once sign in

// Create route for add new modal bootstrap

// 

// Route example
app.get('/example1', function (req, res) {
    // Example of response with json
    return res.json([
        {
            id: 1,
            name: 'Marcos'
        },
        {
            id: 2,
            name: 'Aline'
        }
    ]);
});
// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");
