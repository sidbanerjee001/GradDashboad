import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed: number;
  classes?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed, classes='' }) => {
  const [displayedText, setDisplayedText] = useState<string>("...");

  useEffect(() => {
    let index = 0;
    let t = "";
    const intervalId = setInterval(() => {
      t += text[index];
      setDisplayedText(t);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <>
      <span className={classes}>{displayedText}</span>
    </>
  );
};

export default TypingText;