export const config = {
  name: 'BigD-Code',
  codename: '_B1gD_',
  title: 'Full Stack Developer & Ethical Hacker',
  description: {
    hero: 'Building secure, scalable, and beautiful digital experiences.',
    about: "I'm a passionate developer with 3+ years of experience in full-stack development and 5+ years in security research. I love creating interactive 3D experiences and breaking things (ethically).",
  },
  email: 'BigD-Code@proton.me',
  phone: '+39 3476203625',
  location: 'Italy',
  timezone: 'Europe/Rome',
  
  social: {
    twitter: 'https://x.com/Bigd_Code',
    linkedin: 'https://www.linkedin.com/public-profile/settings',
    instagram: 'https://www.instagram.com/its_thebig_motherfuckin_d',
    github: 'https://github.com/BigD-Code',
    whatsapp: 'https://api.whatsapp.com/send?phone=393476203625',
  },
  
  skills: [
    { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
    { name: 'Vue.js', level: 90, category: 'frontend', icon: '💚' },
    { name: 'TypeScript', level: 92, category: 'frontend', icon: '📘' },
    { name: 'Three.js', level: 88, category: 'frontend', icon: '🎨' },
    { name: 'Tailwind CSS', level: 94, category: 'frontend', icon: '🎨' },
    { name: 'Node.js', level: 93, category: 'backend', icon: '🟢' },
    { name: 'Python', level: 90, category: 'backend', icon: '🐍' },
    { name: 'PostgreSQL', level: 85, category: 'backend', icon: '🐘' },
    { name: 'MongoDB', level: 87, category: 'backend', icon: '🍃' },
    { name: 'Penetration Testing', level: 92, category: 'security', icon: '🔓' },
    { name: 'Hardware Hacking', level: 88, category: 'security', icon: '🔌' },
    { name: 'RFID/NFC', level: 90, category: 'security', icon: '📡' },
    { name: 'OSCP', level: 85, category: 'security', icon: '🛡️' },
    { name: 'Docker', level: 89, category: 'tools', icon: '🐳' },
    { name: 'Git', level: 95, category: 'tools', icon: '📦' },
    { name: 'Linux', level: 93, category: 'tools', icon: '🐧' },
  ],
  
  projects: [
    {
      id: 1,
      name: 'Ghost Protocol',
      description: 'Corporate manipulation exposure system with real-time data analysis',
      longDescription: 'A comprehensive system designed to expose corporate manipulation of global financial markets through advanced data analysis and visualization.',
      status: 'ACTIVE',
      progress: 73,
      tech: ['React', 'Node.js', 'WebSocket', 'Three.js'],
      image: '/projects/ghost-protocol.jpg',
      link: 'https://github.com/BigD-Code/ghost-protocol',
      featured: true,
    },
    {
      id: 2,
      name: 'Darknet Revolution',
      description: 'Secure whistleblower communication platform',
      longDescription: 'Building secure, encrypted communication channels for whistleblowers to safely expose corruption and injustice.',
      status: 'PLANNING',
      progress: 42,
      tech: ['Vue.js', 'Python', 'Encryption', 'Tor'],
      image: '/projects/darknet-revolution.jpg',
      link: 'https://github.com/BigD-Code/darknet-revolution',
      featured: true,
    },
    {
      id: 3,
      name: 'Matrix Terminal',
      description: 'Interactive 3D portfolio with cyberpunk aesthetics',
      longDescription: 'A visually stunning portfolio featuring 3D animations, particle effects, and a cyberpunk-inspired design.',
      status: 'COMPLETED',
      progress: 100,
      tech: ['Three.js', 'React', 'GSAP', 'Tailwind'],
      image: '/projects/matrix-terminal.jpg',
      link: 'https://github.com/BigD-Code/matrix-terminal',
      featured: true,
    },
    {
      id: 4,
      name: 'RFID Hacker Toolkit',
      description: 'Hardware toolkit for RFID/NFC security research',
      longDescription: 'A comprehensive hardware and software toolkit for analyzing and testing RFID/NFC security systems.',
      status: 'COMPLETED',
      progress: 100,
      tech: ['ESP32', 'C++', 'Python', 'PCB Design'],
      image: '/projects/rfid-toolkit.jpg',
      link: 'https://github.com/BigD-Code/rfid-toolkit',
      featured: false,
    },
  ],
  
  experience: [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building web applications and 3D experiences for clients worldwide.',
    },
    {
      id: 2,
      role: 'Security Researcher',
      company: 'Independent',
      period: '2021 - Present',
      description: 'Conducting penetration tests and hardware security research.',
    },
  ],
  
  quotes: [
    {
      text: 'Control is an illusion.',
      author: 'Mr. Robot',
    },
    {
      text: 'The best way to predict the future is to invent it.',
      author: 'Alan Kay',
    },
  ],
}

export type Config = typeof config
export type Skill = typeof config.skills[number]
export type Project = typeof config.projects[number]
