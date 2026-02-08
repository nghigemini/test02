import { Header } from './Header';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';

export function About() {
  return (
    <div className="min-h-screen bg-[#ffffff] font-['Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif] text-[13px] antialiased p-2">
      <CustomCursor disableHover={true} />
      <Header />
      
      <main className="pt-24 pb-24">
        <div className="flex">
          {/* Left narrow column - visual margin */}
          <div className="w-[60px] md:w-[240px] lg:w-[320px] flex-shrink-0">
            {/* Empty space for visual margin */}
          </div>

          {/* Right content area */}
          <div className="flex-1 pr-4 md:pr-8 lg:pr-12 pb-32 max-w-3xl">
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] mb-12 md:mb-16">
              About
            </h1>

            <div className="space-y-8 text-[15px] leading-[1.6]">
              <p>
                Gia Nghi is a multidisciplinary designer based in [Location], specializing in 
                digital product design, art direction, and brand identity.
              </p>

              <p>
                With a focus on minimalist aesthetics and thoughtful user experiences, 
                I create work that balances form and function.
              </p>

              <p>
                Currently available for select freelance projects and collaborations.
              </p>

              <div className="pt-8 border-t border-black/10 mt-12">
                <h2 className="text-[13px] opacity-40 mb-4">Contact</h2>
                <p>
                  <a 
                    href="mailto:hello@gianghi.com" 
                    className="hover:opacity-60 transition-opacity"
                  >
                    hello@gianghi.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
