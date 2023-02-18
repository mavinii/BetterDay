import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";

import logoImage from "./assets/betterDay-logo.svg";

// Navbar, Picture, Welcome title and buttons
import { Nav } from "./components/Navbar";
import Hero from "./components/Hero";

// Cards
import Cards from "./components/Card/Cards";
import CreateCard from "./components/Card/CreateCard";
import SuggestedCards from "./components/Suggested/SuggestedCards";
import { CreateCardModal } from "./components/Card/CreateCardModal";
import { CreateCardSuggested } from "./components/Suggested/KnowMoreSuggestedCard";

// Fetching data from the API
import axios from "axios";
import TitleAndSubTitle from "./components/Suggested/TitleAndSubTitle";
import CardModel from "./components/Card/CardModel";


/**
 * These interfaces are used to define the type of data that will be used in the application
 * Also added <Card[]> and <Suggested[]> Because TypeScript will
 * know that the cards variable are an arrays of Cards
 */


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
 * It is responsible for fetching the data from the API and passing it to the components and responsible for rendering the components
*/
function App() {

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

      {/* Top bar Navigation */}
      <Nav />

      {/* Hero section, Sign in and register btn */}
      <Hero />

      {/* This is calling the component CreateCard and CreatedCardModal from compoments */}
      <Dialog.Root>
        <CreateCard />
        <CreateCardModal />
      </Dialog.Root>

      {/* Cards user created */}
      <CardModel />

      {/* Title and sub-title */}
      <TitleAndSubTitle />


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