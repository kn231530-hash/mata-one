import React from 'react';

interface VerifiedBadgeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTooltip?: boolean;
  tooltipText?: string;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({
  size = 'md',
  className = '',
  showTooltip = false,
  tooltipText = 'Meta & Wistab One Verified Business',
}) => {
  const sizeMap = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const badgeContent = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} inline-block flex-shrink-0 ${className} drop-shadow-[0_2px_4px_rgba(0,100,224,0.3)] transition-transform hover:scale-105`}
      aria-label="Verified Badge"
    >
      {/* 16-point scalloped circle rosette geometry identical to Meta Verified */}
      <path
        d="M10.29 2.21a2.4 2.4 0 0 1 3.42 0l.94.94a2.4 2.4 0 0 0 1.7.7l1.33.05a2.4 2.4 0 0 1 2.37 2.37l.05 1.33a2.4 2.4 0 0 0 .7 1.7l.94.94a2.4 2.4 0 0 1 0 3.42l-.94.94a2.4 2.4 0 0 0-.7 1.7l-.05 1.33a2.4 2.4 0 0 1-2.37 2.37l-1.33.05a2.4 2.4 0 0 0-1.7.7l-.94.94a2.4 2.4 0 0 1-3.42 0l-.94-.94a2.4 2.4 0 0 0-1.7-.7l-1.33-.05a2.4 2.4 0 0 1-2.37-2.37l-.05-1.33a2.4 2.4 0 0 0-.7-1.7l-.94-.94a2.4 2.4 0 0 1 0-3.42l.94-.94a2.4 2.4 0 0 0 .7-1.7l.05-1.33a2.4 2.4 0 0 1 2.37-2.37l1.33-.05a2.4 2.4 0 0 0 1.7-.7l.94-.94Z"
        fill="url(#meta-verified-grad)"
      />
      <path
        d="m8.5 12.2 2.5 2.5 5-5"
        stroke="#FFFFFF"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="meta-verified-grad"
          x1="2"
          y1="2"
          x2="22"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0064E0" />
          <stop offset="1" stopColor="#004DB0" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (showTooltip) {
    return (
      <span className="relative group inline-flex items-center cursor-pointer">
        {badgeContent}
        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-2.5 py-1 bg-[#0F141C] text-white text-[11px] font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
          {tooltipText}
        </span>
      </span>
    );
  }

  return badgeContent;
};
