import Link from "next/link";
import { useRouter } from "next/router";
import Structure from "./Structure";

const Nav = () => {
  const { locales: localesRouter, asPath, locale: currentLocale } = useRouter();
  const restLocales = localesRouter.filter(
    (locale) => locale !== currentLocale
  );

  return (
    <Structure>
      <div className="navbar bg-base-100 rounded-box">
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <span className="py-2 px-4 flex items-center uppercase">
              {currentLocale}
            </span>

            <div className="dropdown dropdown-end dropdown-hover">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-square focus:bg-base-content border-none focus:bg-opacity-50 m-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </button>
              <div
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-300 rounded-box"
              >
                <ul className="space-y-2">
                  {restLocales.map((locale, index) => {
                    return (
                      <li key={index}>
                        <Link href={asPath} locale={locale}>
                          <a className="uppercase">{locale}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link href={asPath === "/" ? "/dashboard" : "/"} passHref>
          <button className="btn btn-ghost btn-square focus:bg-base-content border-none focus:bg-opacity-50">
            {asPath === "/" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            )}
          </button>
        </Link>
      </div>
      <hr className="w-full border-1 border-primary" />
    </Structure>
  );
};

export default Nav;
