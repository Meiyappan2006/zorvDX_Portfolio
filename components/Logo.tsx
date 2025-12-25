import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-yellow-400 stroke-[8]">
      <rect x="20" y="20" width="60" height="60" rx="12" className="animate-[spin_4s_linear_infinite]" />
      <path d="M40 35 L60 35 L40 65 L60 65" className="stroke-white" />
    </svg>
  </div>
);

export default Logo;