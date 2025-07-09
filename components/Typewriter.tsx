"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

export default function Typewriter({ text, speed = 50 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0); // reset when text changes
    const chars = Array.from(text);

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < chars.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-md sm:text-lg max-w-sm font-bold font-satisfy text-pink-600 text-center px-4 whitespace-pre-wrap">
      {text.slice(0, index)}
      <span className="inline-block  w-2 h-5 bg-pink-500 ml-1 animate-blink" />
    </p>
  );
}
