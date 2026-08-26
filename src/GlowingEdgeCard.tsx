import React, { useRef } from 'react';

interface GlowingEdgeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlowingEdgeCard: React.FC<GlowingEdgeCardProps> = ({
  children,
  className = '',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`relative w-full flex flex-col rounded-[1.75em] bg-[#121212] border border-[#efeee9]/15 hover:border-transparent transition-colors duration-300 shadow-xl overflow-hidden group ${className}`}
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
      {...props}
    >
      {/* Blue Ambient Inner Glow Follower */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(79, 209, 197, 0.12), rgba(0, 168, 255, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Blue Pointer-Tracking Glowing Border Edge */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), #4fd1c5 0%, #00a8ff 50%, transparent 100%)`,
          WebkitMask: `linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)`,
          WebkitMaskComposite: `xor`,
          maskComposite: `exclude`,
          padding: '1px',
        }}
      />

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowingEdgeCard;