export const personal = {
  name: "Ashleigh Robie",
  title: "Software Engineer",
  location: "California",
  email: "robie.ashleigh@gmail.com",
  linkedin: "https://www.linkedin.com/in/ashleigh-robie-708a99183",
  github: "",
  summary:
    "4+ years building production-grade systems in clinical and enterprise environments. I bring an ownership mindset, cross-functional fluency, and a track record of delivering when the stakes are high — from LIMS platform engineering to full-stack rescue projects.",
  contactNote:
    "Open to senior engineering roles — especially in clinical, enterprise, or mission-critical systems.",
};

export const stats = [
  { value: "4+",  label: "Years production exp." },
  { value: "30%", label: "Above sprint velocity" },
  { value: "26",  label: "Req. corrections / sprint" },
  { value: "1st", label: "Hackathon — full CS program" },
];

export const skills = [
  {
    group: "Primary",
    items: ["C#", "SQL", "Python", "LIMS Platform Dev", "API Integration", "Data Modeling"],
    level: "hot",
  },
  {
    group: "Proficient",
    items: ["Java", "C++", "Git", "Linux", "CI/CD Pipelines", "Agile / SDLC", "Automated Testing", "System Integration"],
    level: "med",
  },
  {
    group: "Familiar",
    items: ["React.js", "JavaScript", "HTML/CSS", "TensorFlow", "Visual Studio", "PyCharm"],
    level: "base",
  },
  {
    group: "Leadership & Management",
    items: ["Team Leadership & Mentorship", "Stakeholder Management", "Strategic Partnership Development", "Cross-functional Collaboration", "Requirements Gathering & Analysis"],
    level: "med",
  },
];

export const experience = [
  {
    id: "lwi-ad",
    role: "Associate Director",
    company: "Leading with Integrity",
    location: "Remote",
    period: "Mar 2026 — Present  ·  concurrent with full-time role",
    bullets: [
      "Bridges the gap between ambitious, self-funded students and the resources they need to succeed — connecting resilient leaders to opportunities aligned with the organization's core values.",
      "Manages strategic partnerships and community outreach to identify and support high-potential students navigating their education independently.",
      "Operates at the intersection of program leadership and external relations, driving both relationship development and mission execution.",
    ],
  },
  {
    id: "shoot-indoors",
    role: "Web Developer",
    company: "Shoot Indoors",
    location: "Remote",
    period: "Jan 2026 — Present  ·  part-time",
    bullets: [
      "Designing and developing the Go Shoot Indoors franchise website with a focus on user engagement, visual polish, and cross-device usability.",
      "Builds client-facing features using HTML, CSS, and JavaScript — translating stakeholder requirements into functional, well-crafted interfaces.",
      "Collaborates directly with franchise clients to align design decisions with business goals and user needs.",
    ],
  },
  {
    id: "neo-swe2",
    role: "Software Engineer II",
    company: "NeoGenomics",
    location: "Remote",
    period: "Oct 2024 — Present",
    bullets: [
      "Functions as de facto engineering lead over a team of 2 spanning onshore, offshore, and contract resources — without the formal title.",
      "Directs full delivery lifecycle for enterprise LIMS features supporting complex, high-availability clinical workflows: requirements through deployment and continuous improvement.",
      "Reviewed and corrected an average of 26 requirements per sprint alongside BA teams, catching domain errors before they became downstream defects.",
      "Consistently drives sprint performance averaging 30% above sprint capacity — combining velocity with quality ownership.",
      "Conducts code reviews, mentors developers, and promotes engineering standards that raise the floor for the entire team.",
      "Trusted by leadership to deliver when the stakes are high; regularly sought out for candid ground-level perspective on project health.",
    ],
  },
  {
    id: "neo-support",
    role: "Software Support Engineer",
    company: "NeoGenomics",
    location: "Remote",
    period: "Aug 2021 — Oct 2024",
    bullets: [
      "Delivered C# and SQL enhancements to a live, production-grade LIMS platform supporting complex scientific workflows.",
      "Biology minor and prior lab bench experience provided rare domain fluency — translating directly into better requirements and software built around real lab workflows.",
      "Served as technical liaison for NGS workflow implementation in Clarity LIMS; managed go-live coordination across consultants and lab personnel.",
      "Developed company-wide troubleshooting documentation for label printers; reduced reliance on external vendor support and decreased printer-related downtime.",
      "As a junior engineer, was requested by leadership for daily standing meetings on team health and project status.",
    ],
  },
  {
    id: "neo-lab",
    role: "Molecular Laboratory Technician",
    company: "NeoGenomics",
    location: "Carlsbad, CA",
    period: "Jul 2020 — May 2021",
    bullets: [
      "Joined on the night shift (8pm–6am) processing ~13k COVID-19 tests per shift during the pandemic — a deliberate choice to contribute.",
      "Took initiative to reprogram lab instrumentation to improve throughput, catching the attention of Director-level leadership.",
      "Transition led directly to an internal move into a software engineering role at the same company.",
    ],
  },
  {
    id: "hsu-helpdesk",
    role: "Technology Help Desk",
    company: "Humboldt State University",
    location: "Arcata, CA",
    period: "Mar 2018 — May 2020",
    bullets: [
      "Provided front-line technical support to students and faculty while completing undergraduate studies.",
      "Consistently turned support tickets into learning opportunities — explaining fixes rather than just applying them.",
    ],
  },
];

export const projects = [
  {
    id: "shoot-indoors-web",
    number: "01",
    title: "Go Shoot Indoors Website",
    description:
      "Designing and developing the franchise website for Shoot Indoors — focused on user engagement, visual polish, and cross-device usability using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Client Work"],
    link: "",
  },
  {
    id: "rescue-app",
    number: "02",
    title: "Full-Stack Web App Rescue",
    description:
      "Independently stepped in to rescue and deliver a failing full-stack web application for an outside organization — taking the project from stalled to launch working weekends on personal time.",
    tags: ["Full-Stack", "Part-time", "Solo"],
    link: "",
  },
  {
    id: "hackathon",
    number: "03",
    title: "Student–Business Connector",
    description:
      "Built a web application connecting CS students with businesses using React.js. Took 1st place competing against the full CS program at Humboldt State's Annual Hackathon.",
    tags: ["React.js", "1st Place", "Hackathon"],
    link: "",
  },
  {
    id: "ml-capstone",
    number: "04",
    title: "Respiratory Disease ML Diagnosis",
    description:
      "Senior capstone — developed a machine learning model using TensorFlow and Google Colab to diagnose respiratory diseases from chest X-ray images.",
    tags: ["TensorFlow", "Python", "ML"],
    link: "",
  },
];

export const education = [
  {
    id: "hsu",
    school: "Humboldt State University",
    location: "Arcata, CA",
    period: "2016 — 2020",
    degree: "B.S. Computer Science",
    minor: "Biology Minor",
    gpa: "3.26",
    highlights: [
      {
        title: "🏆 1st Place — Annual Hackathon",
        description: "Built a React.js web app connecting CS students with businesses. Won against the full CS program.",
      },
      {
        title: "Senior Capstone — ML Respiratory Diagnosis",
        description: "Applied TensorFlow and Google Colab to classify respiratory diseases from chest X-ray images.",
      },
    ],
  },
];