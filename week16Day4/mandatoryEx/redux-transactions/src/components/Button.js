import { connect } from "react-redux";
import { handleResult } from "../actions/transactionActions";

const Button = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.aaaa()}>
        {props.currentIndex == -1 ? "Submit" : "Update"}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    aaaa: () => dispatch(handleResult()),
  };
};

const mapStateToProps = (state) => {
  return {
    currentIndex: state.currentIndex,
  };
};

//const mapDispatchToProps = (dispatch) => {
// return {
//   handleResult: (data) => dispatch(handleResult(data), console.log(data)),
////};
//};
export default connect(mapStateToProps, mapDispatchToProps)(Button);
