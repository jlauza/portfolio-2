import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jayson Lauza",
  initials: "JL",
  url: "https://lauzatech.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer, loves coding and building things. Sometimes technical support.",
  summary:
    "[I am actively coding and building things](/#education). One project that I am working on is a Saas platform for dance studios to help manage, enrol, collect payments, and more. In the past, [I pursued Software Development. A course that focuses on building softwares alone](/#education). With a [focus on clean, scalable, and high-performance solutions](/#education), I ensure that every project meets modern web standards while delivering [seamless user experiences](/#education). Whether it's a dynamic web app or a business site, [I bring efficiency and reliability to the digital space.](/#education)",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Nest.js",
    "Express.js",
    "Bun.js",
    "Typescript",
    "Node.js",
    "Docker",
    "SQL",
    "Redis",
    "MongoDB",
    "PHP",
    "WordPress",
    "Laravel",
    "ES6 Javascript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "lauzajayson@gmail.com",
    tel: "+639513147421",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jlauza",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lauzatech",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@lauzatech",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "Six Eleven Global Services",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "General Santos City, PH",
    //   title: "Virtual Assistant",
    //   logoUrl: "/sixeleven.png",
    //   start: "Feb 2012",
    //   end: "Feb 2016",
    //   description:
    //     "Provided administrative support to clients, including data entry, scheduling, and correspondence. Assisted in managing client accounts and maintaining accurate records. Conducted research and compiled reports as needed. Collaborated with team members to ensure smooth operations and timely project completion.",
    // },
    {
      company: "Fantasy Fitness And Dance",
      href: "https://fantasyfitnessanddance.com/",
      badges: [],
      location: "Remote",
      title: "Web Developer & Administrator, IT Technical Consultant",
      logoUrl: "/fantasyfitnessanddance.png",
      start: "Feb 2016",
      end: "Present",
      description:
        "Implement website updates and maintenance, including fixes and performance improvements. Provide technical support and troubleshooting for website-related issues. Conduct regular website audits to ensure optimal performance and security. Stay up-to-date with industry trends and best practices in web development.",
    },
    {
      company: "Focused.com (Leader Publishing Worldwide)",
      badges: [],
      href: "https://focused.com",
      location: "Remote",
      title: "Technical Support Specialist, WordPress Developer",
      logoUrl: "/focused.png",
      start: "May 2019",
      end: "Sep 2024",
      description:
        "Developed and maintained WordPress websites for various clients. Provided technical support and troubleshooting for website-related issues. Collaborated with cross-functional teams to deliver high-quality web solutions. Conducted regular website audits to ensure optimal performance and security.",
    },
    {
      company: "N-Lite Sports",
      href: "https://nlitesports.com/signin",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer (MongoDB, Nest, React, Node)",
      logoUrl: "/nlite.png",
      start: "Feb 2021",
      end: "Oct 2024",
      description:
        "Developed features and maintained a full-stack web application using MongoDB, Nest.js, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality web solutions. Conducted regular code reviews and provided feedback to team members. Implemented best practices for code quality and performance optimization.",
    },
  ],
  education: [
    {
      school: "AMA Computer Learning College",
      href: "http://www.aclc.edu.ph",
      degree: "Software Developmemt",
      logoUrl: "/aclc.png",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Pro Dance Suite",
      href: "https://pro-dance-suite.vercel.app/",
      dates: "Oct 2024 - Ongoing",
      active: true,
      description:
        "A SaaS platform for dance studios to help manage, enrol, collect payments, and more.",
      technologies: [
        "Next.js",
        "React",
        "Redis",
        "Node.js",
        "TailwindCSS",
        "MUI",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pro-dance-suite.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
