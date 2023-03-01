import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";

import logoImage from "./assets/betterDay-logo.svg";

// Toastify
import { ToastContainer } from 'react-toastify';

// Navbar, Picture, Welcome title and buttons
import { Nav } from "./components/Navbar";
import Hero from "./components/Hero";

// CreateCard and CreatedCardModal from compoments
import CreateCard from "./components/Card/CreateCard";
import { CreateCardModal } from "./components/Card/CreateCardModal";

// Fetching data from the API
import TitleAndSubTitle from "./components/Suggested/TitleAndSubTitle";
import CardModel from "./components/Card/CardModel";
import SuggestedCardModel from "./components/Suggested/SuggestedCardModel";

function App() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

      {/* TOP BAR NAVIGATION */}
      <Nav />

      {/* Toast for sign in, out, create card, delete card, errors... */}
      <ToastContainer />

      {/* REGISTER BTN AND MAIN PICTURE */}
      <Hero />

      {/* CreateCard and CreatedCardModal from compoments */}
      <Dialog.Root>
        <CreateCard />
        <CreateCardModal />
      </Dialog.Root>

      {/* DISPLAY THE CARD THE USER CREATES */}
      <CardModel />

      {/* TITLE AND SUBTITLE FROM THE AI PARTE */}
      <TitleAndSubTitle />

      {/* CARDS CREATED BY AI */}
      <SuggestedCardModel />
    </div>
  );
}

export default App;