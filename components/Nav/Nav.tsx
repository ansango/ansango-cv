import Structure from "../Structure";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

const Nav = () => {
  return (
    <Structure>
      <div className="navbar bg-base-100 rounded-box">
        <div className="flex justify-end flex-1">
          <SwitchLanguage />
          <SwitchTheme />
        </div>
      </div>
    </Structure>
  );
};

export default Nav;
