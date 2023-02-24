import React from "react";
import CreateSuggested from './KnowMoreButton';

/**
 * TODO: Create a function that the user can like the suggested cards
 * and save it in the database.
 */
interface SuggestedCardsProps {
  cardAbout: string;
  aiAnwser: string;
  // title: string;
  // description: string;
  createdAt: string;
  icon: string;
  backgroundColor: string;
}

/**
 * This component is responsible for rendering the Suggested Cards
 * It is also responsible for rendering the Suggested Cards
*/
export default class SuggestedCards extends React.Component<SuggestedCardsProps> {
  render() {
    const { backgroundColor } = this.props;
    const { aiAnwser } = this.props;

    return (
      <div
        className={`break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-xs p-4 mb-4 bg-white shadow-lg text-black dark:text-white`}
        style={{ backgroundColor }}
      >
        {/* Card about and data */}
        <div className="flex items-center justify-between font-medium">
          <span className="uppercase text-xs text-green-500">
            {"#"+this.props.cardAbout}
          </span>
          <span className="text-xs text-slate-500">{this.props.createdAt}</span>
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
          <strong className="text-2xl font-medium">{ aiAnwser }</strong>
        </div>

        {/* Card sub-title, button and heart and comments icons */}
        {/* <div>{this.props.description}</div> */}
        <div className="flex justify-between items-center">
          
          {/* Button know more */}
          <CreateSuggested />          
          
          <div className="py-1 rounded-lg flex space-x-2 flex-row">
						<div className="cursor-pointer text-center text-md justify-center items-center flex">
							<svg 
              stroke="currentColor" 
              fill="currentColor" 
              strokeWidth="0" 
              viewBox="0 0 1024 1024" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-md">
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z">                
                </path>
              </svg>
							<span className="text-md mx-1">80</span>
						</div>

						<div className="cursor-pointer text-center text-md justify-center items-center flex">
							<svg 
              stroke="currentColor" 
              fill="currentColor" 
              strokeWidth="0" 
              viewBox="0 0 24 24" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-md"><path 
              d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path><circle 
              cx="15" 
              cy="10" 
              r="2"></circle><circle cx="9" cy="10" r="2"></circle></svg>
							<span className="text-md mx-1">23</span>
						</div>
					</div>
        </div>
      </div>
    );
  }
}
