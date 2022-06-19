import SwitchTheme from "./SwitchTheme";
import Structure from "./Structure";
import SwitchLang from "./SwitchLang";

const Nav = () => {
  return (
    <Structure>
      <nav className="flex justify-between space-x-2 items-center pt-8 pb-16">
        <a>ansango</a>
        <span className="flex space-x-2 items-center">
          <SwitchLang />
          <SwitchTheme />
        </span>
      </nav>
    </Structure>
  );
};

export default Nav;
