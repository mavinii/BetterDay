import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { CreateCardSuggested } from "./KnowMoreSuggestedCard";
import SuggestedCards from "./SuggestedCards";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

interface Suggested {
  id: number;
  cardAbout: string;
  createdAt: string;
  icon: string;
  aiAnwser: string;
  description: string;
  userUrl: string;
  backgroundColor: string;
}

export default function SuggestedCardModel() {
  // It hands the list of Suggested Cards by AI, based in the user created
  const [suggestedCards, setSuggestedCards] = React.useState<Suggested[]>([]);
  const [authUser, setAuthUser] = useState<{ email: string | null } | null>(
    null
  );

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

  // It is fetching the Suggested Cards Data from the API
  useEffect(() => {
    axios(`http://localhost:3333/suggested-cards/`).then((response) => {
      setSuggestedCards(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      <Dialog.Root>
        <CreateCardSuggested />
        {authUser ? (
          <>
            {/* It displays the card the user will be creating */}
            {suggestedCards.map((suggestedCard) => {
              return (
                <SuggestedCards
                  key={suggestedCard.id}
                  cardAbout={suggestedCard.cardAbout}
                  createdAt={suggestedCard.createdAt}
                  icon={suggestedCard.icon}
                  aiAnwser={suggestedCard.aiAnwser}
                  backgroundColor="#1E293B"
                />
              );
            })}
          </>
        ) : (
          <>
            {/* These are the cards examples, it will be hide once the user is logged in */}
            <SuggestedCards
              cardAbout="Feeling overwhelmed and down today."
              createdAt="27/02/2023"
              icon="https://img.icons8.com/ios/50/000000/idea.png"
              aiAnwser="It's okay to feel overwhelmed at times."
              backgroundColor="#1E293B"
            />

            <SuggestedCards
              cardAbout="Feeling anxious about upcoming exams."
              createdAt="27/02/2023"
              icon="https://img.icons8.com/ios/50/000000/idea.png"
              aiAnwser="Feeling anxious about upcoming exams, especially when your grades aren't where you want them to be. "
              backgroundColor="#1E293B"
            />

            <SuggestedCards
              cardAbout="Feeling overwhelmed and down today."
              createdAt="27/02/2023"
              icon="https://img.icons8.com/ios/50/000000/idea.png"
              aiAnwser="It's okay to feel overwhelmed at times."
              backgroundColor="#1E293B"
            />

            <SuggestedCards
              cardAbout="Daily Tips"
              createdAt="27/02/2023"
              icon="https://img.icons8.com/ios/50/000000/idea.png"
              aiAnwser="Hey, I created daily tips for you, check this out."
              backgroundColor="#1E293B"
            />
          </>
        )}
      </Dialog.Root>
    </div>
  );
}
