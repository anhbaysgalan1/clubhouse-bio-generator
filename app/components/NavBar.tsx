import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between mt-4">
        <div className="flex-1 min-w-0">
          <Link href="/">
            <a href="/">
              <h2 className="sm:text-xl sm:block sm:truncate md:text-2xl hidden font-semibold leading-7 text-white">
                Бүтээлч Clubhouse Bio
              </h2>
            </a>
          </Link>
        </div>
        <div className="md:mt-0 md:ml-4 flex mt-4">
          <Link href="/examples">
            <a href="/">
              <button
                type="button"
                className="mr-8 inline-flex items-center px-3 py-1.5 border border-transparent sm:text-md md:text-xl font-medium rounded-full shadow-sm text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Жишээ Bio
              </button>
            </a>
          </Link>
          <a
            href="https://docs.google.com/document/d/1QInjw_b4lNPmOt01LIDuT6HAHZWms_955vHif9I5Z6o/edit"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="inline-flex items-center px-3 py-1.5 border border-transparent sm:text-md md:text-xl font-medium rounded-full shadow-sm text-white bg-clubhouse-button2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Санал Хүсэлт
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
