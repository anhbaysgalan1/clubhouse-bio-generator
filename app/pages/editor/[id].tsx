import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/db/api';
import NavBar from '../../components/NavBar';
import Emojis from '../../utils/Emojis';

export default function Editor() {
  const [tabState, setTabState] = useState<number>(0);
  const [cursorPositionState, setCursorPositionState] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [initialTextAreaData, setInitialTextAreaData] = useState<string>('');
  const router = useRouter();
  const [copyStatus, setCopyStatus] = useState(false);

  const saveChangeToDB = (event: any) => {
    const id = router.query.id as string;
    api.updateDocument(id, event.target.value);
  };

  const EmojiNameMapper: string[] = [
    'most_useful',
    'creative',
    'science',
    'sport',
    'travel',
  ];

  const textAreaPlaceholder = `CEO of Mind.mn 🚀 гэх мэт...`;
  const handleChange = (event: any) => {
    setCursorPositionState(event.target.selectionStart);
    saveChangeToDB(event);
  };

  const handleCopy = () => {
    if(textAreaRef.current){
      textAreaRef.current.select();
      document.execCommand('copy');
      setCopyStatus(true);
      textAreaRef.current.selectionStart = 0;
      textAreaRef.current.selectionEnd = 0;
    }
    setTimeout(() => {setCopyStatus(false)},5000);
  }

  const insertMyText = (text: string) => {
    if (textAreaRef.current === null) {
      return;
    }

    const textToInsert = text;
    const cursorPosition = cursorPositionState;
    const textBeforeCursorPosition = textAreaRef.current.value.substring(
      0,
      cursorPosition
    );
    const textAfterCursorPosition = textAreaRef.current.value.substring(
      cursorPosition,
      textAreaRef.current.value.length
    );
    textAreaRef.current.value =
      textBeforeCursorPosition + textToInsert + textAfterCursorPosition;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDocument(router.query.id as string);
      if (data !== undefined) {
        setInitialTextAreaData(data.text);
      }
    };
    fetchData();
  }, [router]);

  return (
    <div className="lg:px-8 max-w-screen-xl px-6 mx-auto">
      <div className="flex flex-col justify-between min-h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="mt-4 flex-1">
          <h1 className="p-2 text-4xl font-semibold text-center text-white">
            Bio Үүсгэгч
          </h1>
          {/* <div className="md:block hidden mt-4 text-2xl text-white">
            <div>
              1. When you are happy with your bio, send the link (url) to your
              phone.
            </div>
            <div>
              2. Open the link, and copy and paste your bio to Clubhouse.
            </div>
          </div> */}

          <div
      className="bg-white px-6 py-4 my-3 mx-auto shadow rounded-md flex items-center"
    >
    <div className="w-full text-center mx-auto">
      <button
        type="button"
        className=
        {`border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ${
          tabState === 0 ? 'bg-green-500' : 'bg-gray-200'
        }`}
        onClick={() => setTabState(0)}
      >
        Ерөнхий
      </button>
      <button
        type="button"
        className=
        {`border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ${
          tabState === 1 ? 'bg-green-500' : 'bg-gray-200'
        }`}
                            onClick={() => setTabState(1)}

     >
         Энтертейнмент
      </button>
      <button
        type="button"
        className=
        {`border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ${
          tabState === 2 ? 'bg-green-500' : 'bg-gray-200'
        }`}
                            onClick={() => setTabState(2)}      >
        Шинжлэх ухаан
      </button>
      <button
        type="button"
        className=
        {`border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ${
          tabState === 3 ? 'bg-green-500' : 'bg-gray-200'
        }`}
                            onClick={() => setTabState(3)}      >
        Спорт
      </button>
      <button
        type="button"
        className=
        {`border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ${
          tabState === 4 ? 'bg-green-500' : 'bg-gray-200'
        }`}
                            onClick={() => setTabState(4)}      >
        Аялал
      </button>


      </div>

    </div>
    <div className="mt-4">
    <div className="w-full flex flex-wrap overflow-hidden sm:-mx-px">
                    {Emojis[EmojiNameMapper[tabState]].map((element: any) => (
                      <button
                        key={element.id}
                        type="button"
                        className="flex-none mx-2 text-5xl rounded-md  text-white font-extrabold flex items-center justify-center"
                        onClick={() => {
                          insertMyText(element);
                        }}
                      >
                        {element}
                      </button>
                    ))}
                  </div>
                </div>
          <div className="flex justify-center  mt-8">
            <textarea
              data-limit-row-len="true"
              rows={20}
              cols={27}
              wrap="hard"
              className="md:text-2xl text-md p-2 font-sans font-light outline-none"
              onChange={handleChange}
              onBlur={handleChange}
              onClick={handleChange}
              ref={textAreaRef}
              placeholder={textAreaPlaceholder}
              defaultValue={initialTextAreaData}
            />
          </div>
          <div className=" text-center mt-4 text-1xl text-white">
            <div>Бараг л дууслаа 🥳 Одоо өөрийн Bio-г хуулж аваад Clubhouse даа оруулаарай!</div>

        <div className="mt-2 text-center">
          <button type="button" onClick={handleCopy}className="bg-blue-600 text-white rounded-md py-2 px-4">{copyStatus ? 'Хуулагдсан!' : 'Bio Хуулах'}</button>
        </div>
          </div>
        </main>
        <footer className=" h-8 mt-4 mb-4 text-white">
          <div>Хайраар бүтээв ❤️ <a href="https://www.instagram.com/ankhbaysgalan/">@ankhbayasgalan</a></div>
        </footer>
      </div>
    </div>
  );
}
