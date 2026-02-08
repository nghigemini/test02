import { useEffect, useState, useRef } from 'react';

export function CustomCursor({ disableHover = false }: { disableHover?: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over images or portfolio items
      if (target.tagName === 'IMG' || target.closest('.portfolio-item')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth follow effect with inertia
  useEffect(() => {
    const animate = () => {
      setCursorPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] flex items-center justify-center"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        width: isHovering && !disableHover ? '60px' : '12px',
        height: isHovering && !disableHover ? '60px' : '12px',
        transition: 'width 0.3s ease-out, height 0.3s ease-out',
        willChange: 'transform',
      }}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center"
        style={{
          backgroundColor: isHovering && !disableHover ? '#ffffff' : '#000000',
          transition: 'background-color 0.3s ease-out',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isHovering && !disableHover && (
          <span
            style={{
              color: '#000000',
              fontSize: '13px',
              fontWeight: 400,
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              letterSpacing: '0.014em',
              transition: 'opacity 0.3s ease-out',
            }}
          >
            view
          </span>
        )}
      </div>
    </div>
  );
}