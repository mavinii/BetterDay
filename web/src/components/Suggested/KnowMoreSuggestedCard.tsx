// Radix UI
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import React, { useEffect } from "react";

/**
 * This is be the suggested card component created by the AI
 * This will show up when the user clicks on the "Know more" button
*/
interface Suggested {
  title: string;
  description: string;
  aiAnwser: string;
  // TODO: 
  // Future implementation
  // id: number;
  // cardAbout: string;
  // createdAt: string;
  // icon: string;
  // userUrl: string;
  // backgroundColor: string;
}

export function CreateCardSuggested() {

  // It hands the list of Suggested Cards by AI, based in the user created
  const [suggestedCards, setSuggestedCards] = React.useState<Suggested[]>([]);
  
  // It is fetching the Suggested Cards Data from the API
  useEffect(() => {
    axios(`http://localhost:3333/suggested-cards/`)
    .then(response => {
      setSuggestedCards(response.data);
    });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content 
        className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">

        {/* initializing suggestedCard, after that calling title and description */}
        {suggestedCards[0] && (
          <>
            <Dialog.Title className="text-3xl font-bold">
              {/* {suggestedCards[0].title} */}
              {"Suggested by AI"}
            </Dialog.Title>

            <Dialog.Description className="text-xs font-thin">
              {suggestedCards[0].aiAnwser}
            </Dialog.Description>
          </>
        )}

      </Dialog.Content>
    </Dialog.Portal>
  );
}
