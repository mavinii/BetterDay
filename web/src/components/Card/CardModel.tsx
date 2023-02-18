import axios from "axios";
import React, { useEffect } from "react";
import Cards from "./Cards";

interface Card {
  id: number;
  title: string;
  description: string;
  cardAbout: string;
  createdAt: string;
  icon: string;
  userUrl: string;
  backgroundColor: string;
}

export default function CardModel() {
    
  // It hands the list of Cards the user created
  const [cards, setCards] = React.useState<Card[]>([]);

  // TODO: It should display cards only if the user is logged in
  // It is fetching the Cards Data from the API
  useEffect(() => {
    axios(`http://localhost:3333/cards/:id`).then((response) => {
      setCards(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">

      {/* Using map that runs through the array */}
      {cards.map((card) => {
        return (
          <Cards
            key={card.id}
            cardAbout={card.cardAbout}
            createdAt={card.createdAt}
            icon={card.icon}
            title={card.title}
            description={card.description}
            userUrl={card.userUrl}
            backgroundColor="#EB5757"
          />
        );
      })}

      {/* FIXME: CARD EXAMPLE - DELETE IT LATER ON */}
      {/* Using the new Radix UI */}
      <Cards
        key={cards.length + 1}
        cardAbout="#Example"
        createdAt="15/11/2022"
        icon="https://img.icons8.com/ios/50/000000/idea.png"
        title="Hey, I'm a card example."
        description="This the the example how the card should look like."
        userUrl="https://thispersondoesnotexist.com/image"
        backgroundColor="#EB5757"
      />
    </div>
  );
}
