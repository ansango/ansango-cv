import Container from "components/Container";
import Structure from "components/Structure";
import { themes } from "lib/utils/themes";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Dashboard: NextPage = () => {
  const { setTheme, theme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Container>
      <Structure>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
      </Structure>
    </Container>
  );
};

export default Dashboard;
