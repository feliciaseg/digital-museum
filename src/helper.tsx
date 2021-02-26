export default function translateColor(color: string): string {
  switch (color) {
    case "blue":
      return "#009AD1";
    case "orange":
      return "#FF9C5B";
    case "black":
      return "#262730";
    case "yellow":
      return "#FAFF70";
    case "beige":
      return "#E2D0BA";
    default:
      return "white";
  }
}
