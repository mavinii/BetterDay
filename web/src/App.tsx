import './styles/main.css';

// Cards the user will be creating
import Cards from './components/Cards';

import logoImage from './assets/betterDay-logo.svg';
import SuggestedCards from './components/SuggestedCards';

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
          <Cards
            cardAbout='Lorem ipsum'
            date='15/11/2022'
            icon='https://img.icons8.com/ios/50/000000/idea.png'
            title='Title goes here'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
            userUrl='https://thispersondoesnotexist.com/image'
            backgroundColor='#F2994A'
          />

          {/* Cards 2 */}
          <Cards
            cardAbout='Lorem ipsum'
            date='15/11/2022'
            icon='https://img.icons8.com/ios/50/000000/idea.png'
            title='Title goes here'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
            userUrl='https://thispersondoesnotexist.com/image'
            backgroundColor='#EB5757'
          />

          {/* Cards 3 */}
          <Cards
            cardAbout='Lorem ipsum'
            date='15/11/2022'
            icon='https://img.icons8.com/ios/50/000000/idea.png'
            title='Title goes here'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
            userUrl='https://thispersondoesnotexist.com/image'
            backgroundColor='#2D9CDB'
          />
      </div>

      {/* Title and sub-title */}
      <div className='mb-2'>
          <h2 className='text-4xl font-extrabold text-gray-900'>Get some help</h2>
          <p className='text-base text-slate-500'>Add new cards of what has been happening</p>
      </div>
      
      {/* Suggested Cards by AI */}
      <div className='grid grid-cols-4 gap-4 '>

        {/* Cards 1 */}
        <SuggestedCards
          cardAbout='Lorem ipsum'
          date='15/11/2022'
          icon='https://img.icons8.com/ios/50/000000/idea.png'
          title='Title goes here'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
          backgroundColor='#1E293B'
        />

        {/* Cards 2 */}
        <SuggestedCards
          cardAbout='Lorem ipsum'
          date='15/11/2022'
          icon='https://img.icons8.com/ios/50/000000/idea.png'
          title='Title goes here'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
          backgroundColor='#1E293B'
        />

        {/* Cards 3 */}
        <SuggestedCards
          cardAbout='Lorem ipsum'
          date='15/11/2022'
          icon='https://img.icons8.com/ios/50/000000/idea.png'
          title='Title goes here'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
          backgroundColor='#1E293B'
        /> 

        {/* Cards 4 */}
        <SuggestedCards
          cardAbout='Lorem ipsum'
          date='15/11/2022'
          icon='https://img.icons8.com/ios/50/000000/idea.png'
          title='Title goes here'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.'
          backgroundColor='#1E293B'
        />

      </div>
    </div>
  ) 
}

export default App
