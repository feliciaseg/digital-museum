import { CSSProperties } from "react";

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
      <span style = {style}>Rijksmuseet</span>
    </header>
  );
}

export default Header;
