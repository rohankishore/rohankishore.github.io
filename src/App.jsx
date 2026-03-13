import './App.css'

const techStack = [
  'Python / C++ / MySQL / HTML5 / CSS3',
  'PyQt6 / Tkinter / NumPy / Matplotlib',
  'JavaScript / React / Vite / UI Systems',
  'Git / GitHub / PyCharm / VS Code',
  'Figma / Canva / Windows / ChatGPT',
]

const interestStack = [
  'Desktop Applications / Python Tooling',
  'Web Development / UI Systems',
  'Engineering Utilities / Student Tools',
  'Open Source / Community Tech',
]

const projects = [
  {
    id: '001',
    year: '2026',
    meta: 'Featured Project',
    title: 'Aura Text',
    repoUrl: 'https://github.com/rohankishore/Aura-Text',
    description:
      'A modern IDE and text editor built with PyQt6 and QScintilla, designed for extensibility, polished workflows, and a serious desktop experience.',
    tags: ['Python', 'PyQt6', 'QScintilla'],
  },
  {
    id: '002',
    year: '2026',
    meta: 'Featured Project',
    title: 'Schemix',
    repoUrl: 'https://github.com/rohankishore/Schemix',
    description:
      'An all-in-one engineering workspace for students and builders, combining scientific utilities, note-taking, and circuit-analysis-friendly workflows.',
    tags: ['Python', 'PyQt6', 'NumPy', 'Matplotlib'],
  },
  {
    id: '003',
    year: '2026',
    meta: 'Currently Building',
    title: 'Koodaram',
    repoUrl: 'https://github.com/rohankishore/Koodaram',
    description:
      'A community platform focused on connection, discovery, and smooth user interaction, with a product-first approach to frontend clarity.',
    tags: ['Web App', 'Community Platform', 'Frontend'],
  },
  {
    id: '004',
    year: '2026',
    meta: 'Currently Building',
    title: 'NoMoreBS',
    repoUrl: 'https://github.com/rohankishore/NoMoreBS',
    description:
      'A blunt, irreverent to-do app built around fast capture, direct feedback, and a personality that refuses to feel generic.',
    tags: ['Product Design', 'Task App', 'Web'],
  },
  {
    id: '005',
    year: '2025',
    meta: 'Featured Project',
    title: 'Youtility',
    repoUrl: 'https://github.com/rohankishore/Youtility',
    description:
      'A sleek YouTube downloader handling playlists, audio, subtitles, and batch workflows with a clean fluent-style desktop interface.',
    tags: ['Python', 'PyQt6', 'yt-dlp'],
  },
  {
    id: '006',
    year: '2025',
    meta: 'Featured Project',
    title: 'AnimeSnap',
    repoUrl: 'https://github.com/rohankishore/AnimeSnap',
    description:
      'A screenshot-based anime lookup tool that identifies episode-level details using the trace.moe API inside a compact desktop workflow.',
    tags: ['Python', 'PyQt6', 'API'],
  },
]

