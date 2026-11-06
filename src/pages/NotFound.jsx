import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import "./pages.css";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-icon">
          <AlertCircle size={35} />
        </span>

        <h1>4<span>0</span>4</h1>

        <h2>Lost in the Universe?</h2>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="not-found-button">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;