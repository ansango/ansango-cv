import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Structure from "./Structure";

const Nav = () => {
  const { locales: localesRouter, asPath, locale: currentLocale } = useRouter();
  const restLocales = localesRouter.filter(
    (locale) => locale !== currentLocale
  );
  const { theme, setTheme } = useTheme();
  const darkOrLight = theme === "dark" || theme === "light";
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Structure>
      <div className="navbar bg-base-100 rounded-box">
        <div className="flex justify-end flex-1 px-2">
          <Link href={asPath === "/" ? "/dashboard" : "/"}>
            <a>{asPath === "/" ? "Dashboard" : "Home"}</a>
          </Link>
          <div className="flex items-stretch">
            <span className="p-2 flex items-center uppercase">
              {currentLocale}
            </span>
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex"
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
              <div
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-300 rounded-box mt-2"
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
                  {darkOrLight && mounted && (
                    <li>
                      <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          {theme === "dark" ? (
                            <path
                              fillRule="evenodd"
                              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                              clipRule="evenodd"
                            />
                          ) : (
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                          )}
                        </svg>
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Structure>
  );
};

export default Nav;
