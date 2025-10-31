import React from 'react';
import imgImage79 from "figma:asset/8f43df88c9483526600418bd064fbdac409f5efc.png";
import imgImage78 from "figma:asset/d37b6de6c6306943cd9be37b8ccaab9ff5283f21.png";

export const OptimusBankPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#e8fff2] relative w-full h-full to-[#b6e1f0] overflow-hidden">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.06701461225748062)+(var(--transform-inner-height)*0.9977520108222961)))] items-center justify-center left-[-25.63px] top-[-448.3px] w-[calc(1px*((var(--transform-inner-height)*0.06701461225748062)+(var(--transform-inner-width)*0.9977520108222961)))]" style={{ "--transform-inner-width": "500", "--transform-inner-height": "1769" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.157deg]">
          <div className="h-[1769px] relative shadow-[0px_4px_20px_20px_rgba(0,0,0,0.3)] w-[500px]">
            <img alt="Optimus Bank Mobile Interface" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage79} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.06701461225748062)+(var(--transform-inner-height)*0.9977520108222961)))] items-center justify-center left-[319px] top-[67.39px] w-[calc(1px*((var(--transform-inner-height)*0.06701461225748062)+(var(--transform-inner-width)*0.9977520108222961)))]" style={{ "--transform-inner-width": "770.09375", "--transform-inner-height": "1092.46875" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.157deg]">
          <div className="h-[1092.48px] relative shadow-[0px_4px_20px_20px_rgba(0,0,0,0.3)] w-[770.106px]">
            <img alt="Optimus Bank Desktop Interface" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage78} />
          </div>
        </div>
      </div>
    </div>
  );
};
