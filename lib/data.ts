import adminDashboardImg from "@/public/admin-dashboard.png";
import citroneDashboardImg from "@/public/dashboard.png";
import chineseImg from "@/public/chinese.png";
import HooBank from "@/public/hoo_bank.png";
import Winnov8 from "@/public/winnov8.png";

// nav links
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    }
] as const;

// projects data
export const projectsData = [
    {
        title: "Winnov8",
        description: "Winnov8 drives innovation and transformation by bridging the gap between talent and opportunity.",
        tags: ["React JS", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
        imageUrl: Winnov8,
    },
    {
        title: "Admin Dashboard",
        description:
        "A financial dashboard that offers insights into tracking transaction data, user activities and many more.",
        tags: ["React JS", "Tailwind CSS"],
        imageUrl: adminDashboardImg,
    },
    {
        title: "Citrone Dashboard",
        description:
        "A learning management dashboard that allows users to take courses, quiz and submit assignments.",
        tags: ["React JS", "Tailwind CSS"],
        imageUrl: citroneDashboardImg,
    },
    {
        title: "Hoo Bank",
        description:
        "A responsive consisting of a stunning hero section, reusable feature sections with call-to-action buttons, testimonials and more!",
        tags: ["React JS", "Tailwind CSS"],
        imageUrl: HooBank,
    },
    {
        title: "David Chu's",
        description: "Chinese restaurant that allows users to view the menu and call to order.",
        tags: ["HTML", "Bootstrap", "JS", "Ajax"],
        imageUrl: chineseImg,
    },
] as const;

// skills data
export const skillsData = [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next.js",
    "Git",
    "Bitbucket",
    "Tailwind CSS",
    "Chakra UI",
    "Shadcn UI",
    "Bootstrap",
    "Framer Motion"
] as const;