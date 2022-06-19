import useTypeWriter from "lib/hooks/useTypewriter";
import { FC } from "react";

type Props = {
  text: string;
};

const TypeWriter: FC<Props> = ({ text }) => {
  const typing = useTypeWriter(text);
  return <span>{typing}</span>;
};

export default TypeWriter;
