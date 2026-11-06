
import { GitBranch, Globe, Mail } from "lucide-react";
import "./SocialIcons.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <GitBranch size={20} />,
    url: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: <Globe size={20} />,
    url: "https://www.linkedin.com/",
  },
  {
    name: "Email",
    icon: <Mail size={20} />,
    url: "mailto:fawadk.shlamani@gmail.com",
  },
];

function SocialIcons() {
  return (
    <div className="social-icons">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="social-icon"
          aria-label={social.name}
          target={social.name === "Email" ? undefined : "_blank"}
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
