import React from "react";

import { CSSProperties } from "react";
import Landing from "../components/landing";

interface Props {}

interface State {
  data: {};
  isLoaded: boolean;
  error: string;
}
const container: CSSProperties = {
  flex: 1,
  height: "30.5rem",
  backgroundColor: "#FAFF70",
};
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
