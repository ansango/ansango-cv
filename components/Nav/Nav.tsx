import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Structure from "../Structure";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
const DynamicPDF = dynamic(() => import("../../components/PdfDownload"), {
  ssr: false,
});
const Nav = () => {
  const { t } = useTranslation("common");

  return (
    <Structure>
      <div className="navbar bg-base-100 rounded-box">
        <div className="space-x-2">
          <div className="avatar">
            <div className="bg-gradient-to-r from-secondary to-accent rounded-full w-5"></div>
          </div>
          <span className="font-semibold">ansango</span>
        </div>

        <div className="flex justify-end flex-1">
          {/* <DynamicPDF /> */}
          <SwitchLanguage />
          <SwitchTheme />
        </div>
      </div>
    </Structure>
  );
};

export default Nav;
