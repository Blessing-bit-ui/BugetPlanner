import { Link } from "react-router-dom";
import "./Footer.css";

const sections = [
  {
    title: "Explore",
    links: [
      { label: "Benefits", to: "/benefits" },
      { label: "Everyday money", to: "/everyday" },
      { label: "Savings", to: "/saving" },
    ],
  },
  {
    title: "Plan ahead",
    links: [
      { label: "Pensions", to: "/pension" },
      { label: "Homes", to: "/homes" },
      { label: "Work", to: "/work" },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <Link className="site-footer__wordmark" to="/">
            MONEY <span>PLANNER</span>
          </Link>
          <p>Clear guidance for the money decisions that shape everyday life.</p>
        </div>

        {sections.map((section) => (
          <nav
            aria-label={section.title}
            className="site-footer__section"
            key={section.title}
          >
            <h2>{section.title}</h2>
            <ul>
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="site-footer__bottom">
        <p>General information only. Consider getting regulated financial advice for decisions specific to you.</p>
        <span>© {new Date().getFullYear()} Money Planner</span>
      </div>
    </footer>
  );
}

export default Footer;