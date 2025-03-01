"use client";

import { useState } from 'react';
import Image from "next/image"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/music.mpeg')); 

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Image at the top */}
      <div className="mb-6">
        <Image 
          src="/musicImage.jpg"  
          alt="Music Cover"
          width={600}
          height={400}
          className=" rounded-lg shadow-xl"
        />
      </div>

      <h1 className="text-4xl font-bold text-blue-600 mb-6">Music Player</h1>

      <div className="flex flex-col items-center justify-center">
        <button
          onClick={togglePlayPause}
          className="px-6 py-3 bg-blue-600 text-white text-xl rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
