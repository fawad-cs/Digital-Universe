import "./StarfieldBackground.css";

const stars = Array.from({ length: 90 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 3 + 2}s`,
}));

function StarfieldBackground() {
  return (
    <div className="starfield-background" aria-hidden="true">
      <div className="starfield-glow glow-one"></div>
      <div className="starfield-glow glow-two"></div>

      {stars.map((star) => (
        <span
          key={star.id}
          className="starfield-star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default StarfieldBackground;