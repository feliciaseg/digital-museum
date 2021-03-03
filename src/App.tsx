import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ViewContainer from "./routes/ViewContainer";
import ErrorBoundary from "./components/errorBoundary";
import ScrollToTop from "./components/scrollToTop";
class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <ScrollToTop>
            <ViewContainer />
          </ScrollToTop>
        </ErrorBoundary>
      </Router>
    );
  }
}

export default App;
