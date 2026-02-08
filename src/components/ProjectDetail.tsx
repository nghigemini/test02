import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ChevronLeft } from 'lucide-react';
import { CustomCursor } from './CustomCursor';
import { Header } from './Header';
import { Footer } from './Footer';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#ffffff] flex items-center justify-center font-['Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif] text-[13px]">
        <CustomCursor disableHover={true} />
        <div className="text-center">
          <h1 className="text-[13px] mb-4">Project not found</h1>
          <Link 
            to="/" 
            className="text-[13px] underline hover:no-underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

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
          <div className="flex-1 pr-4 md:pr-8 lg:pr-12 pb-32">
            {/* Project header */}
            <div className="mb-16 md:mb-20">
              <h1 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] mb-8 md:mb-10">
                {project.title}
              </h1>

              <p className="text-[15px] leading-[1.6] max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Project images with proper layout handling */}
            <div className="space-y-10 md:space-y-16">
              {project.images.map((image, index) => {
                // Check if next image exists and current layout is half-left
                const nextImage = project.images[index + 1];
                const shouldRenderDouble = 
                  image.layout === 'half-left' && 
                  nextImage && 
                  nextImage.layout === 'half-right';

                // Skip rendering if this is half-right following a half-left (already rendered)
                if (image.layout === 'half-right' && 
                    index > 0 && 
                    project.images[index - 1].layout === 'half-left') {
                  return null;
                }

                if (image.layout === 'full') {
                  return (
                    <div key={index} className="w-full">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-auto"
                      />
                    </div>
                  );
                }

                if (shouldRenderDouble && nextImage) {
                  return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-auto"
                      />
                      <img
                        src={nextImage.url}
                        alt={nextImage.alt}
                        className="w-full h-auto"
                      />
                    </div>
                  );
                }

                if (image.layout === 'half-left') {
                  return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-auto"
                      />
                      <div></div>
                    </div>
                  );
                }

                if (image.layout === 'half-right') {
                  return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div></div>
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-auto"
                      />
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Navigation */}
            <div className="mt-32 pt-12">
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-[13px] hover:opacity-60 transition-opacity"
              >
                <ChevronLeft size={16} />
                Back to all projects
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}