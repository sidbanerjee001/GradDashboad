'use client'

import NavBar from '@/app/Components/NavBar'
import MainButton from '@/app/Components/UI/MainButton'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

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

export default function Schools() {
  return (
    <>
      <div className="m-auto w-7/12 mt-5">
        <NavBar/>
        <div id="hero" className="mt-[150px]">
            <TypingText text="Browse registered schools." speed={15} classes="text-5xl" />
            <hr className="mt-[100px] h-[2px] bg-black"/>
        </div>
      </div>
    </>
  )
}
