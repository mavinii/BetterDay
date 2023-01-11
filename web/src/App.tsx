import './styles/main.css';

import logoImage from './assets/betterDay-logo.svg';

function App() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      
      {/* Header */}
      <div className='flex flex-col items-center m-20'>
        <h1 className='mb-4 text-6xl font-extrabold text-gray-900 mt-3'>Designed to give you a BetterDay</h1>
        <p className='text-3xl text-slate-500'>For those who want to improve their day by avoiding simple issues.</p>
      </div>

      {/* Title and sub-title */}
      <div className='mb-2'>
        <h2 className='text-4xl font-extrabold text-gray-900'>All days</h2>
        <p className='text-base text-slate-500'>Add new cards of what has been happening</p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-3 gap-6 mb-8'>

          {/* Cards 1 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-full p-4 mb-4 shadow-lg text-black dark:bg-[#9B8D8A] dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-white'>Lorem ipsum</span>
                <span className='text-xs text-white'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
                <div className='flex flex-none items-center justify-center w-10 h-10 text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                    <line x1='3' y1='22' x2='21' y2='22' />
                </svg>
                </div>
                <strong className='text-2xl font-medium'>Title goes here</strong>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-[#9B8D8A] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>

          {/* Cards 2 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-full p-4 mb-4 bg-white shadow-lg text-black dark:bg-[#EB5757] dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-white'>Lorem ipsum</span>
                <span className='text-xs text-white'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
                <div className='flex flex-none items-center justify-center w-10 h-10 text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                    <line x1='3' y1='22' x2='21' y2='22' />
                </svg>
                </div>
                <strong className='text-2xl font-medium'>Title goes here</strong>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-[#EB5757] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>

          {/* Cards 3 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-full p-4 mb-4 bg-white shadow-lg text-black dark:bg-[#2D9CDB] dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-white'>Lorem ipsum</span>
                <span className='text-xs text-white'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
                <div className='flex flex-none items-center justify-center w-10 h-10 text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                    <line x1='3' y1='22' x2='21' y2='22' />
                </svg>
                </div>
                <strong className='text-2xl font-medium'>Title goes here</strong>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-[#2D9CDB] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>
      </div>

      {/* Title and sub-title */}
      <div className='mb-2'>
          <h2 className='text-4xl font-extrabold text-gray-900'>All days</h2>
          <p className='text-base text-slate-500'>Add new cards of what has been happening</p>
      </div>
      
      {/* Cards */}
      <div className='grid grid-cols-4 gap-4 '>

          {/* Cards 1 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-xs p-4 mb-4 bg-white shadow-lg text-black dark:bg-slate-800 dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-green-500'>Lorem ipsum</span>
                <span className='text-xs text-slate-500'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
              <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                  <line x1='3' y1='22' x2='21' y2='22' />
              </svg>
              </div>
                <strong className='text-2xl font-medium'>Title goes here</strong>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>

          {/* Cards 2 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-xs p-4 mb-4 bg-white shadow-lg text-black dark:bg-slate-800 dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-green-500'>Lorem ipsum</span>
                <span className='text-xs text-slate-500'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
                <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                    <line x1='3' y1='22' x2='21' y2='22' />
                </svg>
                </div>
                <strong className='text-2xl font-medium'>Title goes here</strong>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>

          {/* Cards 3 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-xs p-4 mb-4 bg-white shadow-lg text-black dark:bg-slate-800 dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-green-500'>Lorem ipsum</span>
                <span className='text-xs text-slate-500'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
              <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                  <line x1='3' y1='22' x2='21' y2='22' />
              </svg>
              </div>
              <strong className='text-2xl font-medium'>Title goes here</strong>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>

          {/* Cards 4 */}
          <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-xs p-4 mb-4 bg-white shadow-lg text-black dark:bg-slate-800 dark:text-white">

            {/* Card about and data */}
            <div className='flex items-center justify-between font-medium'>
                <span className='uppercase text-xs text-green-500'>Lorem ipsum</span>
                <span className='text-xs text-slate-500'>15/11/2022</span>
            </div>

            {/* Card icon and title */}
            <div className='flex flex-row items-center space-x-3'>
              <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                  <line x1='3' y1='22' x2='21' y2='22' />
              </svg>
              </div>
              <span className='text-2xl font-medium'>Title goes here</span>
            </div>

            {/* Card sub-title, user and button */}
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
            <div className='flex justify-between items-center'>
              <div>
                <dt className='sr-only'>Users</dt>
                <dd className='flex justify-start -space-x-1.5'>
                    <a href='#' className='inline-block -m-1'>
                      <img className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://thispersondoesnotexist.com/image' alt='avatar' />
                    </a>
                </dd>
              </div>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span>Add</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
            </div>
          </div>

      </div>

    </div>
  ) 
}

export default App