const experiences = [
  {
    period: 'Current Position',
    company: 'IET On Campus CET',
    role: 'Technical Coordinator',
    highlights: [
      'Coordinate technical initiatives and help turn student-led ideas into usable products, demos, and internal tooling.',
      'Support planning and execution for tech-focused activities, with an emphasis on implementation quality and practical delivery.',
      'Work across teams to keep engineering tasks organized, realistic, and actually shippable.',
    ],
  },
  {
    period: 'Current Position',
    company: 'Tinkerhub CET',
    role: 'Subpanel Member',
    highlights: [
      'Contribute to community-driven technical initiatives and collaborate on programs that help students build and ship faster.',
      'Participate in planning, execution, and technical support for hands-on events and learning tracks.',
      'Help strengthen the builder culture around open collaboration, experimentation, and peer learning.',
    ],
  },
  {
    period: 'Current Position',
    company: 'Glitch CET',
    role: 'Technical Member',
    highlights: [
      'Work on technical execution for club activities, prototypes, and internal digital experiences.',
      'Support project development with a focus on frontend polish, usability, and rapid iteration.',
      'Collaborate with other members on practical builds that balance creativity with maintainable engineering.',
    ],
  },
  {
    period: 'Current Position',
    company: 'FOSSCET',
    role: 'Member',
    highlights: [
      'Contribute to open-source-oriented student initiatives and community-led technical efforts.',
      'Participate in collaborative projects and discussions around practical software building and shared learning.',
      'Support a builder culture centered on openness, experimentation, and community contribution.',
    ],
  },
  {
    period: 'Current Position',
    company: 'GDGC CET',
    role: 'Tech Subpanel Member',
    highlights: [
      'Contribute to the technical side of community programs, workshops, and collaborative student projects.',
      'Help shape implementation details for event experiences and builder-facing initiatives.',
      'Bring a product-minded approach to student tech communities with consistent attention to execution quality.',
    ],
  },
]

const contactItems = [
  {
    label: 'HackerRank',
    value: 'rohankishore7461',
    href: 'https://www.hackerrank.com/profile/rohankishore7461',
    icon: '↗',
  },
  {
    label: 'Fiverr',
    value: 'rohancodespy',
    href: 'https://www.fiverr.com/rohancodespy/',
    icon: '↗',
  },
  {
    label: 'LinkedIn',
    value: '/in/rohankishore',
    href: 'https://www.linkedin.com/in/rohankishore/',
    icon: '↗',
  },
]

function App() {
  return (
    <main className="shell">
      <header className="masthead">
        <a className="brand" href="#hero" aria-label="Go to top">
          rohankishore.
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Exp</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav__cta" href="#contact">
            Resume
          </a>
        </nav>
      </header>

      <section className="hero-grid" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">Looking out for internships & cool projects</p>
          <h1 className="hero-title">
            <span>rohan</span>
            <span className="accent">kishore</span>
          </h1>
          <p className="intro" id="about">
            I&apos;m a 19-year-old developer and Electrical & Computer Engineering
            student at CET, building Python desktop applications, practical
            engineering tools, and sharp web experiences that people actually
            enjoy using.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              View Resume
            </a>
            <a className="button button--ghost" href="#work">
              See Projects
            </a>
          </div>

          <dl className="stats">
            <div>
              <dt>Base</dt>
              <dd>CET, Trivandrum</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Python Apps + Web UI</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Koodaram / Aura Text</dd>
            </div>
          </dl>
        </div>

        <aside className="stack-panel">
          <section className="stack-block">
            <p className="stack-label">// Tech Stack</p>
            <ul className="stack-list">
              {techStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="stack-block">
            <p className="stack-label">// Interest Stack</p>
            <ul className="stack-list stack-list--compact">
              {interestStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

        </aside>
      </section>

      <section className="projects-section" id="work">
        <div className="section-heading">
          <span className="section-heading__index">01</span>
          <h2>Selected Work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__topline">
                <p className="project-card__meta">
                  {project.year} · {project.meta}
                </p>
                <span className="project-card__id">{project.id}</span>
              </div>

              <h3>
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <a
                className="project-card__link"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Repository ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <span className="section-heading__index">02</span>
          <h2>Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-row" key={`${experience.company}-${experience.role}`}>
              <div className="experience-meta">
                <p className="experience-period">{experience.period}</p>
                <p className="experience-company">{experience.company}</p>
              </div>

              <div className="experience-body">
                <h3>{experience.role}</h3>
                <ul className="experience-points">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-heading">
          <span className="section-heading__index">03</span>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-grid">
          {contactItems.map((item) => (
            <a
              className="contact-tile"
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <p className="contact-tile__label">{item.label}</p>
              <p className="contact-tile__value">{item.value}</p>
              <span className="contact-tile__icon" aria-hidden="true">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
