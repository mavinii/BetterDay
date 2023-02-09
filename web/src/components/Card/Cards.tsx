import React from "react";

/**
 * FIXME: Create a function that genetares
 * random backgroundColors and saves them in database
 * This interface is used to define the type of the props
 * and it is coming from the database (schema.prisma)
 */
interface CardsProps {
  cardAbout: string;
  title: string;
  description: string;
  createdAt: string;
  icon: string;
  userUrl: string;
  backgroundColor: string;
}

export default class Cards extends React.Component<CardsProps> {
  render() {
    const { backgroundColor } = this.props;
    const userUrl = "https://thispersondoesnotexist.com/image";

    return (
      <div 
        className={`break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-full p-4 mb-4 shadow-lg dark:text-white`}
        style={{ backgroundColor }}
      >
        {/* Card about and data */}
        <div className="flex items-center justify-between font-medium">
          <span className="uppercase text-xs text-white">
            {"#" + this.props.title}
          </span>
          <span className="text-xs text-white">{this.props.createdAt}</span>
        </div>

        {/* Card icon and title */}
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-none items-center justify-center w-10 h-10 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
          <strong className="text-2xl font-medium">{this.props.title}</strong>
        </div>

        {/* Card sub-title, user img and button */}
        {/* TODO: push the user picture to the right side, where the button was */}
        <div>{this.props.description}</div>
        <div className="flex justify-between items-center">
          <div>
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-start -space-x-1.5">
              <a href="#" className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full ring-2 ring-white"
                  src={userUrl}
                  alt="user picture"
                />
              </a>
            </dd>
          </div>
        </div>
      </div>
    );
  }
}
