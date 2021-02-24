import { CSSProperties } from "react";
import Header from "./header"


const yellow: CSSProperties = {
    flex: 1,
    height: "30.5rem",
    backgroundColor: "#FAFF70",
}

const h2: CSSProperties = {
    margin:0,
    position: "absolute",
    top: 222,
    left: 89,
    fontSize: 96,
}



interface Props {

}

function Landing(props: Props) {
  return (
    <div>
    <h2 style = {h2}> EXPLORE THE <br/>DIGITAL MUSEUM</h2>
    <Header h="16rem" c="#FF9C5B" />
    <div style = {yellow}/>
    </div>
  );
}

export default Landing;
