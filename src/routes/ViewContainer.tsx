import React, { Suspense } from "react";
import StartPage from "../routes/StartPage";
import CollectionsPage from "../routes/CollectionsPage";
import ArtworkPage from "../routes/ArtworkPage";
import SearchPage from "../routes/SearchPage";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../components/errorBoundary";

interface Props {}

interface State {}

class ViewContainer extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={StartPage} />

        <Route path="/search/:search?" component={SearchPage} />
        <ErrorBoundary>
          <Route exact path="/artwork/:object" component={ArtworkPage} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Route exact path="/collection/:collection" component={CollectionsPage} />
        </ErrorBoundary>

        <h2> Page not found</h2>
      </Switch>
    );
  }
}

export default ViewContainer;
