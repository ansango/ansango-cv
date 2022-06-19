import { useRouter } from "next/router";
import Structure from "./Structure";
import SwitchLang from "./SwitchLang";

const Nav = () => {
  const { locale } = useRouter();
  return (
    <Structure>
      <nav className="flex justify-between space-x-2 items-center pt-8 pb-16">
        <span></span>
        <span className="flex space-x-2 items-center">
          <span className="w-9 h-9 dark:text-yellow-400 rounded-lg  flex items-center justify-center uppercase font-medium">
            {locale}
          </span>
          <SwitchLang />
        </span>
      </nav>
    </Structure>
  );
};

export default Nav;
