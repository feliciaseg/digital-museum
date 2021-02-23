import "./App.css";
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
      error: "",
    };

    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    fetch("https://www.rijksmuseum.nl/api/en/collection/SK-C-597?key=LbV0glgZ")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            data: data,
            isLoaded: true,
            error: "",
          });
        },
        () => {
          this.setState({
            isLoaded: true,
            error: "error",
          });
        }
      );
  }

  render() {
    const { data, isLoaded, error } = this.state;
    if (isLoaded) {
      if (!error) {
        console.log(data);
        return null;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default App;
