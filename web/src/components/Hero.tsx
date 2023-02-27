import { MdDoneAll, MdFactCheck, MdOutlineAddCircle } from "react-icons/md";

export default function Hero() {
  return (
    <section className="mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          
          {/* Left Side Image */}
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-[#2965a0]">
              <img
                alt="unplash random images"
                src="https://source.unsplash.com/368x245/?wallpaper"
                className="w-full align-middle rounded-t-lg"
              ></img>

              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                ></svg>

                <h3 className="text-xl font-bold text-white">
                  Be kind to yourself
                </h3>
                <p className="text-md font-light mt-3 text-white">
                  Feeling overwhelmed is OK, especially now. It also helps to
                  remember that feeling overwhelmed doesn't have to last. Give
                  yourself some grace - if you don't get to that chore or have
                  to ask for an extension at work, you can. Your mental health
                  should be a top priority.
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-6xl mb-2 font-extrabold leading-normal">
              A BetterDay
            </h3>
            <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-slate-500">
              Designed for those who want to improve their day by avoiding
              simple issues.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-3xl text-green-600 mr-3 inline-block">
                      <MdOutlineAddCircle />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-slate-500">
                      1. Click to add a card.
                    </h3>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-3xl text-green-600 mr-3 inline-block">
                      <MdFactCheck />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-slate-500">
                      2. Adding a title and description.
                    </h3>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-3xl text-green-600 mr-3 inline-block">
                      <MdDoneAll />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-slate-500">
                      3. See the magic happens.
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
