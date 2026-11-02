import React from 'react';
import { VerifiedBadge } from './VerifiedBadge';
import { Wifi, Battery, Signal, ArrowLeft, MoreVertical } from 'lucide-react';

interface MobileSimulatorFrameProps {
  children: React.ReactNode;
  activeTabName: string;
  onOpenCheckout: () => void;
}

export const MobileSimulatorFrame: React.FC<MobileSimulatorFrameProps> = ({
  children,
  activeTabName,
  onOpenCheckout,
}) => {
  return (
    <div className="py-6 sm:py-10 flex flex-col items-center justify-center">
      {/* Device Header Tag */}
      <div className="mb-4 text-center">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
          Simulated Mobile OS Viewport (390 × 844 px)
        </span>
      </div>

      {/* iPhone-style Hardware Mock Frame */}
      <div className="w-[390px] h-[820px] bg-black rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(15,20,28,0.35)] ring-1 ring-slate-800 flex flex-col relative overflow-hidden">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
          <div className="w-3 h-3 rounded-full bg-blue-900/40 border border-blue-500/20" />
        </div>

        {/* Screen Bezel Container */}
        <div className="w-full h-full bg-[#F5F7FB] rounded-[38px] overflow-hidden flex flex-col relative">
          
          {/* Mobile OS Status Bar */}
          <div className="h-10 pt-2 px-6 flex items-center justify-between text-[11px] font-bold text-[#0F141C] flex-shrink-0 z-40 bg-white/70 backdrop-blur-md">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 text-[#0F141C]" />
              <Wifi className="w-3 h-3 text-[#0F141C]" />
              <Battery className="w-4 h-4 text-[#0F141C]" />
            </div>
          </div>

          {/* Mobile Header Bar */}
          <div className="px-4 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between flex-shrink-0 z-30">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#0064E0] to-[#6C27FF] text-white flex items-center justify-center text-[10px] font-black">
                W1
              </div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-xs text-[#0F141C]">Wistab One</span>
                <VerifiedBadge size="xs" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#0064E0] bg-blue-50 px-2 py-0.5 rounded-full">
              {activeTabName}
            </span>
          </div>

          {/* Scrollable Screen Body with edge bleed */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3.5 space-y-4 pb-20 no-scrollbar">
            {children}
          </div>

          {/* Sticky Full-Width Mobile Action Bar (From the design doc: Fixed-height 52px full-bleed touch target) */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 z-40">
            <button
              type="button"
              onClick={onOpenCheckout}
              className="w-full h-[50px] rounded-full bg-gradient-to-r from-[#0064E0] via-[#4D32FF] to-[#6C27FF] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 active:scale-98 transition-all cursor-pointer"
            >
              <span>Get Started with Advanced Tier</span>
              <VerifiedBadge size="xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
