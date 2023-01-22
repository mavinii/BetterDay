import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';

const app = express();

// cors is used to protect the API from other domains to access our API
app.use(cors({

    // This is the URL of the frontend - change it to your URL when deploying
    origin: 'http://localhost:3000' 
}));

// This tells express to use JSON body
app.use(express.json());


/**
*  This is the prisma client, that will be used to connect to the database
*  The log is to show the queries in the console, so we can see what is happening
*/
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});


/**
 * Before the user can create a new card, he will need to login.
 * @param
 */
app.get('/login', function(req, res){
    return res.json({
        alert: 'This will be displayed when the user clicks on the login button, or the card to add a new card'
    })
})


/**
*  This will be the route the user will be creating a new card
*  Status(200) is the same as status(OK)
*  @param
*/
app.post('/cards', function(req, res){
    return res.status(200).json({
        alert: 'This is the route the user will be creating a new card'
    })
})


/**
*  This will be displaying the card the user just created.
*  Using async and await, because the prisma is a promise, and we need to wait for the response.
*  Then the user will be able to edit the card, and save it.
*  @param
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


/**
*  This will be the route the AI will be able to create based in the user input.
*  Also it will be displayed in the home screen
*  Using async and await, because the prisma is a promise, and we need to wait for the response.
*  Status(200) is the same as status(OK)
*  @abstract 
*/
app.post('/cards/:id/suggested', async function(req, res){

    // This get the cardID from the URL
    const cardId = req.params.id;

    // This is the body of the request
    const body: any = req.body;

    // Converting cardId from string to number
    const cardIdNumber = parseInt(cardId);
    
    const suggested = await prisma.suggestedCard.create({
        data: {
            cardId: cardIdNumber,
            title: body.title,
            subtitle: body.subtitle,
            backgroundImg: body.backgroundImg,
            createdAt: new Date()
        }
    });

    return res.status(201).json(suggested)
})


/**
*  This will be the card suggested by the AI, based on what the user typed.
*  Also it will be displayed in the home screen
*  Using async and await, because the prisma is a promise, and we need to wait for the response.
*  This function was created by chatGPT.
*  @param {string} text - The text to be completed.
*/
app.get('/cards/:id/suggested', async function(req, res){

    // This get the cardID from the URL
    const cardId = req.params.id;

    // Converting cardId from string to number
    const cardIdNumber = parseInt(cardId);

    // All suggested cards related to the card that is being created by the user
    const suggested = await prisma.suggestedCard.findMany({

        // Using Prisma: I can query the database using JavaScript by doing this:
        select: {
            id: true,
            title: true,
            subtitle: true,
            backgroundImg: true,
        },
        where: {
            cardId: cardIdNumber
        },
        orderBy: {
            createdAt: 'desc'
        }        
    });        
        
    return res.json(suggested);
})

// starting server
app.listen(3333);
console.log("it is working, open your browser in: http://localhost:3333");