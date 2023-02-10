import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";

import logoImage from "./assets/betterDay-logo.svg";

// User Card and Suggested Cards by AI components
import Cards from "./components/Card/Cards";
import SuggestedCards from "./components/Suggested/SuggestedCards";
import CreateCard from "./components/Card/CreateCard";
import axios from "axios";
import { Hero } from "./components/Hero";
import { CreateCardModal } from "./components/Card/CreateCardModal";
import CreateSuggested from "./components/Suggested/KnowMoreButton";
import { CreateCardSuggested } from "./components/Suggested/KnowMoreSuggestedCard";

/**
 * These interfaces are used to define the type of data that will be used in the application
 * Also added <Card[]> and <Suggested[]> Because TypeScript will
 * know that the cards variable are an arrays of Cards
 */
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

interface Suggested {
  id: number;
  cardAbout: string;
  createdAt: string;
  icon: string;
  title: string;
  description: string;
  userUrl: string;
  backgroundColor: string;
}

/**
 * This is the main component of the application
 * It is responsible for fetching the data from the API and passing it to the components
 * It is also responsible for rendering the components
*/
function App() {

  // It hands the list of Cards the user created
  const [cards, setCards] = React.useState<Card[]>([]);

  // It is fetching the Cards Data from the API
  useEffect(() => {
    axios("http://localhost:3333/cards").then(response => {
      setCards(response.data);
    });
  }, []);

  // It hands the list of Suggested Cards by AI, based in the user created
  const [suggestedCards, setSuggestedCards] = React.useState<Suggested[]>([]);

  // It is fetching the Suggested Cards Data from the API
  useEffect(() => {
    axios(`http://localhost:3333/suggested-cards`).then(response => {
      setSuggestedCards(response.data);
    });
  }, []);

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

      {/* Section Hero */}
      <Hero />

      {/* This is calling the component CreateCard and CreatedCardModal from compoments */}
      <Dialog.Root>
        <CreateCard />
        <CreateCardModal />
      </Dialog.Root>

      {/* Cards user created */}
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
          cardAbout="Lorem ipsum"
          createdAt="15/11/2022"
          icon="https://img.icons8.com/ios/50/000000/idea.png"
          title="CARD EXAMPLE"
          description="This the the example how the card should look like."
          userUrl="https://thispersondoesnotexist.com/image"
          backgroundColor="#EB5757"
        />
      </div>

      {/* Title and sub-title */}
      <div className="mb-2 py-2">
        <h2 className="text-4xl font-extrabold text-gray-900">Get some help</h2>
        <p className="text-base text-slate-500">
          Add new cards of what has been happening
        </p>
      </div>

      {/* Suggested Cards by AI */}      
      <div className="grid grid-cols-4 gap-4 ">

        <Dialog.Root>
          <CreateCardSuggested />

          {/* Using map that runs through the array */}
          {suggestedCards.map((suggestedCard) => {
            return (
              <SuggestedCards
                key={suggestedCard.id}
                cardAbout={suggestedCard.cardAbout}
                createdAt={suggestedCard.createdAt}
                icon={suggestedCard.icon}
                title={suggestedCard.title}
                description={suggestedCard.description}
                backgroundColor="#1E293B"
              />
            );
          })}
        </Dialog.Root>
      </div>
      
    </div>
  );
}

export default App;