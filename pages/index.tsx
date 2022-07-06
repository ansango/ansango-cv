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
            from-primary to-secondary
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
