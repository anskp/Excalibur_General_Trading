import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} id="logo-container">
      {/* Abstract Silver EX emblem based on the uploaded image */}
      <svg 
        viewBox="0 0 320 180" 
        className="w-auto h-12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        id="logo-svg"
      >
        <defs>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E0E4EC" />
            <stop offset="70%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>
          <linearGradient id="blueAccentGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.30" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* Stylized 'EX' symbol inspired by uploaded design */}
          {/* Main outer ring part of the 'E' */}
          <path 
            d="M 125 45 L 60 45 C 32 45 20 62 20 90 C 20 118 32 135 60 135 L 125 135 C 150 135 158 122 158 111 C 158 106 154 102 149 102 L 124 102 C 122 102 121 103 120 105 L 115 112 C 109 119 98 122 84 122 L 64 122 C 50 122 39 114 39 90 C 39 66 50 58 64 58 L 122 58 C 123 58 124 59 125 61 L 132 75 C 134 80 139 81 144 81 L 149 81 C 154 81 158 77 158 72 C 158 58 145 45 125 45 Z" 
            fill="url(#silverGradient)" 
          />
          {/* Horizontal middle dash of the 'E' */}
          <rect 
            x="64" 
            y="81" 
            width="55" 
            height="18" 
            rx="5"
            fill="url(#silverGradient)" 
          />
          {/* Stylized 'X' that merges with 'E' */}
          <path 
            d="M 152 45 L 195 45 C 205 45 212 50 216 57 L 235 90 L 254 57 C 258 50 265 45 275 45 L 300 45 C 308 45 312 51 308 58 L 265 126 C 261 132 254 135 246 135 L 222 135 C 213 135 208 130 212 124 L 253 62 L 235 62 L 190 125 C 185 132 178 135 170 135 L 146 135 C 138 135 134 129 138 123 L 180 62 L 158 62 C 150 62 144 57 141 51 L 138 45 Z" 
            fill="url(#silverGradient)" 
          />
          {/* The interlocking crossing leg of the 'X' */}
          <path 
            d="M 197 135 L 175 135 C 168 135 164 129 168 123 L 202 75 L 223 105 L 197 135 Z" 
            fill="url(#blueAccentGradient)" 
          />
          <path 
            d="M 245 74 L 268 45 C 272 40 279 45 275 51 L 246 92 L 225 62 L 245 74 Z" 
            fill="url(#blueAccentGradient)" 
          />
          <path 
            d="M 242 101 L 280 126 C 288 131 298 135 306 135 L 285 135 C 277 135 270 130 266 124 L 242 101 Z" 
            fill="url(#silverGradient)" 
          />
        </g>
      </svg>
      {/* Tracking-widest uppercase modern brand text */}
      <span 
        className={`font-poppins text-xs font-light tracking-[0.65em] mr-[-0.65em] mt-1 transition-colors duration-200 ${
          light ? 'text-[#DFE3EA]' : 'text-[#1D2636]'
        }`}
        id="logo-text"
      >
        EXCALIBUR
      </span>
      <span 
        className={`font-sans tracking-[0.2em] mr-[-0.2em] transition-colors duration-200 ${
          light ? 'text-[#0EA5E9]' : 'text-[#0284C7]'
        } text-[8px] font-medium uppercase mt-0.5`}
        id="logo-subtext"
      >
        General Trading
      </span>
    </div>
  );
}
