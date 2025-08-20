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
      position: 'Frontend Engineer Sênior',
      period: 'Fev 2018 - Presente',
      description:
        'Atualmente, atuo como Desenvolvedor de Software, sendo responsável pelo desenvolvimento de sistemas web completos, do front-end ao back-end. Entrego soluções robustas e escaláveis que apoiam diretamente as operações e estratégias digitais da empresa.',
    },
  ],
  studies: [
    {
      image: '/assets/anhanguera.jpg',
      company: 'Anhanguera',
      position: ' Pós Graduação | Arquitetura de Soluções',
      period: 'Jun 2025 - Presente',
      description: `obter uma visão sobre a arquitetura de soluções e suas perspectivas e sobre 
      como ela fornece uma base sólida para construção de uma boa estratégia de TI alinhada ao negócio.`,
    },
    {
      image: '/assets/fiap.webp',
      company: 'FIAP',
      position: 'Offensive Cyber Security',
      period: 'Fev 2025 - Presente',
      description: `atuar com excelência como especialistas em Segurança da Informação e Segurança 
      Cibernética, dominando todas as skills necessárias para encontrar vulnerabilidades no ambiente tecnológico das empresas.`,
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
      name: 'Guia de Perguntas',
      description:
        'Guia Perguntas é um projeto com o objetivo de criar e responder perguntas, foi um projeto criado para aprendizado pessoal na linguagem javascript usando Node.js. Este é um projeto 100% responsivo.',
      image: '/assets/GuiaPerguntas.gif',
      technologies: ['HTML5', 'CSS3', 'Javascript', 'NodeJs', 'Bootstrap', 'PostgreSql'],
      link: 'https://github.com/AndersonLima12/GuiaPergunta',
    },
    {
      name: 'NLW-eSports',
      description:
        'NLW-eSports é um projeto com o objetivo de encontrar parceiros(as) de gaming para jogar juntos o seu game preferido em comum, trazendo melhor experiência para quem é um apaixonado por jogos. Aplicação é web mobile com integração com o banco de dados.',
      image: '/assets/nlw.png',
      technologies: ['HTML5', 'CSS3', 'Javascript', 'React', 'TypeScript', 'SQLite'],
      link: 'https://github.com/AndersonLima12/NLW-eSports/tree/master',
    },
    {
      name: 'Automação Python',
      description:
        'Projeto de automação desenvolvido em python utilizando selenium. O projeto foi proposto como teste onde o objetivo é abrir o site da amazon, pesquisar por iphone, pegar os resultados da primeira página (nome e preço) e criar uma planilha Excel com esses dados.',
      image: '/assets/python.gif',
      technologies: ['Selenium', 'Pandas', 'Webdriver', 'XlsxWrite'],
      link: 'https://github.com/AndersonLima12/AutomationProductAmazon',
    },
  ],
};

// ---------- COMPONENTS ----------
function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {config.skills.map(skill => (
            <div key={skill.name} className="flex items-center gap-2 bg-gray-100 p-3 rounded-full shadow-sm hover:shadow-lg transition">
              <StackIcon name={skill.icon} className="w-6 h-6" />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3 space-y-4">
            {config.about.split('\n\n').map((p, i) => (
              <p key={i} className="text-gray-700">
                {p.trim()}
              </p>
            ))}
          </div>
          <div className="md:w-1/3">
            <Image src={config.aboutPhoto} alt="About me" width={350} height={350} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceAndStudiesTimeline() {
  const timeline = [...config.experiences.map(exp => ({ ...exp, type: 'work' })), ...config.studies.map(study => ({ ...study, type: 'study' }))];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">Minha Jornada</h2>
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-700"></div>

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className={`relative flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? 'md:ml-auto' : 'md:mr-auto'
                    } bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center
                      transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl z-10`}>
                    {/* Imagem acima */}
                    <img src={item.image} alt={item.company} className="w-10 h-10 rounded-full object-cover shadow-md mb-4" />

                    {/* Conteúdo */}
                    <div>
                      <h3 className={`text-lg font-semibold ${item.type === 'work' ? 'text-indigo-600' : 'text-green-600'}`}>
                        {item.type === 'work' ? '💼 ' : '🎓 '}
                        {item.company}
                      </h3>
                      <p className="font-medium text-gray-800 dark:text-gray-200">{item.position}</p>
                      <p className="text-sm text-gray-500">{item.period}</p>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Ponto da timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 border-4 border-white dark:border-gray-900 shadow z-0 md:z-20"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {config.projects.map((proj, i) => (
            <Card key={i} className="shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <Image src={proj.image} alt={proj.name} width={600} height={400} className="w-full h-56 object-cover md:h-64" />
                <div className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{proj.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">{proj.description}</CardDescription>

                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="mt-4 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
                        Saiba mais
                      </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                      <DialogHeader className="pb-4 border-b border-gray-200 dark:border-gray-700">
                        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">{proj.name}</DialogTitle>
                        <DialogDescription className="text-gray-600 dark:text-gray-400 mt-2">{proj.description}</DialogDescription>
                      </DialogHeader>

                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ Tecnologias utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {proj.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-gray-700 dark:to-gray-800 text-indigo-700 dark:text-white shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-5">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎨 Experiência do Usuário & Design</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Este projeto foi desenvolvido com foco em <span className="font-medium">usabilidade</span>, <span className="font-medium">acessibilidade</span> e{' '}
                          <span className="font-medium">design responsivo</span>. O objetivo é proporcionar uma navegação <span className="font-medium">intuitiva e agradável</span>{' '}
                          para todos os usuários.
                        </p>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <Link
                          href={proj.link}
                          target="_blank"
                          className="bg-indigo-600 hover:bg-indigo-700 w-full text-white text-center px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                          Ver no GitHub 🚀
                        </Link>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Entre em contato</h2>
        <form action={config.heroTofuEndpoint} method="post" className="grid gap-4">
          <input type="text" name="name" placeholder="Nome completo" className="border rounded px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800" required />
          <input type="email" name="email" placeholder="Seu e-mail" className="border rounded px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800" required />
          <textarea name="message" rows={4} placeholder="Sua mensagem" className="border rounded px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800" required />
          <button type="submit" className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          {config.socialLinks.map(link => (
            <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 {config.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// ---------- EXPORT PAGE ----------
export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <Profile />
      <About />
      <Skills />
      <ExperienceAndStudiesTimeline />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
