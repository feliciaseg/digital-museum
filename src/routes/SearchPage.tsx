import React, { CSSProperties } from "react";
import Header from "../components/header";
import { Link, RouteComponentProps } from "react-router-dom";
import Card from "../components/card";
import { blackBg, yellowBg } from "../css";
import Button from "../components/button";

interface MatchParams {
  search: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

interface State {
  inputValue: string;
  loading: boolean;
  APIdata: any; // Kan man sätta en typ här?
  newSearch: string;
}

class SearchPage extends React.Component<Props & RouteComponentProps, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: this.props.match.params.search,
      loading: true,
      APIdata: {},
      newSearch: "",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const url: string = `https://www.rijksmuseum.nl/api/en/collection?key=dZz20am8&q=${this.state.inputValue}&imgonly=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ APIdata: data, loading: false });
    this.render();
  }

  /**
   * Create cards depending on the number of objects of the search, but never more than six. 
   * FONTSIZE ändrad pga att vissa konstnärers namn är väldigt långt.....
   */
  createCards() {
    let cards: JSX.Element[] = [];
    for (let i = 0; i < this.state.APIdata.artObjects.length; i++) {
      if (i === 6) {
        break;
      }
      let artist: string = this.state.APIdata.artObjects[i].principalOrFirstMaker;
      let image: string = this.state.APIdata.artObjects[i].headerImage.url;
      cards.push(
        <div style={cardContainer} key={i}>
          <Card color="orange" fontSize={2} title={artist} imgSrc={image} />
        </div>
      );
    }
    return cards;
  }

  /**
   * Updates the inputValue to the new search
   */
  async handleButtonClick() {
    //this.setState({loading: true})
    await this.setState({ inputValue: this.state.newSearch });
    await this.fetchData();
    this.render();
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div> Loading.....</div> //Här kanske vi skickar in en ''loading'' komponent istället?
        ) : (
          <>
            <Header h="8.375rem" c="#009ad1" />
            <div style={{ ...searchContainer, ...blackBg }}>
              <div style={search}>
                <input
                  onChange={(event) =>
                    this.setState({ newSearch: event.target.value })
                  }
                  style={{ ...blackBg, ...input }}
                  type="text"
                />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/search/${this.state.newSearch}`,
                  }}
                >
                  <Button
                    type="search"
                    text="SEARCH"
                    backgroundColor="orange"
                    textColor="black"
                    fontSize={1.5}
                    onClick={this.handleButtonClick}
                  />
                </Link>
              </div>
              <div style={text}>
                <p style={{ margin: 0 }}>
                  {" "}
                  SEARCH RESULTS FOR "{this.state.inputValue}"{" "}
                </p>
                <p style={{ margin: 0 }}>
                  {" "}
                  {this.state.APIdata.count} ARTWORKS{" "}
                </p>
              </div>
            </div>
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

const searchContainer: CSSProperties = {
  flex: 1,
  height: 255,
  paddingRight: "6.3rem",
  paddingLeft: "5.1rem",
  paddingTop: "2.6rem",
  paddingBottom: "2.1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const search: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "57.4rem",
};

const input: CSSProperties = {
  outline: "none",
  border: 3,
  borderStyle: "solid",
  borderColor: "#FF9C5B",
  height: "3.4rem",
  width: "39.6rem",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
  padding: 0,
};

const text: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
};

export default SearchPage;
