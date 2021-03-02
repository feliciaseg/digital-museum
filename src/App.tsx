import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ViewContainer from "./routes/ViewContainer";
import ErrorBoundary from "./components/errorBoundary";
class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <ViewContainer />
        </ErrorBoundary>
      </Router>
    );
  }
}

export default App;
