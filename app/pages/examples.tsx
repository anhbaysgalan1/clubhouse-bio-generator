import { useState } from 'react';
import NavBar from '../components/NavBar';

export default function ExampleBios() {
  const [tabState, setTabState] = useState(0);

  const handleSelectChange = (event: any) => {
    setTabState(Number(event.target.value));
  };

  const example0 = `📍Улаанбаатар
Influencer at Instagram.
Start-up Geek.
Чөлөөт уран бүтээлч. 25 настай.
`;

  const example1 = `Software Engineer @Numur.mn 
  ✨| CEO & CTO @Mind.mn⚒️
 🛰️ Science STEM researcher
  Trilingual 🇺🇸🇹🇷🇲🇳
  Major in CS, 
  DevOps, 
  Full-stack Developer
`;

  const example2 = `Software Engineer 👩‍💻 @Microsoft | Globe trotter 🌎| Community Enthusiast | Breathing resilience, empowerment for social impact ✨| Mentor & Mentee | Swimmer 🏊 | Listener & Learner ⚒️

  🛰️ STEM & Inclusion advocate empowering diverse communities to imagine new possibilities for themselves, raise awareness & release their highest potential
  🎙️Speaker at Global Youth Empowerment Summit & Interviewing Tech Leaders
  
  🌎 Lived in 5 countries 🇩🇪🇬🇧🇨🇦🇪🇸🇫🇷
  🧳 Living out of 1 suitcase around 🇨🇦 since July'20
  📚Speaking 5 languages
  🎓Diving into Tech - Majored in Computer Science, Data Science and International Relations minor
  🧠 Fascinated by neuroscience, psychology, behavioural, cognitive & social sciences
  ⛷️Sport junkie - Former national competitive skier
`;

  const renderData = (param: number) => {
    switch (param) {
      case 0:
        return example0;
      case 1:
        return example1;
      case 2:
        return example2;
      default:
        return example0;
    }
  };

  return (
    <div className="sm:px-6 lg:px-8 container max-w-screen-xl px-4 mx-auto">
      <div className="flex flex-col justify-between min-h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="mt-14 flex-1">
          <h1 className="p-2 text-4xl font-semibold text-center text-white">
            Доорхи жишээ Bio нуудаас санаа аваарай
          </h1>
          <div>
            <div>
              <div className="sm:hidden sm:px-5">
                <label htmlFor="tabs" className="sr-only">
                  Сонгох
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
                  onChange={handleSelectChange}
                >
                  <option value={0} selected={tabState === 0}>
                    {' '}
                    Энгийн / ⚫
                  </option>
                  <option value={1} selected={tabState === 1}>
                    {' '}
                    Ерөнхий / 📚
                  </option>
                  <option value={2} selected={tabState === 2}>
                    Бүтээлч / 🥳🔝😎
                  </option>
                </select>
              </div>
              <div className="sm:block hidden mt-16 text-center">
                <nav
                  className="flex justify-center space-x-4"
                  aria-label="Tabs"
                >
                  <button
                    type="button"
                    className={`rounded-xl px-3 py-2 sm:text-2xl md:text-4xl font-medium text-white ${
                      tabState === 0 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(0)}
                  >
                    Энгийн / ⚫
                  </button>
                  <button
                    type="button"
                    className={`rounded-xl px-3 py-2 sm:text-2xl md:text-4xl font-medium text-white ${
                      tabState === 1 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(1)}
                  >
                    Ерөнхий / 📚
                  </button>
                  <button
                    type="button"
                    className={`rounded-xl px-3 py-2 sm:text-2xl md:text-4xl font-medium text-white ${
                      tabState === 2 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(2)}
                  >
                    Бүтээлч / 🥳🔝😎
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <textarea
              // data-row-maxlength="27
              // data-limit-row-len="true
              rows={20}
              cols={34}
              readOnly
              className="md:text-2xl text-md p-2 font-sans font-light outline-none"
              // defaultValue={renderData(tabState)}
              value={renderData(tabState)}
            />
          </div>
        </main>
        <footer className="h-8 mt-4 mb-4 text-white">
          <div>Хайраар бүтээв ❤️ <a href="https://www.instagram.com/ankhbaysgalan/">@ankhbaysgalan</a></div>
        </footer>
      </div>
    </div>
  );
}
