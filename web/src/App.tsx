import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";

import logoImage from "./assets/betterDay-logo.svg";

// User Card and Suggested Cards by AI components
import Cards from "./components/Cards";
import SuggestedCards from "./components/SuggestedCards";
import CreateCard from "./components/CreateCard";
import { Input } from "./components/Form/Input";

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
    fetch("http://localhost:3333/cards")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  // It hands the list of Suggested Cards by AI, based in the user created
  const [suggestedCards, setSuggestedCards] = React.useState<Suggested[]>([]);

  // It is fetching the Suggested Cards Data from the API
  useEffect(() => {
    fetch("http://localhost:3333/cards/1/suggested")
      .then((response) => response.json())
      .then((data) => {
        setSuggestedCards(data);
      });
  }, []);

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
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />

          <Dialog.Content className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">
            <Dialog.Title className="text-3xl font-bold">
              Lorem ipsum
            </Dialog.Title>
            <Dialog.Description className="text-xs font-thin">
              27/01/2012
            </Dialog.Description>

            {/* Check Form with Component folder */}
            <form className="flex flex-col gap-4">
              {/* Title */}
              <div className="mt-7 flex flex-col">
                <label htmlFor="title" className="text-xl font-semibold">
                  Title
                </label>
                <Input id="title" placeholder="Lorem ipsum" />
              </div>

              <div className="mt-2 flex flex-col">
                <label htmlFor="description" className="text-xl font-semibold">
                  Description
                </label>
                <Input id="description" placeholder="Lorem ipsum" />
              </div>

              <div className="mt-2">
                <label htmlFor="goodOrBar" className="text-xl font-semibold">
                  My feelings about it:
                </label>

                <div className="flex justify-between items-center">
                  <div>
                    <Input type="radio" id="good" name="good" />
                    <label htmlFor="good"> Good </label>
                  </div>
                  <div>
                    <Input type="radio" id="bad" name="bad" />
                    <label htmlFor="bad"> Bad </label>
                  </div>
                  <div>
                    <Input type="radio" id="iamnotsure" name="iamnotsure" />
                    <label htmlFor="iamnotsure"> I am not sure </label>
                  </div>
                </div>
              </div>

              {/* What time and days of the week  */}
              <div>
                <label htmlFor="time" className="text-xl font-semibold">
                  What day(s) was it?
                </label>

                <div className="flex justify-between items-center mt-2">
                  <button
                    title="Mon"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    M
                  </button>
                  <button
                    title="Tue"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    T
                  </button>
                  <button
                    title="Wed"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    W
                  </button>
                  <button
                    title="Thu"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    T
                  </button>
                  <button
                    title="Fri"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    F
                  </button>
                  <button
                    title="Sat"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    S
                  </button>
                  <button
                    title="Sun"
                    className="w-8 h-8 ronded bg-zinc-800 text-white"
                  >
                    {" "}
                    S
                  </button>
                </div>
              </div>

              {/* Time the user used to do  */}
              <div className="mt-2 flex flex-col gap-1 flex-1">
                <label className="text-xl font-semibold">
                  What time do you used to do it?
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <Input id="time" type="time" />
                  <Input id="time" type="time" />
                </div>
              </div>              

              {/* AI Agreement */}
              <div className="mt-2 flex gap-3 text-sm">
                <input type="checkbox" /> I allow AI to suggest me cards based on this.
              </div>

              {/* Buttons */}
              <footer className="mt-5 flex justify-between items-center">
                <button 
                  type="button"
                  className="bg-zinc-500 text-white rounded py-2 px-4"
                  >Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-[#5C2C5D] text-white rounded py-2 px-4"
                  >Create Card
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
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
