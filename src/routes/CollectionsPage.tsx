import React, { CSSProperties } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import Card from "../components/card";
import Header from "../components/header";
import { beigeBg, orangeBg, title } from "../styling/css";
import { fetchMakerData } from "../helper";
interface MatchParams {
  collection: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  width: number;
}

interface State {
  loading: boolean;
  APIdata: any;
  collection: string;
}
class CollectionsPage extends React.Component<
  Props & RouteComponentProps,
  State
> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      loading: true,
      APIdata: {},
      collection: "",
    };
  }

  /**
   * Changes the artistname to a string that can be put into a link
   */
  async changeToString() {
    let input = this.props.match.params.collection;
    let output = input.replace(/ /g, "+");
    this.setState({
      collection: output,
    });
  }

  async componentDidMount() {
    await this.changeToString();
    this.setState({
      APIdata: await fetchMakerData(this.state.collection),
      loading: false,
    });
  }

  createCards() {
    let cards: JSX.Element[] = [];
    for (let i = 0; i < this.state.APIdata.length; i++) {
      if (i === 9) {
        break;
      }
      let objectTitle: string = this.state.APIdata[i].title;
      let image: string = this.state.APIdata[i].webImage.url;
      let objectNumber: string = this.state.APIdata[i].objectNumber;
      cards.push(
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/artwork/${objectNumber}`,
          }}
          key={i}
        >
          <Card
            color="yellow"
            fontSize={1.6}
            title={objectTitle}
            imgSrc={image}
          />
        </Link>
      );
    }
    return cards;
  }

  render() {
    if (this.props.width > 1024) {
      return (
        <>
          {this.state.loading ? (
            <div style={{ ...beigeBg, height: "100%", width: "100%" }}>
              {" "}
              Loading.....
            </div>
          ) : (
            <>
              <Header h="18.8rem" c="#E2D0BA" windowWidth={this.props.width} />
              <div style={{ ...container, ...desktopContainer, ...orangeBg }}>
                <h3 style={{ ...title, ...desktopTitle, ...collectionTitle }}>
                  {this.props.match.params.collection.toUpperCase()}
                </h3>
                <p style={p}>{this.state.APIdata.length} ARTWORKS</p>
                <div style={cardWrapper}>{this.createCards()}</div>
              </div>
            </>
          )}
        </>
      );
    } else if (this.props.width > 768) {
      return (
        <>
          {this.state.loading ? (
            <div style={{ ...beigeBg, height: "100%", width: "100%" }}>
              {" "}
              Loading.....
            </div>
          ) : (
            <>
              <Header h="18.8rem" c="#E2D0BA" windowWidth={this.props.width} />
              <div style={{ ...container, ...tabletContainer, ...orangeBg }}>
                <h3 style={{ ...title, ...tabletTitle, ...collectionTitle }}>
                  {this.props.match.params.collection.toUpperCase()}
                </h3>
                <p style={p}>{this.state.APIdata.length} ARTWORKS</p>
                <div style={cardWrapper}>{this.createCards()}</div>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {this.state.loading ? (
            <div style={{ ...beigeBg, height: "100%", width: "100%" }}>
              {" "}
              Loading.....
            </div>
          ) : (
            <>
              <Header h="18.8rem" c="#E2D0BA" windowWidth={this.props.width} />
              <div style={{ ...container, ...mobileContainer, ...orangeBg }}>
                <h3 style={{ ...title, ...collectionTitle, ...mobileTitle }}>
                  {this.props.match.params.collection.toUpperCase()}
                </h3>
                <p style={p}>{this.state.APIdata.length} ARTWORKS</p>
                <div style={cardWrapper}>{this.createCards()}</div>
              </div>
            </>
          )}
        </>
      );
    }
  }
}

const container: CSSProperties = {
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const mobileContainer: CSSProperties = {
  padding: "0 2rem 8rem 2rem",
};

const tabletContainer: CSSProperties = {
  padding: "0 3.5rem 8rem 3.5rem",
};

const desktopContainer: CSSProperties = {
  padding: "0 5.75rem 8rem 5.75rem",
};

const p: CSSProperties = {
  fontWeight: 700,
  alignSelf: "flex-end",
};

const mobileTitle: CSSProperties = {
  fontSize: "3rem",
};

const tabletTitle: CSSProperties = {
  fontSize: "5rem",
};

const desktopTitle: CSSProperties = {
  fontSize: "9rem",
};

const collectionTitle: CSSProperties = {
  margin: "-5rem 0 0 0",
};

const cardWrapper: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "auto",
  marginTop: "2rem",
  rowGap: "5rem",
  columnGap: "2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gridAutoRows: "20rem",
};

export default withRouter(CollectionsPage);
