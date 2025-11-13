import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Dribbble,
  Mail,
  ArrowRight,
  ExternalLink,
  Quote,
  Figma,
  Smartphone,
  Code,
  Cpu,
  Globe,
  Database
} from 'lucide-react'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-4 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-zinc-900/60 shadow-lg">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Portfolio</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme" className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="hidden sm:flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Linkedin size={18} /></a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Dribbble size={18} /></a>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme" className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setOpen(!open)} className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </nav>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t border-white/20 dark:border-white/10 px-4 sm:px-6 py-3">
                <div className="flex flex-col gap-3">
                  {links.map((l) => (
                    <a key={l.href} href={l.href} className="text-sm text-zinc-700 dark:text-zinc-300" onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  ))}
                  <div className="flex items-center gap-4 pt-2 text-zinc-600 dark:text-zinc-300">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Github size={18} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Linkedin size={18} /></a>
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Dribbble size={18} /></a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Alex Carter
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-xl sm:text-2xl font-medium bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Product Designer • Frontend Developer
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-5 text-zinc-600 dark:text-zinc-300 max-w-xl">
              I craft delightful, accessible digital experiences with a focus on clarity, speed, and subtle motion.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-95">
                View My Work <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-3xl p-1 bg-gradient-to-br from-indigo-500 to-purple-500">
              <div className="h-full w-full rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur flex items-center justify-center shadow-xl">
                <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-white/40 dark:border-white/10 shadow-inner flex items-center justify-center text-5xl">
                  AC
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const items = [
    { title: 'Senior Product Designer', org: 'Nova Labs', time: '2022 — Present' },
    { title: 'Frontend Engineer', org: 'PixelCraft', time: '2019 — 2022' },
    { title: 'B.S. Human-Computer Interaction', org: 'State University', time: '2015 — 2019' },
  ]
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">About</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-prose">
              I design and build high-quality interfaces that balance aesthetics with performance. I love working end-to-end: research, prototypes, design systems, and production-grade frontends.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow">
                Say Hello <Mail size={16} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                Explore Projects <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="space-y-4">
              {items.map((it, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{it.title}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{it.org}</p>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{it.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { name: 'Figma', icon: Figma },
    { name: 'React', icon: Cpu },
    { name: 'Flutter', icon: Smartphone },
    { name: 'TypeScript', icon: Code },
    { name: 'Web', icon: Globe },
    { name: 'Databases', icon: Database },
  ]
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-4 text-center hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400">
                <Icon size={20} />
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    { title: 'Aura Design System', tags: ['UI/UX', 'Web App'], color: 'from-indigo-500 to-purple-500' },
    { title: 'Pulse Analytics', tags: ['Web App'], color: 'from-purple-500 to-fuchsia-500' },
    { title: 'Path Mobile', tags: ['Mobile App'], color: 'from-blue-500 to-indigo-500' },
    { title: 'Vector Studio', tags: ['UI/UX'], color: 'from-cyan-500 to-blue-500' },
    { title: 'Nimbus Cloud', tags: ['Web App'], color: 'from-violet-500 to-purple-500' },
    { title: 'Echo Chat', tags: ['Mobile App'], color: 'from-emerald-500 to-teal-500' },
  ]
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Get in touch <ArrowRight size={16} /></a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} href="#" className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
              <div className={`h-40 sm:h-44 bg-gradient-to-br ${p.color}`} />
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:underline">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Samantha Lee',
      role: 'Product Lead, Nova Labs',
      text: 'Alex consistently delivers beyond expectations. The attention to detail and strategic thinking improved our KPIs across the board.',
    },
    {
      name: 'Marcus Green',
      role: 'Founder, PixelCraft',
      text: 'Outstanding partner from discovery to delivery. The design system saved weeks of engineering time.',
    },
    {
      name: 'Priya Sharma',
      role: 'PM, CloudNine',
      text: 'A great blend of UX intuition and frontend craft. Our users love the new experience.',
    },
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">What Clients Say</h2>
        <div className="mt-8">
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence>
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-6 shadow-sm">
                <Quote className="mx-auto text-indigo-500" size={28} />
                <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">{testimonials[index].text}</p>
                <p className="mt-4 font-semibold text-zinc-900 dark:text-white">{testimonials[index].name}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonials[index].role}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-indigo-500 w-5' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white text-center">Get In Touch</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-6 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-600 dark:text-zinc-400">Name</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-zinc-600 dark:text-zinc-400">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="name@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-600 dark:text-zinc-400">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Tell me about your project..." />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Github size={18} /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Linkedin size={18} /></a>
                  <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white"><Dribbble size={18} /></a>
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-95">
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-6">
            <p className="font-semibold">Open for freelance</p>
            <p className="mt-2 text-sm/relaxed opacity-90">Available for product design, design systems, and frontend builds.</p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 opacity-90"><Mail size={16} /> hello@alexcarter.dev</p>
              <p className="flex items-center gap-2 opacity-90"><Globe size={16} /> alexcarter.dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-4 text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
            <p>© {year} Alex Carter. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:underline">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
