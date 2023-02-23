import express from "express";
import cors from "cors";

import { Prisma, PrismaClient } from "@prisma/client";
import { convertHrsStringToMin } from "./utils/convert-hrs-to-min";
import { convertMinToHrs } from "./utils/convert-min-to-hrs";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express(); // creating express app
app.use(express.json()); // using json as body parser
app.use(cors()); // using cors to allow the frontend to connect to the backend

/**
 *  This is the prisma client, that will be used to connect to the database
 *  The log is to show the queries in the console, so we can see what is happening
 */
const prisma = new PrismaClient({
  log: ["query"],
});

/**
 *  This displays all the cards that the user created.
 */
app.get("/cards/:id", async (req, res) => {
  
  // This selects all the cards, related to the user that is logged in
  const cards = await prisma.card.findMany();
  return res.json(cards);
});

/**
 *  This create the user with user.uid, name and email
 */
app.post("/user/:id", async (req, res) => {

  const userId: any = req.params.id;
  const body: any = req.body;

  const user = await prisma.user.create({
    data: {
      id: userId,
      name: body.name,
      email: body.email,
    },
  });

  return res.status(201).json(user);
});

/**
 *  This is the route to create a new card
 *  TODO: FIX THE ID unique "key" prop.
 */
app.post("/create-card/:id", async (req, res) => {

  const userId: any = req.params.id;
  const body: any = req.body;
  const weekDays = typeof body.weekDays;

  const createCard = await prisma.card.create({
    data: {
      userId: userId,
      title: body.title,
      description: body.description,
      weekDays,
      hourStart: convertHrsStringToMin(body.hourStart),
      hourEnd: convertHrsStringToMin(body.hourEnd),
    },
  });

  return res.status(201).json(createCard);
  // console.log(card)
});

app.post("/create-suggested-card/:id", async (req, res) => {

  const { prompt } = req.body;
  const userId: any = req.params.id;
  const body: any = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 128,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // console.log(response.data.choices[0].text);
  // return res.status(201).json(response.data.choices[0].text);
  // if (response.status === 201) {
  const createSuggestedCard = await prisma.suggestedCard.create({
    data: {
      userId: userId,
      title: body.title,
      description: body.description,
      aiAnwser: response.data.choices[0].text,      
    }
  });

  const isSuccessfull = response.status === 201;

  if (isSuccessfull){
    return res.status(201).json(createSuggestedCard);
  } else {
    // return res.status(response.status).json(response.data);
    console.log(`Deu ruim aqui > ${response.data.choices[0].text}`);
  }

  //   return res.status(201).json(createSuggestedCard);
  // } else {
  //   return res.status(response.status).json(response.data);
  // }
});

/**
 *  This is the route to display all the cards suggested to the user by AI
 *  This function is using select to only display the data that is needed and
 *  orderBy to display the most recent first
 */
app.get("/suggested-cards/", async (req, res) => {

  // This selects all the suggested cards, related to the card that is being created
  const suggested = await prisma.suggestedCard.findMany({
    // where: {
    //   userId: req.params.id,
    // },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(suggested);
});


/** TODO: It is working on Postman, but not on the frontend, yet!
 *  This is the route when the user clicks on the suggested card button (know more)
 *  This route will display (in a separeted screen?) the suggested card in more details
 */
app.get("/card/:id/suggested", async (req, res) => {
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
});

// Starting server
app.listen(3333);
console.log("it is working: http://localhost:3333");
