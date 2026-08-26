import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  X, Send, Download, Github, Linkedin, Mail, MapPin,
  Award, Briefcase, GraduationCap, ArrowDown, ExternalLink,
  Trophy, CheckCircle2, Users, GitCommit, ShieldCheck, Terminal, Lock, Flame, Loader2, CheckCircle
} from 'lucide-react';
import { GlowingEdgeCard } from './GlowingEdgeCard';

const PROGRAMMING_LANGUAGES = ['Python', 'HTML', 'CSS', 'JavaScript'];
const WEB_AND_TOOLS = ['Git', 'GitHub', 'Figma', 'Wireshark', 'Linux', 'THM Player'];
const TECHNICAL_SKILLS = ['Networking', 'Computer Architecture', 'Penetration Testing', 'IoT Security', 'Cybersecurity', 'UI/UX Design'];

const EXPERIENCES = [
  {
    id: 1,
    role: 'Intern - Cybersecurity',
    company: 'Pinnacle Labs',
    location: 'Virtual',
    period: 'Dec 2025',
    points: [
      'Gained hands-on experience in networking, cyber threats, and system vulnerabilities.',
      'Developed mini-projects focusing on network security and packet inspection.'
    ]
  },
  {
    id: 2,
    role: 'Intern - UI-UX Design',
    company: 'Yangoos Technologies',
    location: 'Chennai',
    period: 'Nov 2024',
    points: [
      'Designed user interfaces for web and mobile applications using Figma.',
      'Created wireframes, interactive prototypes, and user flows.',
      'Collaborated with developers to ensure accurate UI design implementation.'
    ]
  },
  {
    id: 3,
    role: 'Bootcamp On Drone Technology',
    company: 'Saveetha Engineering College with IIT Kurnool',
    location: 'Chennai',
    period: 'Nov 2024',
    points: [
      'Participated in a 5-day intensive workshop organized by IIITDM Kurnool & SEC.',
      'Learned principles to design, develop, and operate drones efficiently.'
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    date: 'Feb 2026',
    image: '/certs/google-cybersecurity.png',
    aspect: 'landscape'
  },
  {
    title: 'Practical IoT Security and Penetration testing',
    date: 'Feb 2026',
    image: '/certs/iot-security.png',
    aspect: 'landscape'
  },
  {
    title: 'UX Design For Web Developers',
    date: 'May 2025',
    image: '/certs/ux-design.png',
    aspect: 'landscape'
  },
  {
    title: 'Computer Architecture And Computer Organization Masterclass',
    date: 'Apr 2025',
    image: '/certs/computer-architecture.png',
    aspect: 'landscape'
  },
  {
    title: 'Computer On Office Automation (COA)',
    date: 'Sep 2022 – Feb 2023',
    image: '/certs/coa.png',
    aspect: 'portrait'
  },
  {
    title: 'Senior Grade Typewriting - English',
    date: 'Jan 2022 – Aug 2022',
    image: '/certs/typewriting.png',
    aspect: 'portrait'
  }
];

const ACHIEVEMENTS = [
  {
    title: '1st Place - App Development Ideathon',
    description: 'Won 1st place for presenting an innovative application solution. Demonstrated strong technical execution, creativity, and teamwork.',
    icon: <Trophy size={22} className="text-yellow-400" />
  },
  {
    title: '7th Place - 8hr CTF at VIT Chennai',
    description: 'Secured 7th place in an intense 8-hour Capture The Flag competition testing network security and cryptanalysis skills.',
    icon: <ShieldCheck size={22} className="text-blue-400" />
  },
  {
    title: 'Secretary — Microsoft Club SEC',
    description: 'Serving as Secretary of the Microsoft Club at Saveetha Engineering College, organizing coding events and tech workshops.',
    icon: <Users size={22} className="text-cyan-400" />
  },
  {
    title: 'Open-Source Contributions',
    description: 'Actively contributing to open-source GitHub repositories by fixing bugs and improving software functionality.',
    icon: <GitCommit size={22} className="text-emerald-400" />
  }
];

const PROJECTS = [
  {
    title: 'Packet Sniffer using Python',
    period: 'Dec 2025',
    category: 'Cybersecurity & Networking',
    description: 'Built a packet sniffer tool using Python and Scapy to capture, inspect, and analyze live network packets and visualize data flow protocols.',
    tags: ['Python', 'Scapy', 'Wireshark', 'Networking'],
    icon: <Terminal size={20} className="text-[#4fd1c5]" />,
    githubUrl: 'https://github.com/surendar-sd/PacketSniffer.git'
  },
  {
    title: 'Text Encryption Tool',
    period: 'Dec 2025',
    category: 'Cryptography',
    description: 'Developed a cryptographic utility that encrypts and decrypts sensitive messages using multiple encryption algorithms.',
    tags: ['Python', 'Cryptography', 'Security'],
    icon: <Lock size={20} className="text-[#4fd1c5]" />,
    githubUrl: 'https://github.com/surendar-sd/Text-Encryption-Tool.git'
  },
  {
    title: 'Control-of-Relay-Using-IoT-controller',
    period: 'Mar 2024 - Apr 2024',
    category: 'IoT & Embedded Systems',
    description: 'Arduino Relay Control: Blinking an AC bulb safely using transistor driver circuit.',
    tags: ['IoT', 'Arduino', 'Sensors', 'Embedded C'],
    icon: <Flame size={20} className="text-[#4fd1c5]" />,
    githubUrl: 'https://github.com/surendar-sd/Control-of-Relay-Using-IoT-controller.git'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // EmailJS Form Handling States
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setConnectModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || connectModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen, connectModalOpen]);

  // Handle EmailJS Form Submission
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setSendSuccess(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSending(false);
        setSendSuccess(true);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSending(false);
        setSendSuccess(false);
      });
  };

  return (
    <div className="bg-[#0a0a0a] text-[#efeee9] font-hn selection:bg-[#efeee9] selection:text-black min-h-screen relative overflow-x-hidden">

      {/* Background Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-orb-1" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] animate-orb-2" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] animate-orb-1" />
        <div className="absolute inset-0 bg-cyber-grid opacity-60" />
      </div>

      {/* Scroll Dynamic SVG Line */}
      <div className="fixed left-3 sm:left-6 top-0 bottom-0 z-40 pointer-events-none hidden md:block">
        <svg className="h-full w-4">
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke="rgba(239, 238, 233, 0.15)"
            strokeWidth="2"
          />
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke="#efeee9"
            strokeWidth="2"
            style={{
              strokeDasharray: '1000',
              strokeDashoffset: `${1000 - scrollProgress * 10}`,
              transition: 'stroke-dashoffset 0.1s linear'
            }}
          />
        </svg>
      </div>

      {/* Header Chrome */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 sm:py-5 bg-black/60 backdrop-blur-md border-b border-[#efeee9]/10">
        <a href="#home" className="font-hn text-xl font-bold tracking-wider text-[#efeee9] uppercase">
          Surendar
        </a>

        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="transition-opacity duration-300 hover:opacity-60 text-[#efeee9]">About</a>
          <a href="#experience" className="transition-opacity duration-300 hover:opacity-60 text-[#efeee9]">Experience</a>
          <a href="#skills" className="transition-opacity duration-300 hover:opacity-60 text-[#efeee9]">Skills</a>
          <a href="#achievements" className="transition-opacity duration-300 hover:opacity-60 text-[#efeee9]">Achievements</a>
          <a href="#projects" className="transition-opacity duration-300 hover:opacity-60 text-[#efeee9]">Projects</a>
          <button
            onClick={() => { setSendSuccess(null); setConnectModalOpen(true); }}
            className="px-4 py-2 border border-[#efeee9]/40 rounded-full transition-all duration-300 hover:bg-[#efeee9] hover:text-black cursor-pointer"
          >
            Connect
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="sm:hidden flex h-10 w-10 items-center justify-center text-[#efeee9]"
        >
          {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : (
            <div className="flex h-4 w-6 flex-col justify-between">
              <span className="h-[2px] w-full bg-[#efeee9]" />
              <span className="h-[2px] w-full bg-[#efeee9]" />
              <span className="h-[2px] w-full bg-[#efeee9]" />
            </div>
          )}
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black font-hn select-none pt-24 pb-12 flex flex-col justify-between z-10">
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 anim-fade-in pointer-events-none"
        />

        {/* Layer 10: Marquee Name */}
        <div className="absolute inset-x-0 top-[22vh] sm:top-[18vh] z-10 overflow-hidden pointer-events-none">
          <div className="animate-marquee flex w-max whitespace-nowrap font-hn text-[22vh] sm:text-[34vh] font-black tracking-tighter leading-none text-[#efeee9] opacity-90">
            <span className="pr-[6vw]">SURENDAR SURENDAR SURENDAR</span>
            <span className="pr-[6vw]">SURENDAR SURENDAR SURENDAR</span>
          </div>
        </div>

        {/* Layer 20: Portrait Cutout */}
        <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none anim-rise-in">
          <img
            src="/surendar.png"
            alt="Surendar SD"
            className="h-[80vh] sm:h-[88vh] w-auto object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Hero Footer Cluster */}
        <div className="relative z-30 max-w-6xl w-full mx-auto px-6 sm:px-12 mt-auto pt-48">
          <div className="h-[1px] bg-[#efeee9]/30 mb-6" />
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="pl-2 sm:pl-8">
              <p className="font-bold text-xl sm:text-2xl text-[#efeee9]">IoT & Cybersecurity Enthusiast</p>
              <p className="text-[#efeee9] font-semibold text-sm sm:text-base max-w-lg mt-2 leading-relaxed">
                Engineering secure hardware interfaces, defensive networks, and intelligent embedded systems.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <a href="#projects" className="px-5 py-2.5 rounded-full bg-[#efeee9] text-black text-xs font-bold hover:bg-[#efeee9]/90 transition-colors">
                  View Projects
                </a>
                <a
                  href="/Surendar_SD_Resume.pdf"
                  download="Surendar_SD_Resume.pdf"
                  className="px-5 py-2.5 rounded-full border border-[#efeee9] text-[#efeee9] text-xs font-bold hover:bg-[#efeee9] hover:text-black transition-colors flex items-center gap-2"
                >
                  <Download size={14} /> Download Resume
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-3 self-center sm:self-end">
              <a href="#about" className="p-3 rounded-full border border-[#efeee9]/30 bg-black/40 backdrop-blur-md text-[#efeee9] hover:bg-[#efeee9] hover:text-black transition-all duration-300 animate-bounce-slow">
                <ArrowDown size={20} />
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/surendar-sd" target="_blank" rel="noreferrer" className="text-[#efeee9] hover:opacity-70">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/surendarsd25" target="_blank" rel="noreferrer" className="text-[#efeee9] hover:opacity-70">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Drawer */}
      <div className={`sm:hidden fixed inset-0 z-40 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div onClick={() => setMobileMenuOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-md" />
        <aside className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#111111]/90 backdrop-blur-xl border-l border-[#efeee9]/15 px-8 py-10 transition-transform duration-500 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mt-16 flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#efeee9]/40">Menu</p>
            <nav className="flex flex-col gap-4 text-2xl font-bold">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <button
                onClick={() => { setMobileMenuOpen(false); setConnectModalOpen(true); }}
                className="mt-2 w-full py-3 text-center border border-[#efeee9]/40 rounded-xl bg-[#efeee9] text-black font-semibold text-lg"
              >
                Connect
              </button>
            </nav>
          </div>
        </aside>
      </div>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-[#efeee9]/10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#efeee9]/50 mb-4">01 // About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl sm:text-5xl font-bold mb-6 text-[#efeee9] leading-tight">
              Computer Science & IoT Specialist
            </h3>
            <p className="text-[#efeee9] text-base sm:text-lg leading-relaxed mb-6 font-medium">
              Aspiring Computer Science & Engineering student specializing in IoT at Saveetha Engineering College. Fluent in Tamil, English, and Hindi. Active open-source contributor, GitHub explorer, and CTF player passionate about cybersecurity, penetration testing, and embedded systems.
            </p>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#efeee9]/70 mb-8 font-semibold">
              <MapPin size={14} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
            <a
              href="/Surendar_SD_Resume.pdf"
              download="Surendar_SD_Resume.pdf"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#efeee9] text-[#efeee9] font-bold transition-all duration-300 hover:bg-[#efeee9] hover:text-black cursor-pointer"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <GlowingEdgeCard>
            <div className="p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#efeee9]/50 font-semibold">Languages</span>
                <p className="text-lg font-bold text-[#efeee9] mt-1">Tamil, English, Hindi</p>
              </div>
              <div className="pt-4 border-t border-[#efeee9]/10">
                <span className="text-xs uppercase tracking-wider text-[#efeee9]/50 font-semibold">Institution</span>
                <p className="text-lg font-bold text-[#efeee9] mt-1">Saveetha Engineering College</p>
              </div>
              <div className="pt-4 border-t border-[#efeee9]/10">
                <span className="text-xs uppercase tracking-wider text-[#efeee9]/50 font-semibold">Specialization</span>
                <p className="text-lg font-bold text-[#efeee9] mt-1">B.E. Computer Science w/s IoT (2024–2028)</p>
              </div>
            </div>
          </GlowingEdgeCard>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="relative z-10 py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-[#efeee9]/10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#efeee9]/50 mb-4">02 // Timeline</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Work Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#efeee9] flex items-center gap-2">
              <Briefcase size={20} /> Work Experience
            </h3>

            <div className="relative border-l border-[#efeee9]/20 ml-3 space-y-8 pl-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#efeee9] ring-4 ring-[#0a0a0a]" />

                  <GlowingEdgeCard>
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="text-xl font-bold text-[#efeee9]">{exp.role}</h4>
                        <span className="text-xs font-semibold text-[#efeee9]/60">{exp.period}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#efeee9]/80">{exp.company} — <span className="text-xs font-normal text-[#efeee9]/50">{exp.location}</span></p>

                      <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-[#efeee9]/70">
                        {exp.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </GlowingEdgeCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#efeee9] flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </h3>

            <div className="relative border-l border-[#efeee9]/20 ml-3 space-y-8 pl-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#efeee9] ring-4 ring-[#0a0a0a]" />
                <GlowingEdgeCard>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#efeee9]/50">2024 – 2028</span>
                    <h4 className="text-xl font-bold text-[#efeee9] mt-1">Saveetha Engineering College</h4>
                    <p className="text-sm font-semibold text-[#efeee9]/80 mt-1">B.E. Computer Science Engineering w/s Internet Of Things</p>
                  </div>
                </GlowingEdgeCard>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#efeee9] ring-4 ring-[#0a0a0a]" />
                <GlowingEdgeCard>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#efeee9]/50">2022 – 2024</span>
                    <h4 className="text-xl font-bold text-[#efeee9] mt-1">Nav Bharath Vidyalaya Higher Sec School</h4>
                    <p className="text-sm font-semibold text-[#efeee9]/80 mt-1">Senior Secondary (XII) — PCBM (Percentage: 86.50%)</p>
                  </div>
                </GlowingEdgeCard>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#efeee9] ring-4 ring-[#0a0a0a]" />
                <GlowingEdgeCard>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#efeee9]/50">2020 – 2022</span>
                    <h4 className="text-xl font-bold text-[#efeee9] mt-1">Jawaharlal Nehru Vidyalaya Higher Sec School</h4>
                    <p className="text-sm font-semibold text-[#efeee9]/80 mt-1">Secondary (X) (Percentage: 90.00%)</p>
                  </div>
                </GlowingEdgeCard>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-[#efeee9]/10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#efeee9]/50 mb-4">03 // Skills</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#efeee9]">Technical & Domain Expertise</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlowingEdgeCard>
            <div className="p-8">
              <h4 className="text-xs uppercase tracking-wider text-[#efeee9]/50 font-bold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2.5">
                {PROGRAMMING_LANGUAGES.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-black/40 border border-[#efeee9]/20 text-sm font-semibold text-[#efeee9]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </GlowingEdgeCard>

          <GlowingEdgeCard>
            <div className="p-8">
              <h4 className="text-xs uppercase tracking-wider text-[#efeee9]/50 font-bold mb-4">Web & Tools</h4>
              <div className="flex flex-wrap gap-2.5">
                {WEB_AND_TOOLS.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-black/40 border border-[#efeee9]/20 text-sm font-semibold text-[#efeee9]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </GlowingEdgeCard>

          <GlowingEdgeCard>
            <div className="p-8">
              <h4 className="text-xs uppercase tracking-wider text-[#efeee9]/50 font-bold mb-4">Domain Focus</h4>
              <div className="flex flex-wrap gap-2.5">
                {TECHNICAL_SKILLS.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-black/40 border border-[#efeee9]/20 text-sm font-semibold text-[#efeee9]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </GlowingEdgeCard>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className="relative z-10 py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-[#efeee9]/10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#efeee9]/50 mb-4">04 // Achievements & Certifications</h2>

        {/* Certifications with Adaptable Layout Sizes */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-[#efeee9] flex items-center gap-2">
            <Award className="text-blue-400" size={24} /> Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {CERTIFICATIONS.map((cert, index) => (
              <GlowingEdgeCard key={index} className="h-full">
                <div className="p-6 flex flex-col justify-between h-full">

                  {/* Adaptable Photo Container */}
                  <div className={`w-full ${cert.aspect === 'portrait' ? 'h-64' : 'h-44'} bg-black/80 rounded-lg overflow-hidden relative border border-[#efeee9]/10 mb-4 flex items-center justify-center p-2`}>
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain rounded"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    <Award className="text-[#efeee9]/20 absolute" size={40} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#efeee9] leading-snug">{cert.title}</h4>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#efeee9]/50 mt-4 pt-3 border-t border-[#efeee9]/10">
                    <span className="flex items-center gap-1 text-blue-400 font-semibold">
                      <CheckCircle2 size={13} /> Verified
                    </span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </GlowingEdgeCard>
            ))}
          </div>
        </div>

        {/* Honors & Achievements */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-[#efeee9] flex items-center gap-2">
            <Trophy className="text-yellow-400" size={24} /> Honors & Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((item, index) => (
              <GlowingEdgeCard key={index}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-black/50 border border-[#efeee9]/15 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#efeee9] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#efeee9]/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </GlowingEdgeCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-28 px-6 sm:px-12 max-w-6xl mx-auto border-t border-[#efeee9]/10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#efeee9]/50 mb-4">05 // Projects</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-[#efeee9]">Featured Work</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <GlowingEdgeCard key={idx} className="h-full">
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#4fd1c5] font-bold flex items-center gap-2">
                      {project.icon} {project.category}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-[#efeee9]/60 hover:text-[#4fd1c5] transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <h4 className="text-xl font-bold text-[#efeee9] mb-2">{project.title}</h4>
                  <p className="text-xs font-semibold text-[#efeee9]/40 mb-4">{project.period}</p>
                  <p className="text-sm text-[#efeee9]/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="mb-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-[#efeee9] hover:bg-[#efeee9] hover:text-black transition-all"
                    >
                      <Github size={14} /> View Code on GitHub
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#efeee9]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowingEdgeCard>
          ))}
        </div>
      </section>

      {/* EmailJS Connect Modal */}
      {connectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setConnectModalOpen(false)} className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity" />
          <div className="relative z-10 w-full max-w-lg rounded-[24px] bg-[#141414]/90 backdrop-blur-xl border border-[#efeee9]/20 p-8 sm:p-10 shadow-2xl shadow-black/80">
            <button onClick={() => setConnectModalOpen(false)} className="absolute top-6 right-6 text-[#efeee9]/60 hover:text-[#efeee9] transition-colors">
              <X size={22} />
            </button>
            <h3 className="text-2xl font-bold text-[#efeee9] mb-2">Connect with Surendar</h3>
            <p className="text-sm text-[#efeee9]/70 mb-6">
              Open to collaborating on IoT embedded systems and cybersecurity projects. Let's connect.
            </p>

            {/* Email Success Banner */}
            {sendSuccess === true && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                <CheckCircle size={20} className="shrink-0" />
                <span>Message sent successfully! I will get back to you soon.</span>
              </div>
            )}

            {/* Email Error Banner */}
            {sendSuccess === false && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-sm flex items-center gap-3">
                <X size={20} className="shrink-0" />
                <span>Failed to send email. Please check your EmailJS keys or email directly.</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="block text-xs uppercase tracking-wider text-[#efeee9]/60 mb-1.5 font-bold">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#efeee9]/15 text-[#efeee9] placeholder-[#efeee9]/30 focus:outline-none focus:border-[#efeee9]/50 text-sm"
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-xs uppercase tracking-wider text-[#efeee9]/60 mb-1.5 font-bold">Email</label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#efeee9]/15 text-[#efeee9] placeholder-[#efeee9]/30 focus:outline-none focus:border-[#efeee9]/50 text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#efeee9]/60 mb-1.5 font-bold">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#efeee9]/15 text-[#efeee9] placeholder-[#efeee9]/30 focus:outline-none focus:border-[#efeee9]/50 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#efeee9]/60 mb-1.5 font-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#efeee9]/15 text-[#efeee9] placeholder-[#efeee9]/30 focus:outline-none focus:border-[#efeee9]/50 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 px-6 rounded-xl bg-[#efeee9] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#efeee9]/90 transition-colors mt-2 cursor-pointer disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#efeee9]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a href="mailto:surendarsd25@gmail.com" className="text-sm font-semibold text-[#efeee9] hover:underline flex items-center gap-2">
                <Mail size={16} /> surendarsd25@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/surendar-sd" target="_blank" rel="noreferrer" className="text-[#efeee9]/70 hover:text-[#efeee9]">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/surendarsd25" target="_blank" rel="noreferrer" className="text-[#efeee9]/70 hover:text-[#efeee9]">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 sm:px-12 border-t border-[#efeee9]/10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-[#efeee9]/50">© 2026 Surendar SD. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/surendar-sd" target="_blank" rel="noreferrer" className="text-[#efeee9] hover:opacity-70 transition-colors flex items-center gap-2 text-sm font-medium">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/surendarsd25" target="_blank" rel="noreferrer" className="text-[#efeee9] hover:opacity-70 transition-colors flex items-center gap-2 text-sm font-medium">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="mailto:surendarsd25@gmail.com" className="text-[#efeee9] hover:opacity-70 transition-colors flex items-center gap-2 text-sm font-medium">
            <Mail size={18} /> surendarsd25@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}