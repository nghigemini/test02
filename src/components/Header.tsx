import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours24 = now.getHours();
      const hours12 = hours24 % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const period = hours24 >= 12 ? 'PM' : 'AM';
      setTime(`${String(hours12).padStart(2, '0')}:${minutes} ${period}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6" style={{ backgroundColor: 'transparent' }}>
      <div 
        className="flex items-center justify-between text-[13px]"
        style={{ color: '#000000' }}
      >
        <div className="flex-1">
          <span className="tracking-tight">Gia Nghi</span>
        </div>
        <nav className="flex-1 flex justify-center gap-8">
          <Link to="/" className="hover:opacity-60 transition-opacity">Work</Link>
          <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
        </nav>
        <div className="flex-1 flex justify-end">
          <span className="tracking-tight">{time}</span>
        </div>
      </div>
    </header>
  );
}