import React from "react";

import Landing from "../components/SPlanding";
import Collection from "../components/SPcollection";

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
      <div>
    <Landing />
    <Collection />
    </div>
    );
  }
}

export default StartPage;
