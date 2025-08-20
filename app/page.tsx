import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import StackIcon from 'tech-stack-icons';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const config = {
  name: 'Anderson Lima',
  headerLogo: '/assets/logo.png',
  landingPhoto: '/assets/eu.png',
  title: 'Software Engineer / Sistemas de Informação',
  location: 'União dos Palmares | AL',
  about: `
Com mais de 10 anos de experiência em tecnologia da informação (TI), iniciei minha carreira atuando como 
analista de suporte técnico, designer gráfico e web designer, adquirindo uma visão completa da experiência 
do usuário (UX) e da interface (UI), além do impacto das soluções digitais nos objetivos de negócio.

Após explorar diferentes áreas da TI, especializei-me em desenvolvimento front-end, com foco na criação de 
interfaces modernas, responsivas, performáticas e acessíveis. Experiência sólida com React.js, Next.js, 
TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS e Docker.

Minha bagagem anterior como designer garante atenção à usabilidade, acessibilidade digital (A11Y), 
design responsivo e melhores práticas de UI/UX. Base técnica permite atuar com APIs REST/GraphQL, 
componentização, Git/GitHub e arquitetura escalável em ambientes ágeis (Scrum/Kanban).

Atualmente, crio aplicações web escaláveis e intuitivas, gerando valor para usuários e negócios, com foco em 
clean code, componentes reutilizáveis, testes automatizados e evolução contínua.
`,
  aboutPhoto: '/assets/profile-bg.png',
  heroTofuEndpoint: 'https://public.herotofu.com/v1/8a20de80-e812-11ef-91ab-497918027bf8',
  socialLinks: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/AndersonLima12' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/anderson-nunes-developer/' },
    { name: 'Email', icon: Mail, url: 'mailto:anderson.developer23@gmail.com' },
  ],
  skills: [
    { name: 'React', icon: 'reactjs', color: '#61DAFB' },
    { name: 'Node.js', icon: 'nodejs', color: '#339933' },
    { name: 'JavaScript ES6+', icon: 'js', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'Python', icon: 'python', color: '#3776AB' },
    { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
    { name: 'Docker', icon: 'docker', color: '#2496ED' },
    { name: 'HTML5', icon: 'html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'css3', color: '#1572B6' },
    { name: 'Shadcn', icon: 'shadcnui', color: '#000000' },
    { name: 'VSCode', icon: 'vscode', color: '#007ACC' },
    { name: 'Next.js', icon: 'nextjs2', color: '#000000' },
    { name: 'Bootstrap 5', icon: 'bootstrap5', color: '#7952B3' },
    { name: 'Brave', icon: 'brave', color: '#FB542B' },
    { name: 'Figma', icon: 'figma', color: '#F24E1E' },
    { name: 'Git', icon: 'git', color: '#F05032' },
    { name: 'GitHub', icon: 'github', color: '#181717' },
    { name: 'Insomnia', icon: 'insomnia', color: '#4000BF' },
    { name: 'Linux', icon: 'linux', color: '#FCC624' },
    { name: 'Json', icon: 'json', color: '#050038' },
    { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
    { name: 'Supabase', icon: 'supabase', color: '#3ECF8E' },
    { name: 'Zod', icon: 'zod', color: '#3E67B1' },
  ],

  experiences: [
    {
      image: '/assets/empresa.png',
      company: 'Marka System',
      position: 'Frontend Engineer',
      period: 'Fev 2018 - Presente',
      description:
        'Atualmente, atuo como Desenvolvedor de Software, sendo responsável pelo desenvolvimento de sistemas web completos, do front-end ao back-end. Entrego soluções robustas e escaláveis que apoiam diretamente as operações e estratégias digitais da empresa.',
    },
    {
      image: '/assets/estacio.jpg',
      company: 'Estácio de Sá',
      position: 'Graduado | Sistemas de informação',
      period: 'Jul 2019 - Jun 2024',
      description: `Graduação em Sistemas de Informação com ênfase em programação, 
bancos de dados, engenharia de software, infraestrutura e metodologias ágeis.`,
    },
    {
      image: '/assets/b7web.jpg',
      company: 'B7Web',
      position: 'Curso Desenvolvimento Full-Stack',
      period: 'Jan 2019 - Jun 2019',
      description: 'Curso voltado a stack de javascript e node, para desenvolvimento full-stack.',
    },
  ],
  projects: [
    {
      name: 'SwagSticker.com',
      description: 'Full-stack E-commerce store for developer laptop stickers.',
      image: '/assets/swagsticker-thumbnail.webp',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'Printify'],
      link: 'https://github.com/spencerlepine/swagsticker.com',
    },
    {
      name: 'Printify Node.js SDK',
      description: 'Open-source TypeScript SDK for the Printify REST API (npm package)',
      image: '/assets/printify-sdk-js-thumbnail.webp',
      technologies: ['TypeScript', 'Node.js', 'REST API', 'JavaScript'],
      link: 'https://github.com/spencerlepine/printify-sdk-js',
    },
    {
      name: 'QuickCart',
      description: 'Cloud-based grocery shopping list app with product search, barcode scanning, and nutrition tracking.',
      image: '/assets/quickcart-thumbnail.webp',
      technologies: ['React', 'Firebase', 'Firestore NoSQL', 'Material-UI', 'Heroku'],
      link: 'https://github.com/spencerlepine/quickcart',
    },
  ],
};

// ---------- COMPONENTS ----------
function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-20">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image src={config.headerLogo} alt={config.name} width={50} height={50} />
        </Link>
        <ul className="flex gap-6 font-medium">
          <li>
            <Link href="#about" className="hover:text-blue-600 transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:text-blue-600 transition">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Profile() {
  return (
    <section className="text-center py-12">
      <Image src={config.landingPhoto} alt={config.name} width={180} height={180} className="rounded-full mx-auto shadow-lg" />
      <h1 className="text-4xl font-bold mt-4">{config.name}</h1>
      <p className="text-xl text-gray-700">{config.title}</p>
      <p className="text-gray-500 mt-1">{config.location}</p>
      <div className="flex justify-center gap-6 mt-4">
        {config.socialLinks.map(link => (
          <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <link.icon className="w-6 h-6 text-gray-700 hover:text-blue-600" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {config.skills.map(skill => (
          <div key={skill.name} className="flex items-center gap-2 bg-gray-100 p-3 rounded-full shadow-sm hover:shadow-lg transition">
            <StackIcon name={skill.icon} className="w-6 h-6" />
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12">
      {/* Título acima do conteúdo */}
      <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Sobre Mim</h2>

      {/* Conteúdo flexível: texto e imagem lado a lado */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          {config.about.split('\n\n').map((p, i) => (
            <p key={i} className="mb-4 text-gray-700">
              {p.trim()}
            </p>
          ))}
        </div>
        <div className="md:w-1/3">
          <Image src={config.aboutPhoto} alt="About me" width={350} height={350} className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Experiências</h2>
      <div className="space-y-8">
        {config.experiences.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <Image src={exp.image} alt={exp.company} width={80} height={80} className="rounded-full shadow-sm" />
            <div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-blue-600 font-medium">{exp.position}</p>
              <p className="text-gray-500 text-sm">{exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Projetos</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {config.projects.map((proj, i) => (
          <Card key={i} className="shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <Image src={proj.image} alt={proj.name} width={600} height={400} className="w-full h-56 object-cover md:h-64 rounded-t-lg" />
              <div className="p-4">
                <CardTitle className="text-lg font-semibold">{proj.name}</CardTitle>
                <CardDescription className="text-gray-700 line-clamp-2 mt-1">{proj.description}</CardDescription>

                {/* Botão para abrir dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Saiba mais</button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{proj.name}</DialogTitle>
                      <DialogDescription>{proj.description}</DialogDescription>
                    </DialogHeader>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Tecnologias:</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">UX/UI Design:</h4>
                      <p className="text-gray-700">
                        Este projeto foi desenhado com foco em experiência do usuário, acessibilidade e design responsivo, garantindo uma interface intuitiva e agradável.
                      </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Abrir Projeto
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl text-center font-bold mb-6">Entre em contato</h2>
      <form action={config.heroTofuEndpoint} method="post" className="grid gap-4 max-w-lg mx-auto">
        <input type="text" name="name" placeholder="Nome completo" className="border rounded px-3 py-2" required />
        <input type="email" name="email" placeholder="Seu e-mail" className="border rounded px-3 py-2" required />
        <textarea name="message" rows={4} placeholder="Sua mensagem" className="border rounded px-3 py-2" required></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          {config.socialLinks.map(link => (
            <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500">© 2025 {config.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// ---------- LANDING PAGE ----------
export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <Profile />
        <Skills />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
