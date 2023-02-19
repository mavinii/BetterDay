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
        {/* This is the card example hide it once the user is logged in */}
        <Cards
          cardAbout="#Example"
          createdAt="15/11/2022"
          icon="https://img.icons8.com/ios/50/000000/idea.png"
          title="Feeling overwhelmed and down today."
          description="This is the example how the user card should look like."
          // userUrl="https://thispersondoesnotexist.com/image"
          backgroundColor="#EB5757"
        />
      
      </>
    )}
    </div>
  );
}
