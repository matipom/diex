import React from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
// import { robots } from "./robots";
import Searchbox from "./Searchbox";
import { setSearchField } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //   robots: robots,
      robots: [],
    };
  }

  componentDidMount() {
    console.log(this.props.store);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
