'use client'

import NavBar from '@/app/Components/NavBar'
import MainButton from '@/app/Components/UI/MainButton'
import TypingText from '../Components/TypingText'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

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
