import { CSSProperties } from "react";
import * as css from "../css";

/* Behöver ta in en bild som en prop också */
export default function Card(props: Props) {
  const imageSrc = "../assets/testImg.jpg";
  let bgColor = switchBgColor(props.color);

  return (
    <div
      style={{
        ...card,
        ...bgColor,
        fontSize: props.fontSize + "rem",
      }}
    >
      <img style={cardImage} src={imageSrc} alt="img"></img>
      <p style={{ ...cardTitleStyle, ...css.title }}>{props.title}</p>
    </div>
  );
}

/**
 * Changes background color based of prop color
 */
function switchBgColor(color: string) {
  switch (color) {
    case "blue":
      return css.blueBg;
    case "orange":
      return css.orangeBg;
    case "black":
      return css.blackBg;
    case "yellow":
      return css.yellowBg;
    case "beige":
      return css.beigeBg;
    default:
      return css.beigeBg;
  }
}

/* ----- INTERFACE ----- */

interface Props {
  fontSize: number;
  color: "blue" | "orange" | "black" | "yellow" | "beige";
  title: string;
}

/* ----- CSS ----- */

const card: CSSProperties = {
  position: "relative",
  height: "100%",
  width: "100%",
  zIndex: 100,
};

const cardImage: CSSProperties = {
  position: "absolute",
  height: "inherit",
  width: "inherit",
  objectFit: "cover",
  objectPosition: "center",
  padding: "1.5rem 1.5rem 2.5rem 1.5rem",
};

const cardTitleStyle: CSSProperties = {
  position: "absolute",
  margin: "0",
  top: "calc(100% - 2rem)",
  padding: "0 1.5rem",
  wordBreak: "break-word",
};
