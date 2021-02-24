import { CSSProperties } from "react";
import Header from "./header";
import arrow from "../arrow.png";
import { yellowBg } from "../css";

const yellowBox: CSSProperties = {
  flex: 1,
  height: "30.5rem",
};

const h2: CSSProperties = {
  margin: 0,
  fontSize: 96,
  fontWeight: 900,
  color: "#262730",
};

const container: CSSProperties = {
  position: "absolute",
  top: 195,
  left: 89,
  display: "flex",
  flexDirection: "column",
};

const input: CSSProperties = {
  outline: "none",
  border: 3,
  borderStyle: "solid",
  borderColor: "#262730",
  height: 52,
  width: 634,
  backgroundColor: "#FAFF70",
  color: "#262730",
  fontWeight: 300,
  fontSize: 24,
  padding: 0,
};

const p: CSSProperties = {
  fontWeight: 300,
  fontSize: 24,
};
const search: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};
const button: CSSProperties = {
  backgroundColor: "#262730",
  color: "#FAFF70",
  fontSize: 24,
  fontWeight: 700,
  height: 52,
  width: 255,
  outline: "none",
  border: 3,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

interface Props {}

function Landing(props: Props) {
  return (
    <div>
      <Header h="16rem" c="#FF9C5B" />
      <div style={container}>
        <h2 style={h2}>
          EXPLORE THE <br />
          DIGITAL MUSEUM
        </h2>
        <p style={p}>
          Search for an artist, an artwork or something else that might peak
          your interest
        </p>
        <div style={search}>
          <input style={input} type="text" />
          <button style={button}>
            SEARCH <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div style={{...yellowBg, ...yellowBox }}/>
    </div>
  );
}

export default Landing;
