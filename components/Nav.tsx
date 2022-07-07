import { themes } from "lib/utils/themes";
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
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
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
        <div className="dropdown dropdown-end dropdown-hover">
          <div tabIndex={0}>
            <button
              aria-label="button component"
              className="btn btn-ghost btn-square focus:bg-base-content border-none focus:bg-opacity-50"
            >
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
            </button>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content py-2 w-[21.5rem] sm:w-[38rem] md:w-[45rem] lg:w-[61rem]"
          >
            <div className="card bg-neutral-focus text-neutral-content rounded-box shadow-xl">
              <div className="card-body max-h-96 h-[70vh] overflow-y-auto">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {mounted &&
                    themes.map((theme) => {
                      return (
                        <div
                          key={theme}
                          className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
                          data-set-theme={theme}
                          data-act-class="outline"
                          onClick={() => setTheme(theme)}
                        >
                          <div
                            data-theme={theme}
                            className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                          >
                            <div className="grid grid-cols-5 grid-rows-3">
                              <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                <div className="flex-grow text-sm font-bold capitalize">
                                  {theme}
                                </div>
                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                  <div className="bg-primary w-2 rounded"></div>
                                  <div className="bg-secondary w-2 rounded"></div>
                                  <div className="bg-accent w-2 rounded"></div>
                                  <div className="bg-neutral w-2 rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Structure>
  );
};

export default Nav;
