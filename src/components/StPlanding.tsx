import React, { CSSProperties, useState } from "react";
import Header from "./header";
import { yellowBg } from "../css";
import { Link } from "react-router-dom";
import Button from "../components/button";

export default function Landing() {
  const [inputValue, setInputValue] = useState<string>("");

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
          <input
            onChange={(event) => setInputValue(event.target.value)}
            style={input}
            type="text"
          />
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/search`,
              state: inputValue,
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
      <div style={{ ...yellowBg, ...yellowBox }} />
    </div>
  );
}

/* ----- CSS ----- */
const yellowBox: CSSProperties = {
  flex: 1,
  height: "30.5rem",
};

const h2: CSSProperties = {
  margin: 0,
  fontSize: "6rem",
  lineHeight: 1.2,
  fontWeight: 900,
  color: "#262730",
};

const container: CSSProperties = {
  position: "absolute",
  top: "12.2rem",
  left: "5.5rem",
  display: "flex",
  flexDirection: "column",
};

const input: CSSProperties = {
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

const p: CSSProperties = {
  fontWeight: 300,
  fontSize: "1.5rem",
};
const search: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};
const button: CSSProperties = {
  backgroundColor: "#262730",
  color: "#FAFF70",
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
