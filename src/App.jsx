const profile = {
  name: 'Rafael Moreno',
  role: 'Full-Stack Developer',
  location: 'Perris / Moreno Valley, CA',
  email: 'wickedxwayxgaming@gmail.com',
  github: 'https://github.com/norest4d-max',
  githubLabel: 'norest4d-max',
  linkedin: 'https://www.linkedin.com/in/rafael-sandoval-053a07241/',
  linkedinLabel: 'rafael-sandoval',
  liveProject: 'https://sudoku-115-kjhfipmfm-rafael-morenos-projects.vercel.app/',
};

const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Python', 'GitHub', 'PWA', 'Vercel', 'Game UI'];

const strengths = [
  'Responsive frontend layouts',
  'Interactive quiz and flashcard logic',
  'Minimalist UI design',
  'Game-inspired user experiences',
  'Data organization tools',
  'Debugging and iteration',
];

const projects = [
  {
    title: 'Sudoku 115 — Stack of Mini Games',
    label: 'Live Web App',
    description: 'Paper-and-ink puzzle platform with Sudoku difficulty modes, notebook-style controls, ink-key number buttons, timer, mistake tracking, hints, and a focused old-school table layout.',
    links: [
      { label: 'Live Site', href: profile.liveProject },
      { label: 'GitHub Repository', href: 'https://github.com/norest4d-max/sudoku-115' },
    ],
  },
  {
    title: 'Warehouse Map Trainer PWA',
    label: 'PWA / Quiz Tool',
    description: 'Interactive study app designed to memorize warehouse zones, item locations, equipment safety logic, and test-style questions with repeat practice.',
  },
  {
    title: 'Horror Farm Game Prototype',
    label: 'Game Systems',
    description: 'Game concept with day/night cycles, inventory, tools, farming mechanics, creature encounters, dialogue, and survival-style progression.',
  },
];

const experienceDisclosure = [
  {
    title: 'Software Development & Web Projects',
    date: '2024 — Present',
    field: 'Frontend, full-stack basics, project deployment, and UI systems',
    bullets: [
      'Building hands-on web projects with HTML, CSS, JavaScript, React, Next.js, Python, GitHub, and Vercel.',
      'Focused on interactive tools, puzzle apps, flashcards, quiz logic, responsive layouts, and practical data organization.',
    ],
  },
  {
    title: 'Operations, Warehouse & Customer-Facing Experience',
    date: '2019 — 2025',
    field: '6+ years across fast-paced work environments',
    bullets: [
      'Experience with process flow, accuracy, organization, safety awareness, customer support, and productivity standards.',
      'Background supports practical software thinking: building tools that help people memorize, organize, track, and complete tasks.',
    ],
  },
];

function ContactLink({ href, children }) {
  return <a className="link" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Header() {
  return (
    <header className="topline">
      <div>
        <p className="eyebrow">Paper // Ink // Full-Stack</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
      </div>
      <address className="contact">
        <div>{profile.location}</div>
        <div><a className="link" href={`mailto:${profile.email}`}>{profile.email}</a></div>
        <div><ContactLink href={profile.github}>GitHub: {profile.githubLabel}</ContactLink></div>
        <div><ContactLink href={profile.liveProject}>Live Project: Sudoku 115</ContactLink></div>
        <div><ContactLink href={profile.linkedin}>LinkedIn: {profile.linkedinLabel}</ContactLink></div>
      </address>
    </header>
  );
}

function Section({ title, children }) {
  return <section><h2>{title}</h2>{children}</section>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span className="project-note">Project Note</span>
      <div className="item-header">
        <h3>{project.title}</h3>
        <span className="date">{project.label}</span>
      </div>
      <p>{project.description}</p>
      {project.links && <p>{project.links.map((link, index) => <span key={link.href}><ContactLink href={link.href}>{link.label}</ContactLink>{index < project.links.length - 1 ? ' · ' : ''}</span>)}</p>}
    </article>
  );
}

function ExperienceDisclosureItem({ item }) {
  return (
    <article className="item">
      <div className="item-header">
        <h3>{item.title}</h3>
        <span className="date">{item.date}</span>
      </div>
      <p className="sub">{item.field}</p>
      <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
    </article>
  );
}

export default function App() {
  return (
    <main className="page">
      <div className="resume-shell">
        <Header />
        <p className="summary">Full-stack developer building clean, interactive web apps with a paper-and-ink visual style, old-video-game influence, and practical utility. Creator of Sudoku 115, a minimalist black-and-white puzzle table built for memory, trivia, math, quotes, mistakes, replay, and focused problem-solving. Experienced with HTML, CSS, JavaScript, React, Next.js, Python, GitHub, and PWA-style interfaces.</p>
        <div className="grid">
          <aside>
            <Section title="Core Stack"><div className="tag-list">{stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></Section>
            <Section title="Developer Strengths"><ul>{strengths.map((item) => <li key={item}>{item}</li>)}</ul></Section>
            <Section title="Education"><div className="item"><h3>Moreno Valley College</h3><p className="sub">A.S. Math & Science — In Progress</p></div><div className="item"><h3>California Military Institute</h3><p className="sub">High School Diploma</p></div></Section>
          </aside>
          <div>
            <Section title="Selected Projects">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</Section>
            <Section title="Experience Disclosure">{experienceDisclosure.map((item) => <ExperienceDisclosureItem key={item.title} item={item} />)}</Section>
          </div>
        </div>
        <footer>Filed under: Developer / Interfaces / Puzzles / Utility</footer>
      </div>
    </main>
  );
}
