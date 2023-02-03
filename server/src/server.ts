import express from "express";
import cors from 'cors';

import { Prisma, PrismaClient } from "@prisma/client";
import { convertHrsStringToMin } from "./utils/convert-hrs-to-min";
import { convertMinToHrs } from "./utils/convert-min-to-hrs";

const app = express();

// This is to allow the frontend to access the backend
// change this in production like: { www.example.com }
app.use(cors());

// for parsing application/x-www-form-urlencoded
app.use(express.json());


/**
 *  This is the prisma client, that will be used to connect to the database
 *  The log is to show the queries in the console, so we can see what is happening
 */
const prisma = new PrismaClient({
  log: ["query"],
});



/**
 *  Before the user can create a card, they will need to login.
 */
app.get("/login", (req, res, next) => {
  return res.json({
    alert:
      "This will be displayed when the user clicks on the login button, or the card to add a new card",
  });
});


/**
 *  This displays all the cards that the user created.
 */
app.get("/cards", async (req, res, next) => {

  // This selects all the cards, related to the user that is logged in
  const cards = await prisma.card.findMany();
  return res.json(cards);
});


// This is the route to create a new card
// TODO: This is working, but the console.log is asking for a Key, check RocketSeat video;
app.post("/cards", async (req, res, next) => {

  const body: any = req.body;
  const weekDays = typeof body.weekDays;

  // userId: userId,

  const cards = await prisma.card.create({
    data: {
      title: body.title,
      description: body.description,
      weekDays,
      hourStart: convertHrsStringToMin(body.hourStart),
      hourEnd: convertHrsStringToMin(body.hourEnd),
    }
  });

  return res.status(201).json(cards);
  // console.log(card)
})


/**
 * This is the route to display all the cards suggested to the user by AI
 * This function is using select to only display the data that is needed and 
 * orderBy to display the most recent first
 */ 
app.get("/suggested-cards", async (req, res, next) => {

  // This selects all the suggested cards, related to the card that is being created
  const suggested = await prisma.suggestedCard.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });  

  return res.json(suggested);
});


/** TODO: It is working on Postman, but not on the frontend, yet!
 * This is the route when the user clicks on the suggested card button (know more)
 * This route will display (in a separeted screen?) the suggested card in more details
 */
app.get("/card/:id/suggested", async ( req, res, next ) => {

  const suggestedId = req.params.id;

  const suggestedCard = await prisma.suggestedCard.findFirstOrThrow({
    select: {
      title: true,
      description: true,
      createdAt: true,
    },
    where: {
      id: suggestedId,
    },
  });

  return res.json({
    title: suggestedCard.title,
    description: suggestedCard.description,
    createdAt: suggestedCard.createdAt,
  });
})

// starting server
app.listen(3333);
console.log("it is working: http://localhost:3333");
