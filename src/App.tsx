
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import ViewContainer from "./routes/ViewContainer";

interface Props {}

interface State {}
class App extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <ViewContainer/>
      </Router>
    );
  }
}

export default App;
