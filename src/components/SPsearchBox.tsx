import React from "react";
import { CSSProperties } from "react";
// import { Link } from "react-router-dom";
import { blackBg } from "../css";
import Button from "./button";

export default function SearchBox(props: Props) {
  function handleClick() {
    console.log("button clicked");
  }

  return (
    <div style={{ ...container, ...blackBg }}>
      <div style={search}>
        <input style={{ ...blackBg, ...input }} type="text" />
        {/* <Link style = {{textDecoration: "none"}} to="/search"> */}
        {/* <button style={button} onClick={handleClick}>
          SEARCH <img src={arrow} alt="arrow" />
        </button> */}
        <Button
          type="search"
          text="search"
          backgroundColor="orange"
          textColor="black"
          fontSize={1.2}
        />
        {/* </Link> */}
      </div>
      <div style={text}>
        <p style={{ margin: 0 }}> SEARCH RESULTS FOR "{props.searchResult}" </p>
        <p style={{ margin: 0 }}> {props.nmbrOfArtworks} ARTWORKS </p>
      </div>
    </div>
  );
}

/* ----- INTERFACE ----- */
interface Props {
  searchResult: string;
  nmbrOfArtworks: number;
}

/* ----- CSS ----- */

const container: CSSProperties = {
  flex: 1,
  height: 255,
  paddingRight: "6.3rem",
  paddingLeft: "5.1rem",
  paddingTop: "2.6rem",
  paddingBottom: "2.1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const search: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "57.4rem",
};

const input: CSSProperties = {
  outline: "none",
  border: 3,
  borderStyle: "solid",
  borderColor: "#FF9C5B",
  height: "3.4rem",
  width: "39.6rem",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
  padding: 0,
};
const button: CSSProperties = {
  backgroundColor: "#FF9C5B",
  color: "#262730",
  fontSize: "1.5rem",
  fontWeight: 700,
  height: "3.25rem",
  width: "15.9rem",
  outline: "none",
  border: 3,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const text: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
};
