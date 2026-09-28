"use client";

import { motion } from "framer-motion";

const textRevealVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const characterRevealVariants = {
  hidden: {
    opacity: 0,
    y: "0.7em",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function characters(text: string) {
  return Array.from(text).map((character, index) => (
    <motion.span
      key={`${character}-${index}`}
      variants={characterRevealVariants}
      className="about-preview__character inline-block"
    >
      {character === " " ? "\u00A0" : character}
    </motion.span>
  ));
}

type RevealTextProps = {
  children: string;
  className?: string;
};

/** Per-character staggered reveal on a single line. */
export function RevealLine({ children, className = "" }: RevealTextProps) {
  return (
    <motion.span
      variants={textRevealVariants}
      className={`about-preview__line !ml-0 !pl-0 block w-full text-left ${className}`}
    >
      {characters(children)}
    </motion.span>
  );
}

/** Per-character staggered reveal that flows inline with its siblings. */
export function RevealInline({ children, className = "" }: RevealTextProps) {
  return (
    <motion.span variants={textRevealVariants} className={className}>
      {characters(children)}
    </motion.span>
  );
}

export const textRevealContainerVariants = textRevealVariants;
