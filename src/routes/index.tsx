import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Download,
  GraduationCap,
  Languages,
  Briefcase,
  FolderKanban,
  Code2,
  ArrowUpRight,
  BookOpenText,
} from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Siddhardha Aithabathula — Software Development Trainer",
      },
      {
        name: "description",
        content:
          "Portfolio of Siddhardha Aithabathula — Software Development Trainer with an M.Tech in Computer Science, teaching Java, Python and problem-solving. Projects, experience, education and contact.",
      },
      { property: "og:title", content: "Siddhardha Aithabathula — Software Development Trainer" },
      {
        property: "og:description",
        content:
          "M.Tech Computer Science graduate and Software Development Trainer — Java, Python and problem-solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ icon, eyebrow, title }: { icon: ReactNode; eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">{title}</h2>
      <div className="hairline mt-6 w-40" />
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

/* ---------- data ---------- */

const contact = [
  { icon: MapPin, label: "Kakinada, Andhra Pradesh, India" },
  { icon: Phone, label: "+91 80088 09325", href: "tel:+918008809325" },
  { icon: Mail, label: "aithabathulasiddhardha@yahoo.com", href: "mailto:aithabathulasiddhardha@yahoo.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/siddhardha-aithabathula-b24b2639a",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/Siddhardha1999" },
];

const skillGroups = [
  { title: "Programming Languages", items: ["Java", "Python", "JavaScript"] },
  { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Databases", items: ["SQL"] },
  {
    title: "Core Concepts",
    items: ["Object-Oriented Programming", "Data Structures", "Recursion", "Debugging", "Problem Solving"],
  },
  {
    title: "Professional Skills",
    items: ["Technical Training", "Mentoring", "Curriculum Delivery", "Communication"],
  },
];

const experience = [
  {
    role: "Software Development Faculty Trainee",
    org: "NxtWave",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Delivered structured training sessions on software development fundamentals, Java, and Python to learners.",
      "Guided students in writing clean, efficient, and error-free code through live coding and code reviews.",
      "Taught problem-solving techniques, recursion, and logical thinking to help learners solve coding problems independently.",
      "Supported students through hands-on coding exercises, mini-projects, and assessments.",
      "Collaborated with senior trainers to improve curriculum delivery and learning outcomes.",
    ],
  },
  {
    role: "Online Internship Training with Project — Computer Science",
    org: "BSNL",
    period: "Internship",
    bullets: [
      "Gained exposure to real-world software and networking concepts.",
      "Completed a project focused on practical problem-solving and implementation.",
    ],
  },
];

const projects = [
  {
    title: "Online Car Rental System",
    meta: "Team of 4",
    description:
      "Designed and developed a web-based car rental application for vehicle search and booking, with booking features that streamline the rental process and improve the user experience.",
    tags: ["Web App", "Booking System"],
  },
  {
    title: "Anomaly Detection and Attribution in Networks",
    meta: "Final-Year B.Tech Project · Team of 3",
    description:
      "Worked on detecting abnormal patterns in network traffic with temporally correlated traffic, using analytical techniques — contributing to the analysis and implementation as part of a three-member team.",
    tags: ["Networking", "Data Analysis"],
  },
  {
    title: "Privacy Preserving Electronic Ticket Scheme",
    meta: "Attribute-Based Credentials",
    description:
      "Studied and implemented concepts of secure, privacy-focused electronic ticketing systems built on attribute-based credentials.",
    tags: ["Security", "Privacy"],
  },
];

const education = [
  {
    degree: "Master of Technology (M.Tech), Computer Science and Technology",
    school: "Andhra University College of Engineering, Visakhapatnam",
    year: "2022",
    score: "CGPA 8.21 / 10",
  },
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science and Systems Engineering",
    school: "Andhra University College of Engineering, Visakhapatnam",
    year: "2021",
    score: "CGPA 6.21 / 10",
  },
];

/* ---------- page ---------- */

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="paper-texture border-b border-border">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pt-20">
          <Reveal>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-3xl text-primary sm:h-24 sm:w-24">
                SA
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Portfolio · 2026
                </p>
                <h1 className="mt-2 font-display text-5xl leading-[1.05] text-foreground sm:text-7xl">
                  Aithabathula
                  <br />
                  <span className="italic text-primary">Siddhardha</span>
                </h1>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground/90 sm:text-3xl">
              Software Development Trainer with an M.Tech in Computer Science — teaching{" "}
              <span className="italic text-primary">Java</span>, <span className="italic text-primary">Python</span> and
              problem-solving with a focus on clean code and clear explanations.
            </p>
          </Reveal>

          <Reveal>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {contact.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary" aria-hidden />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={resumeAsset.url}
                download="Siddhardha_Aithabathula_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download résumé
              </a>
              <a
                href="mailto:aithabathulasiddhardha@yahoo.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading icon={<BookOpenText className="h-4 w-4" />} eyebrow="About" title="Strong fundamentals, clearly taught" />
        </Reveal>
        <Reveal>
          <div className="grid gap-6 text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p>
              I am a Software Development Trainer with an M.Tech in Computer Science and Technology and hands-on
              experience teaching Java, Python, and problem-solving at NxtWave. My strength lies in Object-Oriented
              Programming, data structures fundamentals, and debugging.
            </p>
            <p>
              I care about clean code and about explaining complex concepts clearly — so learners don't just pass
              exercises, they build the judgment to solve coding problems independently.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <SectionHeading icon={<Code2 className="h-4 w-4" />} eyebrow="Skills" title="Technical toolkit" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} className={i === skillGroups.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-display text-xl text-foreground">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading icon={<Briefcase className="h-4 w-4" />} eyebrow="Experience" title="Where I've taught and built" />
        </Reveal>
        <div className="space-y-10">
          {experience.map((job) => (
            <Reveal key={job.role}>
              <article className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{job.org}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <SectionHeading icon={<FolderKanban className="h-4 w-4" />} eyebrow="Projects" title="Selected work" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <h3 className="font-display text-xl leading-snug text-foreground">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {project.meta}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading icon={<GraduationCap className="h-4 w-4" />} eyebrow="Education" title="Academic background" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <Reveal key={edu.degree}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <GraduationCap className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {edu.score}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-foreground">{edu.degree}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{edu.school}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Class of {edu.year}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="paper-texture border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-4xl text-foreground sm:text-5xl">
                  Let's <span className="italic text-primary">talk</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Open to training, mentoring and software development opportunities. Reach me at{" "}
                  <a
                    href="mailto:aithabathulasiddhardha@yahoo.com"
                    className="text-foreground underline underline-offset-4 hover:text-primary"
                  >
                    aithabathulasiddhardha@yahoo.com
                  </a>
                  .
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Languages className="h-4 w-4 text-primary" aria-hidden />
                  English · Hindi · Telugu
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/siddhardha-aithabathula-b24b2639a"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="https://github.com/Siddhardha1999"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={resumeAsset.url}
                  download="Siddhardha_Aithabathula_Resume.pdf"
                  aria-label="Download résumé"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Résumé <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
          <div className="hairline mt-12" />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © 2026 Aithabathula Siddhardha · Kakinada, India
          </p>
        </div>
      </footer>
    </main>
  );
}
