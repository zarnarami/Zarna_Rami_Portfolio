import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Mail, Menu, Moon, Sun,
  Download, Code2, X, Monitor, Database, Smartphone, Palette, Brain,
  Users, Lightbulb, Clock, GitBranch, MessageCircle, GraduationCap
} from "lucide-react";
import "./App.css";

// PROFILE INFORMATION
const profile = {
  name: "Zarna Rami",
  role: "Aspiring Full-Stack Developer & Data Science Enthusiast",
  location: "Ahmedabad, Gujarat, India",
  email: "zarnarami1016@gmail.com",
  github: "https://github.com/zarnarami",
  linkedin: "https://www.linkedin.com/",

  // GitHub Pages compatible paths
  resume: `${import.meta.env.BASE_URL}Zarna_Rami.pdf`,
  photo: `${import.meta.env.BASE_URL}Zarna.JPEG`,
};

// PROJECTS
const projects = [
  {
    number: "01",
    type: "FULL-STACK E-COMMERCE",
    title: "Urban Store",
    description: "A clothing e-commerce platform with product discovery, shopping filters, cart, orders and payment integration.",
    stack: ["React", "Django", "PostgreSQL"],
    symbol: "↗",
    tone: "peach",
  },
  {
    number: "02",
    type: "HERITAGE & CULTURE",
    title: "DivyaBharat",
    description: "An India temple heritage and pilgrimage information platform built to make cultural knowledge easier to explore.",
    stack: ["React", "Node.js", "MongoDB"],
    symbol: "⌂",
    tone: "blue",
  },
  {
    number: "03",
    type: "DATA SCIENCE",
    title: "Data Analysis Projects",
    description: "Learning projects focused on exploring datasets, finding patterns and communicating insights through visualizations.",
    stack: ["Python", "Pandas", "NumPy"],
    symbol: "▥",
    tone: "green",
  },
  {
    number: "04",
    type: "DATA SCIENCE PROJECT",
    title: "1st Year College Project",
    projectName: "Heart Beat Monitoring System",
    description: "A basic academic project focused on monitoring and analyzing heart-rate data for health insights.",
    stack: ["Hardware Components", "Data Visualization"],
    symbol: "♥",
    tone: "rose",
  },
  {
    number: "05",
    type: "FLOWER SHOPPING WEBSITE",
    title: "2nd Year College Project",
    projectName: "Flower Mart",
    description: "An online flower-shopping concept focused on browsing flowers and plants and making shopping convenient.",
    stack: ["Java"],
    symbol: "✿",
    tone: "pink",
  },
  {
    number: "06",
    type: "HEALTH & FITNESS APP",
    title: "3rd Year College Project",
    projectName: "MedBot AI",
    description: "A basic mobile-app concept for tracking health and fitness with smart-assistant features.",
    stack: ["Angular", "API", "Firebase"],
    symbol: "⌁",
    tone: "purple",
  },
  {
    number: "07",
    type: "PORTFOLIO WEBSITE",
    title: "Personal Portfolio",
    description: "A personal portfolio website to showcase my skills, projects and contact information.",
    stack: ["React", "CSS", "JavaScript"],
    symbol: "◎",
    tone: "orange",
  },
];

// SKILLS
const skills = [
  {
    title: "Frontend Development",
    text: "Building clean, responsive interfaces with modern web technologies.",
    icon: Monitor
  },
  {
    title: "Backend Development",
    text: "Creating APIs, application logic and database-connected experiences.",
    icon: Code2
  },
  {
    title: "Database Management",
    text: "Designing, implementing and maintaining efficient database systems.",
    icon: Database
  },
  {
    title: "Full-Stack Development",
    text: "Combining frontend and backend skills to build complete web applications.",
    icon: Smartphone
  },
  {
    title: "Data Science",
    text: "Exploring data, discovering patterns and presenting useful insights.",
    icon: Brain
  },
  {
    title: "UI/UX Design",
    text: "Designing user-friendly interfaces and thoughtful digital experiences.",
    icon: Palette
  },
];

