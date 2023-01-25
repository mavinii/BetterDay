import React from "react";

// Properties of the Suggested card
interface SuggestedCardsProps {
  cardAbout: string;
  date: string;
  icon: string;
  title: string;
  subtitle: string;
  backgroundColor: string;
}

export default class SuggestedCards extends React.Component<SuggestedCardsProps> {
  render() {
    const { backgroundColor } = this.props;

    return (
      <div
        className={`break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-xs p-4 mb-4 bg-white shadow-lg text-black dark:text-white`}
        style={{ backgroundColor }}
      >
        {/* Card about and data */}
        <div className="flex items-center justify-between font-medium">
          <span className="uppercase text-xs text-green-500">
            {this.props.cardAbout}
          </span>
          <span className="text-xs text-slate-500">15/11/2022</span>
        </div>

        {/* Card icon and title */}
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
              <line x1="3" y1="22" x2="21" y2="22" />
            </svg>
          </div>
          <strong className="text-2xl font-medium">Title goes here</strong>
        </div>

        {/* Card sub-title, user and button */}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.
        </div>
        <div className="flex justify-between items-center">
          <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            <span>Know more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
