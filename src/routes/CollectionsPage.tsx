import React, { CSSProperties } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import Card from "../components/card";
import Header from "../components/header";
import { beigeBg, orangeBg, title } from "../css";
import { fetchMakerData } from "../helper";
//import { RouteComponentProps } from "react-router-dom"
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
    console.log("collection: " + this.props.width);
    return (
      <>
        {this.state.loading ? (
          <div style={{ ...beigeBg, height: "100%", width: "100%" }}>
            {" "}
            Loading.....
          </div> //Här kanske vi skickar in en ''loading'' komponent istället?
        ) : (
          <>
            <Header h="18.8rem" c="#E2D0BA"></Header>

            <div style={{ ...container, ...orangeBg }}>
              <h3 style={{ ...title, ...collectionTitle }}>
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

const container: CSSProperties = {
  padding: "0 5.75rem 8rem 5.75rem",
  flex: 1,
  width: "100%",
  //padding: "0 5.75rem 0 5.75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const p: CSSProperties = {
  fontWeight: 700,
  fontSize: 24,
  alignSelf: "flex-end",
};

const collectionTitle: CSSProperties = {
  fontSize: "8rem",
  margin: "-5rem 0 0 0",
};

const cardWrapper: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "auto",
  rowGap: "6rem",
  columnGap: "2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gridAutoRows: "20rem",
};

export default withRouter(CollectionsPage);
