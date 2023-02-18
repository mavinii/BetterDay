import { useState, FormEvent, useEffect } from "react";

import { Input } from "../Form/Input";
import { MdCheck } from "react-icons/md";
import axios from "axios";

// Radix UI
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

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
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData)

    // It is sending the data to the API (create-card/id) to be salved in the database
    try {
      await axios.post(`http://localhost:3333/create-card/${authUser}`, {
        title: data.title,
        description: data.description,
        weekDays: data.weekDays,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
      })

      console.log(data)
      alert("Card created successfully!")
    
    } catch (error) {

      console.log(error)
      alert("Error while creating the card, try again!")
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">
        <Dialog.Title className="text-3xl font-bold">Lorem ipsum</Dialog.Title>
        <Dialog.Description className="text-xs font-thin">
          27/01/2012
        </Dialog.Description>

        {/* Check Form with Component folder */}
        <form onSubmit={ handleCreateCard } className="flex flex-col gap-4">

          {/* Title */}
          <div className="mt-7 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Title
            </label>
            <Input name="title" id="title" placeholder="Lorem ipsum" required />
          </div>

          {/* Description */}
          <div className="mt-2 flex flex-col">
            <label htmlFor="description" className="text-xl font-semibold">
              Description
            </label>
            <Input name="description" id="description" placeholder="Lorem ipsum" required />
          </div>

          {/* Feelins questions */}
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

            <ToggleGroup.Root 
              type="multiple" 
              className="flex justify-between items-center mt-2"
              value={weekDays}
              onValueChange={setweekDays}
            >
              <ToggleGroup.Item
                value="0"
                title="Sunday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('0') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
              >
                {" "}
                Sun
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="1"
                title="Monday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('1') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
              >
                {" "}
                Mon
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="2"
                title="Tuesday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('2') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
              >
                {" "}
                Tus
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="3"
                title="Wednesday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('3') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
              >
                {" "}
                Wed
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="4"
                title="Thursday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('4') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
              >
                {" "}
                Thu
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="5"
                title="Friday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('5') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
              >
                {" "}
                Fri
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="6"
                title="Saturday"
                className={`w-12 h-8 rounded text-white ${weekDays.includes('6') ? 'bg-[#5C2C5D]' : 'bg-zinc-800'}`}
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
              <Input name="hourStart" id="hourStart" type="time" placeholder="From" />
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
                <MdCheck className="w-4 h-4 text-emerald-500"/>
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
