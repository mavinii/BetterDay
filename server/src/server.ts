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
app.get("/login", function (req, res, next) {
  return res.json({
    alert:
      "This will be displayed when the user clicks on the login button, or the card to add a new card",
  });
});



/**
 *  This displays all the cards that the user created.
 */
app.get("/cards", async function (req, res, next) {

  const cards = await prisma.card.findMany({
    select: {
      title: true,
      description: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      createdAt: true,
    },
  });

  return res.json(cards);
});



// This is the route to create a new card
// TODO: This is working, but the console.log is asking for a Key, check RocketSeat video;
app.post("/cards", async function(req, res, next){

  const body: any = req.body;
  const weekDays = typeof body.weekDays;

  // userId: userId,

  const card = await prisma.card.create({
    data: {
      title: body.title,
      description: body.description,
      weekDays,
      hourStart: convertHrsStringToMin(body.hourStart),
      hourEnd: convertHrsStringToMin(body.hourEnd),
    }
  });

  return res.status(201).json(card);
  // console.log(card)
})

// Route to test
// FIXME: Weekdays are passed as undefined
// CHECK THE PRISMIC DOCS how to create a new card related to a user id
// app.post("/cards2", async function(req, res, next){

//   const body: any = req.body;
//   const weekDays = typeof body.weekDays;
//   // const weekDays = typeof body.weekDays === 'string' ? body.weekDays : body.weekDays.join(',');

//   const card2 = await prisma.card2.create({
//     data: {
//       title: body.title,
//       description: body.description,
//       weekDays: body.weekDays.join(','),
//       hourStart: convertHrsStringToMin(body.hourStart),
//       hourEnd: convertHrsStringToMin(body.hourEnd),
//     }
//   });

//   return res.status(201).json(card2);
// })


// This is the route to display all the cards suggested to the user by AI
app.get("/suggested-cards", async function (req, res, next) {

  // This selects all the suggested cards, related to the card that is being created
  const suggested = await prisma.suggestedCard.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
    },
    // where: {
    //   cardId: cardIdNumber,
    // },
    orderBy: {
      createdAt: 'desc'
    } 
  });  

  return res.json(suggested);
});


// starting server
app.listen(3333);
console.log("it is working: http://localhost:3333");
