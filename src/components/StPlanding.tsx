import React, { Component, CSSProperties} from "react";
import Header from "./header";
import { yellowBg } from "../css";
import { Link, RouteComponentProps } from "react-router-dom";
import Button from "../components/button";



interface Props {}
interface State {
  inputValue: string;
}


export default class Landing extends Component<Props, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
    
  }
  render() {


    return (
      <div>
        <Header h="16rem" c="#FF9C5B" />
        <div style={containerL}>
          <h2 style={h2L}>
            EXPLORE THE <br />
            DIGITAL MUSEUM
          </h2>
          <p style={pL}>
            Search for an artist, an artwork or something else that might peak
            your interest
          </p>
          <div style={searchL}>
            <input
              onChange={(event) => this.setState({inputValue: event.target.value})}
              style={inputL}
              type="text"
            />
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `/search/${this.state.inputValue}`,
              }}
            >
              <Button
                type="search"
                text="SEARCH"
                backgroundColor="black"
                textColor="yellow"
                fontSize={1.5}
              />
            </Link>
          </div>
        </div>
        <div style={{ ...yellowBg, ...yellowBoxL }} />
      </div>
    );
  }
}

//HEADER SMALL
//<Header h = "7.75rem" c = "#FF9C5B"/>
//lägg till props för fontsize också


/* ----- CSS ----- */
const yellowBoxL: CSSProperties = {
  flex: 1,
  height: "30.5rem",
};

const yellowBoxM: CSSProperties = {
  flex: 1,
  height: "24rem",
}

const yellowBoxS: CSSProperties = {
  flex: 1,
  height: "17.1rem",
}

const h2L: CSSProperties = {
  margin: 0,
  fontSize: "6rem",
  lineHeight: 1.2,
  fontWeight: 900,
  color: "#262730",
};

const h2M: CSSProperties = {
  margin: 0,
  fontSize: "4rem",
  lineHeight: 1.2,
  fontWeight: 900,
  color: "#262730",
};

const h2S: CSSProperties = {
  margin: 0,
  fontSize: "2.25rem",
  lineHeight: 1.2,
  fontWeight: 900,
  color: "#262730",
};

const containerL: CSSProperties = {
   position: "absolute",
   top: "12.2rem",
   left: "5.5rem",
    display: "flex",
    flex:1,
    flexDirection: "column",
};
const containerM: CSSProperties = {
   position: "absolute",
   top: "12.2rem", //ÄNDRA UT EFTER HEADER
   left: "3rem",
    display: "flex",
    flex:1,
    flexDirection: "column",
};
const containerS: CSSProperties = {
   position: "absolute",
   top: "5.5rem",
   left: "1.25rem",
    display: "flex",
    flex:1,
    flexDirection: "column",
};


const inputL: CSSProperties = {
  outline: "none",
  border: 3,
  borderStyle: "solid",
  borderColor: "#262730",
  height: "3.25rem",
  width: "39.5rem",
  backgroundColor: "#FAFF70",
  color: "#262730",
  fontWeight: 300,
  fontSize: "1.5rem",
  padding: 0,
};

const inputM: CSSProperties = {
  outline: "none",
  border: 3,
  borderStyle: "solid",
  borderColor: "#262730",
  height: "2rem",
  width: "30rem",
  backgroundColor: "#FAFF70",
  color: "#262730",
  fontWeight: 300,
  fontSize: "1.5rem",
  padding: 0,
};

const inputS: CSSProperties = {
  outline: "none",
  border: 2,
  borderStyle: "solid",
  borderColor: "#262730",
  height: "1.7rem",
  width: "17rem",
  backgroundColor: "#FAFF70",
  color: "#262730",
  fontWeight: 300,
  fontSize: "0.8rem",
  padding: 0,
};


const pL: CSSProperties = {
  fontWeight: 300,
  fontSize: "1.5rem",
};

const pM: CSSProperties = {
  fontWeight: 300,
  fontSize: "1.2rem",
};

const pS: CSSProperties = {
  fontWeight: 300,
  fontSize: "0.8rem",
};


const searchL: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};
const searchM: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const searchS: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
