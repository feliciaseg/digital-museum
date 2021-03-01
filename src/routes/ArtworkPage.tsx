import React, { CSSProperties } from "react";
import * as css from "../css";
import Header from "../components/header";
import Button from "../components/button";
import Card from "../components/card";
import { RouteComponentProps } from "react-router-dom";
import { fetchSearchData, fetchObjectData } from "../helper";

interface MatchParams {
  object: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

// Ska ta in ett objektnummer

interface State {
  object: string;
  APIdata: any;
  searchData: any;
  loading: boolean;
}

class ArtworkPage extends React.Component<Props, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      object: this.props.match.params.object,
      APIdata: {},
      searchData: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const data = await fetchObjectData(this.props.match.params.object);
    console.log(data);
    this.setState({
      APIdata: await fetchObjectData(this.props.match.params.object),
      searchData: await fetchSearchData(
        this.state.APIdata.principalOrFirstMaker
      ),
      loading: false,
    });
  }

  navigateBack() {
    console.log("click");
    /* window.history.back(); */
  }

  /*  async fetchData() {
    const url: string = `https://www.rijksmuseum.nl/api/en/collection/${this.state.object}?key=dZz20am8`;
    const response = await fetch(url);
    const data = await response.json();
    this.saveDataToState(data.artObject);
    this.setState({ loading: false });
  } */

  render() {
    console.log("search", this.state.searchData);
    return (
      <>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Header h="8.375rem" c="#FAFF70"></Header>
            <div style={{ ...css.orangeBg, ...hero }}>
              <div style={{ float: "right", margin: "2rem 5.9rem 0 0" }}>
                <Button
                  type="goBack"
                  text="back"
                  backgroundColor="black"
                  textColor="orange"
                  fontSize={1.2}
                  onClick={this.navigateBack}
                />
              </div>
              <img style={heroImg} src={this.state.APIdata.webImage.url}></img>
            </div>
            <div style={{ ...css.blueBg }}>
              <div style={descriptionContainer}>
                <h2 style={{ ...css.title, ...artworkTitle }}>
                  {this.state.APIdata.title}
                </h2>
                <div style={metaContainer}>
                  <p style={meta}>
                    {this.state.APIdata.principalOrFirstMaker},{" "}
                    {this.state.APIdata.dating.presentingDate}
                  </p>
                  <p style={meta}>{this.state.APIdata.materials[0]}</p>
                </div>
                <p style={artworkDescription}>
                  {this.state.APIdata.plaqueDescriptionEnglish}
                </p>
              </div>
              <div style={{ ...css.beigeBg, ...moreContainer }}>
                <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                <h3 style={{ ...css.title, ...moreTitle }}>{}</h3>
                <div style={cardsContainer}>
                  <Card
                    fontSize={1.8}
                    color={"orange"}
                    title={"Johannes Wtenbogaert"}
                  />
                  <Card
                    fontSize={1.8}
                    color={"orange"}
                    title={"Johannes Wtenbogaert"}
                  />
                  <Card
                    fontSize={1.8}
                    color={"orange"}
                    title={"Johannes Wtenbogaert"}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const hero: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "35rem",
};

const heroImg: CSSProperties = {
  position: "absolute",
  height: "inherit",
  width: "inherit",
  padding: "6rem 5.9rem 4rem 5.9rem",
  objectFit: "cover",
  objectPosition: "center",
};

const artworkTitle: CSSProperties = {
  position: "relative",
  width: "100%",
  margin: "0",
  fontSize: "4.8rem",
  fontWeight: 900,
  marginTop: "-8rem",
  wordBreak: "break-word",
};

const descriptionContainer: CSSProperties = {
  width: "100%",
  maxWidth: "60rem",
  padding: "7rem 5.9rem 4rem 5.9rem",
};

const metaContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const meta: CSSProperties = {
  fontWeight: "bolder",
  margin: "1rem 0",
};

const artworkDescription: CSSProperties = {
  position: "relative",
  margin: "2rem 0 0 0",
  lineHeight: "1.5",
};

const moreContainer: CSSProperties = {
  padding: "3em 5.9rem 5rem 5.9rem",
};

const moreTitle: CSSProperties = {
  fontSize: "2.2rem",
  width: "100%",
  maxWidth: "60rem",
  margin: "0.3rem 0",
  fontWeight: 900,
};

const cardsContainer: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "auto",
  marginTop: "2rem",
  gap: "3rem 1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gridAutoRows: "20rem",
};

export default ArtworkPage;
