# Backend BetterDay

## Entities
These informations will be stored in the database.

## Which database will be used?
- MongoDB
- MySQL
- PostgreSQL
    - Postgress has support to JSON data type, and this will be very useful to store the cards and suggestions cards.
    - This informations will not be a string or a number, there is no a format specific to store this data.
- SQLite

### Cards
- id;             <!-- Primary key -->
- title;          <!-- Title of the card was created -->
- date;           <!-- Date of the card was created -->
- subtitle;       <!-- Subtitle of the card -->
- description;    <!-- Description of the card in details -->
- goodOrBad;      <!-- Good or bad option -->

### Suggestions Card
- id;             <!-- Primary key -->
- cardID;         <!-- This cardID is refering the card that the user has being creating (Foregn key) -->
- title;          <!-- Title of the suggestions card -->
- subtitle;       <!-- Subtitle of the suggestions card -->
- backgroundImg;  <!-- Background image of the suggestions card -->

## Use cases
1. The creationg a new card.
2. I need a list of suggestions cards, based in the card the used created, and maybe, I need to filter by the cardID. (17:00 aula 3)
3. I need a list of suggestions based on the cardID. 
-----
## Future implementations:
1. Users can see what people around him are doing.

## Some thoughts:
The user will be able to create a card, and this card will be stored in the database. The AI, will understand the card and will be able to create a suggestions card, and this suggestions card will be stored in the database too.

Some tools I can use to create the AI:
> https://wit.ai/
> https://dialogflow.cloud.google.com/cx/projects