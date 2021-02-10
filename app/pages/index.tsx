import { useRouter } from 'next/router';

import NavBar from '../components/NavBar';

import api from '../utils/db/api';

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const id = await api.getId();
      if (id !== undefined) {
        router.push(`/editor/${id}`);
      }
    } catch {
      // console.log('DB Error occured');
    }
  };
  return (
    <div className="lg:px-8 max-w-screen-xl px-6 mx-auto text-white">
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="mt-14 flex-1">
          {/* <h1 className=" md:text-4xl p-2 text-2xl font-semibold text-center text-white">
          3 минутаас бага хугацаанд Clubhouse-ийн сонирхолтой Bio үүсгээрэй
          </h1> */}
          <div className="flex">
            <div className="sm:w-full md:w-1/2">
              <h2 className="p-2 mt-8 text-3xl font-semibold text-center text-white">
                Хэрхэн ашиглах вэ?
              </h2>
              <div className="w-full">
                <div className="mt-8 ml-8 text-2xl x">
                  <ul>
                    <li>1. Жишээ Bio нуудаас санаа авах</li>
                    <li className="mt-4">
                      2. Bio үүсгэгчийг ашиглан өөрийн Bio-г үүсгэх
                    </li>
                    <li className="mt-4">
                      3. Сайтынхаа линкыг утсан дээрээ нээх
                    </li>
                    <li className="mt-4">4. Bio гоо хуулж аван Clubhouse даа оруулна</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:block hidden w-1/4 mx-auto">
              <img
                src="/images/example.jpg"
                alt="example of clubhouse bio"
                width={350}
                height={750}
                className="border-2 border-gray-500"
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            {/* <Link href="/editor">
              <a href="/"> */}
              <div id="testbutton" onClick={handleClick}></div>
{/* 
            <button
              type="button"
              className="mr-8 inline-flex items-center px-3 py-1.5 text-xl font-medium rounded-full shadow-sm text-white bg-clubhouse-button1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
            >
              
            </button> */}
            {/* </a>
            </Link> */}
          </div>
        </main>
        <footer className="h-8 mt-4 mb-4 text-white">
          <div>Хайраар бүтээв ❤️ <a href="https://www.instagram.com/ankhbaysgalan/">@ankhbayasgalan</a></div>
        </footer>
      </div>
    </div>
  );
}
