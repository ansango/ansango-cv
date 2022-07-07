import { defaultTheme } from "lib/utils/themes";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Seo, { Props as SeoProps } from "./Seo";
type Props = {
  children: ReactNode;
  SeoProps?: SeoProps;
};

const Container: FC<Props> = ({ children, SeoProps }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [theme]);
  return (
    <>
      <Seo {...SeoProps} />
      <div className="flex flex-col justify-center px-2 sm:px-3 md:px-5">
        <Nav />
        <main className="py-10">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
