import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} id="logo-container">
      <img
        src={light ? '/images/excalibur-logo-bgremoved.png' : '/images/logo.png'}
        alt="Excalibur General Trading"
        className="w-auto h-14 object-contain"
        id="logo-img"
      />
      <span
        className={`font-poppins text-xs font-light tracking-[0.65em] mr-[-0.65em] mt-2 transition-colors duration-200 ${
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
