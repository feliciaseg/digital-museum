import React from "react";
import StartPage from "../routes/StartPage";
import ArtworkPage from "../routes/ArtworkPage";
import CollectionsPage from "../routes/CollectionsPage";
import SearchPage from "../routes/SearchPage";
import { Route, Switch } from "react-router-dom";

interface Props {}

interface State {}

class ViewContainer extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/collection/:collection" component={CollectionsPage} />
        <Route  path="/search/:search?" component={SearchPage} />
        <Route exact path="/artwork/:object" component={ArtworkPage} />
        <h2> Page not found</h2>
      </Switch>
    );
  }
}

export default ViewContainer;
