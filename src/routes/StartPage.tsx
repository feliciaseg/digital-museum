import React from "react";

import Landing from "../components/StPlanding";
import Collection from "../components/StPcollection";

interface Props {}

interface State {

}

class StartPage extends React.Component<Props, State> {
  render() {
    return (
      <>
    <Landing/>
    <Collection />
    </>
    );
  }
}

export default StartPage;
