import "./App.css";
import React from "react";
import StartPage from "./routes/StartPage";
//  import ArtworkPage from "./routes/ArtworkPage"
//  import CollectionsPage from "./routes/CollectionsPage"
//  import SearchPage from "./routes/SearchPage"



interface Props {
}

interface State {

}
class App extends React.Component <Props, State> {
  // constructor(props: Props) {
  //   super(props);
  // }
  

  render() {
    return <StartPage/>
  }
}  

export default App;