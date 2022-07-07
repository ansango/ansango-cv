import useTypeWriter from "lib/hooks/useTypewriter";
import Image from "next/image";
import { FC } from "react";
import avatar from "public/avatar.jpeg";
type Props = {
  fullName: string;
  currentPosition: string;
  about: string;
  location: string;
};

const Terminal: FC<Props> = ({
  fullName,
  currentPosition,
  about,
  location,
}) => {
  const { word, isEnd } = useTypeWriter(currentPosition);
  return (
    <div className="md:bg-base-200 md:p-5 w-full">
      <div className="mockup-code">
        <ul className="space-y-2">
          <li className="ml-[2ch] flex items-center space-x-4">
            <code className="opacity-50">1</code>
            <h1
              className="font-bold text-2xl sm:text-3xl tracking-tight bg-gradient-to-r bg-clip-text text-transparent 
            from-accent to-secondary
            animate-text flex items-center gap-2"
            >
              <div className="avatar">
                <div className="mask mask-circle bg-base-content h-8 w-8 sm:w-10 sm:h-10 bg-opacity-10 p-px">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="mask mask-circle"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <span>{fullName}</span>
            </h1>
          </li>
          <li className={isEnd ? "bg-success text-success-content" : ""}>
            <div className="ml-[2ch] flex items-center space-x-4">
              <code className="opacity-50">2</code>
              <code className="sm:flex sm:items-center sm:h-7 ">
                <h2 className="sm:text-lg">{word}</h2>
              </code>
            </div>
          </li>

          <li className="ml-[2ch] flex space-x-4">
            <code className="opacity-50">3</code>
            <code className="w-full">{about}</code>
          </li>

          <li className="ml-[2ch] flex space-x-4">
            <code className="opacity-50">4</code>
            <code className="w-full">{location}</code>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Terminal;
