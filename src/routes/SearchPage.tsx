import React, { CSSProperties } from "react";
import Header from "../components/header";
import SearchBox from "../components/SPsearchBox";
import { RouteComponentProps } from "react-router-dom";
import Card from "../components/card";
import { yellowBg } from "../css";

interface Props {}

interface State {
  inputValue: any;
  loading: boolean;
  APIdata: any; //Vad är det för typ egentligen???
}

class SearchPage extends React.Component<Props & RouteComponentProps, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: this.props.location.state,
      loading: true,
      APIdata: {},
    };
  }

  async componentDidMount() {
    const url: string = `https://www.rijksmuseum.nl/api/en/collection?key=dZz20am8&q=${this.state.inputValue}&imgonly=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ APIdata: data, loading: false });
    console.log(this.state.APIdata.artObjects);
  }

  createCards() {
    let cards: JSX.Element[] = [];
    for (let i = 0; i < this.state.APIdata.artObjects.length; i++) {
      if (i === 6) {
        break;
      }
      let artist: string = this.state.APIdata.artObjects[i]
        .principalOrFirstMaker;
      let image: string = this.state.APIdata.artObjects[i].headerImage.url;
      cards.push(
        <div style={cardContainer} key={i}>
          <Card color="orange" fontSize={2} title={artist} imgSrc={image} />
        </div>
      );
    }
    return cards;
  }

  render() {
    console.log(this.state.loading);
    console.log(this.state.inputValue);
    return (
      <>
        {this.state.loading ? (
          <div> Loading.....</div> //Här kanske vi skickar in en ''loading'' komponent istället?
        ) : (
          <>
            <Header h="8.375rem" c="#009ad1" />
            <SearchBox
              searchResult={this.state.inputValue}
              nmbrOfArtworks={this.state.APIdata.count}
            />
            <div style={{ ...container, ...yellowBg }}>
              {this.createCards()}
            </div>
          </>
        )}
      </>
    );
  }
}

const container: CSSProperties = {
  height: "75.1rem",
  paddingTop: "2.9rem",
  paddingBottom: "8.1rem",
  paddingRight: "6.3rem",
  paddingLeft: "5.1rem",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
};

const cardContainer: CSSProperties = {
  height: "29.3rem",
  width: "24.5rem",
};

export default SearchPage;
