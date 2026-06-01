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

const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Python',
  'GitHub',
  'PWA',
  'Vercel',
  'Game UI',
];

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
    description:
      'Paper-and-ink puzzle platform with Sudoku difficulty modes, notebook-style controls, ink-key number buttons, timer, mistake tracking, hints, and a focused old-school table layout.',
    links: [
      { label: 'Live Site', href: profile.liveProject },
      { label: 'GitHub Repository', href: 'https://github.com/norest4d-max/sudoku-115' },
    ],
  },
  {
    title: 'Warehouse Map Trainer PWA',
    label: 'PWA / Quiz Tool',
    description:
      'Interactive study app designed to memorize warehouse zones, item locations, equipment safety logic, and test-style questions with repeat practice.',
  },
  {
    title: 'Horror Farm Game Prototype',
    label: 'Game Systems',
    description:
      'Game concept with day/night cycles, inventory, tools, farming mechanics, creature encounters, dialogue, and survival-style progression.',
  },
];

const experience = [
  {
    title: 'Fulfillment Associate',
    company: 'Amazon LLC',
    date: 'Nov 2022 — Aug 2025',
    bullets: [
      'Worked in fast-paced fulfillment environments with attention to accuracy, timing, and process flow.',
      'Built habits around task tracking, safety awareness, scanning systems, and inventory movement.',
      'Developed comfort with warehouse operations, repetition, and productivity standards.',
    ],
  },
  {
    title: 'General Merchandise',
    company: 'Stater Bros',
    date: 'Jul 2021 — Nov 2022',
    bullets: [
      'Organized products, supported store presentation, handled stocking tasks, and assisted customers.',
      'Maintained consistent work habits in a retail environment requiring speed and reliability.',
    ],
  },
  {
    title: 'Courtesy Clerk',
    company: 'Stater Bros',
    date: 'Sep 2020 — Jul 2021',
    bullets: ['Supported front-end operations, customer service, cart retrieval, and store cleanliness.'],
  },
  {
    title: 'Team Kitchen',
    company: 'Panda Express',
    date: 'Jul 2019 — Sep 2020',
    bullets: ['Prepared food in a high-volume kitchen while following timing, cleanliness, and teamwork expectations.'],
  },
];

function ContactLink({ href, children }) {
  return (
    <a className="border-b border-black text-black transition hover:bg-black hover:text-[#f7f1e6]" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="flex flex-col justify-between gap-6 border-b-2 border-black pb-6 md:flex-row">
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em]">Paper // Ink // Full-Stack</p>
        <h1 className="font-serif text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-neutral-600">{profile.role}</p>
      </div>

      <address className="not-italic text-left font-mono text-xs leading-7 text-neutral-600 md:min-w-64 md:text-right">
        <div>{profile.location}</div>
        <div>
          <a className="border-b border-black text-black" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div><ContactLink href={profile.github}>GitHub: {profile.githubLabel}</ContactLink></div>
        <div><ContactLink href={profile.liveProject}>Live Project: Sudoku 115</ContactLink></div>
        <div><ContactLink href={profile.linkedin}>LinkedIn: {profile.linkedinLabel}</ContactLink></div>
      </address>
    </header>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-7 border-2 border-black bg-white/20 p-4 shadow-[6px_6px_0_rgba(0,0,0,0.08)]">
      <h2 className="mb-3 border-b-2 border-black pb-2 font-mono text-xs font-black uppercase tracking-[0.25em]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tags() {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <span key={item} className="border-2 border-black bg-[#ebe6dc] px-2 py-1 font-mono text-xs font-black uppercase tracking-wider">
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="relative mb-6 border-2 border-l-8 border-black bg-[#fbf8f1] p-4 shadow-[7px_7px_0_rgba(17,17,17,0.12)] [background-image:repeating-linear-gradient(to_bottom,rgba(17,17,17,0.035)_0px,rgba(17,17,17,0.035)_1px,transparent_1px,transparent_28px)]">
      <span className="absolute -top-3 left-4 bg-[#f7f1e6] px-2 font-mono text-[10px] font-black uppercase tracking-[0.18em]">
        Project Note
      </span>
      <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-start">
        <h3 className="font-serif text-xl font-black uppercase tracking-wide">{project.title}</h3>
        <span className="w-fit border border-black bg-[#ebe6dc] px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider">
          {project.label}
        </span>
      </div>
      <p className="mb-3 font-serif text-sm leading-6">{project.description}</p>
      {project.links && (
        <p className="font-serif text-sm font-bold">
          {project.links.map((link, index) => (
            <span key={link.href}>
              <ContactLink href={link.href}>{link.label}</ContactLink>
              {index < project.links.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      )}
    </article>
  );
}

function ExperienceItem({ job }) {
  return (
    <article className="mb-5">
      <div className="mb-1 flex flex-col justify-between gap-1 md:flex-row">
        <h3 className="text-base font-bold tracking-tight">{job.title}</h3>
        <span className="font-mono text-xs text-neutral-600">{job.date}</span>
      </div>
      <p className="mb-2 text-sm text-neutral-600">{job.company}</p>
      <ul className="ml-5 list-disc space-y-1 text-sm">
        {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-8 text-black md:py-10">
      <div className="mx-auto max-w-5xl border-2 border-black bg-[#f7f1e6] p-6 shadow-[10px_10px_0_#111,0_22px_55px_rgba(0,0,0,0.35)] md:p-12 [background-image:linear-gradient(to_right,transparent_0_52px,rgba(120,70,70,0.20)_52px_54px,transparent_54px),repeating-linear-gradient(to_bottom,transparent_0px,transparent_33px,rgba(60,52,42,0.09)_34px,transparent_35px)]">
        <Header />

        <p className="my-7 max-w-3xl font-serif text-lg leading-7">
          Full-stack developer building clean, interactive web apps with a paper-and-ink visual style, old-video-game influence, and practical utility. Creator of Sudoku 115, a minimalist black-and-white puzzle table built for memory, trivia, math, quotes, mistakes, replay, and focused problem-solving. Experienced with HTML, CSS, JavaScript, React, Next.js, Python, GitHub, and PWA-style interfaces.
        </p>

        <div className="grid gap-7 md:grid-cols-[1fr_2fr]">
          <aside>
            <Section title="Core Stack"><Tags /></Section>
            <Section title="Developer Strengths">
              <ul className="ml-5 list-disc space-y-2 text-sm">
                {strengths.map((strength) => <li key={strength}>{strength}</li>)}
              </ul>
            </Section>
            <Section title="Education">
              <div className="mb-4">
                <h3 className="font-bold">Moreno Valley College</h3>
                <p className="text-sm text-neutral-600">A.S. Math & Science — In Progress</p>
              </div>
              <div>
                <h3 className="font-bold">California Military Institute</h3>
                <p className="text-sm text-neutral-600">High School Diploma</p>
              </div>
            </Section>
          </aside>

          <div>
            <Section title="Selected Projects">
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </Section>
            <Section title="Work Experience">
              {experience.map((job) => <ExperienceItem key={`${job.title}-${job.company}`} job={job} />)}
            </Section>
          </div>
        </div>

        <footer className="mt-7 border-t-2 border-black pt-4 font-mono text-xs uppercase tracking-[0.15em] text-neutral-600">
          Filed under: Developer / Interfaces / Puzzles / Utility
        </footer>
      </div>
    </main>
  );
}
