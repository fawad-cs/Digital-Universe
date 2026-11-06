import useReveal from "../../hooks/useReveal";
import useReducedMotion from "../../hooks/useReducedMotion";

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) {
  const { elementRef, isVisible } = useReveal();
  const reducedMotion = useReducedMotion();

  const visible = isVisible || reducedMotion;

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${direction} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;