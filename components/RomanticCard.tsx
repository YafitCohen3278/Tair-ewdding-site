"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function RomanticCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl bg-white/65 p-8 shadow-[0_8px_32px_rgba(43,27,75,0.12)] backdrop-blur-xl border border-[#7c3aed]/25 hover:border-[#d4af37]/80 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] transition-all duration-500 ${className}`}
    >
      <div className="absolute -inset-1 bg-gradient-to-br from-[#7dd3fc]/25 via-[#a78bfa]/15 to-[#ec4899]/15 blur-2xl -z-10" />
      {children}
    </motion.div>
  );
}
