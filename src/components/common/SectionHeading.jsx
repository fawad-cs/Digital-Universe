import "./SectionHeading.css";

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}

      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;