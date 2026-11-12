export const site = {
  name: "Vaibhav Panchal",
  title: "AI/ML Developer",
  description:
    "AI/ML Developer at TestGrid working on the vision models and tooling behind CoTester. Python, computer vision, LLM systems and AI agent testing.",
  url: "https://portfolio-4gke.vercel.app",
  email: "vaibhavpanchal1808@gmail.com",
  github: "https://github.com/vaibhav-panchal8277",
  linkedin: "https://www.linkedin.com/in/vaibhav-panchal-7a2381221/",
  blog: "https://medium.com/@vaibhavpanchal1808",
  resume: "/Vaibhav_Panchal_Resume.pdf",
  // A square file in public/. Set to null to fall back to the VP monogram.
  photo: "/vaibhav-photo.jpg" as string | null,
  year: new Date().getFullYear(),
};

export const nav = [
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Counted at build time from the TestGrid start date (May 2026), so it stays current on each deploy.
const testgridStart = { year: 2026, month: 4 }; // month is 0-based: 4 = May
const now = new Date();
const testgridMonths = Math.max(
  1,
  (now.getFullYear() - testgridStart.year) * 12 + now.getMonth() - testgridStart.month,
);

export const stats = [
  { value: String(testgridMonths).padStart(2, "0"), label: "Months building at TestGrid" },
  { value: "05", label: "Tool releases shipped" },
  { value: "02", label: "Research projects in vision and security" },
  { value: "98.4%", label: "Accuracy on my hybrid intrusion detector" },
];
