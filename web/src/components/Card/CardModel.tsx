import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

interface Card {
  id: number;
  title: string;
  description: string;
  cardAbout: string;
  createdAt: string;
  icon: string;
  // userUrl: string;
  backgroundColor: string;
}

/**
 * This function is responsible to display the cards, but it first checks if the user is logged in
 * if not, it will display the example card 
 */
export default function CardModel() {
    
  // It hands the list of Cards the user created
  const [cards, setCards] = React.useState<Card[]>([]);
  const [authUser, setAuthUser] = useState<{ email: string | null } | null>(null);

  // This holds the state of the modal, to see if the user is signed in or not
  useEffect(() => {
    const linsten = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => linsten();
  }, []);

  // It is fetching the Cards Data from the API
  useEffect(() => {
    axios(`http://localhost:3333/cards/:id`).then((response) => {
      setCards(response.data);
    });
  }, []);

  return (

    // It checks if the user is logged in to display the cards
    <div className="grid grid-cols-3 gap-6 mb-8">

      {authUser ? (
        <>
          {/* It displays the card the user will be creating */}
          {cards.map((card) => {
            return (
              <Cards
                key={card.id}
                cardAbout={card.cardAbout}
                createdAt={card.createdAt}
                icon={card.icon}
                title={card.title}
                description={card.description}
                // userUrl={card.userUrl}
                backgroundColor="#EB5757"
              />
            );
          })}
        </>
    
    ) : (

      <>
        {/* These are the cards examples, it will be hide once the user is logged in */}
        <Cards
          cardAbout="#Feeling overwhelmed and down today."
          createdAt="27/02/2023"
          icon="https://img.icons8.com/ios/50/000000/idea.png"
          title="Feeling overwhelmed and down today."
          description="This is the example how the user card should look like."
          // userUrl="https://thispersondoesnotexist.com/image"
          backgroundColor="#9A8E8B"
        />

        <Cards
          cardAbout="#Anxious."
          createdAt="27/02/2023"
          icon="https://img.icons8.com/ios/50/000000/idea.png"
          title="Anxious."
          description="College exams are getting close and my grade is not that good, I'm feeling anxious..."
          // userUrl="https://thispersondoesnotexist.com/image"
          backgroundColor="#EB5757"
        />

        {/* TODO: Use this title and description as an example */}
        <Cards
          cardAbout="#Feeling sad and guess why?"
          createdAt="27/02/2023"
          icon="https://img.icons8.com/ios/50/000000/idea.png"
          title="Feeling sad and guess why?"
          description="I forgot the car keys, arrived at the job interview so late and lost the job opportunity."
          // userUrl="https://thispersondoesnotexist.com/image"
          backgroundColor="#4B9AD6"
        />      
      </>
    )}
    </div>
  );
}
