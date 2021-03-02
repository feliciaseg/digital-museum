import StartPage from "../routes/StartPage";
import CollectionsPage from "../routes/CollectionsPage";
import ArtworkPage from "../routes/ArtworkPage";
import SearchPage from "../routes/SearchPage";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../components/errorBoundary";
import useWindowDimensions from "../components/windowDimensions";

function ViewContainer() {
  const width = useWindowDimensions();
  return (
    <Switch>
      <Route exact path="/">
        <StartPage width={width} />
      </Route>

      <Route path="/search/:search?">
        <SearchPage width={width} />
      </Route>
      <Route exact path="/artwork/:object">
        <ErrorBoundary>
          <ArtworkPage width={width} />
        </ErrorBoundary>
      </Route>
      <Route exact path="/collection/:collection">
        <ErrorBoundary>
          <CollectionsPage width={width} />
        </ErrorBoundary>
      </Route>

      <h2> Page not found</h2>
    </Switch>
  );
}

export default ViewContainer;
