import { CSSProperties } from "react";


const style: CSSProperties = {
  fontSize: 24,
  position: "absolute",
  top: 51,
  left: 95,
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
