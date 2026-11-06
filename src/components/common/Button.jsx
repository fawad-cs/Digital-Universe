import { ArrowUpRight } from "lucide-react";
import "./Button.css";

function Button({
  children,
  href = "#",
  variant = "primary",
  icon = true,
  className = "",
  target,
}) {
  return (
    <a
      href={href}
      className={`custom-btn btn-${variant} ${className}`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <span>{children}</span>

      {icon && <ArrowUpRight size={18} />}
    </a>
  );
}

export default Button;