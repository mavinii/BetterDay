import React, { useEffect } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import "./styles/main.css";

import logoImage from "./assets/betterDay-logo.svg";

// User Card and Suggested Cards by AI components
import Cards from "./components/Cards";
import SuggestedCards from "./components/SuggestedCards";
import CreateCard from "./components/CreateCard";

 /**
 * These interfaces are used to define the type of data that will be used in the application
 * Also added <Card[]> and <Suggested[]> Because TypeScript will 
 * know that the cards variable are an arrays of Cards
 */
interface Card {
  id: number;
  cardAbout: string;
  createdAt: string;
  icon: string;
  title: string;
  description: string;
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

function App() {

  // It hands the list of Cards the user created
  const [cards, setCards] = React.useState<Card[]>([]);

  // It is fetching the Cards Data from the API
  useEffect(() => {
    fetch('http://localhost:3333/cards')
      .then(response => response.json())
      .then(data => {
        setCards(data);
      });
  }, [])

  // It hands the list of Suggested Cards by AI, based in the user created
  const [suggestedCards, setSuggestedCards] = React.useState<Suggested[]>([]);

  // It is fetching the Suggested Cards Data from the API
  useEffect(() => {
    fetch('http://localhost:3333/cards/1/suggested')
      .then(response => response.json())
      .then(data => {
        setSuggestedCards(data);
      });
  }, [])

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

      {/* Header */}
      <div className="flex flex-col items-center m-20">
        <h1 className="mb-4 text-6xl font-extrabold text-gray-900 mt-3">
          Designed to give you a BetterDay
        </h1>
        <p className="text-3xl text-slate-500">
          For those who want to improve their day by avoiding simple issues.
        </p>
      </div>

      {/* FIXME:
        This is calling the component CreateCard, once the user clicks on Add Button
        This is also using Redix UI, I should be able to add the Dialog.Trigger on the
        Button within the Card, but for some reason, it is not working, so de Solution that I found
        was to link it, in the CreateCard Comp, intead to create a button, I create an Trigger. */}
      <Dialog.Root>
        <CreateCard />

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />

          <Dialog.Content className="fixed inset-0 flex items-center justify-center">

            <Dialog.Title>Clicked</Dialog.Title>
          
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Cards user created */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        {/* Using map that runs through the array */}
        {cards.map(card => {
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
            )
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
        <p className="text-base text-slate-500">Add new cards of what has been happening</p>
      </div>

      {/* Suggested Cards by AI */}
      <div className="grid grid-cols-4 gap-4 ">

        {/* Using map that runs through the array */}
        {suggestedCards.map(suggestedCard => {
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
            )
          })}

        {/* FIXME: SUGGESTED CARD EXAMPLE - DELETE IT LATER ON */}
        <SuggestedCards
          cardAbout="Meditation"
          createdAt="26/01/2023"
          icon="https://img.icons8.com/ios/50/000000/idea.png"
          title="Hey, you should try meditation"
          description="Meditation is a practice where an individual uses a technique ...."
          backgroundColor="#1E293B"
        />
      </div>
    </div>
  );
}

export default App;