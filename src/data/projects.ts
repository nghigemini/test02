import image_3dfb979906da3d442ffe93c7477d107ec1bf7cad from 'figma:asset/3dfb979906da3d442ffe93c7477d107ec1bf7cad.png';
import image_bc497907d9b30901071c9ec1f0494e431d344187 from 'figma:asset/bc497907d9b30901071c9ec1f0494e431d344187.png';
import image_b1618ea134636e6628a12579d6cd4df04549d7e3 from 'figma:asset/b1618ea134636e6628a12579d6cd4df04549d7e3.png';
export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  role: string;
  client?: string;
  description: string;
  coverImage: string;
  images: {
    url: string;
    alt: string;
    layout: 'full' | 'half-left' | 'half-right';
  }[];
  colSpan: 3 | 4 | 5;
  startColumn: number;
  marginTop: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'minimal-workspace',
    title: 'Minimal Workspace',
    year: '2024',
    role: 'Art Direction, Design',
    client: 'Studio Inc.',
    description: 'A comprehensive study in minimalist workspace design, exploring the intersection of functionality and aesthetic restraint. This project examines how deliberate negative space and careful material selection can create environments that enhance focus and creativity.',
    coverImage: image_b1618ea134636e6628a12579d6cd4df04549d7e3,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1400',
        alt: 'Minimal workspace overview',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?w=800',
        alt: 'Workspace detail 1',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        alt: 'Workspace detail 2',
        layout: 'half-right',
      },
      {
        url: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=1400',
        alt: 'Workspace angle view',
        layout: 'full',
      },
    ],
    colSpan: 3,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 2,
    slug: 'minimalist-architecture',
    title: 'Minimalist Architecture',
    year: '2023',
    role: 'Photography, Curation',
    description: 'An exploration of brutalist and minimalist architectural forms. The project documents contemporary structures that challenge conventional design approaches through bold geometric statements and raw material honesty.',
    coverImage: image_bc497907d9b30901071c9ec1f0494e431d344187,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?w=1400',
        alt: 'Architecture exterior',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1759882609577-e78a307beed4?w=800',
        alt: 'Structural detail',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=800',
        alt: 'Interior perspective',
        layout: 'half-right',
      },
    ],
    colSpan: 4,
    startColumn: 8,
    marginTop: 'mt-32',
  },
  {
    id: 3,
    slug: 'design-work',
    title: 'Design Work',
    year: '2024',
    role: 'Creative Direction',
    client: 'Various',
    description: 'A collection of design explorations spanning digital and physical mediums. Each piece investigates the relationship between form, function, and user experience.',
    coverImage: 'figma:asset/5a839365e12e9c98349be177a71076352f6a1f41.png',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400',
        alt: 'Design exploration',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1684675105871-a8e178b35f70?w=800',
        alt: 'Design detail',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1752650735608-6895f65de119?w=800',
        alt: 'Typography study',
        layout: 'half-right',
      },
    ],
    colSpan: 4,
    startColumn: 2,
    marginTop: 'mt-0',
  },
  {
    id: 4,
    slug: 'brutalist-design',
    title: 'Brutalist Design',
    year: '2023',
    role: 'Design, Development',
    description: 'Digital experiences rooted in brutalist design principles. Raw, honest interfaces that prioritize content and functionality over decorative elements.',
    coverImage: image_3dfb979906da3d442ffe93c7477d107ec1bf7cad,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1759882609577-e78a307beed4?w=1400',
        alt: 'Brutalist interface',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1758557839522-7d6150265d39?w=800',
        alt: 'Typography detail',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1684675105871-a8e178b35f70?w=800',
        alt: 'Layout system',
        layout: 'half-right',
      },
    ],
    colSpan: 3,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 5,
    slug: 'abstract-sculpture',
    title: 'Abstract Sculpture',
    year: '2024',
    role: 'Art Direction',
    description: 'Three-dimensional forms that challenge perception and spatial understanding. This project explores how abstract sculptural elements can create dialogue between viewer and space.',
    coverImage: 'https://images.unsplash.com/photo-1758557839522-7d6150265d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3Njc3NDcyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1758557839522-7d6150265d39?w=1400',
        alt: 'Sculpture installation',
        layout: 'full',
      },
    ],
    colSpan: 3,
    startColumn: 9,
    marginTop: 'mt-20',
  },
  {
    id: 6,
    slug: 'modern-furniture',
    title: 'Modern Furniture',
    year: '2023',
    role: 'Product Design',
    client: 'Furniture Co.',
    description: 'Contemporary furniture pieces that balance comfort with sculptural presence. Each design prioritizes clean lines and timeless materiality.',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY3NzI4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400',
        alt: 'Furniture piece',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?w=800',
        alt: 'Detail shot',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800',
        alt: 'Context view',
        layout: 'half-right',
      },
    ],
    colSpan: 4,
    startColumn: 3,
    marginTop: 'mt-0',
  },
  {
    id: 7,
    slug: 'contemporary-art',
    title: 'Contemporary Art',
    year: '2024',
    role: 'Curation, Exhibition Design',
    description: 'A curated exhibition exploring themes of digital culture and human connection. The work bridges physical and digital realms through mixed media installations.',
    coverImage: 'https://images.unsplash.com/photo-1569091791842-7cfb64e04797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY3NzM5Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=1400',
        alt: 'Exhibition view',
        layout: 'full',
      },
    ],
    colSpan: 3,
    startColumn: 10,
    marginTop: 'mt-40',
  },
  {
    id: 8,
    slug: 'minimal-fashion',
    title: 'Minimal Fashion',
    year: '2023',
    role: 'Creative Direction, Photography',
    client: 'Fashion Brand',
    description: 'Editorial work for a contemporary fashion label focused on sustainable, minimalist design. The photography emphasizes form, texture, and intentional simplicity.',
    coverImage: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc3NjQ0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=1400',
        alt: 'Fashion editorial',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1711928341562-035c3c161a43?w=800',
        alt: 'Detail 1',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1752650735608-6895f65de119?w=800',
        alt: 'Detail 2',
        layout: 'half-right',
      },
    ],
    colSpan: 4,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 9,
    slug: 'graphic-design',
    title: 'Graphic Design',
    year: '2024',
    role: 'Graphic Design, Branding',
    description: 'Visual identity and graphic systems for various clients. Work spans print, digital, and environmental applications with a focus on typographic precision.',
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2NzY2NjcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400',
        alt: 'Graphic work',
        layout: 'full',
      },
    ],
    colSpan: 3,
    startColumn: 2,
    marginTop: 'mt-0',
  },
  {
    id: 10,
    slug: 'monochrome-photography',
    title: 'Monochrome Photography',
    year: '2023',
    role: 'Photography',
    description: 'A personal photographic study exploring contrast, light, and form through black and white imagery. The series documents urban landscapes and architectural details.',
    coverImage: 'https://images.unsplash.com/photo-1684675105871-a8e178b35f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3Nzc5OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1684675105871-a8e178b35f70?w=1400',
        alt: 'Monochrome image',
        layout: 'full',
      },
    ],
    colSpan: 4,
    startColumn: 8,
    marginTop: 'mt-24',
  },
  {
    id: 11,
    slug: 'editorial-layout',
    title: 'Editorial Layout',
    year: '2024',
    role: 'Editorial Design',
    client: 'Magazine Inc.',
    description: 'Layout design for a quarterly publication focused on design and culture. The work explores grid systems, typography, and visual pacing across print and digital formats.',
    coverImage: 'https://images.unsplash.com/photo-1752650735608-6895f65de119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBsYXlvdXR8ZW58MXx8fHwxNzY3NjkyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1752650735608-6895f65de119?w=1400',
        alt: 'Editorial spread',
        layout: 'full',
      },
    ],
    colSpan: 4,
    startColumn: 4,
    marginTop: 'mt-0',
  },
  {
    id: 12,
    slug: 'product-design',
    title: 'Product Design',
    year: '2023',
    role: 'Industrial Design',
    description: 'Industrial design work focusing on everyday objects reimagined through a lens of simplicity and functionality. Each product seeks to reduce complexity while enhancing user experience.',
    coverImage: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWdufGVufDF8fHx8MTc2Nzc2NjY5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?w=1400',
        alt: 'Product view',
        layout: 'full',
      },
    ],
    colSpan: 3,
    startColumn: 1,
    marginTop: 'mt-0',
  },
  {
    id: 13,
    slug: 'conceptual-art',
    title: 'Conceptual Art',
    year: '2024',
    role: 'Conceptual Art, Installation',
    description: 'Installation work exploring themes of perception, memory, and digital consciousness. The pieces create immersive environments that blur boundaries between physical and virtual space.',
    coverImage: 'https://images.unsplash.com/photo-1711928341562-035c3c161a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0dWFsJTIwYXJ0fGVufDF8fHx8MTc2Nzc2ODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1711928341562-035c3c161a43?w=1400',
        alt: 'Installation view',
        layout: 'full',
      },
      {
        url: 'https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=800',
        alt: 'Detail perspective',
        layout: 'half-left',
      },
      {
        url: 'https://images.unsplash.com/photo-1758557839522-7d6150265d39?w=800',
        alt: 'Interactive element',
        layout: 'half-right',
      },
    ],
    colSpan: 4,
    startColumn: 8,
    marginTop: 'mt-28',
  },
];
