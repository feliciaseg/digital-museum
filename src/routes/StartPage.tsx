import React from "react";

import Landing from "../components/StPlanding";
import Collection from "../components/StPcollection";

interface Props {}

interface State {
  data: {};
  isLoaded: boolean;
  error: string;
}

class StartPage extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);

  // }

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
