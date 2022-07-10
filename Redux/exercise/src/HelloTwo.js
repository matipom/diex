import { connect } from "react-redux";

const HelloTwo = (props) => {
  return (
    <div>
      This is property two : {props.one}
      <br />
      This is property two : {props.two}
      <h2>{props.title}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    one: state.prop_one,
    two: state.prop_two,
  };
};
export default connect(mapStateToProps)(HelloTwo);
