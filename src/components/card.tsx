import { CSSProperties } from "react";
import * as css from "../styling/css";
import { translateColor } from "../helper";

/* Behöver ta in en bild som en prop också */
export default function Card(props: Props) {
  // const imageSrc = "../assets/testImg.jpg";
  const imageSrc = props.imgSrc;
  const backgroundColor = translateColor(props.color);

  return (
    <div
      style={{
        ...card,
        backgroundColor: backgroundColor,
        fontSize: props.fontSize + "rem",
      }}
    >
      <img style={cardImage} src={imageSrc} alt="img"></img>
      <p style={{ ...cardTitleStyle, ...css.title }}>
        {formatTitle(props.title)}
      </p>
    </div>
  );
}

function formatTitle(title: string): string {
  if (title.length > 35) {
    const formattedTitle = title.slice(0, 35);
    return formattedTitle + "...";
  } else {
    return title;
  }
}

/* ----- INTERFACE ----- */

interface Props {
  fontSize: number;
  color: "blue" | "orange" | "black" | "yellow" | "beige";
  title: string;
  imgSrc?: string;
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
  top: "calc(100% - 1.8rem)",
  padding: "0 1.5rem",
  fontWeight: 900,
  wordBreak: "break-word",
};
