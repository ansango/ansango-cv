import Link from "next/link";
import { useRouter } from "next/router";

const EEUUFlag = () => (
  <svg
    id="emoji"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <g id="color">
      <rect x="5" y="17" width="62" height="38" fill="#fff" />
      <rect x="5" y="17" width="62" height="5" fill="#d22f27" />
      <rect x="5" y="26" width="62" height="4" fill="#d22f27" />
      <rect x="5" y="34" width="62" height="4" fill="#d22f27" />
      <rect x="5" y="17" width="32" height="21" fill="#1e50a0" />
      <rect x="5" y="42" width="62" height="4" fill="#d22f27" />
      <circle cx="9.5" cy="22" r="1.75" fill="#fff" />
      <circle cx="17.5" cy="22" r="1.75" fill="#fff" />
      <circle cx="25.5" cy="22" r="1.75" fill="#fff" />
      <circle cx="33.5" cy="22" r="1.75" fill="#fff" />
      <circle cx="29.5" cy="26" r="1.75" fill="#fff" />
      <circle cx="21.5" cy="26" r="1.75" fill="#fff" />
      <circle cx="13.5" cy="26" r="1.75" fill="#fff" />
      <circle cx="9.5" cy="30" r="1.75" fill="#fff" />
      <circle cx="17.5" cy="30" r="1.75" fill="#fff" />
      <circle cx="25.5" cy="30" r="1.75" fill="#fff" />
      <circle cx="33.5" cy="30" r="1.75" fill="#fff" />
      <circle cx="29.5" cy="34" r="1.75" fill="#fff" />
      <circle cx="21.5" cy="34" r="1.75" fill="#fff" />
      <circle cx="13.5" cy="34" r="1.75" fill="#fff" />
      <rect x="5" y="50" width="62" height="5" fill="#d22f27" />
    </g>
    <g id="line">
      <rect
        x="5"
        y="17"
        width="62"
        height="38"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

const SpainFlag = () => (
  <svg
    id="emoji"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <g id="color">
      <rect x="5" y="17" width="62" height="38" fill="#f1b31c" />
      <path
        fill="#d22f27"
        d="M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33"
      />
      <rect x="5" y="17" width="62" height="9" fill="#d22f27" />
      <rect x="5" y="46" width="62" height="9" fill="#d22f27" />
      <rect x="19" y="33" width="4" height="4" fill="#f1b31c" />
      <circle cx="19" cy="37" r="1.5" fill="#6a462f" />
      <g>
        <line
          x1="27"
          x2="27"
          y1="33"
          y2="42"
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <line
          x1="11"
          x2="11"
          y1="33"
          y2="42"
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15,30a8.5678,8.5678,0,0,1,4-1"
        />
        <path
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23,30a8.5678,8.5678,0,0,0-4-1"
        />
        <line
          x1="15"
          x2="23"
          y1="33"
          y2="33"
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33"
        />
        <line
          x1="10"
          x2="12"
          y1="42"
          y2="42"
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <line
          x1="26"
          x2="28"
          y1="42"
          y2="42"
          fill="none"
          stroke="#6a462f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </g>
    <g id="line">
      <rect
        x="5"
        y="17"
        width="62"
        height="38"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

const ItalyFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="emoji"
      viewBox="0 0 72 72"
      className="w-6 h-6"
    >
      <g id="color">
        <rect x="5" y="17" width="62" height="38" fill="#fff" />
        <rect x="5" y="17" width="21" height="38" fill="#5c9e31" />
        <rect x="46" y="17" width="21" height="38" fill="#d22f27" />
      </g>
      <g id="line">
        <rect
          x="5"
          y="17"
          width="62"
          height="38"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

const SwitchLang = () => {
  const { locales: localesRouter, asPath, locale: currentLocale } = useRouter();
  const locales = localesRouter.map((locale) => {
    return {
      locale,
      Flag:
        locale === "en"
          ? () => <EEUUFlag />
          : locale === "es"
          ? () => <SpainFlag />
          : () => <ItalyFlag />,
    };
  });
  return (
    <ul className="flex items-center space-x-2">
      {locales.map(({ locale, Flag }, index) => {
        if (locale !== currentLocale) {
          return (
            <li key={index}>
              <Link href={asPath} locale={locale}>
                <a>
                  <Flag />
                </a>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default SwitchLang;
