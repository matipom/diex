import React from "react";

class Sunrise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Israel",
      city: "Tel Aviv",
    };
  }

  componentDidMount() {
    fetch("https://www.swapi.tech/api/starships/9/")
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({ starship: resp.result.description });
        console.log(resp);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let { country, city, starship } = this.state;
    return (
      <>
        <h1>In {country}</h1>
        <p>
          The hour of the sunrise in {city} is {starship}
        </p>
      </>
    );
  }
}
export default Sunrise;
