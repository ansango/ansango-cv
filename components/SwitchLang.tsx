import Link from "next/link";
import { useRouter } from "next/router";
import useHover from "lib/hooks/useHover";
import SwitchTheme from "./SwitchTheme";

const SwitchLang = () => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const { locales: localesRouter, asPath, locale: currentLocale } = useRouter();
  const restLocales = localesRouter.filter(
    (locale) => locale !== currentLocale
  );
  return (
    <div className="relative items-center text-left h-14 flex" ref={hoverRef}>
      <div>
        <button
          type="button"
          className="w-9 h-9 bg-yellow-200 text-yellow-700 dark:text-yellow-400 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-yellow-400 dark:ring-yellow-500 transition-all uppercase font-medium"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>

      {isHovered && (
        <div
          className="absolute right-0 top-14 transition-all duration-200 ease-in-out"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <ul className="space-y-2">
            {restLocales.map((locale, index) => {
              return (
                <li key={index}>
                  <Link href={asPath} locale={locale}>
                    <button className="w-9 h-9 bg-yellow-200 text-yellow-700 dark:text-yellow-400 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-yellow-400 dark:ring-yellow-500 transition-all uppercase font-medium">
                      {locale}
                    </button>
                  </Link>
                </li>
              );
            })}
            <SwitchTheme />
          </ul>
        </div>
      )}
    </div>
  );
};

export default SwitchLang;
