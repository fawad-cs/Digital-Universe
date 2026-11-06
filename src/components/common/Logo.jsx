import "./Logo.css";

function Logo({ text = "FAWAD", className = "" }) {
  return (
    <a
      href="#home"
      className={`brand-logo ${className}`}
      aria-label="Fawad - Home"
    >
      {text}<span>.</span>
    </a>
  );
}

export default Logo;