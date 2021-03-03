import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const style: CSSProperties = {
  fontSize: "1,5rem",
  fontWeight: 900,
  color: "#262730",
};

const paddingDesktop: CSSProperties = {
  padding: "0 5.75rem",
};

const paddingTablet: CSSProperties = {
  padding: "0 3.5rem",
};

const paddingMobile: CSSProperties = {
  padding: "0 2rem",
};

interface Props {
  h: string;
  c: string;
  windowWidth: number;
}

function Header(props: Props) {
  if (props.windowWidth > 1024) {
    return (
      <header
        style={{
          display: "flex",
          alignItems: "center",
          height: props.h,
          backgroundColor: props.c,
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/`,
          }}
        >
          <span style={{ ...style, ...paddingDesktop }}>Rijksmuseet</span>
        </Link>
      </header>
    );
  } else if (props.windowWidth > 768) {
    return (
      <header
        style={{
          display: "flex",
          alignItems: "center",
          height: props.h,
          backgroundColor: props.c,
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/`,
          }}
        >
          <span style={{ ...style, ...paddingTablet }}>Rijksmuseet</span>
        </Link>
      </header>
    );
  } else {
    return (
      <header
        style={{
          display: "flex",
          alignItems: "center",
          height: props.h,
          backgroundColor: props.c,
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/`,
          }}
        >
          <span style={{ ...style, ...paddingMobile }}>Rijksmuseet</span>
        </Link>
      </header>
    );
  }
}

export default Header;