// EDUCATION
const education = [
  {
    course: "Integrated MCA",
    institution: "Faculty of Computer Applications & IT, GLS University",
    detail: "Currently pursuing the Integrated Master of Computer Applications programme, with interests in web development, software development and data science.",
  },
];

// SECTION HEADING
function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

// MAIN APP
export default function App() {

  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact"
  ];

  return (
    <main className={dark ? "portfolio dark" : "portfolio"} id="home">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* HEADER */}

      <header className="site-header glass">

        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">Z</span>
          <span>ZARNA<span className="brand-dot"></span></span>
        </a>

        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">

          <button
            className="icon-button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a className="header-contact" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>

          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

      </header>

      {/* PROJECT DETAIL PAGE */}

      {selectedProject ? (

        <section
          className="project-detail-screen"
          aria-label="Project details"
        >

          <div className="project-detail-content">

            <span className="project-number">
              PROJECT {selectedProject.number} / 07
            </span>

            <h1 className="project-detail-title">
              {selectedProject.projectName || selectedProject.title}
            </h1>

            <p className="project-detail-category">
              {selectedProject.type}
            </p>

            <div className="project-status">
              <span className="status-dot"></span>
              WORK IN PROGRESS
            </div>

            <p className="project-detail-description">
              This project page is currently
              <br />
              being updated.
            </p>

            <button
              className="back-projects-button"
              onClick={() => {
                setSelectedProject(null);

                window.setTimeout(() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 0);
              }}
            >
              ← Back to Projects
            </button>

          </div>

        </section>

      ) : (

        <>

          {/* HERO SECTION */}

          <section className="hero section-wrap">

            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <span className="availability">
                <span /> OPEN TO LEARNING & OPPORTUNITIES
              </span>

              <p className="hero-intro">Hello, I'm</p>

              <h1>
                Zarna <span>Rami</span>
              </h1>

              <h2 className="hero-role">
                {profile.role}
              </h2>

              <p className="hero-description">
                I enjoy building thoughtful digital experiences, exploring technology
                and turning ideas into practical projects. Welcome to my portfolio
              </p>

              <div className="hero-buttons">

                <a
                  className="button button-primary"
                  href="#projects"
                >
                  Explore my work <ArrowUpRight size={17} />
                </a>

                <a
                  className="button button-secondary"
                  href={profile.resume}
                  download="Zarna_Rami_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={17} /> Download CV
                </a>

              </div>

              <div className="social-row">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Code2 size={19} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Users size={19} />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>

                <span className="social-location">
                  {profile.location}
                </span>

              </div>

            </motion.div>

            {/* PROFILE IMAGE */}

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >

              <div className="photo-card glass">

                <div className="photo-frame">

                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="photo-placeholder">
                    <span>ZR</span>
                    <small>ADD YOUR PHOTO</small>
                  </div>

                </div>

                <div className="photo-caption">

                  <div>
                    <strong>{profile.name}</strong>
                    <span>Developer in progress ✦</span>
                  </div>

                  <span className="caption-orbit">✳</span>

                </div>

              </div>

              <div className="floating-chip chip-top glass">
                <Code2 size={16} /> Building ideas
              </div>

              <div className="floating-chip chip-bottom glass">
                <span className="mini-status" /> Curious by nature
              </div>

            </motion.div>

            <a className="scroll-cue" href="#about">
              <ArrowDown size={16} /> SCROLL TO EXPLORE
            </a>

          </section>

          {/* ABOUT SECTION */}

          <section
            className="section-wrap content-section"
            id="about"
          >

            <SectionHeading
              eyebrow="A LITTLE ABOUT ME"
              title={<>Curiosity meets <span>creativity</span></>}
              text="A growing technologist with an interest in building useful, beautiful and reliable digital products."
            />

            <div className="about-grid">

              <article className="about-card glass">

                <span className="card-kicker">MY STORY</span>

                <h3>
                  Learning today
                  <br />
                  <span>Building for tomorrow</span>
                </h3>

                <p>
                  I'm an Integrated MCA student with an interest in Data Science.
                  I'm interested in web development, software development and
                  data-driven problem solving. I like learning by creating projects
                  and improving them step by step.
                </p>

                <p>
                  My current focus is strengthening my development fundamentals,
                  creating user-friendly interfaces and understanding how complete
                  applications work from frontend to database.
                </p>

              </article>

              <div className="about-side">

                <div className="stat-card glass">
                  <span>01</span>
                  <strong>Creative mindset</strong>
                  <p>Enjoying ideas, design and details.</p>
                </div>

                <div className="stat-card glass">
                  <span>02</span>
                  <strong>Learning by doing</strong>
                  <p>Turning concepts into working projects.</p>
                </div>

                <div className="stat-card glass">
                  <span>03</span>
                  <strong>Always curious</strong>
                  <p>Exploring new tools and technologies.</p>
                </div>

              </div>

            </div>

          </section>

          {/* SKILLS SECTION */}

          <section
            className="section-wrap content-section"
            id="skills"
          >

            <SectionHeading
              eyebrow="WHAT I WORK WITH"
              title={<>My skills & <span>toolkit</span></>}
              text="Technologies and areas I am learning and using in my projects."
            />

            <div className="skills-grid">

              {skills.map(({ title, text, icon: Icon }, index) => (

                <motion.article
                  className="skill-card glass"
                  key={title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                </motion.article>

              ))}

            </div>

          </section>

          {/* PROJECTS SECTION */}

          <section
            className="section-wrap content-section"
            id="projects"
          >

            <SectionHeading
              eyebrow="SELECTED WORK"
              title={<>Projects <span></span></>}
              text="A few projects that represent my learning journey and practical experience."
            />

            <div className="projects-grid">

              {projects.map((project) => (

                <article
                  className={`project-card glass ${project.tone}`}
                  key={project.number}

                  onClick={() => {
                    setSelectedProject(project);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    });
                  }}

                  onKeyDown={(event) => {

                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {

                      event.preventDefault();

                      setSelectedProject(project);

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });

                    }

                  }}

                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${project.projectName || project.title} project details`}
                  style={{ cursor: "pointer" }}
                >

                  <div className="project-top">
                    <span>{project.number} / PROJECT</span>
                    <ArrowUpRight size={19} />
                  </div>

                  <div className="project-art">
                    <span>{project.number}</span>
                    <i>{project.symbol}</i>
                  </div>

                  <div className="project-info">

                    <span className="project-type">
                      {project.type}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tag-row">

                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </section>

          {/* EDUCATION SECTION */}

          <section
            className="section-wrap content-section"
            id="education"
          >

            <SectionHeading
              eyebrow="MY JOURNEY"
              title={<>Education<span></span></>}
              text="The academic path behind my interest in technology."
            />

            <div className="education-card glass">

              <div className="education-icon">
                <GraduationCap size={30} />
              </div>

              <div>

                {education.map((item) => (

                  <div key={item.course}>

                    <span className="card-kicker">
                      CURRENT STUDIES
                    </span>

                    <h3>{item.course}</h3>

                    <strong>{item.institution}</strong>

                    <p>{item.detail}</p>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* CONTACT SECTION */}

          <section
            className="section-wrap contact-section"
            id="contact"
          >

            <div className="contact-card glass">

              <span className="eyebrow">
                HAVE A PROJECT OR AN OPPORTUNITY?
              </span>

              <h2>
                Let's create something
                <br />
                <span>meaningful together</span>
              </h2>

              <p>
                I'm open to connecting, learning, collaborating and exploring opportunities.
              </p>

              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                Say hello <Mail size={17} />
              </a>

              <div className="contact-decoration">✳</div>

            </div>

          </section>

          {/* FOOTER */}

          <footer className="site-footer section-wrap">

            <a className="brand" href="#home">

              <span className="brand-mark">Z</span>

              <span>
                ZARNA<span className="brand-dot"></span>
              </span>

            </a>

            <p>
              Designed & built with curiosity by Zarna Rami
            </p>

            <span>
              © {new Date().getFullYear()} · All rights reserved.
            </span>

          </footer>

        </>

      )}

    </main>
  );
}