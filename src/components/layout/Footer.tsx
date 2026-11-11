import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="page mono-label flex flex-wrap justify-between gap-2 py-12 mt-(--space-section) border-t">
      <span>
        © {site.year} {site.name}
      </span>
      <span>
        Gujarat, India · Design inspired by{" "}
        <a href="https://aahil-khan.xyz" className="hover:text-fg">
          aahil-khan.xyz
        </a>
      </span>
    </footer>
  );
}
