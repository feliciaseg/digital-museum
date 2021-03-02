import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const style: CSSProperties = {
  fontSize: "1,5rem",
  fontWeight: 900,
  color: "#262730",
  position: "absolute",
  top: "3.2rem",
  left: "5.9rem",
}

interface Props {
  h: string,
  c: string,
}

function Header(props: Props) {
  return (
    <header style = {{flex: "1", height: props.h, backgroundColor: props.c}}>
      <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/`,
          }}
        >
      <span style = {style}>Rijksmuseet</span>
      </Link>
    </header>
  );
}

export default Header;
