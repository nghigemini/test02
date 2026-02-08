export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-8 md:px-12 py-6" style={{ backgroundColor: 'transparent' }}>
      <div 
        className="flex items-center justify-between text-[13px]"
        style={{ color: '#000000' }}
      >
        <div className="flex-1">
          <span className="tracking-tight">© 2026 GiaNghi</span>
        </div>
        <nav className="flex-1 flex justify-center gap-8">
          <a 
            href="#" 
            className="hover:opacity-60 transition-opacity"
            aria-label="LinkedIn"
          >
            Linkedin
          </a>
          <a 
            href="#" 
            className="hover:opacity-60 transition-opacity"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a 
            href="#" 
            className="hover:opacity-60 transition-opacity"
            aria-label="Dribbble"
          >
            Dribbble
          </a>
          <a 
            href="#" 
            className="hover:opacity-60 transition-opacity"
            aria-label="Email"
          >
            Email
          </a>
        </nav>
        <div className="flex-1"></div>
      </div>
    </footer>
  );
}