import Container from "components/Container";
import Structure from "components/Structure";
import type { NextPage } from "next";
import { personal } from "lib/data";
import TypeWriter from "components/TypeWriter";

const Home: NextPage = () => {
  const { name } = personal;
  return (
    <Container>
      <Structure>
        <div className="flex flex-col justify-center items-start mx-auto pb-16">
          <h1
            className="font-bold text-3xl md:text-5xl tracking-tight mb-1 bg-gradient-to-r bg-clip-text text-transparent 
            from-yellow-400 via-orange-600 to-yellow-600
            dark:from-yellow-200 dark:via-orange-400 dark:to-yellow-500
            animate-text"
          >
            {name}
          </h1>
          <p className="font-bold text-xl md:text-2xl mb-1">
            <TypeWriter text="Frontend Mid Developer" />
          </p>
        </div>
      </Structure>
    </Container>
  );
};

export default Home;
