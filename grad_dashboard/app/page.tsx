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

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="m-auto w-7/12 mt-5">
        <NavBar/>
        <div id="hero" className="mt-[150px]">
          <TypingText text="Create meaningful connections with alumni." speed={15} classes="text-5xl" />
          <h2 className="text-xl mt-[40px] text-subtext font-normal">Follow in the footsteps of your institution’s alumni. Expand your network, gain professional insight, and develop your career goal—all with the help of voluntary mentors.</h2>
            <div>
              <MainButton on_click={() => router.push('/schools')} _classes="mt-[40px] mr-10 w-[200px]" text="Find Your School"/>
              <MainButton on_click={() => router.push('/login')} _classes="mt-[40px] w-[200px]" text="Login"/>
            </div>

          <hr className="mt-[100px] h-[2px] bg-black"/>

          <div className="mt-[100px] w-[95%] m-auto">

              <motion.div
                    initial={{ y: 75, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
              <div className="mb-10">
                <h1 className="text-lg">→ Vetted Mentorship</h1>
                <p className="text-subtext text-sm mt-3">Mentors register to be listed as contacts, meaning they are willing to speak to students about their experiences. No more combing through LinkedIn to connect with alumni.</p>
              </div>
            </motion.div>

            <motion.div
                    initial={{ y: 75, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.6,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
            <div className="mb-10">
              <h1 className="text-lg">→ Bidirectional Communication</h1>
              <p className="text-subtext text-sm mt-3">Alumni tag their profiles with their major/minor, field(s) of interest, and anything else they’re interested in talking about. Students can connect with the right person based on their needs.</p>
            </div>
            </motion.div>

            <motion.div
                    initial={{ y: 75, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.7,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
            <div className="mb-10">
              <h1 className="text-lg">→ Spam-Free Experience</h1>
              <p className="text-subtext text-sm mt-3">We take preventative measures against bot activity to foster real, human connections. Archive your profile from the site at any time to take a break, and return right where you left off.</p>
            </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  )
}
