import { connect } from "react-redux";
import HelloTwo from "./HelloTwo";
const Hello = (props) => {
  return (
    <div>
      This is property two from Store: {props.a}
      <h1>Hellotwo</h1>
      <HelloTwo title={"title of second hello"} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    a: state.prop_two,
  };
};
export default connect(mapStateToProps)(Hello);
