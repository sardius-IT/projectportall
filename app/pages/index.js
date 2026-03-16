"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Test from '../home/Test';

/* -------------------------------------------------------
   AURORA BACKGROUND
-------------------------------------------------------- */
function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#050505]" />

      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/25 blur-[200px] rounded-full"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] bg-orange-400/20 blur-[180px] rounded-full"
        animate={{ x: [0, -40, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-purple-500/20 blur-[180px] rounded-full"
        animate={{ x: [0, 20, -20, 0], y: [0, -25, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
    </div>
  );
}


export default function Home() {
    return (
        <div>
            <Test></Test>

        </div>
    );
}