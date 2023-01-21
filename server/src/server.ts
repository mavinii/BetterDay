import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

/*
*  This is the prisma client, that will be used to connect to the database
*  The log is to show the queries in the console, so we can see what is happening
*/
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

// Login route
app.get('/login', function(req, res){
    return res.status(200).json({
        alert: 'This will be displayed when the user clicks on the login button, or the card to add a new card'
    })
})

/*
*   
*   
*/
app.post('/cards', function(req, res){
    return res.json({
        alert: 'This screen the user will be able to create a new card'
    })
})


/*
*   This will be displaying the card the user just created.
*   Using async and await, because the prisma is a promise, and we need to wait for the response.
*   Then the user will be able to edit the card, and save it.
*/
app.get('/cards', async function(req, res){

    // This selects all the suggested cards, related to the card that is being created
    const cards = await prisma.card.findMany({
        include: {
            _count: {
                select: {
                    suggesteds: true,
                }
            }
        }
    });

    return res.json(cards);
})


/*
*   This will be the card suggested by the AI, based on what the user typed.
*   Also it will be displayed in the home screen
*   Using async and await, because the prisma is a promise, and we need to wait for the response.
*/
app.get('/cards/:id/suggested', async function(req, res){

    // This get the cardID from the URL
    const cardId = req.params.id;

    // Converting cardId from string to number
    const cardIdNumber = parseInt(cardId);

    // All suggested cards related to the card that is being created by the user
    const suggested = await prisma.suggestedCard.findMany({
        where: {
            cardId: cardIdNumber
        }
    });        
        
    return res.json(suggested);
})

// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");