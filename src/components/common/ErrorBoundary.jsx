import "./ErrorBoundary.css";
import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-card">
            <AlertTriangle size={42} />

            <h2>Something Went Wrong</h2>

            <p>
              An unexpected error occurred. Please refresh the page
              and try again.
            </p>

            <button onClick={this.handleRefresh}>
              <RefreshCw size={17} />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
