import React from "react";

import Landing from "../components/StPlanding";
import Collection from "../components/StPcollection";

interface Props {
  width: any;
}

interface State {}

class StartPage extends React.Component<Props, State> {
  render() {
    console.log("start: " + this.props.width);
    return (
      <>
        <Landing />
        <Collection />
      </>
    );
  }
}

export default StartPage;
