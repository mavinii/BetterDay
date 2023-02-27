import { useState, FormEvent, useEffect } from "react";

import { Input } from "../Form/Input";
import { MdCheck } from "react-icons/md";
import axios from "axios";

// Radix UI
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

// Firebase
import { auth } from "../../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

/**
 * Form to create a new card
 * This the Form to create a new card, it appears when the user clicks on the button "Add"
 */
export function CreateCardModal() {
  // State for the week days with background color
  const [weekDays, setweekDays] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState({});

  // this is responsable for holding the user id in the state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user.uid);
      } else {
        setAuthUser(null);
      }
    });
    return unsubscribe;
  }, []);

  // This function sends the data to the API the card the user created
  async function handleCreateCard(event: FormEvent) {

    // It prevents the page to reload
    // event.preventDefault();

    // It is getting the data from the form
    const form = event.target as HTMLFormElement;
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData);

    // This is the API call to create the card
    try {
      await axios
        .post(`http://localhost:3333/create-card/${authUser}`, {
          title: data.title,
          description: data.description,
          weekDays: data.weekDays,
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
        })
        .then((response) => {
          setResponse(response.data);
          console.log(response.data);
          alert("Card created successfully!");
          window.location.reload();
        });
      await handleCreateSuggestedCard(form);
    } catch (err) {
      console.log(err);
      alert("Oops, something went wrong while creating your card, please try again!");
      window.location.reload();
    }
  }

  // This is the function that creates the suggested card
  const handleCreateSuggestedCard = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      await axios
        .post(`http://localhost:3333/create-suggested-card/${authUser}`, {
          prompt:
            data.title + " " + data.description + " How can I improve it?",
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (err) {
      console.log(err);
      alert("I couldn't create your card, please try again!");
      
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">
        <Dialog.Title className="text-3xl font-bold">Creating a new card</Dialog.Title>

        {/* TODO: Create a function that will get the exacly day/mouth and year */}
        <Dialog.Description className="text-sm font-normal">Add new card of what has been happening</Dialog.Description>

        {/* Form title and description */}
        <form onSubmit={handleCreateCard} className="flex flex-col gap-4">

          <div className="mt-7 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Title
            </label>
            <Input 
              name="title" id="title" 
              placeholder="Feeling overwhelmed and anxious" 
              required 
            />
          </div>

          <div className="mt-2 flex flex-col">
            <label htmlFor="description" className="text-xl font-semibold">
              Description
            </label>
            <Input
              name="description"
              id="description"
              placeholder="I have been working hard and have been feeling overwhel..."
              required
            />
          </div>

          {/* What time and days of the week  */}
          <div>
            <label htmlFor="time" className="text-xl font-semibold">
              What day(s) was it?
            </label>

            <ToggleGroup.Root
              type="multiple"
              className="flex justify-between items-center mt-2"
              value={weekDays}
              onValueChange={setweekDays}
            >
              <ToggleGroup.Item
                value="0"
                title="Sunday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("0") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Sun
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="1"
                title="Monday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("1") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Mon
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="2"
                title="Tuesday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("2") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Tus
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="3"
                title="Wednesday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("3") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Wed
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="4"
                title="Thursday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("4") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Thu
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="5"
                title="Friday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("5") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Fri
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="6"
                title="Saturday"
                className={`w-12 h-8 rounded text-white ${
                  weekDays.includes("6") ? "bg-[#5C2C5D]" : "bg-zinc-800"
                }`}
              >
                {" "}
                Sun
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>

          {/* Time the user used to do  */}
          <div className="mt-2 flex flex-col gap-1 flex-1">
            <label className="text-xl font-semibold">
              What time do you used to do it?
            </label>

            <div className="grid grid-cols-2 gap-2">
              <Input
                name="hourStart"
                id="hourStart"
                type="time"
                placeholder="From"
              />
              <Input name="hourEnd" id="hourEnd" type="time" placeholder="To" />
            </div>
          </div>

          {/* AI Agreement */}
          <label className="mt-2 flex items-center gap-3 text-base">
            <Checkbox.Root
              checked={agree}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setAgree(true);
                } else {
                  setAgree(false);
                }
              }}
              className="w-5 h-5 p-0.5 rounded bg-zinc-800"
              required
            >
              <Checkbox.Indicator>
                <MdCheck className="w-4 h-4 text-emerald-500" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            I allow the AI helping me based on the information provided.
          </label>

          {/* Buttons */}
          <footer className="mt-5 flex justify-between items-center">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 text-white rounded py-2 px-4 hover:bg-zinc-600"
            >
              Cancel
            </Dialog.Close>
            <button
              type="submit"
              className="bg-[#5C2C5D] text-white rounded py-2 px-4 hover:bg-[#49134a]"
            >
              Create Card
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
