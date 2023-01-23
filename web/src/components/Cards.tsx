import React from "react";

// Properties of the card
interface CardsProps {
    cardAbout: string;
    date: string;
    icon: string;
    title: string;
    subtitle: string;
    userUrl: string;
    backgroundColor: string;
}

export default class Cards extends React.Component<CardsProps> {
    render() {

        const { backgroundColor } = this.props;

        return (
            <div className={`break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-full p-4 mb-4 shadow-lg dark:text-white`} style={{ backgroundColor }}>

                {/* Card about and data */}
                <div className='flex items-center justify-between font-medium'>
                    <span className='uppercase text-xs text-white'>{this.props.cardAbout}</span>
                    <span className='text-xs text-white'>{this.props.date}</span>
                </div>

                {/* Card icon and title */}
                <div className='flex flex-row items-center space-x-3'>
                    <div className='flex flex-none items-center justify-center w-10 h-10 text-white'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                            <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                            <line x1='3' y1='22' x2='21' y2='22' />
                        </svg>
                    </div>
                    <strong className='text-2xl font-medium'>{this.props.title}</strong>
                </div>

                {/* Card sub-title, user img and button */}
                <div>{this.props.subtitle}</div>
                <div className='flex justify-between items-center'>
                    <div>

                        <dt className='sr-only'>Users</dt>
                        <dd className='flex justify-start -space-x-1.5'>
                            <a href='#' className='inline-block -m-1'>
                                <img className='w-7 h-7 rounded-full ring-2 ring-white' src={this.props.userUrl} alt='user picture' />
                            </a>
                        </dd>
                    </div>
                    <button className={`flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black hover:bg-black hover:text-white text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black`}>
                        <span>Add</span>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                            <path d='M5 12h13M12 5l7 7-7 7' />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}