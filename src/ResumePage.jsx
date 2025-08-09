import React, { useState, useEffect } from 'react';

const PROFILE = {
  name: 'Saurabh Gope',
  title: 'Senior R&D Engineer • Automation, AI & Systems Architecture',
  location: 'Pune, India',
  email: 'saurabhgope93@gmail.com',
  phone: '+91 8007938885',
  github: 'github.com/SaurabhGope',
  linkedin: 'linkedin.com/in/saurabhgope',
  resumeUrl: '/resume.pdf'
};

const EXPERIENCE = [
  {
    role: 'Senior R&D Engineer',
    company: 'Ubisoft India Pvt Ltd',
    date: 'Oct 2024 – Present',
    bullets: [
      'Led design & development of scalable automation solutions, improving software reliability.',
      'Increased test automation coverage by 40%, reducing regression cycles and improving release efficiency.',
      'Integrated Data-Driven Testing, UI-based automation, and microservices into workflows.',
      'Drove quality improvements, reducing product defect rate and mentored junior engineers.',
      'Collaborated with production and QA teams for performance tuning and stability enhancements.'
    ]
  },
  {
    role: 'R&D Engineer',
    company: 'Ubisoft India Pvt Ltd',
    date: 'Oct 2022 – Oct 2024',
    bullets: [
      'Designed & maintained high-performance automation frameworks for game validation and defect detection.',
      'Automated core features for live operations testing, reducing manual intervention.',
      'Built custom analytics tools for QA/QC KPIs and integrated RESTful APIs for real-time reporting.',
      'Acted as technical SPOC and contributed actively in Agile ceremonies.'
    ]
  },
  {
    role: 'Senior Quality Engineer & related roles',
    company: 'Ubisoft India Pvt Ltd',
    date: 'Apr 2016 – Oct 2022',
    bullets: [
      'Designed and executed test plans, automation scripts, and debugging workflows for AAA games.',
      'Created custom QC tools reducing manual effort and enhancing workflow efficiency.',
      'Managed test frameworks and CI/CD integration, optimizing quality assurance pipelines.',
      'Coordinated with global teams to improve software quality and speed.'
    ]
  }
];

const PROJECTS = [
  { name: 'For Honor', desc: 'AAA third-person fighting game. Created engine hooks for automation and deployed 26 automated solutions covering 40% of testable features.', link: '#' },
  { name: 'Prince of Persia - Sands of Time Remake', desc: 'Automated 95% of smoke tests and acted as technical SPOC.', link: '#' },
  { name: 'Data-Driven Test Automation Framework', desc: 'C#, .NET, MongoDB, REST. Reduced development time by 90% with config-based system.', link: '#' },
  { name: 'Custom Reporting Solution', desc: 'C#, .NET, REST, RazorPages. Strategy-pattern-based HTML reporting system.', link: '#' },
  { name: 'Crash Reporting Tool', desc: 'Python, Qt, SQL. Automated crash data reports, reducing manual effort from 1 hour to seconds.', link: '#' }
];

const SKILLS = [
  'C++', 'Python', 'C#', 'Django', 'Flask', '.NET', 'RESTful APIs', 'Event-Driven Architecture',
  'Microservices', 'High-Performance Computing', 'Distributed Systems', 'OpenGL', 'SFML', 'Vulkan',
  'Selenium', 'Ranorex', 'Appium', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes',
  'Git', 'Perforce', 'TeamCity', 'Jenkins'
];

export default function ResumePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <header className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{PROFILE.name}</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{PROFILE.title} — {PROFILE.location}</p>
          </div>
          <div className="flex gap-3 items-center">
            <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-2 rounded-lg border bg-white dark:bg-slate-800 dark:border-slate-600">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href={PROFILE.resumeUrl} className="inline-block bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white px-4 py-2 rounded-lg text-sm shadow" download>Download Resume</a>
            <div className="text-right text-sm text-slate-600 dark:text-slate-400">
              <div>{PROFILE.email}</div>
              <div>{PROFILE.phone}</div>
            </div>
          </div>
        </div>

        <nav className="mt-6 flex gap-4 text-sm text-slate-700 dark:text-slate-300">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section id="about" className="max-w-4xl mx-auto px-6 py-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">Experienced Software Developer specializing in systems architecture, automation frameworks, and high-performance engineering for AAA games. Proficient in game engines, web development, and scalable software design, with expertise in CI/CD, microservices, and defect detection frameworks. Passionate about designing robust, scalable systems that enhance performance and maintainability.</p>
      </section>

      <section id="experience" className="max-w-4xl mx-auto px-6 py-8 mt-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-4 grid gap-4">
          {EXPERIENCE.map((exp, i) => (
            <article key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{exp.company}</div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{exp.date}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-700 dark:text-slate-300">
                {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-6 py-8 mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {PROJECTS.map((p, i) => (
            <div key={i} className="p-4 border dark:border-slate-600 rounded-lg">
              <div className="font-semibold">{p.name}</div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-4xl mx-auto px-6 py-8 mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SKILLS.map((s,i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border dark:border-slate-600 text-sm">{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-8 mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300">Interested in collaborating or discussing opportunities? Reach out via email or GitHub.</p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="p-4 border dark:border-slate-600 rounded-lg">
            <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
            <div className="mt-1 font-medium">{PROFILE.email}</div>
          </div>
          <div className="p-4 border dark:border-slate-600 rounded-lg">
            <div className="text-sm text-slate-500 dark:text-slate-400">GitHub</div>
            <div className="mt-1 font-medium"><a href={`https://${PROFILE.github}`} className="hover:underline">{PROFILE.github}</a></div>
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <div>Made with ❤️ • {new Date().getFullYear()}</div>
      </footer>
    </main>
  );
}
