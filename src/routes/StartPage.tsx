import React from "react";

import Landing from "../components/SPlanding";

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
    <Landing/>

    );
  }
}

export default StartPage;
