import express from "express";
import cors from 'cors';

import { PrismaClient } from "@prisma/client";
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
app.get("/games", async function (req, res, next) {

  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);

  // This selects all the suggested cards, related to the card that is being created
  // const cards = await prisma.card.findMany({
  //   include: {
  //     _count: {
  //       select: {
  //         suggesteds: true,
  //       },
  //     },
  //   },
  // });
});



/**
 *  This will be the card created by the user within the Form
 *  This will be sending the info to the database.
 */
app.post("/game/:id/ads", async function (req, res, next) {

  // This get the cardID from the URL
  const gameId = req.params.id;

  // This is the body of the request
  const body: any = req.body;

  // FIXME: Validate the body with zod -> https://github.com/colinhacks/zod or joi

  // Creating the ads
  const ad = await prisma.ad.create({
    data: {
      gameId,
      title: body.title,
      description: body.description,
      weekDays: body.weekDays.join(','),
      hourStart: convertHrsStringToMin(body.hourStart),
      hourEnd: convertHrsStringToMin(body.hourEnd),
    }
  })  

  return res.status(201).json(ad);

});


/**
 *  This will be displaing all the suggested cards related to the card that is being created by the user.
 */
app.get("/game/:id/ads", async function (req, res, next) {

  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    
    // It will be the suggested cards, related to the card that is being created
    select: {
      id: true,
      title: true,
      description: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinToHrs(ad.hourStart),
      hourEnd: convertMinToHrs(ad.hourEnd),
    }
  }));



  // // This get the cardID from the URL
  // const cardId = req.params.id;

  // return res.json({
  //   msg: 'Card created with id: ' + cardId,
  // });

  // // This get the cardID from the URL
  // const cardId = req.params.id;

  // // Converting cardId from string to number
  // const cardIdNumber = parseInt(cardId);

  // // All suggested cards related to the card that is being created by the user
  // const suggested = await prisma.suggestedCard.findMany({

  //   // Using Prisma: I can query the database using JavaScript by doing this:
  //   select: {
  //     id: true,
  //     title: true,
  //     subtitle: true,
  //     backgroundImg: true,
  //   },
  //   where: {
  //     cardId: cardIdNumber,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  // return res.json(suggested);
});



/**
 *  Get a specific SUGGESTED CARD, based on the SUGGESTE CARD ID, getting the title and subtitle.
 *  Show this route when the user clicks on the suggested card button.
 */
app.get("/ads/:id/discord", async function (req, res, next) {

  // This get the cardID from the URL
  const adId = req.params.id;

  // This will get the card from the database or throw an error
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      title: true,
      description: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    title: ad.title,
    description: ad.description,
  });

});



/**
 *  This will be the card suggested by the AI, based on what the user typed.
 */
// app.post("/cards/:id/suggested", async function (req, res, next) {

//   // This get the cardID from the URL
//   const cardId = req.params.id;

//   // This is the body of the request
//   const body: any = req.body;

//   // Converting cardId from string to number
//   const cardIdNumber = parseInt(cardId);

//   const suggested = await prisma.suggestedCard.create({
//     data: {
//       cardId: cardIdNumber,
//       title: body.title,
//       subtitle: body.subtitle,
//       backgroundImg: body.backgroundImg,
//     },
//   });

//   return res.status(201).json(suggested);
// });


// starting server
app.listen(3333);
console.log("it is working: http://localhost:3333");
