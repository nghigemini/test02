import image_b64f50dc7f662240705f7d4444cb0e39b9b41ac1 from 'figma:asset/b64f50dc7f662240705f7d4444cb0e39b9b41ac1.png';
import image_9148133a561de9da861ef8ca88a6416b96c17aff from 'figma:asset/9148133a561de9da861ef8ca88a6416b96c17aff.png';
import image_a2a8fa79b75282a64324078df5dd0718068c72be from 'figma:asset/a2a8fa79b75282a64324078df5dd0718068c72be.png';
import image_9df4df8f37d6db656cddf548e76c4865863662a7 from 'figma:asset/9df4df8f37d6db656cddf548e76c4865863662a7.png';
import exampleImage from 'figma:asset/5a839365e12e9c98349be177a71076352f6a1f41.png';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
  colSpan: 3 | 4 | 5;
  startColumn: number;
  marginTop: string;
}

const portfolioItems: PortfolioItem[] = [
  // Row 1
  {
    id: 1,
    image: image_9148133a561de9da861ef8ca88a6416b96c17aff,
    alt: 'Minimal Workspace',
    colSpan: 3,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NzcwMjIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Minimalist Architecture',
    colSpan: 4,
    startColumn: 8,
    marginTop: 'mt-32',
  },
  
  // Row 2
  {
    id: 3,
    image: exampleImage,
    alt: 'Design Work',
    colSpan: 4,
    startColumn: 2,
    marginTop: 'mt-0',
  },
  
  // Row 3
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1759882609577-e78a307beed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBkZXNpZ258ZW58MXx8fHwxNzY3Nzc5OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Brutalist Design',
    colSpan: 3,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1758557839522-7d6150265d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3Njc3NDcyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Abstract Sculpture',
    colSpan: 3,
    startColumn: 9,
    marginTop: 'mt-20',
  },
  
  // Row 4
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY3NzI4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Modern Furniture',
    colSpan: 4,
    startColumn: 3,
    marginTop: 'mt-0',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1569091791842-7cfb64e04797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY3NzM5Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Contemporary Art',
    colSpan: 3,
    startColumn: 10,
    marginTop: 'mt-40',
  },
  
  // Row 5
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc3NjQ0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Minimal Fashion',
    colSpan: 4,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  
  // Row 6
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NzY2NjcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Graphic Design',
    colSpan: 3,
    startColumn: 2,
    marginTop: 'mt-0',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1684675105871-a8e178b35f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3Nzc5OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Monochrome Photography',
    colSpan: 4,
    startColumn: 8,
    marginTop: 'mt-24',
  },
  
  // Row 7
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1752650735608-6895f65de119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBsYXlvdXR8ZW58MXx8fHwxNzY3NjkyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Editorial Layout',
    colSpan: 4,
    startColumn: 4,
    marginTop: 'mt-0',
  },
  
  // Row 8
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWdufGVufDF8fHx8MTc2Nzc2NjY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Product Design',
    colSpan: 3,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1711928341562-035c3c161a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0dWFsJTIwYXJ0fGVufDF8fHx8MTc2Nzc2ODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Conceptual Art',
    colSpan: 4,
    startColumn: 8,
    marginTop: 'mt-28',
  },
];

const getColStartClass = (col: number) => {
  const classes: { [key: number]: string } = {
    1: 'col-start-1',
    2: 'col-start-2',
    3: 'col-start-3',
    4: 'col-start-4',
    5: 'col-start-5',
    6: 'col-start-6',
    7: 'col-start-7',
    8: 'col-start-8',
    9: 'col-start-9',
    10: 'col-start-10',
    11: 'col-start-11',
    12: 'col-start-12',
  };
  return classes[col] || 'col-start-1';
};

const getColSpanClass = (span: 3 | 4 | 5) => {
  const classes = {
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
  };
  return classes[span];
};

export function PortfolioGrid() {
  return (
    <div className="px-8 md:px-12 py-32 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-y-32">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.slug}`}
            className={`
              ${getColSpanClass(project.colSpan)}
              ${getColStartClass(project.startColumn)}
              ${project.marginTop}
              md:block
            `}
          >
            <div className="group cursor-pointer portfolio-item">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}