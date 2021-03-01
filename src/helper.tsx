export function translateColor(color: string): string {
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

export async function fetchSearchData(searchTerm: string) {
  const url: string = `https://www.rijksmuseum.nl/api/en/collection?key=dZz20am8&q=${searchTerm}&imgonly=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.artObjects;
}

export async function fetchObjectData(object: string) {
  const url: string = `https://www.rijksmuseum.nl/api/en/collection/${object}?key=dZz20am8`;
  const response = await fetch(url);
  const data = await response.json();
  return data.artObject;
}
